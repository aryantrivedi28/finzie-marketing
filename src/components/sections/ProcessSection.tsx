'use client'

import React, { useEffect, useRef, useState } from 'react'

const ProcessSection = () => {
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

  const steps = [
    { num: '01', title: 'Discovery & Scope', desc: 'We get on a call. Understand your goals, your gaps, and what\'s already been tried. No templates — every brief is written from scratch.' },
    { num: '02', title: 'Team Assembly', desc: 'We assign the right specialist for your exact brief — someone with proven experience in your category, vetted by our team.' },
    { num: '03', title: 'Execution & QC', desc: 'Work happens. Our ops team manages timelines and communication. Every deliverable is reviewed by a senior specialist before it reaches you.' },
    { num: '04', title: 'Delivery & Scale', desc: 'Structured updates. Real results. And when the first engagement is done, we identify what to scale next — so momentum doesn\'t stop.' }
  ]

  return (
    <section ref={sectionRef} className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)] bg-[#EAE5D5]">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-[72px]">
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
            <div className="inline-flex items-center gap-3 font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.26em] uppercase text-[#44A194] mb-5">
              <span className="w-7 h-px bg-[#44A194]" />
              How We Work
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,4vw,56px)] font-light leading-[1.1] tracking-[-0.01em] text-[#1C2321]">
              You see <em className="italic text-[#44A194] not-italic">outcomes.</em><br />
              We manage everything else.
            </h2>
          </div>
          <div className={`transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
            <p className="text-base leading-[1.9] text-[#7a7a72] mb-3">
              Most agencies hand you a report and a Slack channel.
              We hand you <strong className="text-[#3a3a36] font-medium">delivered work.</strong>
            </p>
            <p className="text-base leading-[1.9] text-[#7a7a72] mb-3">
              Our internal model is built so that every brief is broken into tasks, assigned to the right specialist, reviewed before it reaches you, and tracked against real results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(28,35,33,0.09)]">
          {steps.map((step, idx) => (
            <div 
              key={step.num} 
              className="bg-[#F4F0E4] p-10 md:p-8 xl:p-10 relative overflow-hidden transition-all duration-300 hover:bg-white group"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" />
              <span className="text-[9px] tracking-[0.26em] uppercase text-[#44A194] mb-5 block font-medium">
                Step {step.num}
              </span>
              <div className="font-['Cormorant_Garamond',serif] text-[22px] font-normal text-[#1C2321] mb-3.5 leading-[1.2]">
                {step.title}
              </div>
              <p className="text-[13.5px] leading-[1.8] text-[#7a7a72]">
                {step.desc}
              </p>
              <span className="absolute bottom-[-16px] right-[-8px] font-['Cormorant_Garamond',serif] text-[100px] font-semibold text-[rgba(68,161,148,0.06)] leading-none pointer-events-none">
                {step.num}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Add global styles for transition delays if not already present */}
      <style jsx>{`
        .delay-100 {
          transition-delay: 100ms;
        }
      `}</style>
    </section>
  )
}

export default ProcessSection