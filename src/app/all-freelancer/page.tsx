'use client'

import type React from "react"
import { useState, useEffect, useCallback, useMemo } from "react"
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
  Briefcase,
  Star,
  CheckCircle,
  Clock,
  Shield,
  AlertCircle,
  X,
  Check,
  ChevronDown,
  DollarSign,
  IndianRupee
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

  // Categories based on ExecuMarketing
  const categories = [
    { id: "shopify", name: "Shopify", icon: "🛍️", description: "Store setup, conversion optimization, theme development" },
    { id: "ads", name: "Ads", icon: "📢", description: "Meta, Google, TikTok — campaign management" },
    { id: "seo", name: "SEO", icon: "🔍", description: "Keyword strategy, content briefs, technical SEO" },
    { id: "content", name: "Content", icon: "✍️", description: "Blog posts, email newsletters, long-form content" },
    { id: "social", name: "Social Media", icon: "📱", description: "Content creation, community management, strategy" },
  ]

  // Subcategories based on selected category
  const subcategoriesMap: Record<string, { id: string; name: string; description: string }[]> = {
    shopify: [
      { id: "store_setup", name: "Store Setup & Migration", description: "Shopify store setup, product migration, data transfer" },
      { id: "theme_dev", name: "Theme Development", description: "Custom theme development, Liquid coding, template customization" },
      { id: "cro", name: "Conversion Rate Optimization", description: "A/B testing, checkout optimization, conversion funnel improvement" },
      { id: "app_integration", name: "App Integration", description: "Shopify apps, automation, workflows, API connections" },
      { id: "shopify_plus", name: "Shopify Plus", description: "Enterprise Shopify, multi-store, advanced features" },
      { id: "liquid_dev", name: "Liquid Development", description: "Liquid templating, custom sections, dynamic content" },
      { id: "checkout_opt", name: "Checkout Optimization", description: "Custom checkout, post-purchase, upsells" },
      { id: "aov_strategy", name: "AOV Strategy", description: "Bundle offers, cross-sells, volume discounts" },
    ],
    ads: [
      { id: "meta_ads", name: "Meta Ads", description: "Facebook & Instagram advertising, campaign management" },
      { id: "google_ads", name: "Google Ads", description: "Search, Display, Shopping, Performance Max" },
      { id: "tiktok_ads", name: "TikTok Ads", description: "TikTok advertising, creative strategy, audience targeting" },
      { id: "linkedin_ads", name: "LinkedIn Ads", description: "B2B advertising, lead generation, sponsored content" },
      { id: "twitter_ads", name: "Twitter/X Ads", description: "Twitter advertising, engagement campaigns" },
      { id: "retargeting", name: "Retargeting", description: "Audience retargeting, abandoned cart recovery" },
      { id: "youtube_ads", name: "YouTube Ads", description: "Video advertising, pre-roll, bumper ads" },
    ],
    seo: [
      { id: "technical_seo", name: "Technical SEO", description: "Site speed, crawlability, structured data, indexing" },
      { id: "onpage_seo", name: "On-Page SEO", description: "Meta tags, content optimization, internal linking" },
      { id: "offpage_seo", name: "Off-Page SEO", description: "Link building, outreach, brand mentions" },
      { id: "keyword_research", name: "Keyword Research", description: "Keyword strategy, topic clusters, search intent" },
      { id: "content_briefs", name: "Content Briefs", description: "SEO-optimized content briefs, writer guidelines" },
      { id: "local_seo", name: "Local SEO", description: "Google My Business, local citations, review management" },
      { id: "ecommerce_seo", name: "E-commerce SEO", description: "Product SEO, category optimization, rich snippets" },
      { id: "seo_audits", name: "SEO Audits", description: "Comprehensive SEO analysis, actionable recommendations" },
    ],
    content: [
      { id: "blog_writing", name: "Blog Writing", description: "SEO blog posts, articles, listicles, how-to guides" },
      { id: "email_newsletters", name: "Email Newsletters", description: "Newsletter content, email sequences, drip campaigns" },
      { id: "longform_articles", name: "Long-form Articles", description: "In-depth guides, pillar pages, ultimate guides" },
      { id: "thought_leadership", name: "Thought Leadership", description: "Executive content, opinion pieces, industry insights" },
      { id: "case_studies", name: "Case Studies", description: "Success stories, client testimonials, results documentation" },
      { id: "whitepapers", name: "Whitepapers", description: "Research papers, industry reports, data-driven content" },
      { id: "product_descriptions", name: "Product Descriptions", description: "E-commerce product copy, feature highlights" },
      { id: "ghostwriting", name: "Ghostwriting", description: "LinkedIn articles, bylined content, executive communications" },
    ],
    social: [
      { id: "instagram", name: "Instagram Management", description: "Feed posts, stories, reels, engagement, growth" },
      { id: "linkedin_strategy", name: "LinkedIn Strategy", description: "Company page, personal branding, B2B engagement" },
      { id: "twitter", name: "Twitter/X Management", description: "Tweet scheduling, community engagement, trend participation" },
      { id: "content_calendar", name: "Content Calendar", description: "Monthly planning, content strategy, campaign coordination" },
      { id: "community_mgmt", name: "Community Management", description: "Comment responses, DM handling, brand reputation" },
      { id: "social_strategy", name: "Social Media Strategy", description: "Platform strategy, audience targeting, growth planning" },
      { id: "influencer_outreach", name: "Influencer Outreach", description: "Influencer identification, partnership management" },
      { id: "social_analytics", name: "Social Media Analytics", description: "Performance reporting, insights, optimization" },
    ],
  }

  // Experience levels
  const experienceLevels = [
    { id: "less_than_1", name: "Less than 1 year", range: "0-1" },
    { id: "1_3", name: "1-3 years", range: "1-3" },
    { id: "3_5", name: "3-5 years", range: "3-5" },
    { id: "5_7", name: "5-7 years", range: "5-7" },
    { id: "7_plus", name: "7+ years", range: "7+" },
  ]

  // Pricing types
  const pricingTypes = [
    { id: "project", name: "Per Project", icon: "📋", description: "Fixed price per project" },
    { id: "hourly", name: "Per Hour", icon: "⏰", description: "Hourly rate" },
    { id: "monthly", name: "Monthly Retainer", icon: "📅", description: "Monthly subscription/retainer" },
  ]

  // Progress calculation
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let filled = 0
    let total = 12 // Base required fields
    
    if (payload.full_name) filled++
    if (payload.email) filled++
    if (payload.phone) filled++
    if (payload.linkedin_url) filled++
    if (payload.portfolio_url) filled++
    if (payload.category) filled++
    if (payload.subcategories.length > 0) filled++
    if (payload.experience_years) filled++
    if (payload.pricing_min > 0) filled++
    if (payload.pricing_max > 0) filled++
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
      subcategory_other: "",
    }))
    setIsCategoryDropdownOpen(false)
    setError(null)
  }

  const toggleSubcategory = (subcategoryId: string, subcategoryName: string) => {
    setPayload((p) => {
      const currentSubcategories = p.subcategories
      if (currentSubcategories.includes(subcategoryName)) {
        return {
          ...p,
          subcategories: currentSubcategories.filter(s => s !== subcategoryName)
        }
      } else {
        return {
          ...p,
          subcategories: [...currentSubcategories, subcategoryName]
        }
      }
    })
    setError(null)
  }

  const getSelectedSubcategoriesObjects = () => {
    if (!payload.category || !subcategoriesMap[payload.category]) return []
    return subcategoriesMap[payload.category].filter(sub => 
      payload.subcategories.includes(sub.name)
    )
  }

  const validateStep = (stepNumber: number): boolean => {
    switch (stepNumber) {
      case 1:
        if (!payload.full_name || !payload.email || !payload.phone || !payload.linkedin_url || !payload.portfolio_url) {
          setError("Please fill all required fields in this section")
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...payload,
          subcategories: payload.subcategories,
        }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Submission failed')
      }
      
      sessionStorage.setItem('application_id', data.application_id)
      sessionStorage.setItem('ai_score', data.ai_score)
      
      router.push('/freelancer/thank-you')
      
    } catch (err) {
      console.error('Submission error:', err)
      setError(err instanceof Error ? err.message : 'Failed to submit application. Please try again.')
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F4F0E4] py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-6 sm:w-8 h-px bg-[#44A194]"></span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
              Join Our Network
            </span>
            <span className="w-6 sm:w-8 h-px bg-[#44A194]"></span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#1C2321] mb-2 sm:mb-3">
            Become a Verified<br />
            <em className="italic text-[#44A194] not-italic">ExecuMarketing Specialist</em>
          </h1>
          <p className="text-xs sm:text-sm text-[#8a8a82] font-['Jost',sans-serif] max-w-md mx-auto px-4">
            Join the curated network of top-tier freelancers. We only accept the best — quality over quantity.
          </p>
        </div>

        {/* Error Alert */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2 sm:gap-3"
            >
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-red-700">{error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between text-[10px] sm:text-xs text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
            <span>Step {step} of 3</span>
            <span>{progress}% Complete</span>
          </div>
          <div className="h-1.5 w-full bg-[rgba(68,161,148,0.15)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#44A194] to-[#537D96] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-[rgba(28,35,33,0.08)] rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
          
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
                <div className="p-4 sm:p-6 md:p-8 border-b border-[rgba(28,35,33,0.08)] bg-[#F4F0E4]/30">
                  <h2 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-medium text-[#1C2321]">
                    Personal Information
                  </h2>
                  <p className="text-[10px] sm:text-xs text-[#8a8a82] mt-1">Tell us about yourself</p>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
                  <div className="relative">
                    <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-4 h-4" />
                    <input
                      name="full_name"
                      required
                      value={payload.full_name}
                      onChange={change}
                      placeholder="Full Name *"
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-[#1C2321] placeholder:text-[#8a8a82] text-sm focus:outline-none focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194] transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-4 h-4" />
                    <input
                      name="email"
                      type="email"
                      required
                      value={payload.email}
                      onChange={change}
                      placeholder="Email Address *"
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-[#1C2321] placeholder:text-[#8a8a82] text-sm focus:outline-none focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194] transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-4 h-4" />
                    <input
                      name="phone"
                      required
                      value={payload.phone}
                      onChange={change}
                      placeholder="Phone Number *"
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-[#1C2321] placeholder:text-[#8a8a82] text-sm focus:outline-none focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194] transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <Linkedin className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-4 h-4" />
                    <input
                      name="linkedin_url"
                      value={payload.linkedin_url}
                      onChange={change}
                      placeholder="LinkedIn URL *"
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-[#1C2321] placeholder:text-[#8a8a82] text-sm focus:outline-none focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194] transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <ExternalLink className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-4 h-4" />
                    <input
                      name="portfolio_url"
                      value={payload.portfolio_url}
                      onChange={change}
                      placeholder="Portfolio / Website URL *"
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-[#1C2321] placeholder:text-[#8a8a82] text-sm focus:outline-none focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194] transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <FileText className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-4 h-4" />
                    <input
                      name="resume_url"
                      value={payload.resume_url}
                      onChange={change}
                      placeholder="Resume / CV URL (Optional)"
                      className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-[#1C2321] placeholder:text-[#8a8a82] text-sm focus:outline-none focus:border-[#44A194] focus:ring-1 focus:ring-[#44A194] transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8 border-t border-[rgba(28,35,33,0.08)] flex justify-end">
                  <motion.button
                    onClick={() => {
                      if (validateStep(1)) setStep(2)
                    }}
                    className="bg-[#44A194] hover:bg-[#38857a] text-white font-['Jost',sans-serif] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Next Step
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Category & Multiple Subcategories Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 sm:p-6 md:p-8 border-b border-[rgba(28,35,33,0.08)] bg-[#F4F0E4]/30">
                  <h2 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-medium text-[#1C2321]">
                    Select Your Expertise
                  </h2>
                  <p className="text-[10px] sm:text-xs text-[#8a8a82] mt-1">Choose your primary category and specializations</p>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8 space-y-6">
                  {/* Category Selection */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#1C2321]">Primary Category *</label>
                    
                    {isMobile ? (
                      <div className="relative">
                        <button
                          onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                          className="w-full px-4 py-3 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-left flex items-center justify-between focus:outline-none focus:border-[#44A194]"
                        >
                          <span className={payload.category ? "text-[#1C2321]" : "text-[#8a8a82]"}>
                            {payload.category ? categories.find(c => c.id === payload.category)?.name : "Select category"}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-[#8a8a82] transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isCategoryDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute top-full left-0 right-0 mt-2 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl shadow-lg z-10 max-h-64 overflow-y-auto"
                            >
                              {categories.map((cat) => (
                                <button
                                  key={cat.id}
                                  onClick={() => handleCategorySelect(cat.id)}
                                  className="w-full px-4 py-3 text-left hover:bg-[#F4F0E4] transition-colors duration-200 border-b border-[rgba(28,35,33,0.08)] last:border-b-0"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-xl">{cat.icon}</span>
                                    <div>
                                      <div className="text-sm font-medium text-[#1C2321]">{cat.name}</div>
                                      <div className="text-[10px] text-[#8a8a82]">{cat.description}</div>
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {categories.map((cat) => (
                          <motion.button
                            key={cat.id}
                            onClick={() => handleCategorySelect(cat.id)}
                            className={`p-3 sm:p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                              payload.category === cat.id
                                ? "border-[#44A194] bg-[rgba(68,161,148,0.05)]"
                                : "border-[rgba(28,35,33,0.12)] bg-white hover:border-[#44A194]/50"
                            }`}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <div className="text-xl sm:text-2xl mb-1 sm:mb-2">{cat.icon}</div>
                            <div className="font-['Cormorant_Garamond',serif] text-base sm:text-lg font-medium text-[#1C2321]">
                              {cat.name}
                            </div>
                            <div className="text-[10px] sm:text-xs text-[#8a8a82] mt-0.5 sm:mt-1">{cat.description}</div>
                          </motion.button>
                        ))}
                      </div>
                    )}

                    {payload.category && isMobile && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[rgba(68,161,148,0.1)] text-[#44A194] rounded-full text-xs">
                          {categories.find(c => c.id === payload.category)?.icon}
                          {categories.find(c => c.id === payload.category)?.name}
                          <button onClick={() => setPayload(p => ({ ...p, category: "", subcategories: [] }))}>
                            <X className="w-3 h-3 ml-1" />
                          </button>
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Multiple Subcategories Selection */}
                  {payload.category && subcategoriesMap[payload.category] && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <label className="block text-sm font-medium text-[#1C2321]">
                          Select Your Specializations * <span className="text-[#44A194] text-xs">(Select multiple)</span>
                        </label>
                        {payload.subcategories.length > 0 && (
                          <span className="text-xs text-[#44A194]">
                            {payload.subcategories.length} selected
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {subcategoriesMap[payload.category].map((sub) => (
                          <motion.button
                            key={sub.id}
                            onClick={() => toggleSubcategory(sub.id, sub.name)}
                            className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-300 ${
                              payload.subcategories.includes(sub.name)
                                ? "border-[#44A194] bg-[rgba(68,161,148,0.05)] ring-1 ring-[#44A194]"
                                : "border-[rgba(28,35,33,0.12)] bg-white hover:border-[#44A194]/50"
                            }`}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="text-sm font-medium text-[#1C2321] flex items-center gap-2">
                                  {payload.subcategories.includes(sub.name) && (
                                    <Check className="w-4 h-4 text-[#44A194]" />
                                  )}
                                  {sub.name}
                                </div>
                                <div className="text-[10px] sm:text-xs text-[#8a8a82] mt-1">
                                  {sub.description}
                                </div>
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </div>

                      {payload.subcategories.length > 0 && (
                        <div className="mt-4 p-3 sm:p-4 bg-[#F4F0E4] rounded-xl">
                          <p className="text-xs font-medium text-[#1C2321] mb-2">Selected Specializations:</p>
                          <div className="flex flex-wrap gap-2">
                            {getSelectedSubcategoriesObjects().map((sub) => (
                              <span
                                key={sub.id}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white text-[#1C2321] rounded-full text-xs border border-[rgba(28,35,33,0.12)]"
                              >
                                {sub.name}
                                <button
                                  onClick={() => toggleSubcategory(sub.id, sub.name)}
                                  className="hover:text-[#EC8F8D] transition-colors"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-6 md:p-8 border-t border-[rgba(28,35,33,0.08)] flex justify-between">
                  <motion.button
                    onClick={() => setStep(1)}
                    className="text-[#8a8a82] hover:text-[#1C2321] font-['Jost',sans-serif] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    Back
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      if (validateStep(2)) setStep(3)
                    }}
                    disabled={!payload.category || payload.subcategories.length === 0}
                    className={`bg-[#44A194] hover:bg-[#38857a] text-white font-['Jost',sans-serif] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                      (!payload.category || payload.subcategories.length === 0) ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    whileHover={(!payload.category || payload.subcategories.length === 0) ? {} : { scale: 1.02 }}
                    whileTap={(!payload.category || payload.subcategories.length === 0) ? {} : { scale: 0.98 }}
                  >
                    Next Step
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Experience, Pricing & Submit */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-4 sm:p-6 md:p-8 border-b border-[rgba(28,35,33,0.08)] bg-[#F4F0E4]/30">
                  <h2 className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl font-medium text-[#1C2321]">
                    Experience & Pricing
                  </h2>
                  <p className="text-[10px] sm:text-xs text-[#8a8a82] mt-1">Tell us about your experience and rates</p>
                </div>
                
                <div className="p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
                  {/* Experience Level */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#1C2321]">Years of Experience *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
                      {experienceLevels.map((level) => (
                        <motion.button
                          key={level.id}
                          onClick={() => setPayload(p => ({ ...p, experience_years: level.name }))}
                          className={`px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-['Jost',sans-serif] text-center transition-all duration-300 ${
                            payload.experience_years === level.name
                              ? "bg-[#44A194] text-white"
                              : "bg-[rgba(68,161,148,0.1)] text-[#1C2321] hover:bg-[rgba(68,161,148,0.2)]"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {level.name}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Section */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-[#1C2321]">Pricing *</label>
                    
                    {/* Pricing Type Selection */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {pricingTypes.map((type) => (
                        <motion.button
                          key={type.id}
                          onClick={() => setPayload(p => ({ ...p, pricing_type: type.id }))}
                          className={`p-3 rounded-xl border-2 text-center transition-all duration-300 ${
                            payload.pricing_type === type.id
                              ? "border-[#44A194] bg-[rgba(68,161,148,0.05)]"
                              : "border-[rgba(28,35,33,0.12)] bg-white hover:border-[#44A194]/50"
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="text-xl mb-1">{type.icon}</div>
                          <div className="text-xs sm:text-sm font-medium text-[#1C2321]">{type.name}</div>
                          <div className="text-[9px] sm:text-[10px] text-[#8a8a82] mt-0.5">{type.description}</div>
                        </motion.button>
                      ))}
                    </div>

                    {/* Price Range Inputs */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-4 h-4" />
                        <input
                          name="pricing_min"
                          type="number"
                          required
                          value={payload.pricing_min || ""}
                          onChange={(e) => setPayload(p => ({ ...p, pricing_min: parseInt(e.target.value) || 0 }))}
                          placeholder="Min Price *"
                          className="w-full pl-9 pr-3 py-2.5 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-[#1C2321] placeholder:text-[#8a8a82] text-sm focus:outline-none focus:border-[#44A194] transition-all duration-300"
                        />
                      </div>
                      <div className="relative">
                        <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8a8a82] w-4 h-4" />
                        <input
                          name="pricing_max"
                          type="number"
                          required
                          value={payload.pricing_max || ""}
                          onChange={(e) => setPayload(p => ({ ...p, pricing_max: parseInt(e.target.value) || 0 }))}
                          placeholder="Max Price *"
                          className="w-full pl-9 pr-3 py-2.5 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-[#1C2321] placeholder:text-[#8a8a82] text-sm focus:outline-none focus:border-[#44A194] transition-all duration-300"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-xs text-[#8a8a82]">
                      Enter your rate range in INR (Indian Rupees)
                    </p>
                  </div>

                  {/* Freelancer Description (Optional - renamed from Why Join) */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#1C2321]">
                      Your Description
                    </label>
                    <textarea
                      name="freelancer_description"
                      value={payload.freelancer_description}
                      onChange={change}
                      rows={4}
                      placeholder="Tell us about yourself, your expertise, and what makes you unique... (Optional)"
                      className="w-full px-4 py-3 bg-white border border-[rgba(28,35,33,0.12)] rounded-xl text-[#1C2321] placeholder:text-[#8a8a82] text-sm focus:outline-none focus:border-[#44A194] transition-all duration-300 resize-none"
                    />
                    <p className="text-[10px] sm:text-xs text-[#8a8a82]">
                      This will help clients understand your expertise better (Optional)
                    </p>
                  </div>

                  {/* Terms & Conditions */}
                  <label className="flex items-start gap-3 cursor-pointer pt-2">
                    <input
                      type="checkbox"
                      name="terms_accepted"
                      checked={payload.terms_accepted}
                      onChange={change}
                      className="mt-0.5 w-4 h-4 rounded border-[rgba(28,35,33,0.12)] text-[#44A194] focus:ring-[#44A194] focus:ring-offset-0"
                    />
                    <span className="text-xs sm:text-sm text-[#8a8a82] leading-relaxed">
                      I confirm that all information provided is accurate.*
                    </span>
                  </label>
                </div>

                <div className="p-4 sm:p-6 md:p-8 border-t border-[rgba(28,35,33,0.08)] flex justify-between">
                  <motion.button
                    onClick={() => setStep(2)}
                    className="text-[#8a8a82] hover:text-[#1C2321] font-['Jost',sans-serif] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                    Back
                  </motion.button>
                  <motion.button
                    onClick={submit}
                    disabled={!payload.terms_accepted || !payload.experience_years || payload.pricing_min <= 0 || payload.pricing_max <= 0 || isSubmitting}
                    className={`bg-gradient-to-r from-[#44A194] to-[#537D96] hover:from-[#38857a] hover:to-[#3d6b82] text-white font-['Jost',sans-serif] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                      (!payload.terms_accepted || !payload.experience_years || payload.pricing_min <= 0 || payload.pricing_max <= 0 || isSubmitting) ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    whileHover={(!payload.terms_accepted || !payload.experience_years || payload.pricing_min <= 0 || payload.pricing_max <= 0 || isSubmitting) ? {} : { scale: 1.02 }}
                    whileTap={(!payload.terms_accepted || !payload.experience_years || payload.pricing_min <= 0 || payload.pricing_max <= 0 || isSubmitting) ? {} : { scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-[#8a8a82] font-['Jost',sans-serif]">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-[#44A194]" />
              AI-Powered Vetting
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#44A194]" />
              Response within 48h
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-[#44A194]" />
              Top 10% Only
            </span>
          </div>
        </div>

      </div>
    </main>
  )
}