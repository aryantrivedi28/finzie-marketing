'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Target, 
  Wrench, 
  Mail, 
  Shield, 
  Zap, 
  CreditCard,
  Clock,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Users,
  Rocket
} from 'lucide-react'

// ExecuMarketing Brand Color Palette
const colors = {
  // Primary Palette
  cream: '#F4F0E4',      // Dominant background
  teal: '#44A194',        // Primary action/CTA
  steelBlue: '#537D96',   // AI/tech elements
  softCoral: '#EC8F8D',   // Emotional accent (sparingly)
  
  // Neutral Palette
  night: '#1C2321',       // Headings, primary text
  carbon: '#3a3a36',      // Body text
  stone: '#8a8a82',       // Labels, meta text
  white: '#FFFFFF',       // Cards, clean surfaces
}

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    storeUrl: '',
    name: ''
  })
  const [error, setError] = useState('')

  function getUserFriendlyError(error: any): string {
    if (!error) return 'Something went wrong. Please try again.'

    switch (error.code) {
      case 'NOT_SHOPIFY':
        return 'This website is not built on Shopify. Please enter a public Shopify store URL.'

      case 'CRAWL_FAILED':
        return 'We couldn’t access this website. It may be blocking automated scans.'

      case 'PERFORMANCE_TIMEOUT':
        return 'The website took too long to respond. Please try again later.'

      case 'AI_FAILED':
        return 'Analysis failed while generating insights. Please retry.'

      default:
        return error.message || 'Audit failed. Please try again.'
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/audit-tools/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!data.success) {
        const message = getUserFriendlyError(data.error)
        setError(message)
        setLoading(false)
        return
      }

      const auditId = data.auditId
      pollAuditStatus(auditId)

    } catch (err: any) {
      setError(err.message || 'Network error')
      setLoading(false)
    }
  }

  const pollAuditStatus = (auditId: string) => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`/api/audit-tools/audit/${auditId}`)
        const result = await res.json()

        if (result.status === 'completed') {
          clearInterval(interval)
          router.push(`/audit/${auditId}`)
        }

        if (result.status === 'failed') {
          clearInterval(interval)
          setError(
            getUserFriendlyError(result.error) ||
            'Audit could not be completed.'
          )
          setLoading(false)
        }

      } catch {
        clearInterval(interval)
        setError('Something went wrong')
        setLoading(false)
      }
    }, 2500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span 
              className="text-xs sm:text-sm font-medium tracking-wider uppercase px-3 py-1 rounded-full inline-flex items-center gap-2"
              style={{ 
                backgroundColor: colors.teal + '15',
                color: colors.teal
              }}
            >
              <Sparkles size={14} />
              AI-Powered Talent Delivery
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 
            className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 sm:mb-6 leading-tight"
            style={{ color: colors.night }}
          >
            Stop searching.{' '}
            <span className="italic" style={{ color: colors.teal }}>
              Start executing.
            </span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="font-['Jost'] text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: colors.carbon }}
          >
            Get a comprehensive, AI-powered analysis of your Shopify store's 
            performance, UX, SEO, and conversion opportunities — delivered by 
            the platform that vets quality, not noise.
          </p>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} style={{ color: colors.teal }} />
              <span style={{ color: colors.stone }}>AI-vetted quality</span>
            </div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.stone }} />
            <div className="flex items-center gap-2">
              <Clock size={16} style={{ color: colors.teal }} />
              <span style={{ color: colors.stone }}>24-hour matching</span>
            </div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: colors.stone }} />
            <div className="flex items-center gap-2">
              <TrendingUp size={16} style={{ color: colors.teal }} />
              <span style={{ color: colors.stone }}>No bidding required</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Audit Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div 
            className="rounded-2xl shadow-xl p-6 sm:p-8 md:p-10"
            style={{ backgroundColor: colors.white }}
          >
            {/* Form Header */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-light mb-2" style={{ color: colors.night }}>
                Audit your store
              </h2>
              <p className="font-['Jost'] text-sm" style={{ color: colors.stone }}>
                Get actionable insights in minutes
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-lg flex items-start gap-3"
                style={{ 
                  backgroundColor: colors.softCoral + '15',
                  borderLeft: `3px solid ${colors.softCoral}`
                }}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.softCoral }} />
                </div>
                <p className="font-['Jost'] text-sm font-medium flex-1" style={{ color: '#8B3A3A' }}>
                  {error}
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <label className="font-['Jost'] block text-sm font-medium mb-2" style={{ color: colors.night }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="font-['Jost'] w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all border"
                  placeholder="John Doe"
                  style={{
                    backgroundColor: colors.white,
                    color: colors.carbon,
                    borderColor: colors.stone,
                    borderWidth: '1px',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.teal
                    e.target.style.boxShadow = `0 0 0 3px ${colors.teal}20`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.stone
                    e.target.style.boxShadow = 'none'
                  }}
                />
              </div>

              <div>
                <label className="font-['Jost'] block text-sm font-medium mb-2" style={{ color: colors.night }}>
                  Email Address <span style={{ color: colors.teal }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="font-['Jost'] w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all border"
                  placeholder="you@business.com"
                  style={{
                    backgroundColor: colors.white,
                    color: colors.carbon,
                    borderColor: colors.stone,
                    borderWidth: '1px',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.teal
                    e.target.style.boxShadow = `0 0 0 3px ${colors.teal}20`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.stone
                    e.target.style.boxShadow = 'none'
                  }}
                />
                <p className="font-['Jost'] mt-1 text-xs" style={{ color: colors.stone }}>
                  We'll send the detailed audit report to this email
                </p>
              </div>

              <div>
                <label className="font-['Jost'] block text-sm font-medium mb-2" style={{ color: colors.night }}>
                  Shopify Store URL <span style={{ color: colors.teal }}>*</span>
                </label>
                <input
                  type="url"
                  name="storeUrl"
                  required
                  value={formData.storeUrl}
                  onChange={handleChange}
                  className="font-['Jost'] w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all border"
                  placeholder="https://your-store.myshopify.com"
                  style={{
                    backgroundColor: colors.white,
                    color: colors.carbon,
                    borderColor: colors.stone,
                    borderWidth: '1px',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = colors.teal
                    e.target.style.boxShadow = `0 0 0 3px ${colors.teal}20`
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = colors.stone
                    e.target.style.boxShadow = 'none'
                  }}
                />
                <p className="font-['Jost'] mt-1 text-xs" style={{ color: colors.stone }}>
                  Must be a public Shopify store
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="font-['Jost'] w-full font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg flex items-center justify-center gap-2"
                style={{
                  backgroundColor: colors.teal,
                  color: colors.white,
                }}
              >
                {loading ? 'Analyzing...' : 'Start Free Audit'}
                {!loading && <Rocket size={18} />}
              </button>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: colors.cream }}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <Shield size={14} style={{ color: colors.teal }} />
                  <span className="font-['Jost']" style={{ color: colors.stone }}>Your data is secure</span>
                </div>
                <div className="hidden sm:block w-px h-4" style={{ backgroundColor: colors.stone }} />
                <div className="flex items-center gap-2">
                  <Zap size={14} style={{ color: colors.teal }} />
                  <span className="font-['Jost']" style={{ color: colors.stone }}>Results in ~1 minute</span>
                </div>
                <div className="hidden sm:block w-px h-4" style={{ backgroundColor: colors.stone }} />
                <div className="flex items-center gap-2">
                  <CreditCard size={14} style={{ color: colors.teal }} />
                  <span className="font-['Jost']" style={{ color: colors.stone }}>No credit card required</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What You'll Get Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl md:text-4xl font-light mb-3" style={{ color: colors.night }}>
              What you'll get
            </h2>
            <p className="font-['Jost'] text-sm sm:text-base" style={{ color: colors.stone }}>
              Everything you need to optimize your Shopify store
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: BarChart3,
                title: 'Performance Score',
                description: 'Complete Lighthouse metrics & Core Web Vitals analysis'
              },
              {
                icon: Target,
                title: 'AI Recommendations',
                description: 'Expert insights powered by advanced AI technology'
              },
              {
                icon: Wrench,
                title: 'Actionable Fixes',
                description: 'Step-by-step solutions with code examples'
              },
              {
                icon: Mail,
                title: 'Email Report',
                description: 'Detailed findings delivered to your inbox'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="text-center p-6 rounded-xl transition-all hover:shadow-lg"
                style={{ backgroundColor: colors.white }}
                whileHover={{ y: -4 }}
              >
                <div className="flex justify-center mb-3">
                  <item.icon size={40} style={{ color: colors.teal, strokeWidth: 1.5 }} />
                </div>
                <h3 className="font-['Jost'] font-semibold text-sm sm:text-base mb-2" style={{ color: colors.night }}>
                  {item.title}
                </h3>
                <p className="font-['Jost'] text-xs sm:text-sm" style={{ color: colors.stone }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose ExecuMarketing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 sm:mt-20 py-12 sm:py-16 px-6 sm:px-8 rounded-2xl relative overflow-hidden"
          style={{ backgroundColor: colors.steelBlue + '10' }}
        >
          {/* Decorative element */}
          <div 
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
            style={{ backgroundColor: colors.steelBlue, transform: 'translate(30%, -30%)' }}
          />
          
          <div className="relative z-10">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-block mb-3">
                <span className="font-['Jost'] text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full inline-flex items-center gap-2" style={{ backgroundColor: colors.steelBlue + '20', color: colors.steelBlue }}>
                  <Sparkles size={12} />
                  Powered by Finzie
                </span>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl md:text-4xl font-light mb-3" style={{ color: colors.night }}>
                Built on human trust,<br />
                <span className="italic" style={{ color: colors.teal }}>powered by AI</span>
              </h2>
              <p className="font-['Jost'] text-sm sm:text-base max-w-2xl mx-auto" style={{ color: colors.carbon }}>
                Unlike noisy marketplaces and rigid agencies, we deliver quality-matched talent 
                that actually executes. The same infrastructure Finzie clients trust.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock size={28} style={{ color: colors.teal }} />
                </div>
                <div className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-light mb-1" style={{ color: colors.teal }}>
                  24h
                </div>
                <div className="font-['Jost'] text-xs" style={{ color: colors.stone }}>Matching</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Sparkles size={28} style={{ color: colors.teal }} />
                </div>
                <div className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-light mb-1" style={{ color: colors.teal }}>
                  AI
                </div>
                <div className="font-['Jost'] text-xs" style={{ color: colors.stone }}>Vetted Quality</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp size={28} style={{ color: colors.teal }} />
                </div>
                <div className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-light mb-1" style={{ color: colors.teal }}>
                  0
                </div>
                <div className="font-['Jost'] text-xs" style={{ color: colors.stone }}>Bidding Required</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users size={28} style={{ color: colors.teal }} />
                </div>
                <div className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-light mb-1" style={{ color: colors.teal }}>
                  10K+
                </div>
                <div className="font-['Jost'] text-xs" style={{ color: colors.stone }}>Specialists</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading Modal */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="rounded-2xl p-8 text-center shadow-2xl max-w-sm w-full"
              style={{ backgroundColor: colors.white }}
            >
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto mb-4 animate-spin border-4"
                style={{ 
                  borderColor: colors.stone + '30',
                  borderTopColor: colors.teal
                }}
              />
              <p className="font-['Jost'] font-semibold text-base sm:text-lg mb-2" style={{ color: colors.night }}>
                Analyzing your store...
              </p>
              <p className="font-['Jost'] text-xs sm:text-sm" style={{ color: colors.stone }}>
                Our AI is scanning your store<br />This may take up to a minute
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}