// components/sections/PricingSection.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, X } from 'lucide-react'

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const plans = [
    {
      name: 'Focus',
      badge: 'Starter',
      description: 'One channel. One specialist. Executed right.',
      monthlyPrice: 24999,
      annualPrice: 19999,
      features: [
        { included: true, text: '1 marketing channel' },
        { included: true, text: 'Dedicated specialist' },
        { included: true, text: 'Project Manager' },
        { included: true, text: 'Fixed monthly deliverables' },
        { included: true, text: 'Weekly updates' },
        { included: true, text: 'Monthly review call' },
        { included: false, text: 'Multi-channel coordination' },
        { included: false, text: 'AI performance dashboard' }
      ],
      channels: ['Paid Media', 'SEO', 'Social', 'CRM', 'E-commerce'],
      isPopular: false,
      btnVariant: 'secondary'
    },
    {
      name: 'Growth',
      badge: 'Most Popular',
      description: 'Multi-channel. Coordinated. Real momentum.',
      monthlyPrice: 59999,
      annualPrice: 47999,
      features: [
        { included: true, text: 'Up to 3 marketing channels' },
        { included: true, text: '2–3 dedicated specialists' },
        { included: true, text: 'Senior Project Manager' },
        { included: true, text: 'Cross-channel strategy' },
        { included: true, text: 'AI performance tracking' },
        { included: true, text: 'Bi-weekly strategy calls' },
        { included: true, text: 'Priority support' },
        { included: true, text: 'Monthly growth report' }
      ],
      channels: ['Paid Media', 'SEO', 'Social', 'CRM', 'E-commerce'],
      isPopular: true,
      btnVariant: 'primary'
    },
    {
      name: 'Full Stack',
      badge: 'Scale',
      description: 'All channels. Full team. Complete brand growth.',
      monthlyPrice: 99999,
      annualPrice: 79999,
      features: [
        { included: true, text: 'All 5 marketing channels' },
        { included: true, text: 'Full specialist team (4–6)' },
        { included: true, text: 'Dedicated Senior PM' },
        { included: true, text: 'Full AI performance dashboard' },
        { included: true, text: 'Weekly strategy calls' },
        { included: true, text: '48hr support SLA' },
        { included: true, text: 'Quarterly business review' },
        { included: true, text: 'Custom reporting' }
      ],
      channels: ['Paid Media', 'SEO', 'Social', 'CRM', 'E-commerce'],
      isPopular: false,
      btnVariant: 'secondary'
    }
  ]

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN')
  }

  const getCurrentPrice = (plan: typeof plans[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 bg-night border-b border-white/10" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-teal block mb-3">
            Simple, transparent pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.1] tracking-[-0.015em] text-white">
            Three plans.<br />
            One <em className="italic text-teal not-italic">clear price.</em>
          </h2>
          <p className="text-sm sm:text-[15px] text-white/35 leading-relaxed mt-3 max-w-md mx-auto">
            No custom quotes. No retainer negotiations. Pick the plan that fits your stage.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 mb-10 md:mb-12">
          <span
            className={`text-[11px] font-medium tracking-[0.14em] uppercase cursor-pointer transition-colors duration-250 ${
              !isAnnual ? 'text-white' : 'text-white/30'
            }`}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
              isAnnual ? 'bg-teal' : 'bg-white/10'
            } border border-white/15`}
            aria-label="Toggle billing"
          >
            <div
              className={`absolute top-[3px] w-3.5 h-3.5 rounded-full bg-white transition-transform duration-300 ${
                isAnnual ? 'translate-x-[22px]' : 'translate-x-[3px]'
              }`}
            />
          </button>
          <span
            className={`text-[11px] font-medium tracking-[0.14em] uppercase cursor-pointer transition-colors duration-250 ${
              isAnnual ? 'text-white' : 'text-white/30'
            }`}
            onClick={() => setIsAnnual(true)}
          >
            Annual
          </span>
          <span className="text-[9.5px] font-semibold tracking-[0.14em] uppercase text-teal border border-teal/30 bg-teal-10 px-3 py-1 rounded-full ml-2">
            Save 20%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`bg-[#1d2926] p-6 sm:p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-[#21302c] ${
                plan.isPopular ? 'relative bg-[#192521] outline outline-1 outline-teal/40 -outline-offset-1 z-10' : ''
              }`}
              style={{
                animationDelay: `${0.1 + idx * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal to-teal/60" />
              )}

              {/* Plan Badge */}
              <span
                className={`text-[9px] font-semibold tracking-[0.22em] uppercase px-3 py-1.5 rounded-full inline-block w-fit mb-5 ${
                  plan.isPopular
                    ? 'text-teal bg-teal-10 border border-teal/25'
                    : 'text-white/40 bg-white/5 border border-white/10'
                }`}
              >
                {plan.badge}
              </span>

              {/* Plan Name & Description */}
              <h3 className="font-display text-2xl sm:text-[28px] font-light text-white leading-tight mb-1.5">
                {plan.name}
              </h3>
              <p className="text-xs sm:text-[13px] text-white/40 leading-relaxed mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[15px] text-white/40 mt-1">₹</span>
                <span className="font-display text-4xl sm:text-[46px] font-light text-white leading-none">
                  {formatPrice(getCurrentPrice(plan))}
                </span>
                <span className="text-[12px] text-white/30 tracking-wide ml-1">/ mo</span>
              </div>
              <p className="text-[10.5px] text-white/25 mb-6">
                {isAnnual ? 'Billed annually · Save 20%' : 'Billed monthly · Cancel anytime'}
              </p>

              {/* Features List */}
              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    {feature.included ? (
                      <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-white/20 flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-[13px] leading-relaxed ${
                        feature.included ? 'text-white/80' : 'text-white/40 line-through'
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Channel Tags */}
              <div className="mb-6">
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/30 block mb-2.5">
                  {plan.name === 'Full Stack' ? 'All channels included' : 'Choose your channel'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {plan.channels.map((channel, cIdx) => (
                    <span
                      key={cIdx}
                      className={`text-[9.5px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-full border ${
                        plan.isPopular
                          ? 'text-teal/80 border-teal/25'
                          : 'text-white/40 border-white/10'
                      }`}
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`w-full flex items-center justify-center gap-2 font-body text-[11px] font-medium tracking-[0.18em] uppercase py-3.5 px-4 transition-all duration-300 ${
                  plan.btnVariant === 'primary'
                    ? 'bg-teal text-white hover:bg-teal-dark'
                    : 'bg-transparent text-white/50 border border-white/15 hover:border-white/30 hover:text-white'
                }`}
              >
                Start Free Trial
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <p className="text-[10px] text-white/25 text-center mt-2.5">
                7 days free · No card required
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs sm:text-[12px] text-white/25 mt-6 leading-relaxed">
          Not sure which plan? <Link href="/contact" className="text-teal hover:underline">Talk to us</Link> — we'll tell you honestly which one fits your stage.<br />
          All plans: Dedicated PM · QC before delivery · Fixed scope · Cancel anytime
        </p>
      </div>
    </section>
  )
}

export default PricingSection