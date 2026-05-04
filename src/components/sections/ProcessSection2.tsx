// components/sections/ProcessSection.tsx
'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Briefcase, Users, CheckCircle2, Clock, Zap } from 'lucide-react'

const ProcessSection2 = () => {
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -28px 0px' }
    )

    const rvElements = document.querySelectorAll('.rv-process')
    rvElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Pick your plan',
      description: 'Choose the plan that fits your business right now. Start your 7-day free trial. No card required, no commitment yet.',
      icon: Briefcase,
      ghostNumber: '01'
    },
    {
      number: '02',
      title: 'Meet your team',
      description: 'Your PM and specialists are assigned within 24 hours — matched to your goals, industry, and the channels in your plan.',
      icon: Users,
      ghostNumber: '02'
    },
    {
      number: '03',
      title: 'You approve. We deliver.',
      description: 'Every deliverable is QC\'d before it reaches you. You approve the work. Same team, same quality, every single month.',
      icon: CheckCircle2,
      ghostNumber: '03'
    }
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-t border-b border-[rgba(28,35,33,0.09)] bg-cream-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 md:mb-12">
          <div className="rv-process">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.015em] text-night">
              Up and running<br />
              in <em className="italic text-teal not-italic">48 hours.</em>
            </h2>
          </div>
          <div className="rv-process rv-1 max-w-xs">
            <p className="text-sm sm:text-[14px] text-stone leading-relaxed text-left sm:text-right">
              Three steps. No lengthy onboarding. You pick the plan — we handle the rest.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(28,35,33,0.09)] rounded-xl overflow-hidden">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="bg-cream-dark p-6 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:bg-white group cursor-default"
                style={{
                  animationDelay: `${0.1 * idx}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Top Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal to-teal/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Step Number */}
                <span className="text-[9px] font-semibold tracking-[0.26em] uppercase text-teal block mb-4">
                  Step {step.number}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-teal-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-5 h-5 text-teal" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-[24px] font-light text-night mb-3 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] text-stone leading-relaxed">
                  {step.description}
                </p>

                {/* Ghost Number Background */}
                <span className="absolute -bottom-5 -right-2 font-display text-[108px] font-semibold text-teal/5 leading-none pointer-events-none select-none">
                  {step.ghostNumber}
                </span>
              </div>
            )
          })}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-8 md:mt-10">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 bg-teal text-white font-body text-xs font-medium tracking-[0.18em] uppercase py-3.5 px-6 transition-all duration-300 hover:bg-teal-dark group"
          >
            <span>Start Your Free Trial</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-[11px] text-stone/70 mt-3">7 days free · No card required · Cancel anytime</p>
        </div>
      </div>

      <style jsx>{`
        .rv-process {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .rv-process.in {
          opacity: 1;
          transform: translateY(0);
        }
        .rv-1 {
          transition-delay: 0.1s;
        }
      `}</style>
    </section>
  )
}

export default ProcessSection2