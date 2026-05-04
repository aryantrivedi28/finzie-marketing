// components/sections/BrandGrowthSection.tsx
'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { X, CheckCircle2, ArrowRight, TrendingUp, Users, ShoppingBag, Globe, BarChart3, Zap } from 'lucide-react'

const BrandGrowthSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const metrics = entry.target.querySelectorAll('.metric-value')
            metrics.forEach((metric, i) => {
              setTimeout(() => {
                metric.classList.add('animate')
              }, i * 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const beforeItems = [
    'Spending on ads with no system behind them',
    'One channel working, four channels ignored',
    'Agency promises, no accountability for results',
    'Inconsistent content, no compounding organic growth',
    'Customers acquired but not retained'
  ]

  const afterItems = [
    'Paid media optimised and scaling profitably',
    'All active channels coordinated, compounding',
    'Fixed deliverables, PM accountable for every output',
    'Organic traffic building month over month',
    'Retention flows running — revenue from existing customers'
  ]

  const timelineCards = [
    {
      month: 'Month 1 — Foundation',
      phase: 'Audit & Build',
      description: 'Full brand audit. Strategy set. Team assembled. Tracking fixed. The groundwork that makes everything else work.',
      metrics: [
        { label: 'Channels active', value: '1–2', status: 'active' },
        { label: 'Status', value: 'Setup', status: 'setup' }
      ]
    },
    {
      month: 'Month 2–3 — Traction',
      phase: 'First Results',
      description: 'Campaigns live. Content publishing. Early signals from organic. Paid media optimised past the learning phase.',
      metrics: [
        { label: 'Traffic growth', value: '+42%', status: 'positive' },
        { label: 'CVR improvement', value: '+0.8%', status: 'positive' }
      ]
    },
    {
      month: 'Month 4–6 — Momentum',
      phase: 'Compounding',
      description: 'Channels feeding each other. Organic traffic compounding. Paid ROAS climbing. Retention flows converting existing customers.',
      metrics: [
        { label: 'Revenue growth', value: '+94%', status: 'positive' },
        { label: 'Repeat purchase rate', value: '+34%', status: 'positive' }
      ]
    },
    {
      month: 'Month 7–9 — Scale',
      phase: 'Full Growth',
      description: 'The brand is a different business. Every channel contributing. Growth is predictable, not lucky. This is what complete brand growth looks like.',
      metrics: [
        { label: 'Overall growth', value: '2.4×', status: 'active' },
        { label: 'Channels compounding', value: 'All 5', status: 'active' }
      ]
    }
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)] bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 mb-12 md:mb-16">
          <div className="rv">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[62px] font-light leading-[1.08] tracking-[-0.018em] text-night">
              We don't run campaigns.<br />
              We grow <em className="italic text-teal not-italic">brands.</em>
            </h2>
            <p className="text-[15px] text-stone leading-relaxed mt-4 max-w-lg">
              The difference is everything. Campaigns stop when the budget stops. Brand growth compounds — 
              every channel reinforcing the next, every month building on the last. This is what we're actually 
              building when you work with us.
            </p>
          </div>
          <div className="rv rv-1">
            <p className="text-[15px] text-stone leading-relaxed">
              From where your brand is right now — to where it should be. Paid, organic, social, retention, conversion — 
              all working together, all under one accountable team, all on a fixed monthly price.
            </p>
          </div>
        </div>

        {/* Before / After Transformation */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_60px_1fr] gap-0 bg-[rgba(28,35,33,0.09)] mb-12 md:mb-16">
          {/* Before Column */}
          <div className="bg-cream-dark p-6 sm:p-8 md:p-12">
            <span className="text-[9.5px] font-semibold tracking-[0.22em] uppercase text-stone block mb-5">
              Before ExecuMarketing
            </span>
            <ul className="space-y-4">
              {beforeItems.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-coral/10 border border-coral/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-coral" />
                  </div>
                  <span className="text-[14px] text-stone leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow Divider */}
          <div className="bg-white flex items-center justify-center py-4 lg:py-0 border-y lg:border-y-0 lg:border-x border-[rgba(28,35,33,0.09)]">
            <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>

          {/* After Column */}
          <div className="bg-night p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(68,161,148,0.09),transparent_70%)] pointer-events-none" />
            <span className="text-[9.5px] font-semibold tracking-[0.22em] uppercase text-teal block mb-5 relative z-10">
              After ExecuMarketing
            </span>
            <ul className="space-y-4 relative z-10">
              {afterItems.map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-teal-10 border border-teal/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-teal" />
                  </div>
                  <span className="text-[14px] text-white/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Growth Timeline */}
        <div ref={timelineRef}>
          <div className="text-center mb-8 md:mb-10">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-night">
              Your <em className="italic text-teal not-italic">growth journey</em> month by month
            </h3>
            <p className="text-[14px] text-stone mt-2 max-w-xl mx-auto">
              Every plan follows the same proven roadmap — from foundation to full brand growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(28,35,33,0.09)] rounded-xl overflow-hidden">
            {timelineCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-cream p-6 sm:p-8 transition-all duration-300 hover:bg-white group cursor-default"
                style={{
                  animationDelay: `${0.1 * idx}s`,
                  animationFillMode: 'both'
                }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
                <span className="text-[9px] font-semibold tracking-[0.24em] uppercase text-teal block mb-3">
                  {card.month}
                </span>
                <h4 className="font-display text-xl sm:text-[22px] font-light text-night mb-3 leading-tight">
                  {card.phase}
                </h4>
                <p className="text-xs sm:text-[12.5px] text-stone leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="pt-3 border-t border-[rgba(28,35,33,0.08)] space-y-2">
                  {card.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center justify-between">
                      <span className="text-[11px] text-stone tracking-wide">{metric.label}</span>
                      <span
                        className={`font-display text-[15px] font-normal ${
                          metric.status === 'positive'
                            ? 'text-teal'
                            : metric.status === 'active'
                            ? 'text-night'
                            : metric.status === 'setup'
                            ? 'text-stone'
                            : 'text-night'
                        }`}
                      >
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: CTA within section */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 bg-night text-white font-body text-xs font-medium tracking-[0.18em] uppercase py-3.5 px-6 transition-all duration-300 hover:bg-teal group"
          >
            <span>See Plans & Start Growing</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandGrowthSection