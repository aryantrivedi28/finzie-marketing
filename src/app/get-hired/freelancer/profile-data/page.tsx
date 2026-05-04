"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  User,
  Mail,
  Briefcase,
  Layers,
  Clock,
  Wrench,
  Link as LinkIcon,
  FileText,
  Star,
  ChevronRight,
  ChevronLeft,
  Save,
  Plus,
  X,
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Award,
  GraduationCap,
  BookOpen,
  Target,
  TrendingUp,
  DollarSign,
  Calendar,
  Sparkles,
  ArrowRight,
  Shield,
  Zap
} from "lucide-react"

// Define types matching our database structure
interface CaseStudyMetric {
  label: string
  value: number
  type: 'number' | 'percentage' | 'currency'
}

interface CaseStudy {
  title: string
  short_summary: string
  category: string
  industry: string
  problem_statement: string
  solution_provided: string
  results_overview: string
  metrics: CaseStudyMetric[]
  technologies: string[]
  image_url?: string
  project_url?: string
}

interface Testimonial {
  client_name: string
  company: string
  content: string
  rating: number
  date?: string
  linkedin_url?: string
  role?: string
}

interface WorkExperience {
  title: string
  company: string
  start_date: string
  end_date?: string
  current: boolean
  description: string
  achievements?: string[]
}

interface Education {
  degree: string
  institution: string
  graduation_year: number
  field_of_study?: string
  grade?: string
}

interface FormData {
  name: string
  email: string
  phone?: string
  title: string
  bio: string
  primary_category: string
  subcategories: string[]
  experience_years: number
  skills: string[]
  tools_tech_stack: string[]
  portfolio_links: {
    website?: string
    github?: string
    linkedin?: string
    twitter?: string
    other: string[]
  }
  case_studies: CaseStudy[]
  testimonials: Testimonial[]
  work_experience: WorkExperience[]
  education: Education[]
  languages: string[]
  certifications: string[]
  availability: string
  hourly_rate?: number
  preferred_project_size?: string
  photo_url?: string
  github_url?: string
  linkedin_url?: string
  twitter_url?: string
  portfolio_url?: string
}

const categoryOptions = [
  {
    name: "Web Development",
    subcategories: ["Frontend", "Backend", "Full Stack", "React/Next.js", "Node.js", "Python/Django", "Ruby on Rails", "PHP/Laravel"],
    industries: ["E-commerce", "SaaS", "Education", "Healthcare", "Finance", "Real Estate", "Travel", "Media"]
  },
  {
    name: "Shopify Development",
    subcategories: ["Theme Development", "App Development", "Store Setup", "Migration", "Customization", "Performance Optimization"],
    industries: ["E-commerce", "Retail", "Fashion", "Electronics", "Home & Garden", "Beauty"]
  },
  {
    name: "SEO Optimization",
    subcategories: ["Technical SEO", "On-page SEO", "Off-page SEO", "Local SEO", "E-commerce SEO", "International SEO"],
    industries: ["E-commerce", "SaaS", "Local Business", "Professional Services", "Publishing", "Travel"]
  },
  {
    name: "UI/UX Design",
    subcategories: ["Web Design", "Mobile Design", "User Research", "Prototyping", "Design Systems", "Wireframing"],
    industries: ["SaaS", "E-commerce", "Mobile Apps", "Enterprise", "Startups"]
  },
  {
    name: "Digital Marketing",
    subcategories: ["Social Media", "Email Marketing", "PPC Advertising", "Content Strategy", "Analytics", "Growth Hacking"],
    industries: ["E-commerce", "SaaS", "B2B", "B2C", "Professional Services"]
  }
]

const availabilityOptions = [
  { value: "full-time", label: "Full Time (40+ hrs/week)" },
  { value: "part-time", label: "Part Time (20-30 hrs/week)" },
  { value: "contract", label: "Contract/Freelance" },
  { value: "available", label: "Available for Work" }
]

const projectSizeOptions = [
  "Small (Under $5,000)",
  "Medium ($5,000 - $20,000)",
  "Large ($20,000 - $50,000)",
  "Enterprise ($50,000+)"
]

