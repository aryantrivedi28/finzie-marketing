'use client'

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  User, 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink, 
  FileText, 
  ChevronRight, 
  ChevronLeft,
  Star,
  CheckCircle,
  Clock,
  Shield,
  AlertCircle,
  X,
  Check,
  ChevronDown,
  IndianRupee,
  Video,
  Sparkles,
  Calendar,
  Briefcase,
  Award
} from "lucide-react"

type Payload = {
  full_name: string
  email: string
  phone: string
  linkedin_url: string
  resume_url: string
  portfolio_url: string
  category: string
  subcategories: string[]
  subcategory_other: string
  experience_years: string
  pricing_min: number
  pricing_max: number
  pricing_type: string
  freelancer_description: string
  availability: string
  best_project_url: string
  terms_accepted: boolean
}

export default function FreelancerOnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  
  const [payload, setPayload] = useState<Payload>({
    full_name: "",
    email: "",
    phone: "",
    linkedin_url: "",
    resume_url: "",
    portfolio_url: "",
    category: "",
    subcategories: [],
    subcategory_other: "",
    experience_years: "",
    pricing_min: 0,
    pricing_max: 0,
    pricing_type: "project",
    freelancer_description: "",
    availability: "",
    best_project_url: "",
    terms_accepted: false,
  })

  // Check mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Categories
  const categories = [
    { id: "shopify", name: "Shopify", icon: "🛍️", description: "Store setup, conversion optimization" },
    { id: "ads", name: "Ads", icon: "📢", description: "Meta, Google, TikTok campaigns" },
    { id: "seo", name: "SEO", icon: "🔍", description: "Keyword strategy, technical SEO" },
    { id: "content", name: "Content", icon: "✍️", description: "Blog, email, long-form content" },
    { id: "social", name: "Social Media", icon: "📱", description: "Content creation, community management" },
  ]

  // Subcategories
  const subcategoriesMap: Record<string, { id: string; name: string; description: string }[]> = {
    shopify: [
      { id: "store_setup", name: "Store Setup & Migration", description: "Shopify store setup, product migration" },
      { id: "theme_dev", name: "Theme Development", description: "Custom theme, Liquid coding" },
      { id: "cro", name: "CRO", description: "A/B testing, checkout optimization" },
      { id: "app_integration", name: "App Integration", description: "Shopify apps, automation" },
    ],
    ads: [
      { id: "meta_ads", name: "Meta Ads", description: "Facebook & Instagram advertising" },
      { id: "google_ads", name: "Google Ads", description: "Search, Display, Shopping" },
      { id: "tiktok_ads", name: "TikTok Ads", description: "TikTok advertising" },
      { id: "linkedin_ads", name: "LinkedIn Ads", description: "B2B lead generation" },
    ],
    seo: [
      { id: "technical_seo", name: "Technical SEO", description: "Site speed, crawlability" },
      { id: "onpage_seo", name: "On-Page SEO", description: "Meta tags, content optimization" },
      { id: "offpage_seo", name: "Off-Page SEO", description: "Link building, outreach" },
      { id: "keyword_research", name: "Keyword Research", description: "Keyword strategy" },
    ],
    content: [
      { id: "blog_writing", name: "Blog Writing", description: "SEO blog posts, articles" },
      { id: "email_newsletters", name: "Email Newsletters", description: "Newsletter content" },
      { id: "longform_articles", name: "Long-form Articles", description: "In-depth guides" },
      { id: "case_studies", name: "Case Studies", description: "Success stories" },
    ],
    social: [
      { id: "instagram", name: "Instagram", description: "Feed, stories, reels" },
      { id: "linkedin_strategy", name: "LinkedIn", description: "B2B engagement" },
      { id: "twitter", name: "Twitter/X", description: "Tweet scheduling" },
      { id: "community_mgmt", name: "Community", description: "Engagement, responses" },
    ],
  }

  const experienceLevels = [
    { id: "less_than_1", name: "< 1 year" },
    { id: "1_3", name: "1-3 years" },
    { id: "3_5", name: "3-5 years" },
    { id: "5_7", name: "5-7 years" },
    { id: "7_plus", name: "7+ years" },
  ]

  const pricingTypes = [
    { id: "project", name: "Per Project", icon: "📋" },
    { id: "hourly", name: "Per Hour", icon: "⏰" },
    { id: "monthly", name: "Monthly", icon: "📅" },
  ]

  // Progress calculation
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let filled = 0
    let total = 11
    
    if (payload.full_name) filled++
    if (payload.email) filled++
    if (payload.phone) filled++
    if (payload.linkedin_url) filled++
    if (payload.portfolio_url) filled++
    if (payload.category) filled++
    if (payload.subcategories.length > 0) filled++
    if (payload.experience_years) filled++
    if (payload.pricing_min > 0 && payload.pricing_max > 0) filled++
    if (payload.terms_accepted) filled++
    
    setProgress(Math.round((filled / total) * 100))
  }, [payload])

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setPayload((p) => ({
      ...p,
      [name]: type === 'checkbox' ? checked : value,
    }))
    
    if (error) setError(null)
  }

  const handleCategorySelect = (categoryId: string) => {
    setPayload((p) => ({
      ...p,
      category: categoryId,
      subcategories: [],
    }))
    setIsCategoryDropdownOpen(false)
    setError(null)
  }

  const toggleSubcategory = (subcategoryName: string) => {
    setPayload((p) => {
      const current = p.subcategories
      if (current.includes(subcategoryName)) {
        return { ...p, subcategories: current.filter(s => s !== subcategoryName) }
      } else {
        return { ...p, subcategories: [...current, subcategoryName] }
      }
    })
    setError(null)
  }

  const validateStep = (stepNumber: number): boolean => {
    switch (stepNumber) {
      case 1:
        if (!payload.full_name || !payload.email || !payload.phone || !payload.linkedin_url || !payload.portfolio_url) {
          setError("Please fill all required fields")
          return false
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(payload.email)) {
          setError("Please enter a valid email address")
          return false
        }
        break
      case 2:
        if (!payload.category) {
          setError("Please select your primary category")
          return false
        }
        if (payload.subcategories.length === 0) {
          setError("Please select at least one specialization")
          return false
        }
        break
      case 3:
        if (!payload.experience_years) {
          setError("Please select your years of experience")
          return false
        }
        if (payload.pricing_min <= 0 || payload.pricing_max <= 0) {
          setError("Please enter your pricing range")
          return false
        }
        if (payload.pricing_min > payload.pricing_max) {
          setError("Minimum price cannot be greater than maximum price")
          return false
        }
        if (!payload.terms_accepted) {
          setError("Please accept the terms and conditions")
          return false
        }
        break
    }
    return true
  }

  const submit = async () => {
    if (!validateStep(3)) return
    
    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch('/api/freelancer/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      
      const data = await response.json()
      
      if (!response.ok) throw new Error(data.error || 'Submission failed')
      
      sessionStorage.setItem('application_id', data.application_id)
      router.push('/all-freelancer/thank-you')
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F0E4] to-[#e8e4d8] py-4 px-3 sm:py-6 sm:px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Header - Mobile Optimized */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#44A194]"></span>
            <span className="text-[8px] tracking-[0.2em] uppercase text-[#44A194] font-['Jost',sans-serif]">
              Join Our Network
            </span>
            <span className="w-5 h-px bg-[#44A194]"></span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl md:text-3xl font-light text-[#1C2321]">
            Become a Verified
          </h1>
          <h1 className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl md:text-3xl font-light text-[#1C2321]">
            <em className="italic text-[#44A194] not-italic">ExecuMarketing Specialist</em>
          </h1>
          <p className="text-[10px] text-[#8a8a82] font-['Jost',sans-serif] max-w-[250px] mx-auto mt-2">
            Join the curated network of top-tier freelancers
          </p>
        </div>

        {/* Error Alert */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4 p-2.5 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2"
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
              <p className="text-[10px] text-red-700">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="mb-5">
          <div className="flex justify-between text-[9px] text-[#8a8a82] mb-1.5 font-['Jost',sans-serif]">
            <span>Step {step} of 3</span>
            <span>{progress}% Complete</span>
          </div>
          <div className="h-1 w-full bg-[rgba(68,161,148,0.15)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#44A194] to-[#537D96] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          
          {/* Step 1: Personal Information */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3.5 border-b border-[rgba(28,35,33,0.08)] bg-gradient-to-r from-[#F4F0E4]/50 to-white">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#44A194]" />
                    <h2 className="font-['Cormorant_Garamond',serif] text-sm font-medium text-[#1C2321]">
                      Personal Information
                    </h2>
                  </div>
                  <p className="text-[9px] text-[#8a8a82] mt-0.5">Tell us about yourself</p>
                </div>
                
                <div className="p-3.5 space-y-3">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-3 h-3" />
                    <input
                      name="full_name"
                      required
                      value={payload.full_name}
                      onChange={change}
                      placeholder="Full Name *"
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg focus:outline-none focus:border-[#44A194]"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-3 h-3" />
                    <input
                      name="email"
                      type="email"
                      required
                      value={payload.email}
                      onChange={change}
                      placeholder="Email Address *"
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg focus:outline-none focus:border-[#44A194]"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-3 h-3" />
                    <input
                      name="phone"
                      required
                      value={payload.phone}
                      onChange={change}
                      placeholder="Phone Number *"
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg focus:outline-none focus:border-[#44A194]"
                    />
                  </div>

                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-3 h-3" />
                    <input
                      name="linkedin_url"
                      value={payload.linkedin_url}
                      onChange={change}
                      placeholder="LinkedIn URL *"
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg focus:outline-none focus:border-[#44A194]"
                    />
                  </div>

                  <div className="relative">
                    <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-3 h-3" />
                    <input
                      name="portfolio_url"
                      value={payload.portfolio_url}
                      onChange={change}
                      placeholder="Portfolio URL *"
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg focus:outline-none focus:border-[#44A194]"
                    />
                  </div>

                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-3 h-3" />
                    <input
                      name="resume_url"
                      value={payload.resume_url}
                      onChange={change}
                      placeholder="Resume URL (Optional)"
                      className="w-full pl-8 pr-3 py-2 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg focus:outline-none focus:border-[#44A194]"
                    />
                  </div>
                </div>

                <div className="p-3.5 border-t border-[rgba(28,35,33,0.08)] flex justify-end">
                  <button
                    onClick={() => validateStep(1) && setStep(2)}
                    className="bg-[#44A194] text-white font-['Jost',sans-serif] text-[10px] tracking-[0.18em] uppercase px-5 py-2 rounded-lg flex items-center gap-1.5 active:scale-95 transition-transform"
                  >
                    Next
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Category Selection - Mobile Optimized */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3.5 border-b border-[rgba(28,35,33,0.08)] bg-gradient-to-r from-[#F4F0E4]/50 to-white">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#44A194]" />
                    <h2 className="font-['Cormorant_Garamond',serif] text-sm font-medium text-[#1C2321]">
                      Select Your Expertise
                    </h2>
                  </div>
                  <p className="text-[9px] text-[#8a8a82] mt-0.5">Choose your primary category</p>
                </div>
                
                <div className="p-3.5 space-y-4">
                  {/* Category Grid - 2 columns on mobile */}
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`p-2.5 rounded-lg border-2 text-center transition-all ${
                          payload.category === cat.id
                            ? "border-[#44A194] bg-[rgba(68,161,148,0.05)]"
                            : "border-[rgba(28,35,33,0.12)] bg-white"
                        }`}
                      >
                        <div className="text-2xl mb-0.5">{cat.icon}</div>
                        <div className="text-xs font-medium text-[#1C2321]">{cat.name}</div>
                      </button>
                    ))}
                  </div>

                  {/* Subcategories */}
                  {payload.category && subcategoriesMap[payload.category] && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-medium text-[#1C2321]">
                          Specializations <span className="text-[#44A194] text-[9px]">(Select multiple)</span>
                        </label>
                        {payload.subcategories.length > 0 && (
                          <span className="text-[8px] text-[#44A194] bg-[rgba(68,161,148,0.1)] px-1.5 py-0.5 rounded-full">
                            {payload.subcategories.length}
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-1.5">
                        {subcategoriesMap[payload.category].map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => toggleSubcategory(sub.name)}
                            className={`w-full p-2.5 rounded-lg border text-left transition-all ${
                              payload.subcategories.includes(sub.name)
                                ? "border-[#44A194] bg-[rgba(68,161,148,0.05)]"
                                : "border-[rgba(28,35,33,0.12)] bg-white"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xs font-medium text-[#1C2321] flex items-center gap-1.5">
                                  {payload.subcategories.includes(sub.name) && (
                                    <Check className="w-3 h-3 text-[#44A194]" />
                                  )}
                                  {sub.name}
                                </div>
                                <div className="text-[8px] text-[#8a8a82] mt-0.5">
                                  {sub.description}
                                </div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Selected Summary */}
                      {payload.subcategories.length > 0 && (
                        <div className="mt-2 p-2.5 bg-[#F4F0E4] rounded-lg">
                          <p className="text-[9px] font-medium text-[#1C2321] mb-1">Selected:</p>
                          <div className="flex flex-wrap gap-1">
                            {payload.subcategories.map((sub) => (
                              <span
                                key={sub}
                                className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-white text-[#1C2321] rounded-full text-[8px] border border-[rgba(28,35,33,0.12)]"
                              >
                                {sub}
                                <button onClick={() => toggleSubcategory(sub)} className="hover:text-[#EC8F8D]">
                                  <X className="w-2 h-2" />
                                </button>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-3.5 border-t border-[rgba(28,35,33,0.08)] flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-[#8a8a82] text-[10px] uppercase px-4 py-2 rounded-lg flex items-center gap-1"
                  >
                    <ChevronLeft className="w-3 h-3" />
                    Back
                  </button>
                  <button
                    onClick={() => validateStep(2) && setStep(3)}
                    disabled={!payload.category || payload.subcategories.length === 0}
                    className={`bg-[#44A194] text-white font-['Jost',sans-serif] text-[10px] tracking-[0.18em] uppercase px-5 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                      (!payload.category || payload.subcategories.length === 0) ? "opacity-50" : "active:scale-95"
                    }`}
                  >
                    Next
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Experience, Pricing & Submit - Mobile Optimized */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-3.5 border-b border-[rgba(28,35,33,0.08)] bg-gradient-to-r from-[#F4F0E4]/50 to-white">
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#44A194]" />
                    <h2 className="font-['Cormorant_Garamond',serif] text-sm font-medium text-[#1C2321]">
                      Experience & Pricing
                    </h2>
                  </div>
                  <p className="text-[9px] text-[#8a8a82] mt-0.5">Tell us about your experience</p>
                </div>
                
                <div className="p-3.5 space-y-4">
                  {/* Experience */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#1C2321]">
                      Years of Experience <span className="text-[#EC8F8D]">*</span>
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {experienceLevels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setPayload(p => ({ ...p, experience_years: level.name }))}
                          className={`px-2.5 py-1 rounded-lg text-[10px] transition-all ${
                            payload.experience_years === level.name
                              ? "bg-[#44A194] text-white"
                              : "bg-[rgba(68,161,148,0.1)] text-[#1C2321]"
                          }`}
                        >
                          {level.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#1C2321]">
                      Pricing <span className="text-[#EC8F8D]">*</span>
                    </label>
                    
                    <div className="flex gap-1.5">
                      {pricingTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setPayload(p => ({ ...p, pricing_type: type.id }))}
                          className={`flex-1 py-1.5 rounded-lg border text-center transition-all ${
                            payload.pricing_type === type.id
                              ? "border-[#44A194] bg-[rgba(68,161,148,0.05)]"
                              : "border-[rgba(28,35,33,0.12)] bg-white"
                          }`}
                        >
                          <div className="text-base">{type.icon}</div>
                          <div className="text-[9px]">{type.name}</div>
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <IndianRupee className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-2.5 h-2.5" />
                        <input
                          type="number"
                          placeholder="Min"
                          value={payload.pricing_min || ""}
                          onChange={(e) => setPayload(p => ({ ...p, pricing_min: parseInt(e.target.value) || 0 }))}
                          className="w-full pl-6 pr-2 py-1.5 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg"
                        />
                      </div>
                      <div className="relative flex-1">
                        <IndianRupee className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-2.5 h-2.5" />
                        <input
                          type="number"
                          placeholder="Max"
                          value={payload.pricing_max || ""}
                          onChange={(e) => setPayload(p => ({ ...p, pricing_max: parseInt(e.target.value) || 0 }))}
                          className="w-full pl-6 pr-2 py-1.5 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Availability - Optional */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#1C2321]">
                      Availability <span className="text-[#8a8a82] text-[8px]">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-3 h-3" />
                      <input
                        name="availability"
                        value={payload.availability}
                        onChange={change}
                        placeholder="e.g., Full-time, Weekends, 10 AM - 6 PM"
                        className="w-full pl-8 pr-2 py-1.5 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Description - Optional */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#1C2321]">
                      About You <span className="text-[#8a8a82] text-[8px]">(Optional)</span>
                    </label>
                    <textarea
                      name="freelancer_description"
                      value={payload.freelancer_description}
                      onChange={change}
                      rows={2}
                      placeholder="Share your expertise, tools, and strengths..."
                      className="w-full px-2.5 py-1.5 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg resize-none"
                    />
                  </div>

                  {/* Faster Matching - Optional */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#44A194]" />
                      <label className="text-xs font-medium text-[#1C2321]">
                        Faster Matching <span className="text-[#8a8a82] text-[8px]">(Optional)</span>
                      </label>
                    </div>
                    <div className="relative">
                      <Video className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-3 h-3" />
                      <input
                        name="best_project_url"
                        value={payload.best_project_url}
                        onChange={change}
                        placeholder="Link to your best project / case study"
                        className="w-full pl-8 pr-2 py-1.5 text-sm bg-white border border-[rgba(28,35,33,0.12)] rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <label className="flex items-start gap-2 cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      name="terms_accepted"
                      checked={payload.terms_accepted}
                      onChange={change}
                      className="mt-0.5 w-3 h-3 rounded border-[rgba(28,35,33,0.12)] text-[#44A194]"
                    />
                    <span className="text-[8px] text-[#8a8a82] leading-relaxed">
                      I confirm that all information is accurate.
                    </span>
                  </label>
                </div>

                <div className="p-3.5 border-t border-[rgba(28,35,33,0.08)] flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="text-[#8a8a82] text-[10px] uppercase px-4 py-2 rounded-lg flex items-center gap-1"
                  >
                    <ChevronLeft className="w-3 h-3" />
                    Back
                  </button>
                  <button
                    onClick={submit}
                    disabled={!payload.terms_accepted || !payload.experience_years || payload.pricing_min <= 0 || payload.pricing_max <= 0 || isSubmitting}
                    className={`bg-gradient-to-r from-[#44A194] to-[#537D96] text-white font-['Jost',sans-serif] text-[10px] tracking-[0.18em] uppercase px-5 py-2 rounded-lg flex items-center gap-1.5 transition-all ${
                      (!payload.terms_accepted || !payload.experience_years || payload.pricing_min <= 0 || payload.pricing_max <= 0 || isSubmitting) ? "opacity-50" : "active:scale-95"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-2.5 h-2.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <Shield className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trust Indicators - Mobile Optimized */}
        <div className="mt-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[8px] text-[#8a8a82]">
            <span className="flex items-center gap-0.5">
              <CheckCircle className="w-2.5 h-2.5 text-[#44A194]" />
              Quality Vetting
            </span>
            <span className="flex items-center gap-0.5">
              <Clock className="w-2.5 h-2.5 text-[#44A194]" />
              Quick Response
            </span>
            <span className="flex items-center gap-0.5">
              <Star className="w-2.5 h-2.5 text-[#44A194]" />
              Top Talent
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
