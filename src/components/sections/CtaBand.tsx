// components/sections/CTABand.tsx
'use client'

import React from 'react'
import Link from 'next/link'

interface CtaBandProps {
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
}

const CTABand = ({ 
  title = "Ready to fix the gaps<br>and <em class='italic'>start executing?</em>", 
  description = "Tell us what you need. One call. Your team activated within 48 hours.",
  primaryText = "Book a Discovery Call",
  primaryHref = "/contact"
}: CtaBandProps) => {
  return (
    <section className="py-[100px] px-5 sm:px-6 md:px-8 lg:px-12 bg-[#44A194] border-b border-[rgba(28,35,33,0.09)]">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div>
          <h2 
            className="font-['Cormorant_Garamond',serif] text-[clamp(30px,3.8vw,52px)] font-light text-white leading-[1.15] max-w-[560px]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-sm text-white/65 mt-3 max-w-[500px]">
            {description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link 
            href={primaryHref} 
            className="inline-flex items-center gap-2.5 bg-white text-[#44A194] font-['Jost',sans-serif] text-xs font-semibold tracking-[0.18em] uppercase py-[18px] px-[38px] no-underline transition-all duration-300 hover:bg-[#1C2321] hover:text-white"
          >
            <span>{primaryText}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTABand