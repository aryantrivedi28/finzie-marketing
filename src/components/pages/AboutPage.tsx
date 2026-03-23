'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Award, Zap, Shield } from 'lucide-react'

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

const statCardVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
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

const valueCardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    y: -4,
    transition: { duration: 0.2, ease: "easeOut" }
  }
}

interface StatCardProps {
  value: string
  label: string
  description: string
}

interface TimelineItemProps {
  period: string
  title: string
  description: string
  isLast?: boolean
}

interface ValueCardProps {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
}

interface LeaderCardProps {
  initial: string
  role: string
  title: string
  description: string
  gradient: string
}

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    setIsVisible(true)
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Memoized data to prevent re-renders
  const stats: StatCardProps[] = useMemo(() => [
    {
      value: "10K+",
      label: "Registered Specialists",
      description: "Across five marketing disciplines"
    },
    {
      value: "4+",
      label: "Years in Market",
      description: "Consistent, proven, growing"
    },
    {
      value: "1st",
      label: "AI + Human Delivery Model",
      description: "In our category, nothing comes close"
    }
  ], [])

  const timeline: TimelineItemProps[] = useMemo(() => [
    {
      period: "The Start",
      title: "A problem Finzie clients kept hitting",
      description: "Again and again, clients at Finzie were asking the same thing: 'We need a good marketing hire — fast. Who do we trust?' The market had plenty of options. It had no good signal. Too much noise, not enough quality, no reliable way to move quickly. That gap became ExecuMarketing."
    },
    {
      period: "Early Days",
      title: "Built on relationships, not algorithms — at first",
      description: "The first matches were made manually. Real conversations with freelancers, real briefings with clients. It was slow by today's standards — but every placement worked. That track record became the foundation everything else was built on."
    },
    {
      period: "Growth",
      title: "5,000 freelancers, then 10,000",
      description: "Word spread. The network grew. And as it grew, the need for intelligence became clear — you can't maintain quality across 10,000 specialists manually. That's when AI entered the picture. Not to replace the human judgment. To scale it."
    },
    {
      period: "Now",
      title: "The best version of what we always wanted to be",
      description: "AI that vets, matches, and gets smarter with every project. Humans who care about the outcome, follow up when something's off, and take responsibility for the result. Finzie's infrastructure behind it. Four years of trust in front of it. That's ExecuMarketing today."
    }
  ], [])

  const values: ValueCardProps[] = useMemo(() => [
    {
      title: "Signal over Noise",
      subtitle: "We only surface talent we'd stake our name on",
      description: "Every freelancer in our pool has been evaluated and tracked. We don't list people — we vouch for them.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Delivery Over Activity",
      subtitle: "We measure what actually ships",
      description: "Not profiles viewed, not proposals sent. Work delivered, on brief, on time. That's the only number we care about.",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Aligned Incentives",
      subtitle: "We win when our clients and freelancers do",
      description: "That's not a value statement — it's how the business works. When projects succeed, everyone comes back.",
      icon: <Shield className="w-5 h-5" />
    }
  ], [])

  const leaders: LeaderCardProps[] = useMemo(() => [
    {
      initial: "A",
      role: "Founder & CEO",
      title: "Visionary Leadership",
      description: "Saw the noise problem first-hand inside Finzie and decided to solve it. Built ExecuMarketing from the ground up — starting with relationships, ending with AI, never losing sight of the delivery that matters.",
      gradient: "linear-gradient(135deg, #44A194, #537D96)"
    },
    {
      initial: "T",
      role: "Head of Technology",
      title: "AI & Platform",
      description: "Built the AI matching layer that makes scale possible without sacrificing quality. Believes the best technology is the kind you don't notice — it just works.",
      gradient: "linear-gradient(135deg, #537D96, #3d6b82)"
    },
    {
      initial: "S",
      role: "Head of Talent",
      title: "Freelancer Success",
      description: "Has been on both sides — as a freelancer trying to get good work, and as the person building systems to surface it. Brings that perspective to every decision made about the talent pool.",
      gradient: "linear-gradient(135deg, #EC8F8D, #d4706e)"
    }
  ], [])

  const StatCard = ({ value, label, description }: StatCardProps) => (
    <motion.div
      variants={statCardVariants}
      whileHover="hover"
      className="bg-white border border-[rgba(28,35,33,0.08)] p-5 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 transition-shadow duration-200 hover:shadow-[-4px_0_0_#EC8F8D] group"
    >
      <div className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-[42px] font-light leading-[1] text-[#1C2321] whitespace-nowrap">
        {value}
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-[#1C2321] mb-1 group-hover:text-[#44A194] transition-colors duration-200">
          {label}
        </div>
        <div className="text-[10px] sm:text-[11px] text-[#8a8a82] leading-relaxed">
          {description}
        </div>
      </div>
    </motion.div>
  )

  const TimelineItem = ({ period, title, description, isLast = false }: TimelineItemProps) => (
    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-5 py-6 sm:py-8 ${!isLast ? 'border-b border-[rgba(28,35,33,0.08)]' : ''}`}>
      <div className="sm:min-w-[100px]">
        <div className="font-['Cormorant_Garamond',serif] text-[11px] font-medium text-[#44A194] tracking-[0.15em] uppercase">
          {period}
        </div>
      </div>
      <div className="relative pl-6 sm:pl-0">
        <div className="absolute left-0 sm:left-[-28px] top-1.5 w-2 h-2 rounded-full bg-[#EC8F8D]" />
        {!isLast && !isMobile && (
          <div className="absolute left-[3px] sm:left-[-27px] top-4 w-[1px] h-full bg-[rgba(28,35,33,0.08)]" />
        )}
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em]">
          {title}
        </h4>
        <p className="text-sm text-[#8a8a82] leading-relaxed sm:leading-[1.85]">
          {description}
        </p>
      </div>
    </div>
  )

  const ValueCard = ({ title, subtitle, description, icon }: ValueCardProps) => (
    <motion.div
      variants={valueCardVariants}
      whileHover="hover"
      className="bg-[#F4F0E4] p-6 sm:p-8 md:p-9 relative overflow-hidden transition-all duration-200 hover:bg-white group cursor-pointer"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
      <div className="flex items-center gap-2 mb-4">
        <div className="text-[#44A194]">{icon}</div>
        <div className="text-[10px] tracking-[0.2em] uppercase text-[#44A194]">
          {title}
        </div>
      </div>
      <div className="text-sm font-medium text-[#1C2321] mb-2.5">
        {subtitle}
      </div>
      <div className="text-xs text-[#8a8a82] leading-relaxed">
        {description}
      </div>
    </motion.div>
  )

  const LeaderCard = ({ initial, role, title, description, gradient }: LeaderCardProps) => (
    <motion.div
      variants={valueCardVariants}
      whileHover="hover"
      className="bg-[#F4F0E4] p-6 sm:p-8 md:p-9 transition-all duration-200 hover:bg-white group"
    >
      <div
        className="w-12 h-12 rounded-full mb-4 flex items-center justify-center font-['Cormorant_Garamond',serif] text-xl text-white group-hover:scale-110 transition-transform duration-200"
        style={{ background: gradient }}
      >
        {initial}
      </div>
      <div className="text-sm font-medium text-[#1C2321] mb-1">
        {role}
      </div>
      <div className="text-[10px] text-[#44A194] tracking-[0.15em] uppercase mb-3">
        {title}
      </div>
      <div className="text-xs text-[#8a8a82] leading-relaxed">
        {description}
      </div>
    </motion.div>
  )

  const handleFinzieClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_finzie_button', {
        event_category: 'engagement',
        event_label: 'Explore Finzie'
      })
    }
  }

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
              <div className="flex items-center gap-2.5 text-[10px] tracking-[0.3em] uppercase text-[#EC8F8D] mb-4 md:mb-5">
                <span className="w-6 h-[1px] bg-[#EC8F8D] inline-block"></span>
                <span>Our Story</span>
              </div>
              <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mb-4 md:mb-5">
                Built because the<br className="hidden sm:block" /> market was too{' '}
                <em className="italic text-[#EC8F8D] not-italic">noisy</em>
                <br className="hidden sm:block" /> to trust.
              </h1>
              <div className="space-y-3 md:space-y-4 max-w-xl">
                <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9]">
                  ExecuMarketing started inside Finzie when clients kept running into the same problem — they needed to hire marketing talent, but the market was impossible to navigate. Too many options. No way to tell who was actually good. No reliable process to hire quickly.
                </p>
                <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9]">
                  So we built the answer. A talent arm with real vetting, real relationships, and a process that worked. Four years later, that answer has become a platform of 10,000+ specialists — and AI that makes every match smarter than the last.
                </p>
                <p className="text-sm text-[#8a8a82] leading-relaxed md:leading-[1.9]">
                  We're not a job board. We're not an agency. We're the infrastructure that makes great project delivery possible.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-9">
                <Link href="/client-request">
                  <button className="w-full sm:w-auto bg-[#44A194] text-white border-none px-6 sm:px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 hover:bg-[#38857a] active:scale-95">
                    Work With Us
                  </button>
                </Link>
                <button 
                  onClick={() => scrollToSection('values')}
                  className="w-full sm:w-auto bg-transparent border border-[#44A194] text-[#44A194] px-6 sm:px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 hover:bg-[#44A194] hover:text-white"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            <div className="space-y-3 sm:space-y-4">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 xl:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="lg:sticky lg:top-24 self-start"
            >
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-3 block">
                The Journey
              </span>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-[32px] font-light leading-[1.2]">
                From a client<br className="hidden sm:block" /> problem to a<br className="hidden sm:block" />
                <em className="italic text-[#EC8F8D] not-italic">real platform.</em>
              </h3>
            </motion.div>
            <div>
              {timeline.map((item, index) => (
                <TimelineItem
                  key={item.period}
                  {...item}
                  isLast={index === timeline.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values"
        className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-[rgba(28,35,33,0.08)]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-13"
          >
            <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-3 md:mb-4">
              <span className="w-6 h-[1px] bg-[#44A194]"></span>
              <span>What We Stand For</span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em]">
              The three things<br />
              we don't <em className="italic text-[#EC8F8D] not-italic">compromise on.</em>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.28em] uppercase text-[#44A194] mb-3 md:mb-4">
              <span className="w-6 h-[1px] bg-[#44A194]"></span>
              <span>Leadership</span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.2] md:leading-[1.12] tracking-[-0.01em] mb-8 md:mb-12">
              The people who<br />
              built this and <em className="italic text-[#EC8F8D] not-italic">stand behind it.</em>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6 md:mt-12">
            {leaders.map((leader) => (
              <LeaderCard key={leader.role} {...leader} />
            ))}
          </div>
        </div>
      </section>

      {/* Finzie Relationship Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="bg-[#1C2321] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-10">
            <div className="flex-1">
              <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light text-white leading-[1.2]">
                ExecuMarketing is<br className="hidden sm:block" /> the talent arm of{' '}
                <em className="italic text-[#EC8F8D] not-italic">Finzie.</em>
              </h2>
              <p className="text-sm text-white/60 mt-2 md:mt-3 max-w-2xl">
                Finzie is the parent. We're their answer to the question every growing company asks —
                "where do I find people I can actually trust to deliver?"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Link href="https://finzie.co" target="_blank" rel="noopener noreferrer">
                <button
                  onClick={handleFinzieClick}
                  className="w-full sm:w-auto bg-[#EC8F8D] text-white border-none px-6 sm:px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 hover:bg-[#e07a78] active:scale-95 flex items-center justify-center gap-2 group"
                >
                  <span>Explore Finzie</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </button>
              </Link>

              <Link href="/contact">
                <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-6 sm:px-7 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-white/50">
                  Learn About Finzie
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}

export { AboutPage }