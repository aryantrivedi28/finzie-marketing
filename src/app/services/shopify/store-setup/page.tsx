// app/services/shopify/store-setup/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'

export default function StoreSetupPage() {
  const router = useRouter()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const inclusions = [
    'Full Shopify store setup from scratch',
    'Product migration (up to 100 products)',
    'Customer data transfer with order history',
    'Blog/content migration from any platform',
    'Custom domain configuration',
    'Payment gateway integration (Stripe, PayPal, Shopify Payments)',
    'Shipping zones & rates configuration',
    'Tax settings & automation',
    '5 custom pages (About, Contact, FAQ, Returns, Track Order)',
    'Mobile-responsive design optimization',
    'Essential apps setup (email, reviews, wishlist)',
    '30 days post-launch support'
  ]

  const faqs = [
    {
      q: "How long does migration take?",
      a: "Most migrations complete in 3-5 business days. Complex migrations with 500+ products may take 7-10 days."
    },
    {
      q: "Will my SEO be affected?",
      a: "We preserve all URL structures and implement 301 redirects to maintain your SEO rankings. Most clients see no drop in traffic."
    },
    {
      q: "Can you migrate from WooCommerce/Magento/BigCommerce?",
      a: "Yes! We've migrated from all major platforms including WooCommerce, Magento, BigCommerce, Squarespace, and Wix."
    },
    {
      q: "Do you offer ongoing maintenance?",
      a: "Yes, we have monthly maintenance plans starting at $297/month that include updates, backups, and priority support."
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Founder',
      company: 'Modern Living Co.',
      rating: 5,
      quote: 'The migration was seamless. We launched in 4 days with zero downtime. Best decision for our business.',
      service: 'Store Setup & Migration'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO',
      company: 'FitGear Apparel',
      rating: 5,
      quote: 'They handled everything from product migration to custom domain setup. Saved us weeks of headache.',
      service: 'Store Setup & Migration'
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
            <span className="text-[#44A194]">Store Setup & Migration</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div>
              <div className="text-5xl mb-4">🏪</div>
              <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-light text-[#1C2321] leading-[1.15] mb-4">
                Store Setup & Migration
              </h1>
              <p className="text-lg text-[#44A194] font-['Jost',sans-serif] mb-3">
                Launch in days, not weeks
              </p>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.75] mb-6">
                Move your store to Shopify smoothly with zero downtime. We handle everything from product migration to custom domain setup. Launch faster and start selling.
              </p>
              
              {/* Quick Info Chips */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(28,35,33,0.08)]">
                  <span className="text-[#44A194] text-sm">⏱</span>
                  <span className="text-xs font-['Jost',sans-serif] text-[#1C2321]">Timeline: 3-5 days</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(28,35,33,0.08)]">
                  <span className="text-[#44A194] text-sm">💰</span>
                  <span className="text-xs font-['Jost',sans-serif] text-[#1C2321]">From $997</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-[rgba(28,35,33,0.08)]">
                  <span className="text-[#44A194] text-sm">✓</span>
                  <span className="text-xs font-['Jost',sans-serif] text-[#1C2321]">30 days support</span>
                </div>
              </div>

              {/* CTA Buttons */}
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
                  Request This Service →
                </button>
                <button
                  onClick={() => {
                    // Book a call action
                    window.location.href = 'mailto:hello@ghlscaleup.com?subject=Store%20Setup%20Inquiry'
                  }}
                  className="bg-transparent text-[#1C2321] border border-[rgba(28,35,33,0.22)] px-6 py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]"
                >
                  Book a Call
                </button>
              </div>
            </div>

            {/* Right Column - Visual/Image Placeholder */}
            <div className="bg-gradient-to-br from-[#44A194] to-[#537D96] rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-white">
                <div className="text-6xl mb-3">🛍️ → 🚀</div>
                <p className="text-sm font-['Jost',sans-serif] opacity-90">Seamless migration to Shopify</p>
                <p className="text-xs opacity-75 mt-2">Zero downtime. Full data preservation.</p>
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
                Everything Included
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              What's included
            </h2>
            <p className="text-sm text-[#8a8a82] mt-2 max-w-2xl mx-auto">
              End-to-end setup with everything you need to launch
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
                <span className="text-[#44A194] text-lg mt-0.5">✓</span>
                <span className="text-sm text-[#1C2321] font-['Jost',sans-serif] leading-[1.5]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who This Is For */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#44A194]">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">
                Ideal Client
              </h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">
                E-commerce brands migrating from WooCommerce, Magento, BigCommerce, or launching their first Shopify store.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#44A194]">
              <div className="text-2xl mb-2">👍</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">
                Also Good For
              </h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">
                Existing Shopify stores needing reorganization, redesign, or migration from Shopify 1.0 to 2.0.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-[#EC8F8D]">
              <div className="text-2xl mb-2">⚠️</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">
                Not For
              </h3>
              <p className="text-sm text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">
                Enterprise Shopify Plus with complex custom ERP integrations or high-volume custom checkout needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 bg-[rgba(68,161,148,0.03)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              How it works
            </h2>
            <p className="text-sm text-[#8a8a82] mt-2">Simple 5-step process to launch your store</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: 'Discovery', desc: 'Requirements gathering & data audit', days: 'Day 1' },
              { step: 2, title: 'Setup', desc: 'Store configuration & theme selection', days: 'Days 2-3' },
              { step: 3, title: 'Migration', desc: 'Products, customers, orders transfer', days: 'Day 3-4' },
              { step: 4, title: 'Testing', desc: 'QA, payments, shipping testing', days: 'Day 4' },
              { step: 5, title: 'Launch', desc: 'Go live + 30 days support', days: 'Day 5+' }
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div className="w-12 h-12 bg-[#44A194] text-white rounded-full flex items-center justify-center text-xl font-['Cormorant_Garamond',serif] mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-lg font-light text-[#1C2321] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8a8a82] mb-1">{item.desc}</p>
                <p className="text-[10px] text-[#44A194] font-medium">{item.days}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Options */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              Pricing options
            </h2>
            <p className="text-sm text-[#8a8a82] mt-2">Choose the package that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-[rgba(28,35,33,0.08)] hover:shadow-md transition-all duration-300">
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Essential</h3>
              <div className="text-3xl font-['Cormorant_Garamond',serif] text-[#44A194] mb-4">$997</div>
              <ul className="space-y-2 mb-6">
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Basic store setup</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Up to 50 products</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Free theme installation</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> 5 pages</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> 14 days support</li>
              </ul>
              <button className="w-full bg-transparent border border-[#44A194] text-[#44A194] py-2 text-xs uppercase tracking-wide hover:bg-[#44A194] hover:text-white transition-all duration-300">
                Choose Essential
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-[#44A194] shadow-md relative">
              <div className="absolute top-0 right-0 bg-[#44A194] text-white text-[9px] px-3 py-1 uppercase tracking-wide">Popular</div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Professional</h3>
              <div className="text-3xl font-['Cormorant_Garamond',serif] text-[#44A194] mb-4">$1,997</div>
              <ul className="space-y-2 mb-6">
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Full store setup + migration</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Up to 250 products</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Custom theme setup</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> 10 custom pages</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> 30 days support</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> SEO optimization</li>
              </ul>
              <button className="w-full bg-[#44A194] text-white py-2 text-xs uppercase tracking-wide hover:bg-[#38857a] transition-all duration-300">
                Choose Professional
              </button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-[rgba(28,35,33,0.08)] hover:shadow-md transition-all duration-300">
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">Premium</h3>
              <div className="text-3xl font-['Cormorant_Garamond',serif] text-[#44A194] mb-4">$3,497</div>
              <ul className="space-y-2 mb-6">
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Custom design + development</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Unlimited products</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Custom Liquid development</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Unlimited pages</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> 60 days priority support</li>
                <li className="text-xs flex gap-2"><span className="text-[#44A194]">✓</span> Advanced app integrations</li>
              </ul>
              <button className="w-full bg-transparent border border-[#44A194] text-[#44A194] py-2 text-xs uppercase tracking-wide hover:bg-[#44A194] hover:text-white transition-all duration-300">
                Choose Premium
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 bg-[rgba(68,161,148,0.03)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-[#44A194]"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
                Client Love
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              What our clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#44A194] text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-[#1C2321] font-['Jost',sans-serif] leading-[1.65] italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-sm font-medium text-[#1C2321]">{testimonial.name}</p>
                  <p className="text-xs text-[#8a8a82]">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[rgba(28,35,33,0.08)] rounded-lg overflow-hidden bg-white">
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
              You might also need
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Theme Development', path: '/services/shopify/theme-development', icon: '🎨' },
              { name: 'Conversion Rate Optimization', path: '/services/shopify/cro', icon: '📈' },
              { name: 'App Integration', path: '/services/shopify/app-integration', icon: '🔌' }
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
            Ready to launch your Shopify store?
          </h2>
          <p className="text-sm text-white/45 mt-2 mb-6 font-['Jost',sans-serif]">
            Get started today. Launch in days, not weeks.
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
            Get Started →
          </button>
          <p className="text-[10px] text-white/30 mt-3">No commitment. Free consultation.</p>
        </div>
      </div>
    </main>
  )
}