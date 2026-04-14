'use client'

import React, { useEffect, useRef } from 'react'

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const revealElements = sectionRef.current?.querySelectorAll('.reveal')
    revealElements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    { 
      quote: 'We needed a paid media team fast. ExecuMarketing had someone briefed and live on our Meta campaigns within 48 hours. The quality was immediately apparent — results in the first two weeks.', 
      name: 'Growth Lead', 
      role: 'Funded D2C Brand' 
    },
    { 
      quote: 'I\'d tried three other agencies before this. The difference isn\'t just the talent — it\'s that someone is actually managing the process. I got updates without chasing anyone.', 
      name: 'Founder', 
      role: 'SaaS Company, Bangalore' 
    },
    { 
      quote: 'Our CRM setup and email automation was done in two weeks, including training. That timeline felt impossible. ExecuMarketing made it feel easy — and the results spoke immediately.', 
      name: 'Marketing Director', 
      role: 'Mid-Market Brand' 
    }
  ]

  return (
    <section ref={sectionRef} className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)] bg-[#1C2321] relative overflow-hidden">
      <div className="absolute top-[-60px] left-10 font-['Cormorant_Garamond',serif] text-[400px] text-white/2.5 leading-none pointer-events-none">
        "
      </div>
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center mb-[72px]">
          <div className="inline-flex items-center gap-3 font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.26em] uppercase text-[#44A194] mb-5">
            <span className="w-7 h-px bg-[#44A194]" />
            Client Stories
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,3.8vw,52px)] font-light text-white leading-[1.15]">
            They stopped guessing.<br />
            They started <em className="italic text-[#EC8F8D] not-italic">growing.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {testimonials.map((testi, idx) => (
            <div 
              key={idx} 
              className="bg-white/4 p-11 xl:p-[44px_40px] border-l-2 border-transparent transition-all duration-300 hover:border-l-[#EC8F8D] hover:bg-white/7"
            >
              <p className="font-['Cormorant_Garamond',serif] text-[17px] font-light italic text-white/80 leading-[1.7] mb-7">
                {testi.quote}
              </p>
              <div>
                <div className="text-xs font-medium tracking-[0.14em] uppercase text-white/60 mb-0.5">
                  {testi.name}
                </div>
                <div className="text-[11px] text-[#44A194] tracking-[0.1em]">
                  {testi.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection