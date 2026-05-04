// components/sections/Hero.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const Hero = () => {
  const monthTrackRef = useRef<HTMLDivElement>(null)
  const [animatedBars, setAnimatedBars] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedBars) {
            setAnimatedBars(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (monthTrackRef.current) {
      observer.observe(monthTrackRef.current)
    }

    return () => observer.disconnect()
  }, [animatedBars])

  const monthRows = [
    { month: 'Month 1', value: 8, label: 'Setup', isPeak: false },
    { month: 'Month 2', value: 20, label: '+18%', isPeak: false },
    { month: 'Month 3', value: 34, label: '+42%', isPeak: false },
    { month: 'Month 4', value: 50, label: '+68%', isPeak: false },
    { month: 'Month 5', value: 66, label: '+94%', isPeak: false },
    { month: 'Month 6', value: 82, label: '+1.3×', isPeak: false },
    { month: 'Month 9', value: 100, label: '+2.4×', isPeak: true }
  ]

  const trustFacts = [
    { text: 'Fixed monthly price', desc: 'no surprises, ever' },
    { text: 'Dedicated team', desc: 'assigned within 24 hours' },
    { text: '7-day free trial', desc: 'no card required' },
    { text: 'Cancel anytime', desc: 'no lock-in contracts' }
  ]

  const channelTags = ['Paid Media', 'SEO', 'Social', 'CRM', 'E-commerce']

  return (
    <section className="min-h-[calc(100vh-68px)] grid grid-cols-1 lg:grid-cols-2 border-b border-[rgba(28,35,33,0.09)] overflow-hidden">
      {/* Left Column - Agency Positioning */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-[100px] flex flex-col justify-center relative bg-cream">
        <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[rgba(28,35,33,0.09)] to-transparent" />

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-10 border border-teal/28 rounded-full px-3 py-1.5 mb-6 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-ring" />
          <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-teal">Fixed-Price Marketing Agency</span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-[clamp(48px,5.5vw,76px)] font-light leading-[1.08] tracking-[-0.01em] text-night mb-6 animate-fade-up animation-delay-100">
          An agency<br />
          that works like<br />
          a <em className="italic text-teal not-italic">product.</em>
        </h1>

        {/* Description */}
        <p className="text-[17px] font-light leading-[1.85] text-stone max-w-[460px] mb-8 animate-fade-up animation-delay-200">
          Pick a plan. Get a dedicated team.
          <strong className="text-mid font-medium"> No retainer negotiations, no vague scopes, no chasing updates.</strong>
          Transparent pricing, defined deliverables, and a team that's accountable for results — every month.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 flex-wrap mb-10 animate-fade-up animation-delay-300">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2.5 bg-night text-white font-body text-xs font-medium tracking-[0.18em] uppercase py-4 px-8 relative overflow-hidden group cursor-pointer"
          >
            <span className="absolute inset-0 bg-teal -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <span className="relative z-10">See Plans & Pricing</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2.5 bg-transparent text-night font-body text-xs font-medium tracking-[0.18em] uppercase py-[15px] px-8 border border-night/25 transition-all duration-300 hover:border-teal hover:text-teal"
          >
            How It Works
          </Link>
        </div>

        {/* Trust Facts */}
        <div className="space-y-2.5 animate-fade-up animation-delay-400 border-t border-[rgba(28,35,33,0.09)] pt-8">
          {trustFacts.map((fact, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-teal-10 border border-teal/20 flex items-center justify-center">
                <CheckCircle2 className="w-3 h-3 text-teal" />
              </div>
              <span className="text-[13px] text-stone">
                <strong className="text-mid font-medium">{fact.text}</strong> — {fact.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column - SaaS-like Product Feel */}
      <div className="hidden lg:flex flex-col bg-night relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute bottom-[-24px] right-[-20px] font-display text-[200px] font-semibold text-white/3 tracking-[-0.04em] leading-none pointer-events-none select-none">
          EXECUTE
        </div>

        <div className="flex-1 p-10 xl:p-[52px_48px] relative">
          {/* Decorative Radial */}
          <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(68,161,148,0.09),transparent_65%)] pointer-events-none" />

          <span className="text-[9.5px] font-medium tracking-[0.26em] uppercase text-white/30 relative z-10">
            Brand growth — month by month
          </span>

          {/* Growth Tracker */}
          <div className="mt-6 space-y-3.5 relative z-10" ref={monthTrackRef}>
            {monthRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-[52px_1fr_56px] gap-3.5 items-center">
                <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-white/40">{row.month}</span>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-teal to-teal/70 rounded-full transition-all duration-[1.2s] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{ 
                      width: animatedBars ? `${row.value}%` : '0%',
                      transitionDelay: `${idx * 150}ms`
                    }}
                  />
                </div>
                <span className={`font-display text-[15px] font-normal text-right ${row.isPeak ? 'text-teal' : 'text-white/60'}`}>
                  {row.label}
                </span>
              </div>
            ))}
          </div>

          {/* Channel Tags */}
          <div className="flex flex-wrap gap-1.5 mt-7 relative z-10">
            {channelTags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-[9.5px] font-medium tracking-[0.12em] uppercase px-3 py-1.5 rounded-full border transition-all duration-250 cursor-default ${
                  idx < 3
                    ? 'text-teal border-teal/30 bg-teal-10'
                    : 'text-white/40 border-white/10 hover:text-teal hover:border-teal/30'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Plan Preview */}
        <div className="border-t border-white/10 p-5 xl:p-[24px_48px] bg-white/5 flex items-center justify-between gap-5">
          <div>
            <strong className="text-white font-medium block text-sm">Growth Plan · ₹59,999/mo</strong>
            <span className="text-[12px] text-white/50">3 channels · Senior PM · Fixed scope</span>
          </div>
          <Link
            href="#pricing"
            className="text-[11px] font-medium tracking-[0.16em] uppercase text-teal border border-teal/30 px-4 py-2.5 whitespace-nowrap transition-all duration-250 hover:bg-teal-10"
          >
            See all plans →
          </Link>
        </div>
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulseRing {
          0%, 100% {
            box-shadow: 0 0 0 2px rgba(68, 161, 148, 0.2);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(68, 161, 148, 0.08);
          }
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.7s ease forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animate-pulse-ring {
          animation: pulseRing 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero