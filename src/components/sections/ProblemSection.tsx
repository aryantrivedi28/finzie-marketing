'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const ProblemSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Also add visible class to all reveal elements
            const revealElements = sectionRef.current?.querySelectorAll('.reveal')
            revealElements?.forEach(el => {
              el.classList.add('visible')
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Also trigger for any reveal elements that might be visible immediately
    const revealElements = sectionRef.current?.querySelectorAll('.reveal')
    const checkVisibility = () => {
      revealElements?.forEach(el => {
        const rect = el.getBoundingClientRect()
        const isElementVisible = rect.top < window.innerHeight - 100
        if (isElementVisible) {
          el.classList.add('visible')
        }
      })
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

  return (
    <section ref={sectionRef} className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
        <div className={`reveal transition-all duration-700 ease-out ${isVisible ? 'visible opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
          <div className="inline-flex items-center gap-3 font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.26em] uppercase text-[#44A194] mb-5">
            <span className="w-7 h-px bg-[#44A194]" />
            The Problem We Solve
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,4vw,58px)] font-light leading-[1.1] tracking-[-0.01em] text-[#1C2321] mb-6">
            Most businesses lose money<br />
            <em className="italic text-[#44A194] not-italic">before</em> they ever scale.
          </h2>
          <p className="text-base leading-[1.9] text-[#7a7a72] mb-4 max-w-[440px]">
            Conversion gaps, underperforming ads, content that doesn't rank, and retention strategies that were never built.
            <strong className="text-[#3a3a36] font-medium"> Most agencies sell you more traffic into a broken system.</strong>
          </p>
          <p className="text-base leading-[1.9] text-[#7a7a72] mb-4 max-w-[440px]">
            We fix the foundation first. Then we scale what's working — with specialists who've solved this exact problem before,
            managed by us, accountable to you.
          </p>
          <div className="flex gap-3.5 flex-wrap mt-9">
            <Link href="/contact" className="inline-flex items-center gap-2.5 bg-[#1C2321] text-white font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-4 px-8 no-underline relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#44A194] -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              <span className="relative z-[1]">Book a Discovery Call</span>
            </Link>
            {/* <Link href="/case-studies" className="inline-flex items-center gap-2.5 bg-transparent text-[#1C2321] font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-[15px] px-8 border border-[rgba(28,35,33,0.25)] no-underline transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
              See Our Work
            </Link> */}
          </div>
        </div>

        <div className="flex flex-col gap-[3px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mb-[3px]">
            <div className="bg-white p-7 border border-[rgba(28,35,33,0.09)]">
              <div className="text-[9px] tracking-[0.26em] uppercase text-[#7a7a72] mb-4">Typical Agency</div>
              <ul className="list-none flex flex-col gap-2.5">
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                  <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> One-size-fits-all retainers
                </li>
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                  <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> Junior staff, senior pricing
                </li>
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                  <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> You manage the relationship
                </li>
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                  <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> Slow to start, slower to pivot
                </li>
              </ul>
            </div>
            <div className="bg-white p-7 border border-[rgba(28,35,33,0.09)]">
              <div className="text-[9px] tracking-[0.26em] uppercase text-[#7a7a72] mb-4">Freelance Platforms</div>
              <ul className="list-none flex flex-col gap-2.5">
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                  <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> You screen, you brief, you QC
                </li>
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                  <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> No accountability after delivery
                </li>
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                  <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> Inconsistent quality
                </li>
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                  <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> Scattered, uncoordinated work
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#1C2321] p-7 border border-[rgba(28,35,33,0.09)]">
            <div className="text-[9px] tracking-[0.26em] uppercase text-[#44A194] mb-4">ExecuMarketing</div>
            <ul className="list-none flex flex-col gap-2.5">
              <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-white/85">
                <span className="flex-shrink-0 mt-0.5 text-sm text-[#44A194]">✓</span> <strong className="text-white">We orchestrate everything.</strong> You approve outcomes.
              </li>
              <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-white/85">
                <span className="flex-shrink-0 mt-0.5 text-sm text-[#44A194]">✓</span> Senior specialists on every account — QC'd before delivery
              </li>
              <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-white/85">
                <span className="flex-shrink-0 mt-0.5 text-sm text-[#44A194]">✓</span> Fixed scope, clear timeline, no scope-creep surprises
              </li>
              <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-white/85">
                <span className="flex-shrink-0 mt-0.5 text-sm text-[#44A194]">✓</span> Kick off within 48 hours of your discovery call
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection