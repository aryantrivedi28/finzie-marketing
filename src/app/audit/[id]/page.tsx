'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import ScoreCard from '../../../components/audit/ScoreCard'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Zap,
  CreditCard,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
  Share2,
  Copy,
  Mail,
  FileText,
  RefreshCw,
  Sparkles,
  Gauge,
  Search,
  Users,
  Target,
  Wrench,
  BarChart3,
  Flame,
  Award,
  Eye,
  Link as LinkIcon,
  Calendar,
  Home,
  ThumbsUp,
  ArrowRight,
  ExternalLink
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

// Severity color mapping
const getSeverityColors = (severity: string) => {
  const severityMap: { [key: string]: { bg: string; border: string; text: string; icon: any } } = {
    critical: { bg: '#EC8F8D15', border: '#EC8F8D', text: '#8B3A3A', icon: XCircle },
    high: { bg: '#EC8F8D10', border: '#EC8F8D', text: '#B85C5C', icon: AlertCircle },
    medium: { bg: '#537D9610', border: '#537D96', text: '#2C5F6E', icon: AlertTriangle },
    low: { bg: '#44A19410', border: '#44A194', text: '#2E7D6E', icon: Info },
  }
  return severityMap[severity] || severityMap.low
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function AuditPage() {
  const params = useParams()
  const router = useRouter()

  const [audit, setAudit] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState<'critical' | 'high' | 'medium' | 'low'>('critical')
  const [expandedIssue, setExpandedIssue] = useState<number | null>(null)
  const [showShareMenu, setShowShareMenu] = useState(false)

  useEffect(() => {
    fetchAudit()
  }, [])

  async function fetchAudit() {
    const res = await fetch(`/api/audit-tools/audit/${params.id}`)
    const data = await res.json()
    setAudit(data)
    setLoading(false)
  }

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.cream }}>
        <div className="text-center px-4">
          <div
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 animate-spin border-4"
            style={{ borderColor: colors.stone + '30', borderTopColor: colors.teal }}
          />
          <p className="font-['Jost'] text-sm sm:text-base" style={{ color: colors.carbon }}>Loading your audit results...</p>
        </div>
      </div>
    )

  if (!audit)
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.cream }}>
        <div className="text-center py-20 px-4 max-w-md mx-auto">
          <div className="mb-4 flex justify-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.softCoral + '20' }}>
              <AlertCircle size={32} style={{ color: colors.softCoral }} />
            </div>
          </div>
          <p className="font-['Jost'] text-lg sm:text-xl font-semibold mb-2" style={{ color: colors.night }}>
            Audit not found
          </p>
          <p className="font-['Jost'] text-sm sm:text-base mb-6" style={{ color: colors.carbon }}>
            The audit you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => router.push('/audit')}
            className="font-['Jost'] px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto inline-flex items-center justify-center gap-2"
            style={{
              backgroundColor: colors.teal,
              color: colors.white
            }}
          >
            <RefreshCw size={16} />
            Start New Audit
          </button>
        </div>
      </div>
    )

  // Safely access nested properties with fallbacks
  const issues = audit.issues?.[tab] || []
  const scores = audit.scores || {}
  const store = audit.store || {}
  const aiSummary = audit.aiSummary || ''
  const estimatedImpact = audit.estimatedImpact || {}
  const priorityActions = audit.priorityActions || []
  const quickWins = audit.quickWins || []
  const recommendations = audit.recommendations || {}
  const metrics = audit.metrics || {}
  const performanceMetrics = metrics.performance || {}

  const severityColors = getSeverityColors(tab)

  // Flatten recommendations from all severity levels
  const getAllRecommendations = () => {
    const allRecs: string[] = []
    if (recommendations) {
      Object.values(recommendations).forEach((recs: any) => {
        if (Array.isArray(recs)) {
          allRecs.push(...recs)
        }
      })
    }
    return allRecs
  }

  // Format text with proper line breaks and spacing
  const formatText = (text: string) => {
    if (!text) return ''
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ))
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return { label: 'Excellent', icon: Award }
    if (score >= 60) return { label: 'Good', icon: ThumbsUp }
    if (score >= 40) return { label: 'Average', icon: Gauge }
    return { label: 'Needs Improvement', icon: AlertCircle }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.cream }}>

      {/* ================= HERO SECTION ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden"
        style={{
          backgroundColor: colors.white,
          borderBottom: `1px solid ${colors.cream}`
        }}
      >
        {/* Decorative accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: colors.teal }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">

          {/* Main Hero Content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1"
            >
              {/* Store Name Badge */}
              <div
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-5"
                style={{ backgroundColor: colors.cream }}
              >
                <Home size={14} style={{ color: colors.teal }} />
                <span className="font-['Jost'] text-xs sm:text-sm font-medium truncate max-w-[200px] sm:max-w-none" style={{ color: colors.night }}>
                  {store.name || 'Your Store'}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3 sm:mb-4 leading-tight">
                <span style={{ color: colors.night }}>Store Performance</span>
                <br className="hidden sm:block" />
                <span className="italic" style={{ color: colors.teal }}>Audit Report</span>
              </h1>

              {/* Subheadline */}
              <p className="font-['Jost'] text-base sm:text-lg md:text-xl mb-5 sm:mb-6 max-w-2xl leading-relaxed" style={{ color: colors.carbon }}>
                {aiSummary ? aiSummary.substring(0, 140) + '...' : 'Comprehensive analysis of your store\'s performance metrics and actionable insights'}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={14} style={{ color: colors.teal }} />
                  <span className="font-['Jost'] text-xs sm:text-sm" style={{ color: colors.carbon }}>
                    {audit.completedAt ? new Date(audit.completedAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    }) : 'Date not available'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon size={14} style={{ color: colors.teal }} />
                  <span className="font-['Jost'] text-xs sm:text-sm truncate max-w-[180px] sm:max-w-[250px]" style={{ color: colors.carbon }}>
                    {store.url || 'URL not available'}
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full"
                  style={{ backgroundColor: colors.cream }}
                >
                  <CheckCircle2 size={12} style={{ color: colors.teal }} />
                  <span className="font-['Jost'] text-xs font-medium" style={{ color: colors.carbon }}>
                    {audit.status || 'Completed'}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => router.push('/audit')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 font-['Jost'] text-sm"
                  style={{
                    backgroundColor: colors.cream,
                    color: colors.carbon
                  }}
                >
                  <RefreshCw size={16} />
                  New Audit
                </button>
                
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 font-['Jost'] text-sm relative"
                  style={{
                    backgroundColor: colors.teal,
                    color: colors.white
                  }}
                >
                  <Share2 size={16} />
                  Share Report
                </button>

                {/* Share Menu Dropdown */}
                <AnimatePresence>
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute mt-2 w-48 rounded-lg shadow-lg z-10"
                      style={{ backgroundColor: colors.white, border: `1px solid ${colors.cream}` }}
                    >
                      <div className="py-2">
                        {[
                          { icon: Copy, label: 'Copy Link' },
                          { icon: Mail, label: 'Email Report' },
                          { icon: FileText, label: 'Download PDF' }
                        ].map((option) => (
                          <button
                            key={option.label}
                            className="font-['Jost'] w-full text-left px-4 py-2 text-sm transition-colors flex items-center gap-2"
                            style={{ color: colors.carbon }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.cream)}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            onClick={() => setShowShareMenu(false)}
                          >
                            <option.icon size={14} />
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Column - Overall Score */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0 mx-auto lg:mx-0"
            >
              <div
                className="p-6 sm:p-8 rounded-2xl text-center"
                style={{ backgroundColor: colors.cream }}
              >
                <div
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{
                    background: `conic-gradient(${colors.teal} ${(scores.overall || 0) * 3.6}deg, ${colors.stone + '20'} 0deg)`
                  }}
                >
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex flex-col items-center justify-center"
                    style={{ backgroundColor: colors.white }}
                  >
                    <span className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-light" style={{ color: colors.teal }}>
                      {scores.overall || 0}
                    </span>
                    <span className="font-['Jost'] text-[10px] sm:text-xs" style={{ color: colors.stone }}>SCORE</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {(() => {
                    const { label, icon: ScoreIcon } = getScoreLabel(scores.overall || 0)
                    return (
                      <>
                        <ScoreIcon size={14} style={{ color: colors.teal }} />
                        <p className="font-['Jost'] text-xs font-medium" style={{ color: colors.carbon }}>
                          {label}
                        </p>
                      </>
                    )
                  })()}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12 space-y-8 md:space-y-10">

        {/* Score Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          <motion.div variants={itemVariants}><ScoreCard score={scores.overall || 0} label="Overall" /></motion.div>
          <motion.div variants={itemVariants}><ScoreCard score={scores.performance || 0} label="Performance" /></motion.div>
          <motion.div variants={itemVariants}><ScoreCard score={scores.seo || 0} label="SEO" /></motion.div>
          <motion.div variants={itemVariants}><ScoreCard score={scores.ux || 0} label="UX" /></motion.div>
          <motion.div variants={itemVariants}><ScoreCard score={scores.conversion || 0} label="Conversion" /></motion.div>
          <motion.div variants={itemVariants}><ScoreCard score={scores.trust || 0} label="Trust" /></motion.div>
        </motion.div>

        {/* Performance Metrics Section */}
        {performanceMetrics && Object.keys(performanceMetrics).length > 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="rounded-xl p-5 sm:p-6"
            style={{ backgroundColor: colors.white }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-5">
              <h2 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-light flex items-center gap-2" style={{ color: colors.night }}>
                <Gauge size={22} style={{ color: colors.teal }} />
                Performance Metrics
              </h2>
              <span className="font-['Jost'] text-xs px-2 py-1 rounded-full w-fit" style={{ backgroundColor: colors.cream, color: colors.stone }}>
                Real-time Core Web Vitals
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {performanceMetrics.loadTime !== undefined && (
                <MetricCard label="Load Time" value={`${(performanceMetrics.loadTime / 1000).toFixed(1)}s`} />
              )}
              {performanceMetrics.largestContentfulPaint !== undefined && (
                <MetricCard label="LCP" value={`${performanceMetrics.largestContentfulPaint.toFixed(0)}ms`} />
              )}
              {performanceMetrics.cumulativeLayoutShift !== undefined && (
                <MetricCard label="CLS" value={performanceMetrics.cumulativeLayoutShift} />
              )}
              {performanceMetrics.totalBlockingTime !== undefined && (
                <MetricCard label="TBT" value={`${performanceMetrics.totalBlockingTime}ms`} />
              )}
              {performanceMetrics.speedIndex !== undefined && (
                <MetricCard label="Speed Index" value={`${performanceMetrics.speedIndex.toFixed(0)}ms`} />
              )}
            </div>
          </motion.div>
        )}

        {/* Issues Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="rounded-xl overflow-hidden"
          style={{ backgroundColor: colors.white }}
        >
          {/* Section Header */}
          <div className="p-5 sm:p-6 border-b" style={{ borderColor: colors.cream }}>
            <h2 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-light mb-4 flex items-center gap-2" style={{ color: colors.night }}>
              <AlertCircle size={22} style={{ color: colors.teal }} />
              Issues Found
            </h2>

            {/* Severity Tabs */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
              {(['critical', 'high', 'medium', 'low'] as const).map((severity) => {
                const count = audit.issues?.[severity]?.length || 0
                const colors = getSeverityColors(severity)
                const Icon = colors.icon

                return (
                  <button
                    key={severity}
                    onClick={() => setTab(severity)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${tab === severity ? 'shadow-md scale-105 ring-2 ring-offset-1' : 'opacity-70 hover:opacity-100'
                      }`}
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.text,
                      border: `1px solid ${colors.border}`
                    }}
                  >
                    <Icon size={14} />
                    <span className="capitalize">{severity}</span>
                    <span className="font-bold ml-1">({count})</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Issues List */}
          <div className="p-5 sm:p-6">
            <AnimatePresence mode="wait">
              {issues.length > 0 ? (
                <motion.div
                  key={tab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-3"
                >
                  {issues.map((issue: any, i: number) => {
                    const severityColors = getSeverityColors(tab)
                    const Icon = severityColors.icon

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md"
                        style={{
                          backgroundColor: severityColors.bg,
                          border: `1px solid ${severityColors.border}50`
                        }}
                        onClick={() => setExpandedIssue(expandedIssue === i ? null : i)}
                      >
                        {/* Issue Header */}
                        <div className="p-4 sm:p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Icon size={16} style={{ color: severityColors.text }} />
                                <h3 className="font-['Jost'] font-semibold text-sm sm:text-base leading-snug" style={{ color: severityColors.text }}>
                                  {issue.title}
                                </h3>
                              </div>

                              {/* Quick Info Tags */}
                              <div className="flex flex-wrap gap-2 mt-2">
                                {issue.impact && (
                                  <span className="font-['Jost'] text-xs px-2 py-1 rounded-full" style={{ backgroundColor: severityColors.bg + '80', color: severityColors.text }}>
                                    Impact: {issue.impact}
                                  </span>
                                )}
                                {issue.element && (
                                  <span className="font-['Jost'] text-xs px-2 py-1 rounded-full font-mono truncate max-w-[180px]" style={{ backgroundColor: severityColors.bg + '80', color: severityColors.text }}>
                                    {issue.element}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex-shrink-0">
                              {expandedIssue === i ? (
                                <ChevronUp size={20} style={{ color: severityColors.text }} />
                              ) : (
                                <ChevronDown size={20} style={{ color: severityColors.text }} />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Expanded Content */}
                        <AnimatePresence>
                          {expandedIssue === i && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 sm:px-5 sm:pb-5 space-y-3" style={{ borderTop: `1px solid ${severityColors.border}30` }}>

                                {issue.description && (
                                  <div className="mt-3">
                                    <p className="font-['Jost'] text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: severityColors.text }}>
                                      Description
                                    </p>
                                    <p className="font-['Jost'] text-xs sm:text-sm leading-relaxed" style={{ color: severityColors.text }}>
                                      {formatText(issue.description)}
                                    </p>
                                  </div>
                                )}

                                {issue.solutionSteps && issue.solutionSteps.length > 0 && (
                                  <div>
                                    <p className="font-['Jost'] text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: severityColors.text }}>
                                      Solution Steps:
                                    </p>
                                    <ul className="space-y-2">
                                      {issue.solutionSteps.map((step: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-2">
                                          <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{ backgroundColor: severityColors.bg, color: severityColors.text }}
                                          >
                                            {idx + 1}
                                          </span>
                                          <span className="font-['Jost'] text-xs sm:text-sm leading-relaxed" style={{ color: severityColors.text }}>{step}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {issue.recommendation && (
                                  <div className="mt-2 p-3 rounded" style={{ backgroundColor: severityColors.bg }}>
                                    <p className="font-['Jost'] text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: severityColors.text }}>
                                      Recommendation
                                    </p>
                                    <p className="font-['Jost'] text-xs sm:text-sm leading-relaxed" style={{ color: severityColors.text }}>
                                      {formatText(issue.recommendation)}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 sm:py-16"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: colors.teal + '10' }}>
                    <CheckCircle2 size={32} style={{ color: colors.teal }} />
                  </div>
                  <p className="font-['Jost'] text-base sm:text-lg" style={{ color: colors.carbon }}>
                    No {tab} severity issues found!
                  </p>
                  <p className="font-['Jost'] text-sm mt-1" style={{ color: colors.stone }}>
                    Great job maintaining your store
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Quick Wins & Recommendations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">

          {/* Quick Wins */}
          {quickWins.length > 0 && (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="rounded-xl p-5 sm:p-6"
              style={{ backgroundColor: colors.white }}
            >
              <h2 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-light mb-4 flex items-center gap-2" style={{ color: colors.night }}>
                <Zap size={22} style={{ color: colors.teal }} />
                Quick Wins
              </h2>
              <ul className="space-y-3">
                {quickWins.map((win: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} style={{ color: colors.teal }} className="flex-shrink-0 mt-0.5" />
                    <span className="font-['Jost'] text-sm leading-relaxed" style={{ color: colors.carbon }}>{win}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Recommendations */}
          {getAllRecommendations().length > 0 && (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="rounded-xl p-5 sm:p-6"
              style={{ backgroundColor: colors.white }}
            >
              <h2 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-light mb-4 flex items-center gap-2" style={{ color: colors.night }}>
                <Target size={22} style={{ color: colors.teal }} />
                Recommendations
              </h2>
              <ul className="space-y-3">
                {getAllRecommendations().slice(0, 5).map((rec: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg"
                    style={{ backgroundColor: colors.cream }}
                  >
                    <ArrowRight size={14} style={{ color: colors.teal }} className="flex-shrink-0 mt-0.5" />
                    <span className="font-['Jost'] text-sm leading-relaxed" style={{ color: colors.carbon }}>{rec}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Priority Actions & Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">

          {/* Priority Actions */}
          {priorityActions.length > 0 && (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 rounded-xl p-5 sm:p-6"
              style={{ backgroundColor: colors.white }}
            >
              <h2 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-light mb-4 flex items-center gap-2" style={{ color: colors.night }}>
                <Flame size={22} style={{ color: colors.softCoral }} />
                Priority Actions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {priorityActions.map((action: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{ backgroundColor: colors.cream }}
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: colors.teal, color: colors.white }}
                    >
                      {i + 1}
                    </div>
                    <span className="font-['Jost'] text-sm leading-relaxed flex-1" style={{ color: colors.carbon }}>{action}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Estimated Impact */}
          {estimatedImpact && Object.keys(estimatedImpact).length > 0 && (
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="rounded-xl p-5 sm:p-6"
              style={{ backgroundColor: colors.white }}
            >
              <h2 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-light mb-4 flex items-center gap-2" style={{ color: colors.night }}>
                <BarChart3 size={22} style={{ color: colors.teal }} />
                Estimated Impact
              </h2>
              <div className="space-y-4">
                {Object.entries(estimatedImpact).map(([key, value]: [string, any], i) => {
                  // Extract percentage from string like "Increase by 5-8%"
                  const percentageMatch = String(value).match(/(\d+)(?:-(\d+))?%/);
                  let percentage = 0;
                  if (percentageMatch) {
                    if (percentageMatch[2]) {
                      percentage = (parseInt(percentageMatch[1]) + parseInt(percentageMatch[2])) / 2;
                    } else {
                      percentage = parseInt(percentageMatch[1]);
                    }
                  }

                  return (
                    <div key={i}>
                      <div className="flex justify-between text-xs sm:text-sm mb-1">
                        <span className="font-['Jost'] capitalize" style={{ color: colors.stone }}>
                          {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                        </span>
                        <span className="font-['Jost'] font-medium" style={{ color: colors.teal }}>{value}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: colors.cream }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: colors.teal }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </div>

        {/* AI Summary Section */}
        {aiSummary && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="rounded-xl p-5 sm:p-6"
            style={{ backgroundColor: colors.steelBlue + '05' }}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.steelBlue + '15' }}>
                  <Sparkles size={18} style={{ color: colors.steelBlue }} />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-light mb-3" style={{ color: colors.night }}>
                  AI Summary
                </h2>
                <p className="font-['Jost'] text-sm leading-relaxed" style={{ color: colors.carbon }}>
                  {formatText(aiSummary)}
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t" style={{ borderColor: colors.cream }}>
                  <div className="text-center">
                    <p className="font-['Jost'] text-xs" style={{ color: colors.stone }}>Total Issues</p>
                    <p className="font-['Cormorant_Garamond'] text-xl font-light" style={{ color: colors.teal }}>
                      {Object.values(audit.issues || {}).flat().length}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-['Jost'] text-xs" style={{ color: colors.stone }}>Quick Wins</p>
                    <p className="font-['Cormorant_Garamond'] text-xl font-light" style={{ color: colors.teal }}>
                      {quickWins.length}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-['Jost'] text-xs" style={{ color: colors.stone }}>Critical Issues</p>
                    <p className="font-['Cormorant_Garamond'] text-xl font-light" style={{ color: colors.softCoral }}>
                      {audit.issues?.critical?.length || 0}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Section - Start New Audit */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-center py-8 sm:py-10"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="font-['Jost'] text-sm" style={{ color: colors.stone }}>
              Ready to optimize another store?
            </p>
            <button
              onClick={() => router.push('/audit')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 font-['Jost']"
              style={{
                backgroundColor: colors.teal,
                color: colors.white
              }}
            >
              <RefreshCw size={16} />
              Start New Audit
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Helper component for metric cards
function MetricCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div
      className="rounded-lg p-3 text-center transition-all hover:shadow-md"
      style={{ backgroundColor: colors.cream }}
    >
      <p className="font-['Jost'] text-xs font-medium mb-1 truncate" style={{ color: colors.stone }}>
        {label}
      </p>
      <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl font-light" style={{ color: colors.night }}>
        {value}
      </p>
    </div>
  )
}