'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion'
import { ArrowRight, CheckCircle2, X, Sparkles } from 'lucide-react'

// Correctly typed animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemHover: Variants = {
  hover: {
    x: 6,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

const cardHover: Variants = {
  hover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

interface ProcessStepProps {
  number: string
  title: string
  description: string
}

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

interface TestimonialProps {
  quote: string
  role: string
  company: string
}

const ForBusinessPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Check if mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-rotate testimonials on mobile only
  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isMobile])

  const processSteps: ProcessStepProps[] = useMemo(() => [
    { number: "01", title: "Brief", description: "Tell us what you need — paid ads, social media, SEO, CRM setup. Describe your project in plain language. Our AI takes it from there." },
    { number: "02", title: "Match", description: "AI finds the right specialist. Portfolios and past performance scored against your exact requirements. One match — the right one. Not a shortlist of 40." },
    { number: "03", title: "Execute", description: "Start within 24 hours. Verified. Briefed. Ready. Your freelancer is introduced and working before the week is out." }
  ], [])

  const services: ServiceCardProps[] = useMemo(() => [
    { icon: "🎯", title: "Paid Ads", description: "Meta, Google, TikTok — specialists who've managed real budgets and know how to make them perform." },
    { icon: "📣", title: "Social Media", description: "Content, community, strategy — freelancers who build presence, not just post counts." },
    { icon: "🔍", title: "SEO & Content", description: "Writers and strategists who understand search, not just sentences." },
    { icon: "⚙️", title: "CRM & Automation", description: "Setup, migration, workflows — experts who've done it before and don't need hand-holding." }
  ], [])

  const testimonials: TestimonialProps[] = useMemo(() => [
    {
      quote: "We needed a paid media specialist fast. ExecuMarketing had someone briefed and running our Meta campaigns within 24 hours. The quality was immediately apparent.",
      role: "Growth Lead",
      company: "Funded D2C Startup"
    },
    {
      quote: "I'd tried three other platforms before this. The difference isn't the platform — it's that the talent actually shows up knowing what they're doing.",
      role: "Founder",
      company: "SaaS Company, Bangalore"
    },
    {
      quote: "Our CRM migration and automation setup was done in two weeks, including team training. I didn't think that timeline was possible without an agency.",
      role: "Marketing Director",
      company: "Mid-Market Brand"
    }
  ], [])

  const stats = useMemo(() => [
    { value: "10K+", label: "AI-Vetted Specialists", suffix: "+" },
    { value: "4+", label: "Proven Track Record", suffix: "+ Yrs" },
    { value: "24", label: "From Brief to First Match", suffix: "hr" }
  ], [])

  const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
    <motion.div
      variants={itemHover}
      whileHover="hover"
      className="bg-white border border-[rgba(28,35,33,0.08)] p-5 sm:p-6 md:p-[22px_28px] transition-shadow duration-200 hover:shadow-[-4px_0_0_#44A194,0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="text-[9px] tracking-[0.22em] uppercase text-[#44A194] mb-1.5">
        {number} — {title}
      </div>
      <div className="text-xs sm:text-sm text-[#8a8a82] leading-relaxed">
        {description}
      </div>
    </motion.div>
  )

  const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="bg-[#F4F0E4] p-6 sm:p-8 md:p-9 flex flex-col sm:flex-row gap-3.5 items-start transition-all duration-200 hover:bg-white group"
    >
      <span className="text-2xl sm:text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </span>
      <div>
        <div className="text-sm font-medium text-[#1C2321] mb-1.5 group-hover:text-[#44A194] transition-colors duration-200">
          {title}
        </div>
        <div className="text-xs text-[#8a8a82] leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  )

  const TestimonialCard = ({ quote, role, company }: TestimonialProps) => (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="bg-[#F4F0E4] p-6 sm:p-8 md:p-9 border-l-2 border-[rgba(28,35,33,0.08)] transition-all duration-200 hover:border-[#EC8F8D]"
    >
      <p className="font-['Cormorant_Garamond',serif] text-base sm:text-[17px] italic font-light text-[#3a3a36] leading-relaxed sm:leading-[1.65] mb-4">
        <span className="text-[#EC8F8D] text-2xl mr-1">"</span>
        {quote}
      </p>
      <div className="text-[10px] sm:text-[11px] text-[#8a8a82] tracking-[0.12em] uppercase">
        {role}
      </div>
      <div className="text-[10px] sm:text-[11px] text-[#44A194] mt-0.5 tracking-[0.1em]">
        {company}
      </div>
    </motion.div>
  )

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="flex-1 min-h-screen bg-[#F4F0E4] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-[60px] items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-4">
                <span className="w-6 h-[1px] bg-[#44A194]"></span>
                <span>For Business</span>
              </div>
              <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mb-4 md:mb-5">
                The market is noisy.<br />
                Finding the{' '}
                <em className="italic text-[#44A194] not-italic">right talent</em>
                <br className="hidden sm:block" /> shouldn't be.
              </h1>
              <div className="space-y-3 md:space-y-4 max-w-xl">
                <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9]">
                  Whether you're a startup that needs to move fast, an SMB that can't afford to get it wrong,
                  or an enterprise team tired of agency markups — the problem is always the same:
                  too many options, not enough signal.
                </p>
                <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9]">
                  ExecuMarketing cuts through it. AI-vetted specialists in paid ads, social, SEO,
                  content, and CRM — matched to your brief, ready to execute.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-9">
                <button
                  onClick={() => onNavigate('home')}
                  className="w-full sm:w-auto bg-[#44A194] text-white border-none px-6 sm:px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 hover:bg-[#38857a] active:scale-95"
                >
                  Post a Project
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="w-full sm:w-auto bg-transparent text-[#1C2321] border border-[rgba(28,35,33,0.22)] px-6 sm:px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 hover:border-[#44A194] hover:text-[#44A194]"
                >
                  See How It Works
                </button>
              </div>
            </motion.div>

            {/* Process Flow */}
            <motion.div
              className="space-y-4 sm:space-y-5 mt-8 lg:mt-0"
              id="how-it-works"
            >
              {processSteps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <ProcessStep {...step} />
                  {index < processSteps.length - 1 && !isMobile && (
                    <div className="hidden sm:flex justify-center">
                      <div className="w-px h-5 bg-[rgba(68,161,148,0.3)] relative">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-l-2 border-b-2 border-[rgba(68,161,148,0.3)] rotate-45 -translate-y-1/2" />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-[rgba(28,35,33,0.08)]">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={index}
            className="p-8 sm:p-10 md:p-11 lg:p-13 border-b sm:border-b-0 sm:border-r border-[rgba(28,35,33,0.08)] last:border-r-0 text-center sm:text-left"
          >
            <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-[54px] font-light leading-[1] text-[#1C2321] mb-2">
              {stat.value}
              {stat.suffix && (
                <span className="text-2xl sm:text-3xl text-[#44A194]">{stat.suffix}</span>
              )}
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#8a8a82]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* What We Cover Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[9px] sm:text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 mb-4 sm:mb-5">
                What We Cover
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mt-4">
                Every marketing<br />
                function.{' '}
                <em className="italic text-[#44A194] not-italic">One platform.</em>
              </h2>
              <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9] max-w-xl mt-4">
                From early-stage startups running their first ad campaigns to enterprise teams scaling across channels
                — we have specialists for every stage, every budget, every brief.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-6 lg:mt-0">
              {services.map((service, index) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Noise Problem Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-13"
          >
            <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[9px] sm:text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 mb-4 sm:mb-5">
              Why Quality Wins
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mb-4">
              The market has plenty<br className="hidden sm:block" /> of talent. Finding{' '}
              <em className="italic text-[#44A194] not-italic">the right one</em>
              <br className="hidden sm:block" /> is the hard part.
            </h2>
            <p className="text-sm text-[#8a8a82] leading-relaxed max-w-xl mx-auto">
              Our clients don't choose us because we're the cheapest option. They choose us because they've been
              burned before — by platforms that gave them volume and no signal. Our AI vetting changes that.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-8">
            {/* Old Way Card */}
            <div className="bg-[#F4F0E4] p-6 sm:p-7 md:p-8 relative overflow-hidden border-l-2 border-[rgba(28,35,33,0.08)] transition-all duration-200 hover:shadow-lg group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] mb-4">
                The Old Way
              </div>
              <ul className="space-y-3">
                <li className="text-sm text-[#8a8a82] flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
                  <span>50+ applicants, zero curation</span>
                </li>
                <li className="text-sm text-[#8a8a82] flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
                  <span>You screen, you shortlist, you interview</span>
                </li>
                <li className="text-sm text-[#8a8a82] flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
                  <span>Weeks before work begins</span>
                </li>
                <li className="text-sm text-[#8a8a82] flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
                  <span>No accountability after handoff</span>
                </li>
              </ul>
            </div>

            {/* Agency Model Card */}
            <div className="bg-[#F4F0E4] p-6 sm:p-7 md:p-8 relative overflow-hidden border-l-2 border-[rgba(28,35,33,0.08)] transition-all duration-200 hover:shadow-lg group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] mb-4">
                Agency Model
              </div>
              <ul className="space-y-3">
                <li className="text-sm text-[#8a8a82] flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
                  <span>High retainers for basic work</span>
                </li>
                <li className="text-sm text-[#8a8a82] flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
                  <span>Junior staff, senior pricing</span>
                </li>
                <li className="text-sm text-[#8a8a82] flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
                  <span>Slow to start, slower to pivot</span>
                </li>
                <li className="text-sm text-[#8a8a82] flex items-start gap-2.5">
                  <X className="w-4 h-4 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
                  <span>You're one of fifty clients</span>
                </li>
              </ul>
            </div>

            {/* ExecuMarketing Card */}
            <div className="bg-white p-6 sm:p-7 md:p-8 relative overflow-hidden border-l-2 border-[#44A194] transition-all duration-200 hover:shadow-lg group">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-4">
                ExecuMarketing
              </div>
              <ul className="space-y-3">
                <li className="text-sm text-[#3a3a36] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                  <span>One match — AI-verified quality</span>
                </li>
                <li className="text-sm text-[#3a3a36] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                  <span>We do the vetting, you approve</span>
                </li>
                <li className="text-sm text-[#3a3a36] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                  <span>Executing within 24 hours</span>
                </li>
                <li className="text-sm text-[#3a3a36] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                  <span>Accountable from day one</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Vetting Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-[60px] items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[9px] sm:text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 mb-4 sm:mb-5">
                AI-Powered Vetting
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mb-4 md:mb-5">
                By the time you<br />
                see a match, the<br />
                hard work is{' '}
                <em className="italic text-[#44A194] not-italic">done.</em>
              </h2>
              <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9] max-w-xl mb-6">
                Every freelancer earns their place in our pool — they don't just sign up. Our AI evaluates portfolios,
                tracks delivery history, and scores proposals against your brief before a single introduction is made.
              </p>
              <ul className="space-y-4 mt-6">
                {[
                  "Skill and portfolio evaluation at onboarding — poor fits never enter the pool",
                  "Every gig request analysed before matching begins",
                  "Performance tracked across every project, not just the first",
                  "Specialists in paid ads, social, SEO, content, CRM, and design"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-[#3a3a36] leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-[#EC8F8D] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* AI Visual */}
            <div className="relative flex items-center justify-center py-12 lg:py-0">
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-[rgba(68,161,148,0.25)] animate-pulse" />
                  <div className="absolute w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-[rgba(83,125,150,0.15)] animate-pulse" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-[rgba(68,161,148,0.08)] animate-pulse" style={{ animationDelay: '0.6s' }} />
                </div>
                <div className="relative z-10 bg-white border border-[rgba(28,35,33,0.08)] p-5 sm:p-6 md:p-[22px_30px] text-center shadow-xl">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 text-[#44A194]" />
                  <div className="font-['Cormorant_Garamond',serif] text-base sm:text-lg font-medium text-[#1C2321] mb-1">
                    AI Matching Core
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-[#44A194] tracking-[0.16em] uppercase">
                    Powered by Finzie
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-8 sm:mb-12 md:mb-13 text-center md:text-left"
          >
            <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[9px] sm:text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 mb-4">
              Client Stories
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mt-4">
              They stopped searching.<br />
              They started{' '}
              <em className="italic text-[#44A194] not-italic">executing.</em>
            </h2>
          </motion.div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <TestimonialCard {...testimonials[activeTestimonial]} />
              </motion.div>
            </AnimatePresence>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${activeTestimonial === index ? 'w-6 bg-[#44A194]' : 'bg-[rgba(68,161,148,0.3)]'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <div className="bg-[#1C2321] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10 text-center lg:text-left">
            <div>
              <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light text-white leading-[1.2]">
                Less noise.<br />
                More{' '}
                <em className="italic text-[#EC8F8D] not-italic">execution.</em>
              </h2>
              <p className="text-sm text-white/60 mt-2 max-w-lg">
                Tell us what you need. We'll cut through the noise and find who can actually deliver it.
              </p>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto bg-[#EC8F8D] text-white border-none px-6 sm:px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 hover:bg-[#e07a78] active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Post a Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}

export { ForBusinessPage }