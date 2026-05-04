// components/sections/ServicesSection.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Search, Users, ShoppingBag, Settings } from 'lucide-react'

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

    return () => {
      observer.disconnect()
    }
  }, [])

  const services = [
    { 
      num: '01', 
      category: 'Paid Media',
      title: 'Paid Advertising', 
      desc: 'Meta, Google, TikTok — managed end to end. Strategy, creative, live campaigns, and monthly optimisation. You don\'t touch the dashboard unless you want to.', 
      tags: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Creative'], 
      href: '/services/ads',
      icon: TrendingUp
    },
    { 
      num: '02', 
      category: 'Organic Growth',
      title: 'SEO & Content', 
      desc: 'Keyword strategy, content briefs, on-page execution — on a fixed monthly cadence. Compounding organic growth you\'ll feel in 90 days.', 
      tags: ['Keyword Strategy', 'On-page SEO', 'Content Briefs', 'Link Building'], 
      href: '/services/seo',
      icon: Search
    },
    { 
      num: '03', 
      category: 'Social',
      title: 'Social Media Management', 
      desc: 'Content, community, and strategy — across the channels your audience actually lives on. Briefed once, published consistently, tracked monthly.', 
      tags: ['Instagram', 'LinkedIn', 'TikTok', 'Community'], 
      href: '/services/social',
      icon: Users
    },
    { 
      num: '04', 
      category: 'E-commerce',
      title: 'E-commerce & CRO', 
      desc: 'Fix conversion leaks, improve AOV, clean up tracking. We audit your store, identify the gaps, and execute the fixes — before you spend another rupee on traffic.', 
      tags: ['Shopify', 'CRO', 'Landing Pages', 'AOV'], 
      href: '/services/shopify',
      icon: ShoppingBag
    },
    { 
      num: '05', 
      category: 'Retention',
      title: 'CRM & Automation', 
      desc: 'Setup, migration, and workflow builds — for businesses that want to stop losing revenue between the first purchase and the second. Email flows, lifecycle sequences, and automation that runs while you sleep.', 
      tags: ['CRM Setup', 'Email Flows', 'Automations', 'Lifecycle', 'Retention'], 
      href: '/services/content',
      icon: Settings
    }
  ]

  return (
    <section 
      ref={sectionRef} 
      className={`py-16 sm:py-20 md:py-24 px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)] bg-cream transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16">
          <div className="w-full lg:max-w-[520px]">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-light leading-[1.1] tracking-[-0.015em] text-night">
              Five channels.<br />
              One <em className="italic text-teal not-italic">accountable team.</em>
            </h2>
          </div>
          <div className="mt-4 lg:mt-0 max-w-xs">
            <p className="text-sm sm:text-[14px] text-stone leading-relaxed lg:text-right">
              Every plan draws from the same pool — matched to your brief, managed by your PM.
            </p>
          </div>
        </div>

        {/* Services Grid - 5 cards in a row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[rgba(28,35,33,0.09)] rounded-xl overflow-hidden">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Link
                key={service.num}
                href={service.href}
                className="bg-cream p-6 sm:p-7 md:p-8 relative overflow-hidden transition-all duration-300 hover:bg-white group"
              >
                {/* Top Border on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal to-teal/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Service Number */}
                <span className="text-[9px] font-semibold tracking-[0.22em] uppercase text-teal block mb-4">
                  {service.num}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-teal-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-5 h-5 text-teal" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-[20px] font-light text-night mb-2 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[12px] text-stone leading-relaxed mb-4 line-clamp-3">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] tracking-[0.12em] uppercase text-teal border border-teal/25 rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Learn More Link */}
                <span className="inline-flex items-center gap-1 text-[10px] font-medium tracking-[0.15em] uppercase text-stone transition-all duration-300 group-hover:text-teal group-hover:gap-2">
                  Learn more
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection