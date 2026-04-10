// app/services/shopify/cro/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function CROPage() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const inclusions = [
    'Full conversion funnel audit',
    'Checkout page optimization',
    'Cart abandonment analysis & fixes',
    'A/B testing setup & execution',
    'Product page conversion optimization',
    'Trust signals & social proof implementation',
    'Mobile checkout optimization',
    'Speed & performance audit',
    'Form optimization (contact, newsletter)',
    'Exit-intent popup strategy',
    'Upsell & cross-sell implementation',
    'Monthly performance reporting'
  ]

  const deliverables = [
    'Conversion audit report with actionable insights',
    'A/B test results with winning variations',
    'Optimized checkout flow',
    'Monthly CRO dashboard',
    'Heatmap & user session recordings',
    'Priority email support'
  ]

  const faqs = [
    {
      q: "How soon will I see results?",
      a: "Most clients see initial improvements within 2-3 weeks. Significant conversion lifts (15-30%) typically within 60-90 days."
    },
    {
      q: "Do you guarantee results?",
      a: "We guarantee data-driven improvements. If we don't see positive movement after 90 days, we'll work for free until we do."
    },
    {
      q: "What platforms do you work with?",
      a: "We specialize in Shopify and Shopify Plus, but also work with WooCommerce, BigCommerce, and custom e-commerce sites."
    },
    {
      q: "Can you optimize my existing store?",
      a: "Absolutely. We work with existing stores to identify leaks and implement fixes without disrupting your current operations."
    }
  ]

  const caseStudies = [
    {
      client: 'Urban Home Goods',
      result: 'Increased conversion rate by 42%',
      metric: 'From 1.8% to 2.56%',
      timeline: '90 days'
    },
    {
      client: 'TechGear Electronics',
      result: 'Reduced cart abandonment by 35%',
      metric: '$127k recovered revenue',
      timeline: '60 days'
    }
  ]

  return (
    <main className="flex-1 min-h-screen bg-[#F4F0E4]">
      {/* Breadcrumb */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 pt-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-['Jost',sans-serif] text-[#8a8a82] flex-wrap">
            <Link href="/" className="hover:text-[#44A194] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#44A194] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/shopify" className="hover:text-[#44A194] transition-colors">Shopify Engine</Link>
            <span>/</span>
            <span className="text-[#44A194]">Conversion Rate Optimization</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="text-5xl mb-4">📈</div>
              <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-light text-[#1C2321] leading-[1.15] mb-4">
                Conversion Rate Optimization
              </h1>
              <p className="text-lg text-[#44A194] font-['Jost',sans-serif] mb-3">
                Turn traffic into revenue
              </p>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.75] mb-6">
                Stop leaking sales. We analyze, test, and optimize every step of your funnel to maximize conversions from your existing traffic.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(28,35,33,0.08)]">
                  <span className="text-[#44A194] text-sm">⏱</span>
                  <span className="text-xs font-['Jost',sans-serif] text-[#1C2321]">Timeline: Ongoing</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(28,35,33,0.08)]">
                  <span className="text-[#44A194] text-sm">💰</span>
                  <span className="text-xs font-['Jost',sans-serif] text-[#1C2321]">From $1,497/mo</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(28,35,33,0.08)]">
                  <span className="text-[#44A194] text-sm">📊</span>
                  <span className="text-xs font-['Jost',sans-serif] text-[#1C2321]">Avg lift: +32%</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    const formElement = document.querySelector('#client-request-form')
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="bg-[#44A194] text-white px-6 py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] hover:scale-105 active:scale-95"
                >
                  Get Free Audit →
                </button>
                <button
                  onClick={() => {
                    window.location.href = 'mailto:hello@ghlscaleup.com?subject=CRO%20Inquiry'
                  }}
                  className="bg-transparent text-[#1C2321] border border-[rgba(28,35,33,0.22)] px-6 py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#EC8F8D] to-[#44A194] rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-white">
                <div className="text-6xl mb-3">🔄 2.5% → 4.2%</div>
                <p className="text-sm font-['Jost',sans-serif] opacity-90">Average conversion lift in 90 days</p>
                <p className="text-xs opacity-75 mt-2">Data from 45+ Shopify stores</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-[#44A194]"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
                Full CRO Suite
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              What's included
            </h2>
            <p className="text-sm text-[#8a8a82] mt-2 max-w-2xl mx-auto">
              Everything you need to optimize your conversion funnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
                <span className="text-[#44A194] text-lg mt-0.5">✓</span>
                <span className="text-sm text-[#1C2321] font-['Jost',sans-serif] leading-[1.5]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321] mb-4">
                What you get
              </h2>
              <div className="space-y-3">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#44A194] text-lg">📦</span>
                    <span className="text-sm text-[#1C2321] font-['Jost',sans-serif]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[rgba(68,161,148,0.05)] rounded-xl p-6 border border-[rgba(68,161,148,0.1)]">
              <div className="text-center">
                <div className="text-4xl font-['Cormorant_Garamond',serif] text-[#44A194] mb-2">+32%</div>
                <p className="text-sm text-[#1C2321] font-medium">Average conversion lift</p>
                <p className="text-xs text-[#8a8a82] mt-2">Based on 45+ Shopify stores optimized in 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 bg-[rgba(68,161,148,0.03)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321]">
              Real results from real stores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-2xl text-[#44A194] mb-3">📊</div>
                <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">
                  {study.client}
                </h3>
                <div className="text-2xl font-['Cormorant_Garamond',serif] text-[#44A194] mb-2">
                  {study.result}
                </div>
                <p className="text-sm text-[#8a8a82] mb-1">{study.metric}</p>
                <p className="text-xs text-[#8a8a82]">Timeline: {study.timeline}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321]">
              Our CRO process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '🔍', title: 'Audit', desc: 'Deep dive analytics, heatmaps, user sessions' },
              { step: '🎯', title: 'Hypothesis', desc: 'Data-backed optimization opportunities' },
              { step: '🧪', title: 'Test', desc: 'A/B tests with statistical significance' },
              { step: '📈', title: 'Scale', desc: 'Roll out winning variations' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{item.step}</div>
                <h3 className="font-['Cormorant_Garamond',serif] text-lg font-light text-[#1C2321] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8a8a82]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321]">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[rgba(28,35,33,0.08)] rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[rgba(68,161,148,0.02)] transition-all duration-300"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-['Jost',sans-serif] text-sm font-medium text-[#1C2321]">
                    {faq.q}
                  </span>
                  <span className="text-[#44A194] text-xl">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 bg-[rgba(68,161,148,0.02)] border-t border-[rgba(28,35,33,0.08)]">
                    <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#1C2321]">
              Combine with these services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Store Setup & Migration', path: '/services/shopify/store-setup', icon: '🏪' },
              { name: 'Paid Ads Engine', path: '/services/ads', icon: '📢' },
              { name: 'SEO Engine', path: '/services/seo', icon: '🔍' }
            ].map((service, idx) => (
              <button
                key={idx}
                onClick={() => router.push(service.path)}
                className="group bg-white p-5 rounded-lg border border-[rgba(28,35,33,0.08)] text-left hover:border-[#44A194] transition-all duration-300 flex items-center gap-3"
              >
                <div className="text-2xl">{service.icon}</div>
                <div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-lg font-light text-[#1C2321] group-hover:text-[#44A194] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#8a8a82] mt-1">Learn more →</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-[#1C2321] py-12 sm:py-16 px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-white leading-[1.2]">
            Stop leaking sales. Start converting.
          </h2>
          <p className="text-sm text-white/45 mt-2 mb-6 font-['Jost',sans-serif]">
            Get a free CRO audit. We'll identify your biggest conversion opportunities.
          </p>
          <button
            onClick={() => {
              const formElement = document.querySelector('#client-request-form')
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-[#EC8F8D] text-white border-none px-8 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#e07a78] hover:scale-105 active:scale-95 inline-block"
          >
            Get Free Audit →
          </button>
        </div>
      </div>
    </main>
  )
}