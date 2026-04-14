'use client'

import React from 'react'
import Link from 'next/link'

const Hero = () => {
  const services = [
    { num: '01', title: 'Paid Media', sub: 'Meta · Google · TikTok', href: '/services/ads' },
    { num: '02', title: 'SEO & Content', sub: 'Strategy · Briefs · On-page', href: '/services/seo' },
    { num: '03', title: 'Social Media', sub: 'Content · Community · Strategy', href: '/services/social-media' },
    { num: '04', title: 'E-commerce & CRO', sub: 'Shopify · Landing pages · AOV', href: '/services/shopify' },
    { num: '05', title: 'CRM & Retention', sub: 'Email flows · Automations · Lifecycle', href: '/services/content' }
  ]

  return (
    <section className="min-h-[calc(100vh-72px)] grid grid-cols-1 lg:grid-cols-2 border-b border-[rgba(28,35,33,0.09)] overflow-hidden">
      {/* Left Column */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-[100px] flex flex-col justify-center relative">
        <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[rgba(28,35,33,0.09)] to-transparent" />

        <div className="flex items-center gap-3.5 text-[11px] font-medium tracking-[0.28em] uppercase text-[#44A194] mb-8 animate-[fadeUp_0.7s_0.1s_ease_both]">
          <span className="w-8 h-px bg-[#44A194]" />
          Marketing Execution Agency
        </div>

        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(48px,5.5vw,76px)] font-light leading-[1.08] tracking-[-0.01em] text-[#1C2321] mb-7 animate-[fadeUp_0.7s_0.2s_ease_both]">
          Your marketing,<br />
          <em className="italic text-[#44A194] not-italic">executed</em> by people<br />
          who've done it before.
        </h1>

        <p className="text-[17px] font-light leading-[1.85] text-[#7a7a72] max-w-[460px] mb-11 animate-[fadeUp_0.7s_0.35s_ease_both]">
          We fix what's leaking, build what's missing, and scale what works —
          <strong className="text-[#3a3a36] font-medium"> managed end to end.</strong> No briefing five agencies. No managing freelancers.
          Just results, on your timeline.
        </p>

        <div className="flex items-center gap-4 flex-wrap mb-[60px] animate-[fadeUp_0.7s_0.45s_ease_both]">
          <Link href="/contact" className="inline-flex items-center gap-2.5 bg-[#1C2321] text-white font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-4 px-8 no-underline relative overflow-hidden group">
            <span className="absolute inset-0 bg-[#44A194] -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <span className="relative z-[1]">Start a Project</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-[1] transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/how-it-works" className="inline-flex items-center gap-2.5 bg-transparent text-[#1C2321] font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-[15px] px-8 border border-[rgba(28,35,33,0.25)] no-underline transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
            See How It Works
          </Link>
        </div>

        <div className="flex items-center gap-7 animate-[fadeUp_0.7s_0.55s_ease_both]">
          <div className="flex flex-col gap-0.5">
            <span className="font-['Cormorant_Garamond',serif] text-[30px] font-normal text-[#1C2321] leading-none">
              200<span className="text-[#44A194]">+</span>
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a7a72]">Projects Delivered</span>
          </div>
          <div className="w-px h-10 bg-[rgba(28,35,33,0.09)]" />
          <div className="flex flex-col gap-0.5">
            <span className="font-['Cormorant_Garamond',serif] text-[30px] font-normal text-[#1C2321] leading-none">
              48<span className="text-[#44A194] text-sm">hr</span>
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a7a72]">Kickoff Window</span>
          </div>
          <div className="w-px h-10 bg-[rgba(28,35,33,0.09)]" />
          <div className="flex flex-col gap-0.5">
            <span className="font-['Cormorant_Garamond',serif] text-[30px] font-normal text-[#1C2321] leading-none">
              4<span className="text-[#44A194] text-sm">+</span>
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a7a72]">Years Track Record</span>
          </div>
          <div className="w-px h-10 bg-[rgba(28,35,33,0.09)]" />
          <div className="flex flex-col gap-0.5">
            <span className="font-['Cormorant_Garamond',serif] text-[30px] font-normal text-[#1C2321] leading-none">
              6
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a7a72]">Countries Served</span>
          </div>
        </div>
      </div>

      {/* Right Column - Dark Panel */}
      <div className="hidden lg:flex flex-col bg-[#1C2321] relative overflow-hidden">
        <div className="absolute bottom-[-24px] right-[-20px] font-['Cormorant_Garamond',serif] text-[200px] font-semibold text-white/3 tracking-[-0.04em] leading-none pointer-events-none select-none">
          EXECUTE
        </div>

        <div className="flex flex-col gap-px p-12 xl:p-[64px_52px] flex-1 justify-center">
          {services.map((service, idx) => (
            <Link
              key={service.num}
              href={service.href}
              className="bg-white/4 border border-white/7 p-[22px_28px] flex items-center justify-between no-underline transition-all duration-300 hover:bg-[rgba(68,161,148,0.12)] hover:border-[rgba(68,161,148,0.3)] opacity-0 animate-[slideInRight_0.6s_ease_both]"
              style={{ animationDelay: `${0.3 + idx * 0.12}s`, animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-[18px]">
                <span className="text-[10px] font-medium tracking-[0.2em] text-[#44A194] font-['Jost',sans-serif] min-w-[24px]">
                  {service.num}
                </span>
                <div>
                  <div className="font-['Jost',sans-serif] text-sm font-normal tracking-[0.06em] text-white/90">
                    {service.title}
                  </div>
                  <div className="text-[11px] text-white/38 tracking-[0.04em] mt-[3px]">
                    {service.sub}
                  </div>
                </div>
              </div>
              <span className="text-white/25 text-lg transition-all duration-300 group-hover:text-[#44A194] group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="p-6 xl:p-[24px_52px] border-t border-white/7 flex items-center justify-between animate-[fadeUp_0.6s_0.9s_ease_both]">
          <span className="text-[10px] tracking-[0.22em] uppercase text-white/35">Managed end to end</span>
          <span className="text-[10px] tracking-[0.16em] uppercase text-[#44A194] border border-[rgba(68,161,148,0.3)] py-[5px] px-3.5">
            Activate in 48 hrs
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero