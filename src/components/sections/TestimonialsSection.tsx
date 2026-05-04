// components/sections/TestimonialsSection.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'

const TestimonialsSection = () => {
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

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    { 
      quote: 'Four agencies in three years. ExecuMarketing is the first one where the work just arrives — and it\'s actually good. No chasing. No excuses.', 
      name: 'Arjun Mehta', 
      role: 'Founder · D2C Brand, Mumbai',
      avatar: 'A',
      gradient: 'from-teal to-teal-dark'
    },
    { 
      quote: 'Fixed pricing was what made me trust them first. Every other agency gave me a range. ExecuMarketing gave me a number. That said everything about how they operate.', 
      name: 'Sneha Iyer', 
      role: 'CMO · SaaS Company, Bangalore',
      avatar: 'S',
      gradient: 'from-night to-mid'
    },
    { 
      quote: 'Same ad spend. CVR went from 1.4% to 3.1% in 6 weeks. Then organic started picking up. By month 6 we had 3 channels working together for the first time.', 
      name: 'Kavya Reddy', 
      role: 'Founder · Shopify Brand, Hyderabad',
      avatar: 'K',
      gradient: 'from-coral to-coral/80'
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      className={`py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)] bg-cream-dark relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Large quote watermark */}
      <div className="absolute top-[-60px] left-8 font-display text-[400px] text-night/3 leading-none pointer-events-none select-none">
        "
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Stat */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-teal" />
              <span className="text-[10px] font-medium tracking-[0.28em] uppercase text-teal">
                Client Stories
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-light leading-[1.1] tracking-[-0.015em] text-night">
              Brands that <em className="italic text-teal not-italic">grew.</em>
            </h2>
          </div>

          {/* Stat Block */}
          <div className="text-left sm:text-right">
            <div className="font-display text-4xl sm:text-[44px] font-light text-night leading-none">
              98<em className="text-teal not-italic text-3xl sm:text-4xl">%</em>
            </div>
            <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-stone mt-1">
              Client retention rate
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(28,35,33,0.09)] rounded-xl overflow-hidden">
          {testimonials.map((testi, idx) => (
            <div 
              key={idx} 
              className="bg-cream-dark p-6 sm:p-8 md:p-10 transition-all duration-300 hover:bg-white group cursor-default"
            >
              {/* Quote text */}
              <p className="font-display text-base sm:text-[16px] font-light italic text-mid leading-relaxed sm:leading-[1.7] mb-6">
                <span className="text-coral text-2xl mr-0.5">"</span>
                {testi.quote}
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3">
                <div 
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${testi.gradient} flex items-center justify-center font-display text-sm text-white flex-shrink-0`}
                >
                  {testi.avatar}
                </div>
                <div>
                  <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-night mb-0.5">
                    {testi.name}
                  </div>
                  <div className="text-[10px] text-teal tracking-wide">
                    {testi.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Additional trust indicator */}
        <div className="text-center mt-8 md:mt-10">
          <p className="text-[11px] text-stone/70">
            Join 50+ businesses that trust us with their marketing execution
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection