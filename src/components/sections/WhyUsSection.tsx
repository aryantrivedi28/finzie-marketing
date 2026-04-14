'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const WhyUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Immediate visibility check for elements already in view
    const checkVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    }
    
    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
    window.addEventListener('resize', checkVisibility)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', checkVisibility)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [])

  const differentiators = [
    { num: '01', title: 'We orchestrate. We don\'t just assign.', desc: 'Every project has an ops lead who owns delivery, timelines, and communication. You don\'t manage freelancers. We do — and we QC everything before it reaches you.' },
    { num: '02', title: 'Senior specialists on every account.', desc: 'We don\'t match you with whoever\'s available. We assign based on category experience, past performance, and fit with your brief. Then a senior specialist reviews the work before delivery.' },
    { num: '03', title: 'Fixed scope. No surprise invoices.', desc: 'You know exactly what you\'re getting, what the timeline is, and what it costs. No scope creep, no retainer that quietly grows, no bill for \'strategy calls\'.' },
    { num: '04', title: 'Kick off in 48 hours, not 4 weeks.', desc: 'One discovery call. Within 48 hours, your team is assembled and briefed. We don\'t drag out onboarding — we get to work.' }
  ]

  return (
    <section ref={sectionRef} className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-[100px] items-start">
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
          <div className="inline-flex items-center gap-3 font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.26em] uppercase text-[#44A194] mb-5">
            <span className="w-7 h-px bg-[#44A194]" />
            Why ExecuMarketing
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,3.8vw,54px)] font-light leading-[1.1] tracking-[-0.01em] text-[#1C2321] mb-6">
            Built for businesses<br />
            that can't afford <em className="italic text-[#44A194] not-italic">to get it wrong.</em>
          </h2>
          <p className="text-[15px] leading-[1.9] text-[#7a7a72] mb-8">
            Whether you're a funded startup that needs to move fast, an SMB that's been burned before, or a scaling brand that needs a reliable marketing partner — the principles are the same.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2.5 bg-[#1C2321] text-white font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-4 px-8 no-underline relative overflow-hidden group mt-3">
            <span className="absolute inset-0 bg-[#44A194] -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <span className="relative z-[1]">Work With Us</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-[1] transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div className="flex flex-col">
          {differentiators.map((diff, idx) => (
            <div 
              key={diff.num} 
              className={`grid grid-cols-[64px_1fr] gap-6 py-9 border-b border-[rgba(28,35,33,0.09)] first:pt-0 last:border-b-0 last:pb-0 transition-all duration-700 hover:pl-2 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-7'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <span className="font-['Cormorant_Garamond',serif] text-[44px] font-light text-[rgba(68,161,148,0.25)] leading-none pt-1">
                {diff.num}
              </span>
              <div>
                <div className="text-base font-medium text-[#1C2321] mb-2.5 tracking-[0.02em]">
                  {diff.title}
                </div>
                <p className="text-sm leading-[1.8] text-[#7a7a72]">
                  {diff.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection