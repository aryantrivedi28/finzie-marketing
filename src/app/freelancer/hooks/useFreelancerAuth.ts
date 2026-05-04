import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/src/lib/SupabaseAuthClient'

interface FreelancerProfile {
  id: string
  name: string
  email: string
  role: string
  experience: number
  skills: string[]
  bio: string
  status: string
}

export function useFreelancerAuth() {
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<FreelancerProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)

    if (user) {
      const { data: profile } = await supabase
        .from('em_freelancers')
        .select('*')
        .eq('auth_user_id', user.id)
        .single()
      
      setProfile(profile)
    }
    
    setLoading(false)
  }

  const register = async (formData: any, caseStudyData: any) => {
    // 1. Sign up with Supabase Auth
    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    })

    if (signUpError) throw signUpError

    // 2. Create freelancer profile
    const { data: freelancer, error: profileError } = await supabase
      .from('em_freelancers')
      .insert({
        auth_user_id: authData.user?.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        experience: formData.experience,
        skills: formData.skills,
        bio: formData.bio,
        portfolio_links: formData.portfolioLinks,
        status: 'pending'
      })
      .select()
      .single()

    if (profileError) throw profileError

    // 3. Create initial case study
    const { error: caseError } = await supabase
      .from('em_case_studies')
      .insert({
        freelancer_id: freelancer.id,
        title: caseStudyData.title,
        industry: caseStudyData.industry,
        problem: caseStudyData.problem,
        strategy: caseStudyData.strategy,
        execution: caseStudyData.execution,
        before_revenue: caseStudyData.beforeRevenue,
        after_revenue: caseStudyData.afterRevenue,
        roas: caseStudyData.roas,
        tools: caseStudyData.tools,
        status: 'pending'
      })

    if (caseError) throw caseError

    return { success: true }
  }

  const login = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error
    
    router.push('/freelance/dashboard')
  }

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/freelance/login')
  }

  return {
    user,
    profile,
    loading,
    register,
    login,
    logout,
    isApproved: profile?.status === 'approved',
    isPending: profile?.status === 'pending'
  }
}