export default function FreelancerOnboarding() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const [toolInput, setToolInput] = useState("")
  const [skillInput, setSkillInput] = useState("")
  const [languageInput, setLanguageInput] = useState("")
  const [certificationInput, setCertificationInput] = useState("")
  const [subcategoryInput, setSubcategoryInput] = useState("")

  const [showToolInput, setShowToolInput] = useState(false)
  const [showSkillInput, setShowSkillInput] = useState(false)
  const [showLanguageInput, setShowLanguageInput] = useState(false)
  const [showCertificationInput, setShowCertificationInput] = useState(false)
  const [showSubcategoryInput, setShowSubcategoryInput] = useState(false)

  const [newMetric, setNewMetric] = useState<CaseStudyMetric>({ label: "", value: 0, type: "number" })
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState<number | null>(null)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    title: "",
    bio: "",
    primary_category: "",
    subcategories: [],
    experience_years: 0,
    skills: [],
    tools_tech_stack: [],
    portfolio_links: {
      website: "",
      github: "",
      linkedin: "",
      twitter: "",
      other: []
    },
    case_studies: [],
    testimonials: [],
    work_experience: [],
    education: [],
    languages: [],
    certifications: [],
    availability: "available",
    hourly_rate: undefined,
    preferred_project_size: "",
    github_url: "",
    linkedin_url: "",
    twitter_url: "",
    portfolio_url: ""
  })

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/freelancer/me")
        const text = await response.text()
        let data: any = {}
        try {
          data = JSON.parse(text)
        } catch {
          console.error("Auth API returned HTML:", text)
          return
        }
        if (data.user) {
          setFormData(prev => ({
            ...prev,
            name: data.user.name || "",
            email: data.user.email || "",
            phone: data.user.phone || "",
            photo_url: data.user.photo_url || ""
          }))
        }
      } catch (err) {
        console.error("Failed to fetch user data:", err)
      }
    }
    fetchUserData()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'number') {
      setFormData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const addSkill = () => {
    if (skillInput.trim() && !formData.skills.includes(skillInput.trim())) {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }))
      setSkillInput("")
      setShowSkillInput(false)
    }
  }

  const removeSkill = (skill: string) => {
    setFormData(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skill) }))
  }

  const addTool = () => {
    if (toolInput.trim() && !formData.tools_tech_stack.includes(toolInput.trim())) {
      setFormData(prev => ({ ...prev, tools_tech_stack: [...prev.tools_tech_stack, toolInput.trim()] }))
      setToolInput("")
      setShowToolInput(false)
    }
  }

  const removeTool = (tool: string) => {
    setFormData(prev => ({ ...prev, tools_tech_stack: prev.tools_tech_stack.filter(t => t !== tool) }))
  }

  const addSubcategory = () => {
    if (subcategoryInput.trim() && !formData.subcategories.includes(subcategoryInput.trim())) {
      setFormData(prev => ({ ...prev, subcategories: [...prev.subcategories, subcategoryInput.trim()] }))
      setSubcategoryInput("")
      setShowSubcategoryInput(false)
    }
  }

  const removeSubcategory = (subcategory: string) => {
    setFormData(prev => ({ ...prev, subcategories: prev.subcategories.filter(s => s !== subcategory) }))
  }

  const addLanguage = () => {
    if (languageInput.trim() && !formData.languages.includes(languageInput.trim())) {
      setFormData(prev => ({ ...prev, languages: [...prev.languages, languageInput.trim()] }))
      setLanguageInput("")
      setShowLanguageInput(false)
    }
  }

  const removeLanguage = (language: string) => {
    setFormData(prev => ({ ...prev, languages: prev.languages.filter(l => l !== language) }))
  }

  const addCertification = () => {
    if (certificationInput.trim() && !formData.certifications.includes(certificationInput.trim())) {
      setFormData(prev => ({ ...prev, certifications: [...prev.certifications, certificationInput.trim()] }))
      setCertificationInput("")
      setShowCertificationInput(false)
    }
  }

  const removeCertification = (cert: string) => {
    setFormData(prev => ({ ...prev, certifications: prev.certifications.filter(c => c !== cert) }))
  }

  const handlePortfolioLinkChange = (field: keyof typeof formData.portfolio_links, value: string) => {
    setFormData(prev => ({
      ...prev,
      portfolio_links: { ...prev.portfolio_links, [field]: value }
    }))
  }

  const addOtherPortfolioLink = () => {
    setFormData(prev => ({
      ...prev,
      portfolio_links: { ...prev.portfolio_links, other: [...(prev.portfolio_links.other || []), ""] }
    }))
  }

  const updateOtherPortfolioLink = (index: number, value: string) => {
    const otherLinks = [...(formData.portfolio_links.other || [])]
    otherLinks[index] = value
    setFormData(prev => ({
      ...prev,
      portfolio_links: { ...prev.portfolio_links, other: otherLinks }
    }))
  }

  const removeOtherPortfolioLink = (index: number) => {
    const otherLinks = formData.portfolio_links.other?.filter((_, i) => i !== index)
    setFormData(prev => ({
      ...prev,
      portfolio_links: { ...prev.portfolio_links, other: otherLinks }
    }))
  }

  const addCaseStudy = () => {
    const newCaseStudy: CaseStudy = {
      title: "",
      short_summary: "",
      category: formData.primary_category,
      industry: "",
      problem_statement: "",
      solution_provided: "",
      results_overview: "",
      metrics: [],
      technologies: [],
      image_url: "",
      project_url: ""
    }
    setFormData(prev => ({ ...prev, case_studies: [...prev.case_studies, newCaseStudy] }))
  }

  const updateCaseStudy = (index: number, field: keyof CaseStudy, value: any) => {
    setFormData(prev => ({
      ...prev,
      case_studies: prev.case_studies.map((cs, i) => i === index ? { ...cs, [field]: value } : cs)
    }))
  }

  const removeCaseStudy = (index: number) => {
    setFormData(prev => ({ ...prev, case_studies: prev.case_studies.filter((_, i) => i !== index) }))
  }

  const addMetric = (caseStudyIndex: number) => {
    if (newMetric.label && newMetric.value) {
      setFormData(prev => ({
        ...prev,
        case_studies: prev.case_studies.map((cs, i) =>
          i === caseStudyIndex ? { ...cs, metrics: [...cs.metrics, { ...newMetric }] } : cs
        )
      }))
      setNewMetric({ label: "", value: 0, type: "number" })
      setActiveCaseStudyIndex(null)
    }
  }

  const removeMetric = (caseStudyIndex: number, metricIndex: number) => {
    setFormData(prev => ({
      ...prev,
      case_studies: prev.case_studies.map((cs, i) =>
        i === caseStudyIndex ? { ...cs, metrics: cs.metrics.filter((_, mi) => mi !== metricIndex) } : cs
      )
    }))
  }

  const addCaseStudyTechnology = (caseStudyIndex: number, tech: string) => {
    if (tech.trim()) {
      setFormData(prev => ({
        ...prev,
        case_studies: prev.case_studies.map((cs, i) =>
          i === caseStudyIndex ? { ...cs, technologies: [...cs.technologies, tech.trim()] } : cs
        )
      }))
    }
  }

  const removeCaseStudyTechnology = (caseStudyIndex: number, tech: string) => {
    setFormData(prev => ({
      ...prev,
      case_studies: prev.case_studies.map((cs, i) =>
        i === caseStudyIndex ? { ...cs, technologies: cs.technologies.filter(t => t !== tech) } : cs
      )
    }))
  }

  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      client_name: "",
      company: "",
      content: "",
      rating: 5,
      date: new Date().toISOString().split('T')[0],
      role: ""
    }
    setFormData(prev => ({ ...prev, testimonials: [...prev.testimonials, newTestimonial] }))
  }

  const updateTestimonial = (index: number, field: keyof Testimonial, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      testimonials: prev.testimonials.map((t, i) => i === index ? { ...t, [field]: value } : t)
    }))
  }

  const removeTestimonial = (index: number) => {
    setFormData(prev => ({ ...prev, testimonials: prev.testimonials.filter((_, i) => i !== index) }))
  }

  const addWorkExperience = () => {
    const newExp: WorkExperience = {
      title: "",
      company: "",
      start_date: "",
      end_date: "",
      current: false,
      description: "",
      achievements: []
    }
    setFormData(prev => ({ ...prev, work_experience: [...prev.work_experience, newExp] }))
  }

  const updateWorkExperience = (index: number, field: keyof WorkExperience, value: any) => {
    setFormData(prev => ({
      ...prev,
      work_experience: prev.work_experience.map((we, i) => i === index ? { ...we, [field]: value } : we)
    }))
  }

  const removeWorkExperience = (index: number) => {
    setFormData(prev => ({ ...prev, work_experience: prev.work_experience.filter((_, i) => i !== index) }))
  }

  const addEducation = () => {
    const newEdu: Education = {
      degree: "",
      institution: "",
      graduation_year: new Date().getFullYear(),
      field_of_study: "",
      grade: ""
    }
    setFormData(prev => ({ ...prev, education: [...prev.education, newEdu] }))
  }

  const updateEducation = (index: number, field: keyof Education, value: any) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => i === index ? { ...edu, [field]: value } : edu)
    }))
  }

  const removeEducation = (index: number) => {
    setFormData(prev => ({ ...prev, education: prev.education.filter((_, i) => i !== index) }))
  }

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {}
    switch (step) {
      case 1:
        if (!formData.name) errors.name = "Name is required"
        if (!formData.title) errors.title = "Professional title is required"
        if (!formData.primary_category) errors.primary_category = "Primary category is required"
        if (formData.experience_years <= 0) errors.experience_years = "Experience years must be greater than 0"
        break
      case 2:
        if (formData.skills.length === 0) errors.skills = "At least one skill is required"
        if (!formData.bio) errors.bio = "Bio is required"
        if (formData.bio && formData.bio.length < 50) errors.bio = "Bio should be at least 50 characters"
        break
      case 4:
        if (formData.case_studies.length === 0) {
          errors.case_studies = "At least one case study is recommended"
        } else {
          formData.case_studies.forEach((cs, index) => {
            if (!cs.title) errors[`case_study_${index}_title`] = `Case study ${index + 1} title is required`
            if (!cs.short_summary) errors[`case_study_${index}_summary`] = `Case study ${index + 1} summary is required`
            if (cs.metrics.length === 0) errors[`case_study_${index}_metrics`] = `Case study ${index + 1} should have at least one metric`
          })
        }
        break
    }
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateStep(5)) {
      setError("Please fill in all required fields")
      return
    }
    setLoading(true)
    setError("")
    try {
      const submitData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        title: formData.title,
        bio: formData.bio,
        primary_category: formData.primary_category,
        subcategories: formData.subcategories,
        experience_years: formData.experience_years,
        skills: formData.skills,
        tools_tech_stack: formData.tools_tech_stack,
        github_url: formData.portfolio_links.github || formData.github_url,
        linkedin_url: formData.portfolio_links.linkedin || formData.linkedin_url,
        twitter_url: formData.portfolio_links.twitter || formData.twitter_url,
        portfolio_url: formData.portfolio_links.website || formData.portfolio_url,
        other_links: formData.portfolio_links.other,
        case_studies: JSON.stringify(formData.case_studies),
        testimonials: JSON.stringify(formData.testimonials),
        work_experience: JSON.stringify(formData.work_experience),
        education: JSON.stringify(formData.education),
        languages: formData.languages,
        certifications: formData.certifications,
        availability: formData.availability,
        preferred_project_size: formData.preferred_project_size
      }
      const response = await fetch("/api/freelancer/onboarding/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
        credentials: "include"
      })
      const text = await response.text()
      let data
      try {
        data = JSON.parse(text)
      } catch {
        console.error("API returned HTML:", text)
        throw new Error("Server error. API returned invalid response.")
      }
      if (!response.ok) throw new Error(data.error || "Failed to submit profile")
      for (const study of formData.case_studies) {
        if (!study.title || !study.short_summary) continue
        await fetch("/api/freelancer/case-studies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            title: study.title,
            short_summary: study.short_summary,
            category: study.category || formData.primary_category,
            industry: study.industry || "",
            problem_statement: study.problem_statement,
            solution_provided: study.solution_provided,
            results_overview: study.results_overview,
            metrics: study.metrics,
            technologies: study.technologies,
            image_url: study.image_url,
            project_url: study.project_url,
            status: "pending"
          })
        })
      }
      setSuccess(true)
      setTimeout(() => router.push("/get-hired/freelancer/dashboard"), 2000)
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const currentSubcategories = categoryOptions.find(cat => cat.name === formData.primary_category)?.subcategories || []
  const currentIndustries = categoryOptions.find(cat => cat.name === formData.primary_category)?.industries || []

  const steps = [
    { number: 1, title: "Basic Info", icon: User, description: "Tell us who you are" },
    { number: 2, title: "Professional Details", icon: Briefcase, description: "Your skills and expertise" },
    { number: 3, title: "Portfolio & Social", icon: Globe, description: "Connect your online presence" },
    { number: 4, title: "Case Studies", icon: FileText, description: "Showcase your best work" },
    { number: 5, title: "Experience", icon: Layers, description: "Your professional journey" },
  ]

  if (success) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white rounded-2xl p-8 max-w-md mx-auto shadow-sm border border-teal/10"
        >
          <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-teal" />
          </div>
          <h2 className="text-2xl font-light text-night mb-2">Profile Submitted Successfully!</h2>
          <p className="text-stone mb-6">Your profile is now under review. You'll be notified once it's verified.</p>
          <div className="text-xs text-stone"><span className="text-teal">ExecuMarketing</span> — A Finzie Company</div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream py-8 px-4 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-6 border border-teal/20">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-xs font-medium text-night tracking-wide">Freelancer Onboarding</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light text-night mb-3">Complete Your Profile</h1>
          <p className="text-lg text-carbon max-w-2xl mx-auto">Tell us about your expertise and experience to start getting matched with clients</p>
        </div>

        {/* Progress Steps - Mobile optimized */}
        <div className="mb-8 md:mb-12 overflow-x-auto pb-2">
          <div className="flex items-center justify-between min-w-[600px] md:min-w-0">
            {steps.map((step, index) => {
              const StepIcon = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number
              return (
                <div key={step.number} className="flex-1 relative">
                  <div className="flex items-center">
                    <div className="relative z-10">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all ${isActive || isCompleted ? 'bg-teal text-white' : 'bg-white border border-stone/20 text-stone'}`}>
                        <StepIcon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-2 transition-all ${isCompleted ? 'bg-teal' : 'bg-stone/20'}`} />
                    )}
                  </div>
                  <div className="mt-2 hidden md:block">
                    <p className="text-xs font-medium text-night">{step.title}</p>
                    <p className="text-xs text-stone">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-4 md:hidden">
            <p className="text-sm text-carbon">Step {currentStep} of 5: {steps[currentStep - 1].title}</p>
            <div className="w-full bg-stone/20 rounded-full h-1.5 mt-2">
              <div className="bg-teal h-1.5 rounded-full transition-all duration-300" style={{ width: `${(currentStep / 5) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Main Form Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="bg-white rounded-2xl shadow-sm border border-teal/10 overflow-hidden">
          <div className="border-b border-teal/10 px-6 py-4 md:px-8 md:py-6">
            <h2 className="text-xl md:text-2xl font-light text-night">{steps[currentStep - 1].title}</h2>
            <p className="text-sm text-stone mt-1">{steps[currentStep - 1].description}</p>
          </div>

          <div className="p-6 md:p-8">
            {error && (
              <div className="mb-6 p-4 rounded-lg bg-coral/10 border-l-4 border-coral">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-carbon">Error</p>
                    <p className="text-sm text-carbon">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-carbon mb-1.5">Full Name <span className="text-coral">*</span></label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={`w-full px-4 py-2.5 border rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all ${validationErrors.name ? 'border-coral' : 'border-stone/20'}`} placeholder="John Doe" />
                      {validationErrors.name && <p className="mt-1 text-xs text-coral">{validationErrors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-carbon mb-1.5">Professional Title <span className="text-coral">*</span></label>
                      <input type="text" name="title" value={formData.title} onChange={handleInputChange} className={`w-full px-4 py-2.5 border rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all ${validationErrors.title ? 'border-coral' : 'border-stone/20'}`} placeholder="e.g., Senior Web Developer" />
                      {validationErrors.title && <p className="mt-1 text-xs text-coral">{validationErrors.title}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-carbon mb-1.5">Primary Category <span className="text-coral">*</span></label>
                      <select name="primary_category" value={formData.primary_category} onChange={handleInputChange} className={`w-full px-4 py-2.5 border rounded-lg text-carbon focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all ${validationErrors.primary_category ? 'border-coral' : 'border-stone/20'}`}>
                        <option value="">Select a category</option>
                        {categoryOptions.map(cat => <option key={cat.name} value={cat.name}>{cat.name}</option>)}
                      </select>
                      {validationErrors.primary_category && <p className="mt-1 text-xs text-coral">{validationErrors.primary_category}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-carbon mb-1.5">Years of Experience <span className="text-coral">*</span></label>
                      <input type="number" name="experience_years" value={formData.experience_years} onChange={handleInputChange} min="0" max="50" step="0.5" className={`w-full px-4 py-2.5 border rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all ${validationErrors.experience_years ? 'border-coral' : 'border-stone/20'}`} placeholder="5" />
                      {validationErrors.experience_years && <p className="mt-1 text-xs text-coral">{validationErrors.experience_years}</p>}
                    </div>
                  </div>

                  {formData.primary_category && (
                    <div>
                      <label className="block text-sm font-medium text-carbon mb-2">Subcategories (Optional)</label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {formData.subcategories.map(sub => (
                          <span key={sub} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-teal/10 text-teal">
                            {sub}
                            <button onClick={() => removeSubcategory(sub)} className="hover:opacity-70"><X className="w-3 h-3" /></button>
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {currentSubcategories.filter(sub => !formData.subcategories.includes(sub)).slice(0, 6).map(sub => (
                          <button key={sub} onClick={() => setFormData(prev => ({ ...prev, subcategories: [...prev.subcategories, sub] }))} className="text-left px-3 py-2 rounded-lg text-sm border border-stone/20 hover:border-teal hover:text-teal transition-all">+ {sub}</button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-carbon mb-1.5">Availability</label>
                      <select name="availability" value={formData.availability} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all">
                        {availabilityOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-carbon mb-1.5">Preferred Project Size</label>
                      <select name="preferred_project_size" value={formData.preferred_project_size} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all">
                        <option value="">Select project size</option>
                        {projectSizeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-carbon mb-1.5">Phone (Optional)</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" placeholder="+1 234 567 8900" />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-carbon mb-1.5">Bio/Summary <span className="text-coral">*</span></label>
                    <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows={5} className={`w-full px-4 py-2.5 border rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none ${validationErrors.bio ? 'border-coral' : 'border-stone/20'}`} placeholder="Tell us about yourself, your expertise, and what makes you unique..." />
                    {validationErrors.bio && <p className="mt-1 text-xs text-coral">{validationErrors.bio}</p>}
                    <p className="mt-1 text-xs text-stone">{formData.bio.length} characters {formData.bio.length < 50 ? '(minimum 50 recommended)' : ''}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-carbon mb-2">Skills <span className="text-coral">*</span></label>
                    <div className="flex flex-wrap gap-2 mb-3">{formData.skills.map(skill => <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-teal/10 text-teal">{skill}<button onClick={() => removeSkill(skill)}><X className="w-3 h-3" /></button></span>)}</div>
                    {validationErrors.skills && <p className="mt-1 text-xs text-coral">{validationErrors.skills}</p>}
                    <div className="flex gap-2">
                      <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Add a skill (e.g., React, Node.js)" className="flex-1 px-4 py-2 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" onKeyPress={(e) => e.key === 'Enter' && addSkill()} />
                      <button onClick={addSkill} className="px-4 py-2 bg-teal text-white rounded-lg hover:bg-teal/90 transition-all">Add</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-carbon mb-2">Tools & Technologies</label>
                    <div className="flex flex-wrap gap-2 mb-3">{formData.tools_tech_stack.map(tool => <span key={tool} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-teal/10 text-teal">{tool}<button onClick={() => removeTool(tool)}><X className="w-3 h-3" /></button></span>)}</div>
                    <div className="flex gap-2">
                      <input type="text" value={toolInput} onChange={(e) => setToolInput(e.target.value)} placeholder="Add a tool (e.g., Figma, Webflow)" className="flex-1 px-4 py-2 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" onKeyPress={(e) => e.key === 'Enter' && addTool()} />
                      <button onClick={addTool} className="px-4 py-2 bg-teal text-white rounded-lg hover:bg-teal/90 transition-all">Add</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-carbon mb-2">Languages</label>
                      <div className="flex flex-wrap gap-2 mb-3">{formData.languages.map(lang => <span key={lang} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-teal/10 text-teal">{lang}<button onClick={() => removeLanguage(lang)}><X className="w-3 h-3" /></button></span>)}</div>
                      <div className="flex gap-2">
                        <input type="text" value={languageInput} onChange={(e) => setLanguageInput(e.target.value)} placeholder="Add language" className="flex-1 px-4 py-2 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" onKeyPress={(e) => e.key === 'Enter' && addLanguage()} />
                        <button onClick={addLanguage} className="px-4 py-2 bg-teal text-white rounded-lg hover:bg-teal/90 transition-all">Add</button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-carbon mb-2">Certifications</label>
                      <div className="flex flex-wrap gap-2 mb-3">{formData.certifications.map(cert => <span key={cert} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-teal/10 text-teal">{cert}<button onClick={() => removeCertification(cert)}><X className="w-3 h-3" /></button></span>)}</div>
                      <div className="flex gap-2">
                        <input type="text" value={certificationInput} onChange={(e) => setCertificationInput(e.target.value)} placeholder="Add certification" className="flex-1 px-4 py-2 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" onKeyPress={(e) => e.key === 'Enter' && addCertification()} />
                        <button onClick={addCertification} className="px-4 py-2 bg-teal text-white rounded-lg hover:bg-teal/90 transition-all">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <div><label className="block text-sm font-medium text-carbon mb-1.5">Portfolio Website</label><div className="relative"><Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" /><input type="url" value={formData.portfolio_links.website} onChange={(e) => handlePortfolioLinkChange('website', e.target.value)} placeholder="https://yourportfolio.com" className="w-full pl-10 px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" /></div></div>
                  <div><label className="block text-sm font-medium text-carbon mb-1.5">GitHub Profile</label><div className="relative"><Github className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" /><input type="url" value={formData.portfolio_links.github} onChange={(e) => handlePortfolioLinkChange('github', e.target.value)} placeholder="https://github.com/username" className="w-full pl-10 px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" /></div></div>
                  <div><label className="block text-sm font-medium text-carbon mb-1.5">LinkedIn Profile</label><div className="relative"><Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" /><input type="url" value={formData.portfolio_links.linkedin} onChange={(e) => handlePortfolioLinkChange('linkedin', e.target.value)} placeholder="https://linkedin.com/in/username" className="w-full pl-10 px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" /></div></div>
                  <div><label className="block text-sm font-medium text-carbon mb-1.5">Twitter/X Profile</label><div className="relative"><Twitter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone" /><input type="url" value={formData.portfolio_links.twitter} onChange={(e) => handlePortfolioLinkChange('twitter', e.target.value)} placeholder="https://twitter.com/username" className="w-full pl-10 px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" /></div></div>
                  <div><label className="block text-sm font-medium text-carbon mb-2">Other Portfolio Links</label>{formData.portfolio_links.other?.map((link, index) => (<div key={index} className="flex items-center gap-2 mb-2"><input type="url" value={link} onChange={(e) => updateOtherPortfolioLink(index, e.target.value)} placeholder="https://..." className="flex-1 px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" /><button onClick={() => removeOtherPortfolioLink(index)} className="p-2 hover:opacity-70"><X className="w-4 h-4 text-stone" /></button></div>))}<button onClick={addOtherPortfolioLink} className="w-full py-2.5 rounded-lg flex items-center justify-center gap-2 border-2 border-dashed border-stone/20 text-carbon hover:border-teal hover:text-teal transition-all"><Plus className="w-4 h-4" /><span className="text-sm">Add Another Link</span></button></div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-8">
                  {formData.case_studies.length === 0 ? (
                    <div className="text-center py-12"><FileText className="w-16 h-16 text-stone/30 mx-auto mb-4" /><h3 className="text-xl font-light text-night mb-2">No Case Studies Yet</h3><p className="text-carbon mb-6">Add your first case study to showcase your best work</p><button onClick={addCaseStudy} className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-white rounded-lg hover:bg-teal/90 transition-all"><Plus className="w-4 h-4" />Add Case Study</button></div>
                  ) : (
                    <>
                      {formData.case_studies.map((study, index) => (
                        <div key={index} className="p-6 rounded-xl border border-stone/20 relative">
                          <button onClick={() => removeCaseStudy(index)} className="absolute -top-2 -right-2 p-1 rounded-full bg-coral/10 text-coral hover:bg-coral/20 transition-all"><X className="w-4 h-4" /></button>
                          <h3 className="text-lg font-medium text-night mb-4">Case Study {index + 1}</h3>
                          <div className="space-y-4">
                            <div><label className="block text-sm font-medium text-carbon mb-1.5">Project Title *</label><input type="text" value={study.title} onChange={(e) => updateCaseStudy(index, 'title', e.target.value)} placeholder="e.g., E-commerce Platform Redesign" className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" /></div>
                            <div><label className="block text-sm font-medium text-carbon mb-1.5">Short Summary *</label><input type="text" value={study.short_summary} onChange={(e) => updateCaseStudy(index, 'short_summary', e.target.value)} placeholder="Brief overview of the project (1-2 sentences)" className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" /></div>
                            <div><label className="block text-sm font-medium text-carbon mb-1.5">Industry</label><select value={study.industry} onChange={(e) => updateCaseStudy(index, 'industry', e.target.value)} className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"><option value="">Select industry</option>{currentIndustries.map(industry => <option key={industry} value={industry}>{industry}</option>)}</select></div>
                            <div><label className="block text-sm font-medium text-carbon mb-1.5">Problem Statement</label><textarea value={study.problem_statement} onChange={(e) => updateCaseStudy(index, 'problem_statement', e.target.value)} rows={3} placeholder="What challenge did the client face?" className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none" /></div>
                            <div><label className="block text-sm font-medium text-carbon mb-1.5">Solution Provided</label><textarea value={study.solution_provided} onChange={(e) => updateCaseStudy(index, 'solution_provided', e.target.value)} rows={3} placeholder="How did you solve the problem?" className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none" /></div>
                            <div><label className="block text-sm font-medium text-carbon mb-2">Key Metrics *</label><div className="space-y-2 mb-3">{study.metrics.map((metric, mi) => (<div key={mi} className="flex items-center justify-between p-2 bg-cream rounded-lg"><div><span className="font-medium text-night">{metric.label}: </span><span className="text-carbon">{metric.type === 'percentage' ? `${metric.value}%` : metric.type === 'currency' ? `$${metric.value}` : metric.value}</span></div><button onClick={() => removeMetric(index, mi)} className="text-coral hover:text-coral/70"><X className="w-4 h-4" /></button></div>))}</div>{activeCaseStudyIndex === index ? (<div className="flex flex-wrap items-center gap-2"><input type="text" placeholder="Metric label" value={newMetric.label} onChange={(e) => setNewMetric({ ...newMetric, label: e.target.value })} className="flex-1 px-3 py-2 border border-stone/20 rounded-lg text-carbon" /><input type="number" placeholder="Value" value={newMetric.value} onChange={(e) => setNewMetric({ ...newMetric, value: parseFloat(e.target.value) || 0 })} className="w-24 px-3 py-2 border border-stone/20 rounded-lg text-carbon" /><select value={newMetric.type} onChange={(e) => setNewMetric({ ...newMetric, type: e.target.value as any })} className="w-20 px-2 py-2 border border-stone/20 rounded-lg text-carbon"><option value="number">#</option><option value="percentage">%</option><option value="currency">$</option></select><button onClick={() => addMetric(index)} className="px-3 py-2 bg-teal text-white rounded-lg hover:bg-teal/90">Add</button><button onClick={() => setActiveCaseStudyIndex(null)} className="px-3 py-2 border border-stone/20 rounded-lg text-carbon hover:border-teal">Cancel</button></div>) : (<button onClick={() => setActiveCaseStudyIndex(index)} className="w-full py-2 rounded-lg flex items-center justify-center gap-2 border-2 border-dashed border-stone/20 text-carbon hover:border-teal hover:text-teal transition-all"><Plus className="w-4 h-4" /><span>Add Metric</span></button>)}</div>
                            <div><label className="block text-sm font-medium text-carbon mb-1.5">Results Overview</label><textarea value={study.results_overview} onChange={(e) => updateCaseStudy(index, 'results_overview', e.target.value)} rows={2} placeholder="Summary of the results achieved" className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-none" /></div>
                            <div><label className="block text-sm font-medium text-carbon mb-2">Technologies Used</label><div className="flex flex-wrap gap-2 mb-2">{study.technologies.map(tech => (<span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-teal/10 text-teal">{tech}<button onClick={() => removeCaseStudyTechnology(index, tech)}><X className="w-3 h-3" /></button></span>))}</div><div className="flex gap-2"><input type="text" placeholder="Add technology" className="flex-1 px-4 py-2 border border-stone/20 rounded-lg text-carbon" onKeyPress={(e) => { if (e.key === 'Enter') { addCaseStudyTechnology(index, (e.target as HTMLInputElement).value); (e.target as HTMLInputElement).value = '' } }} /></div></div>
                            <div><label className="block text-sm font-medium text-carbon mb-1.5">Project URL</label><input type="url" value={study.project_url || ''} onChange={(e) => updateCaseStudy(index, 'project_url', e.target.value)} placeholder="https://..." className="w-full px-4 py-2.5 border border-stone/20 rounded-lg text-carbon placeholder:text-stone focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all" /></div>
                          </div>
                        </div>
                      ))}
                      {formData.case_studies.length < 3 && (<button onClick={addCaseStudy} className="w-full py-3 rounded-xl flex items-center justify-center gap-2 border-2 border-dashed border-stone/20 text-carbon hover:border-teal hover:text-teal transition-all"><Plus className="w-4 h-4" /><span>Add Another Case Study</span></button>)}
                    </>
                  )}

                  <div><h3 className="text-xl font-light text-night mb-4">Client Testimonials</h3>{formData.testimonials.map((testimonial, index) => (<div key={index} className="p-4 rounded-xl border border-stone/20 relative mb-4"><button onClick={() => removeTestimonial(index)} className="absolute -top-2 -right-2 p-1 rounded-full bg-coral/10 text-coral hover:bg-coral/20"><X className="w-4 h-4" /></button><div className="space-y-3"><div className="grid grid-cols-2 gap-3"><input type="text" placeholder="Client Name" value={testimonial.client_name} onChange={(e) => updateTestimonial(index, 'client_name', e.target.value)} className="px-4 py-2 border border-stone/20 rounded-lg text-carbon" /><input type="text" placeholder="Company" value={testimonial.company} onChange={(e) => updateTestimonial(index, 'company', e.target.value)} className="px-4 py-2 border border-stone/20 rounded-lg text-carbon" /></div><div className="grid grid-cols-2 gap-3"><input type="text" placeholder="Client Role" value={testimonial.role || ''} onChange={(e) => updateTestimonial(index, 'role', e.target.value)} className="px-4 py-2 border border-stone/20 rounded-lg text-carbon" /><input type="date" value={testimonial.date || ''} onChange={(e) => updateTestimonial(index, 'date', e.target.value)} className="px-4 py-2 border border-stone/20 rounded-lg text-carbon" /></div><textarea placeholder="Testimonial Content" value={testimonial.content} onChange={(e) => updateTestimonial(index, 'content', e.target.value)} rows={3} className="w-full px-4 py-2 border border-stone/20 rounded-lg text-carbon resize-none" /><div><label className="block text-sm font-medium text-carbon mb-1.5">Rating (1-5)</label><div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map(rating => (<button key={rating} type="button" onClick={() => updateTestimonial(index, 'rating', rating)} className="focus:outline-none"><Star className={`w-5 h-5 ${rating <= testimonial.rating ? 'fill-current text-teal' : 'text-stone/30'}`} /></button>))}</div></div></div></div>))}{formData.testimonials.length < 3 && (<button onClick={addTestimonial} className="w-full py-3 rounded-xl flex items-center justify-center gap-2 border-2 border-dashed border-stone/20 text-carbon hover:border-teal hover:text-teal transition-all"><Plus className="w-4 h-4" /><span>Add Another Testimonial</span></button>)}</div>
                </div>
              )}

              {currentStep === 5 && (
                <div className="space-y-8">
                  <div><h3 className="text-xl font-light text-night mb-4">Work Experience</h3>{formData.work_experience.map((exp, index) => (<div key={index} className="p-4 rounded-xl border border-stone/20 relative mb-4"><button onClick={() => removeWorkExperience(index)} className="absolute -top-2 -right-2 p-1 rounded-full bg-coral/10 text-coral hover:bg-coral/20"><X className="w-4 h-4" /></button><div className="space-y-3"><input type="text" placeholder="Job Title" value={exp.title} onChange={(e) => updateWorkExperience(index, 'title', e.target.value)} className="w-full px-4 py-2 border border-stone/20 rounded-lg text-carbon" /><input type="text" placeholder="Company" value={exp.company} onChange={(e) => updateWorkExperience(index, 'company', e.target.value)} className="w-full px-4 py-2 border border-stone/20 rounded-lg text-carbon" /><div className="grid grid-cols-2 gap-3"><input type="text" placeholder="Start Date (2020-01)" value={exp.start_date} onChange={(e) => updateWorkExperience(index, 'start_date', e.target.value)} className="px-4 py-2 border border-stone/20 rounded-lg text-carbon" /><input type="text" placeholder="End Date" value={exp.end_date} onChange={(e) => updateWorkExperience(index, 'end_date', e.target.value)} className="px-4 py-2 border border-stone/20 rounded-lg text-carbon" disabled={exp.current} /></div><label className="flex items-center gap-2"><input type="checkbox" checked={exp.current} onChange={(e) => updateWorkExperience(index, 'current', e.target.checked)} className="w-4 h-4 rounded border-stone/20 text-teal focus:ring-teal" /><span className="text-sm text-carbon">I currently work here</span></label><textarea placeholder="Job Description" value={exp.description} onChange={(e) => updateWorkExperience(index, 'description', e.target.value)} rows={3} className="w-full px-4 py-2 border border-stone/20 rounded-lg text-carbon resize-none" /></div></div>))}<button onClick={addWorkExperience} className="w-full py-3 rounded-xl flex items-center justify-center gap-2 border-2 border-dashed border-stone/20 text-carbon hover:border-teal hover:text-teal transition-all"><Plus className="w-4 h-4" /><span>Add Work Experience</span></button></div>

                  <div><h3 className="text-xl font-light text-night mb-4">Education</h3>{formData.education.map((edu, index) => (<div key={index} className="p-4 rounded-xl border border-stone/20 relative mb-4"><button onClick={() => removeEducation(index)} className="absolute -top-2 -right-2 p-1 rounded-full bg-coral/10 text-coral hover:bg-coral/20"><X className="w-4 h-4" /></button><div className="space-y-3"><input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => updateEducation(index, 'degree', e.target.value)} className="w-full px-4 py-2 border border-stone/20 rounded-lg text-carbon" /><input type="text" placeholder="Institution" value={edu.institution} onChange={(e) => updateEducation(index, 'institution', e.target.value)} className="w-full px-4 py-2 border border-stone/20 rounded-lg text-carbon" /><div className="grid grid-cols-2 gap-3"><input type="text" placeholder="Field of Study" value={edu.field_of_study || ''} onChange={(e) => updateEducation(index, 'field_of_study', e.target.value)} className="px-4 py-2 border border-stone/20 rounded-lg text-carbon" /><input type="number" placeholder="Graduation Year" value={edu.graduation_year} onChange={(e) => updateEducation(index, 'graduation_year', parseInt(e.target.value))} className="px-4 py-2 border border-stone/20 rounded-lg text-carbon" /></div></div></div>))}<button onClick={addEducation} className="w-full py-3 rounded-xl flex items-center justify-center gap-2 border-2 border-dashed border-stone/20 text-carbon hover:border-teal hover:text-teal transition-all"><Plus className="w-4 h-4" /><span>Add Education</span></button></div>
                </div>
              )}

              {Object.keys(validationErrors).length > 0 && (<div className="p-4 rounded-lg bg-coral/5 border-l-4 border-coral"><h4 className="font-medium text-night mb-2">Please fix the following:</h4><ul className="list-disc list-inside space-y-1">{Object.values(validationErrors).map((error, index) => (<li key={index} className="text-sm text-coral">{error}</li>))}</ul></div>)}

              <div className="flex justify-between pt-6 border-t border-stone/10">
                <button onClick={() => setCurrentStep(prev => prev - 1)} disabled={currentStep === 1} className="px-6 py-2.5 border border-stone/20 text-carbon rounded-lg hover:border-teal hover:text-teal transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"><ChevronLeft className="w-4 h-4" />Back</button>
                {currentStep < 5 ? (<button onClick={() => { if (validateStep(currentStep)) { setCurrentStep(prev => prev + 1); window.scrollTo({ top: 0, behavior: 'smooth' }) } }} className="px-6 py-2.5 bg-teal text-white rounded-lg hover:bg-teal/90 transition-all flex items-center gap-2 group">Next<ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></button>) : (<button onClick={handleSubmit} disabled={loading} className="px-6 py-2.5 bg-teal text-white rounded-lg hover:bg-teal/90 transition-all flex items-center gap-2 disabled:opacity-50"><Save className="w-4 h-4" />{loading ? "Submitting..." : "Submit for Review"}</button>)}
              </div>
            </form>
          </div>
        </motion.div>

        <div className="mt-8 text-center"><span className="text-[10px] tracking-[0.2em] text-stone uppercase">A Finzie Company</span></div>
      </div>
    </div>
  )
}