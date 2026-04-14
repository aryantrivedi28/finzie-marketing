'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const ServicesSection = () => {
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

  const services = [
    { 
      num: '01', 
      category: 'Paid Media',
      title: 'Paid Advertising', 
      desc: 'Meta, Google, TikTok — managed end to end. Strategy, creative, live campaigns, and monthly optimisation. You don\'t touch the dashboard unless you want to.', 
      tags: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Creative'], 
      href: '/services/ads' 
    },
    { 
      num: '02', 
      category: 'Organic Growth',
      title: 'SEO & Content', 
      desc: 'Keyword strategy, content briefs, on-page execution — on a fixed monthly cadence. Compounding organic growth you\'ll feel in 90 days.', 
      tags: ['Keyword Strategy', 'On-page SEO', 'Content Briefs', 'Link Building'], 
      href: '/services/seo' 
    },
    { 
      num: '03', 
      category: 'Social',
      title: 'Social Media Management', 
      desc: 'Content, community, and strategy — across the channels your audience actually lives on. Briefed once, published consistently, tracked monthly.', 
      tags: ['Instagram', 'LinkedIn', 'TikTok', 'Community'], 
      href: '/services/social' 
    },
    { 
      num: '04', 
      category: 'E-commerce',
      title: 'E-commerce & CRO', 
      desc: 'Fix conversion leaks, improve AOV, clean up tracking. We audit your store, identify the gaps, and execute the fixes — before you spend another rupee on traffic.', 
      tags: ['Shopify', 'CRO', 'Landing Pages', 'AOV'], 
      href: '/services/shopify' 
    }
  ]

  return (
    <section ref={sectionRef} className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,4vw,56px)] font-light leading-[1.1] tracking-[-0.01em] text-[#1C2321] max-w-[520px]">
            Every channel.<br />
            One <em className="italic text-[#44A194] not-italic">accountable</em> team.
          </h2>
          <p className="text-[15px] text-[#7a7a72] leading-[1.8] max-w-[360px] lg:text-right mt-4 lg:mt-0">
            We cover every major marketing function — and we connect them so your paid, organic, and retention efforts actually work together.
          </p>
        </div>

        {/* Services Grid - 2x2 layout for first 4 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(28,35,33,0.09)]">
          {services.map((service, idx) => (
            <Link 
              key={service.num} 
              href={service.href} 
              className="bg-[#F4F0E4] p-12 md:p-11 xl:p-12 relative overflow-hidden no-underline transition-all duration-300 hover:bg-white group"
            >
              <div className="absolute left-0 bottom-0 top-0 w-[3px] bg-[#44A194] scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100" />
              <span className="text-[9px] tracking-[0.26em] uppercase text-[#44A194] mb-5 block font-medium">
                {service.num} — {service.category}
              </span>
              <div className="font-['Cormorant_Garamond',serif] text-[28px] font-normal text-[#1C2321] mb-3.5 leading-[1.2]">
                {service.title}
              </div>
              <p className="text-sm leading-[1.85] text-[#7a7a72] mb-6">
                {service.desc}
              </p>
              <div className="flex gap-1.5 flex-wrap mb-6">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] tracking-[0.14em] uppercase text-[#44A194] border border-[rgba(68,161,148,0.25)] py-1 px-3">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-[#7a7a72] font-medium transition-colors duration-300 group-hover:text-[#44A194]">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Wide card - CRM (5th service) - Full width at bottom */}
        <div className="mt-px bg-[rgba(28,35,33,0.09)]">
          <Link 
            href="/services/crm-automation" 
            className="bg-[#F4F0E4] p-12 md:p-11 xl:p-12 relative overflow-hidden no-underline transition-all duration-300 hover:bg-white group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10"
          >
            <div className="absolute left-0 bottom-0 top-0 w-[3px] bg-[#44A194] scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100" />
            <div className="max-w-[560px]">
              <span className="text-[9px] tracking-[0.26em] uppercase text-[#44A194] mb-5 block font-medium">
                05 — Retention
              </span>
              <div className="font-['Cormorant_Garamond',serif] text-[28px] font-normal text-[#1C2321] mb-3.5 leading-[1.2]">
                CRM & Marketing Automation
              </div>
              <p className="text-sm leading-[1.85] text-[#7a7a72] mb-6">
                Setup, migration, and workflow builds — for businesses that want to stop losing revenue between the first purchase and the second. Email flows, lifecycle sequences, and automation that runs while you sleep.
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {['CRM Setup', 'Email Flows', 'Automations', 'Lifecycle', 'Retention'].map(tag => (
                  <span key={tag} className="text-[10px] tracking-[0.14em] uppercase text-[#44A194] border border-[rgba(68,161,148,0.25)] py-1 px-3">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-[#7a7a72] font-medium transition-colors duration-300 group-hover:text-[#44A194] flex-shrink-0">
              Learn more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection