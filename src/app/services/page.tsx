// app/services/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ShoppingBag, Megaphone, Search, FileText, Share2, ArrowRight, Minus, Plus, Palette } from 'lucide-react'

export default function ServicesPage() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const categories = [
    {
      id: 'shopify',
      name: 'Shopify Engine',
      icon: ShoppingBag,
      description: 'E-commerce operations that actually convert',
      accentColor: '#44A194',
      keyServices: ['Store Setup', 'Theme Dev', 'CRO', 'App Integration'],
      path: '/services/shopify'
    },
    {
      id: 'ads',
      name: 'Paid Ads Engine',
      icon: Megaphone,
      description: 'Scale traffic into predictable revenue',
      accentColor: '#EC8F8D',
      keyServices: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Retargeting'],
      path: '/services/ads'
    },
    {
      id: 'seo',
      name: 'SEO Engine',
      icon: Search,
      description: 'Compounding organic growth',
      accentColor: '#537D96',
      keyServices: ['Technical SEO', 'Keyword Research', 'Content Briefs', 'Local SEO'],
      path: '/services/seo'
    },
    {
      id: 'content',
      name: 'Content Engine',
      icon: FileText,
      description: 'Storytelling that sells',
      accentColor: '#44A194',
      keyServices: ['Blog Writing', 'Email Newsletters', 'Case Studies', 'Ghostwriting'],
      path: '/services/content'
    },
    {
      id: 'social',
      name: 'Social Media Engine',
      icon: Share2,
      description: 'Community-led brand growth',
      accentColor: '#EC8F8D',
      keyServices: ['Instagram Mgmt', 'LinkedIn Strategy', 'Content Calendar', 'Community Mgmt'],
      path: '/services/social'
    },
    {
      id: 'design',
      name: 'Design Engine',
      icon: Palette,
      description: 'Visual design that converts',
      accentColor: '#44A194',
      keyServices: ['UI/UX Design', 'Graphic Design', 'Ad Creatives'],
      path: '/services/design'
    }
  ]

  const faqs = [
    {
      q: "How do I know which service I need?",
      a: "Book a free 15-min discovery call. We'll audit your current setup and recommend the right engine based on your goals and budget."
    },
    {
      q: "Can I combine multiple services?",
      a: "Absolutely. Most clients start with 2-3 engines. For example: Store Engine + Paid Ads Engine is our most common combo."
    },
    {
      q: "What's the typical turnaround time?",
      a: "Most engines activate within 48 hours. Complex setups (custom development, migrations) take 3-5 days."
    },
    {
      q: "Do you offer custom packages?",
      a: "Yes. Every business is unique. We'll build a custom scope during your discovery call."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <main className="flex-1 min-h-screen bg-[#F4F0E4]">
      {/* Hero Section */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 text-center">
        <div className="inline-flex items-center gap-2.5 mb-4">
          <span className="w-6 h-px bg-[#44A194]"></span>
          <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
            ✦ Our Execution Systems
          </span>
        </div>
        <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1C2321] leading-[1.15] tracking-[-0.01em] max-w-4xl mx-auto">
          Services that scale <em className="text-[#44A194] italic not-italic">growing businesses.</em>
        </h1>
        <p className="text-sm md:text-base text-[#8a8a82] mt-4 max-w-2xl mx-auto font-['Jost',sans-serif] leading-[1.75]">
          Choose your engine. We handle the execution. Fixed timelines, transparent pricing, and results you can track.
        </p>
      </div>

      {/* Category Grid */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  onClick={() => router.push(category.path)}
                >
                  <div className="relative overflow-hidden">
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ backgroundColor: category.accentColor }}
                    ></div>
                    <div className="p-6 md:p-7">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3.5 bg-[rgba(68,161,148,0.1)]">
                        <Icon className="text-[#44A194] w-5 h-5" />
                      </div>
                      <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#1C2321] mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65] mb-4">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {category.keyServices.map((service, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2.5 py-1 bg-[rgba(68,161,148,0.08)] text-[#44A194] rounded-full font-['Jost',sans-serif] tracking-wide"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                      <button
                        className="text-[11px] tracking-[0.18em] uppercase font-['Jost',sans-serif] text-[#44A194] group-hover:gap-2 transition-all duration-300 flex items-center gap-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          router.push(category.path)
                        }}
                      >
                        Explore → <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[rgba(28,35,33,0.08)] my-8">
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">
            50<span className="text-[#44A194] text-2xl sm:text-3xl">+</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Clients Served</div>
        </div>
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">
            200<span className="text-[#44A194] text-2xl sm:text-3xl">+</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Projects Completed</div>
        </div>
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">
            35
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Active Engagements</div>
        </div>
        <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
          <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">
            2<span className="text-[#44A194] text-xl sm:text-2xl">hrs</span>
          </div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Avg Response Time</div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-[#44A194]"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
                Simple Process
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              How it works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">
                1
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">
                Discovery Call
              </h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">
                15-min call to understand your goals, challenges, and current setup.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">
                2
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">
                Engine Selection
              </h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">
                We recommend the right system based on your priorities and budget.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#44A194] text-white rounded-full flex items-center justify-center text-2xl font-['Cormorant_Garamond',serif] mx-auto mb-4">
                3
              </div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">
                Execution Starts
              </h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">
                Within 48 hours, your dedicated team begins execution with shared tracking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-[#44A194]"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
                Common Questions
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[rgba(28,35,33,0.08)] rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 bg-white flex justify-between items-center hover:bg-[rgba(68,161,148,0.02)] transition-all duration-300"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-['Jost',sans-serif] text-sm font-medium text-[#1C2321]">
                    {faq.q}
                  </span>
                  <span className="text-[#44A194] text-xl">
                    {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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

      {/* CTA Banner */}
      <div className="bg-[#1C2321] py-12 sm:py-16 px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-white leading-[1.2]">
              Not sure which engine to choose?
            </h2>
            <p className="text-sm text-white/45 mt-2 font-['Jost',sans-serif]">
              Book a free discovery call. We'll map it out together.
            </p>
          </div>
          <button
            onClick={() => {
              const formElement = document.querySelector('#client-request-form')
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-[#EC8F8D] text-white border-none px-8 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#e07a78] hover:scale-105 active:scale-95 whitespace-nowrap rounded-lg"
          >
            Talk to a Strategist →
          </button>
        </div>
      </div>
    </main>
  )
}