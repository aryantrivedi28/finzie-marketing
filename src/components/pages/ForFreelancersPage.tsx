'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

// Animation variants
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

const cardHover: Variants = {
  hover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

interface BenefitCardProps {
  icon: string
  title: string
  description: string
  delay?: number
}

interface StatCardProps {
  value: string
  title: string
  description: string
  delay?: number
}

interface InsightCardProps {
  title: string
  subtitle: string
  description: string
  delay?: number
}

const ForFreelancersPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Benefits data
  const benefits: BenefitCardProps[] = useMemo(() => [
    {
      icon: "⚡",
      title: "Onboard in Minutes",
      description: "Tell us what you do and show us your work. Our AI handles the rest — no lengthy applications or waiting weeks for approval."
    },
    {
      icon: "🎯",
      title: "Work Finds You",
      description: "Clients post briefs, our AI matches. You get introduced to opportunities that fit — not a feed of everything."
    },
    {
      icon: "🔁",
      title: "Per Gig, Retainer, or Hourly",
      description: "Work the way that suits the project. Some clients want a one-off, others want you on retainer. You choose what works."
    },
    {
      icon: "📊",
      title: "AI Insights to Grow",
      description: "We track what top performers in your category are doing — and share those signals with you, so you can keep getting better."
    }
  ], [])

  // Stats data
  const stats: StatCardProps[] = useMemo(() => [
    {
      value: "3×",
      title: "More Inbound Opportunities",
      description: "Optimised profiles attract 3× more project matches than incomplete ones."
    },
    {
      value: "↑40%",
      title: "Earnings Growth",
      description: "Freelancers who act on our AI insights report meaningful income growth within 90 days."
    },
    {
      value: "10K+",
      title: "Freelancers Already Here",
      description: "Across five disciplines, all vetted, all active, all growing."
    }
  ], [])

  // Insights data
  const insights: InsightCardProps[] = useMemo(() => [
    {
      title: "Positioning",
      subtitle: "They lead with results, not resumes",
      description: "Top earners don't list skills. They show outcomes — what shipped, what performed, what the client said after."
    },
    {
      title: "Responsiveness",
      subtitle: "They respond fast and ask sharp questions",
      description: "Speed signals reliability. The first reply sets the tone for the whole engagement — and clients remember it."
    },
    {
      title: "Retention",
      subtitle: "They treat every gig like it's an audition for the next one",
      description: "The best client to land is one you already have. Over-delivering once creates recurring work automatically."
    }
  ], [])

  const specializations = useMemo(() => [
    "Paid media specialists — Meta, Google, TikTok, and beyond",
    "Social media managers — content, community, and strategy",
    "SEO and content writers — search-first, always",
    "CRM and automation experts — setup, migration, and workflows",
    "Designers and creatives — brand, performance, and everything in between"
  ], [])

  const BenefitCard = ({ icon, title, description, delay = 0 }: BenefitCardProps) => (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="bg-[#F4F0E4] p-6 sm:p-8 md:p-9 transition-all duration-200 hover:bg-white group cursor-pointer"
    >
      <div className="text-2xl sm:text-xl mb-3 sm:mb-3.5 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <div className="text-sm font-medium text-[#1C2321] mb-2 group-hover:text-[#44A194] transition-colors duration-200">
        {title}
      </div>
      <div className="text-xs text-[#8a8a82] leading-relaxed">
        {description}
      </div>
    </motion.div>
  )

  const StatCard = ({ value, title, description, delay = 0 }: StatCardProps) => (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="bg-[#F4F0E4] p-6 sm:p-8 md:p-9 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 relative overflow-hidden group cursor-pointer transition-all duration-200 hover:shadow-lg"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
      <div className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-[44px] font-light text-[#44A194] leading-[1] flex-shrink-0">
        {value}
      </div>
      <div>
        <div className="text-sm font-medium text-[#1C2321] mb-1 group-hover:text-[#44A194] transition-colors duration-200">
          {title}
        </div>
        <div className="text-xs text-[#8a8a82] leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  )

  const InsightCard = ({ title, subtitle, description, delay = 0 }: InsightCardProps) => (
    <motion.div
      variants={cardHover}
      whileHover="hover"
      className="bg-[#F4F0E4] p-6 sm:p-7 md:p-8 relative overflow-hidden group cursor-pointer transition-all duration-200 hover:bg-white"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
      <div className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-3 sm:mb-4">
        {title}
      </div>
      <div className="text-sm font-medium text-[#1C2321] mb-2.5 group-hover:text-[#44A194] transition-colors duration-200">
        {subtitle}
      </div>
      <div className="text-xs text-[#8a8a82] leading-relaxed">
        {description}
      </div>
    </motion.div>
  )

  const handleJoinClick = () => {
    // Track click event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_join_freelancer', {
        event_category: 'engagement',
        event_label: 'Join as Freelancer'
      })
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
                <span>For Freelancers</span>
              </div>
              <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mb-4 md:mb-5">
                Work comes to you.<br />
                You don't{' '}
                <em className="italic text-[#44A194] not-italic">chase it.</em>
              </h1>
              <div className="space-y-3 md:space-y-4 max-w-xl">
                <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9]">
                  On most platforms, you're bidding blind against 80 other freelancers, dropping your rate just to get noticed. 
                  Here, that dynamic is reversed.
                </p>
                <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9]">
                  We match clients to you — based on your skills, your track record, and your availability. No proposals. 
                  No bidding. No noise. Just a brief, a match, and work worth doing.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-9">
                <Link href="/join-freelancer">
                  <button
                    onClick={handleJoinClick}
                    className="w-full sm:w-auto bg-[#44A194] text-white border-none px-6 sm:px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 hover:bg-[#38857a] active:scale-95"
                  >
                    Join as a Freelancer
                  </button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="inline-block border border-[#44A194] text-[#44A194] px-3 py-1.5 text-[9px] sm:text-[10px] tracking-[0.16em] uppercase rounded-sm">
                  No Bidding
                </span>
                <span className="inline-block border border-[#537D96] text-[#537D96] px-3 py-1.5 text-[9px] sm:text-[10px] tracking-[0.16em] uppercase rounded-sm">
                  Recurring Work
                </span>
                <span className="inline-block border border-[#EC8F8D] text-[#EC8F8D] px-3 py-1.5 text-[9px] sm:text-[10px] tracking-[0.16em] uppercase rounded-sm">
                  AI-Backed Growth
                </span>
              </div>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8 lg:mt-0">
              {benefits.map((benefit, index) => (
                <BenefitCard key={benefit.title} {...benefit} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className="inline-block bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[9px] sm:text-[10px] tracking-[0.22em] uppercase px-3 py-1.5 mb-4 sm:mb-5">
                Who We Work With
              </span>
              <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mt-4">
                Five disciplines.<br />
                One{' '}
                <em className="italic text-[#44A194] not-italic">community.</em>
              </h2>
              <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9] max-w-xl mt-4">
                We work with specialists across every major marketing function. If you're serious about your craft 
                and you have a track record to prove it, there's a place for you here.
              </p>
              <ul className="space-y-3 mt-6">
                {specializations.map((item, index) => (
                  <motion.li
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={index}
                    className="flex items-start gap-3 text-sm text-[#3a3a36] leading-relaxed"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#EC8F8D] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Stats Cards */}
            <div className="space-y-4 sm:space-y-5 mt-8 lg:mt-0">
              {stats.map((stat, index) => (
                <StatCard key={stat.title} {...stat} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Top Performers Do Section */}
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
              AI Intelligence
            </span>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mb-4">
              What top performers<br />
              do{' '}
              <em className="italic text-[#44A194] not-italic">differently.</em>
            </h2>
            <p className="text-sm text-[#8a8a82] leading-relaxed max-w-xl mx-auto">
              We track performance signals across every gig on the platform. Here's what consistently separates 
              the highest earners from the rest.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8">
            {insights.map((insight, index) => (
              <InsightCard key={insight.title} {...insight} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="bg-[#44A194] py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-10 text-center lg:text-left">
            <div>
              <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-light text-white leading-[1.2]">
                Stop chasing work.<br />
                Let it come to you.
              </h2>
              <p className="text-sm text-white/70 mt-2">
                Join 10,000+ specialists who get matched — not lost in the noise.
              </p>
            </div>
            <Link href="/join-freelancer">
              <button
                onClick={handleJoinClick}
                className="w-full sm:w-auto bg-white text-[#44A194] border-none px-6 sm:px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Join as a Freelancer</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Add smooth scroll styles */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
          }
        }
      `}</style>
    </main>
  )
}

export { ForFreelancersPage }