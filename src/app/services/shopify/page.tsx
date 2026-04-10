// app/services/shopify/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ShopifyCategoryPage() {
  const router = useRouter()

  const subcategories = [
    {
      id: 'store-setup',
      name: 'Store Setup & Migration',
      description: 'Full Shopify store setup, product migration, and data transfer from any platform.',
      timeline: '3-5 days',
      price: 'From $997',
      icon: '🏪',
      accentColor: '#44A194'
    },
    {
      id: 'theme-development',
      name: 'Theme Development',
      description: 'Custom theme development, Liquid coding, template customization that matches your brand.',
      timeline: '5-10 days',
      price: 'From $1,997',
      icon: '🎨',
      accentColor: '#44A194'
    },
    {
      id: 'cro',
      name: 'Conversion Rate Optimization',
      description: 'A/B testing, checkout optimization, and conversion funnel improvement to boost sales.',
      timeline: 'Ongoing',
      price: 'From $1,497/mo',
      icon: '📈',
      accentColor: '#44A194'
    },
    {
      id: 'app-integration',
      name: 'App Integration',
      description: 'Shopify apps, automation, workflows, and API connections to streamline operations.',
      timeline: '2-4 days',
      price: 'From $497',
      icon: '🔌',
      accentColor: '#44A194'
    },
    {
      id: 'shopify-plus',
      name: 'Shopify Plus',
      description: 'Enterprise Shopify, multi-store management, and advanced features for scaling brands.',
      timeline: 'Custom',
      price: 'Custom pricing',
      icon: '💎',
      accentColor: '#44A194'
    },
    {
      id: 'liquid-development',
      name: 'Liquid Development',
      description: 'Liquid templating, custom sections, dynamic content for advanced functionality.',
      timeline: '3-7 days',
      price: 'From $797',
      icon: '💻',
      accentColor: '#44A194'
    },
    {
      id: 'checkout-optimization',
      name: 'Checkout Optimization',
      description: 'Custom checkout, post-purchase upsells, and cart abandonment recovery.',
      timeline: '3-5 days',
      price: 'From $1,297',
      icon: '🛒',
      accentColor: '#44A194'
    },
    {
      id: 'aov-strategy',
      name: 'AOV Strategy',
      description: 'Bundle offers, cross-sells, volume discounts to increase average order value.',
      timeline: '2-3 days',
      price: 'From $597',
      icon: '💰',
      accentColor: '#44A194'
    }
  ]

  const caseStudies = [
    {
      client: 'Modern Living Co.',
      result: 'Increased conversion rate by 42%',
      quote: 'They transformed our Shopify store. Sales up 156% in 3 months.',
      industry: 'Home Decor',
      image: '/case-studies/modern-living.jpg' // Placeholder
    },
    {
      client: 'FitGear Apparel',
      result: 'Reduced cart abandonment by 28%',
      quote: 'The checkout optimization alone paid for itself in 2 weeks.',
      industry: 'Fitness Apparel',
      image: '/case-studies/fitgear.jpg' // Placeholder
    }
  ]

  const whyChooseUs = [
    {
      title: 'Certified Shopify Partners',
      description: 'Official Shopify experts with verified credentials and proven track record.'
    },
    {
      title: 'Liquid Experts',
      description: 'Deep Liquid knowledge allowing unlimited customization possibilities.'
    },
    {
      title: 'CRO-Focused Approach',
      description: 'Every decision is measured against conversion impact, not just aesthetics.'
    }
  ]

  return (
    <main className="flex-1 min-h-screen bg-[#F4F0E4]">
      {/* Breadcrumb */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 pt-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-['Jost',sans-serif] text-[#8a8a82]">
            <Link href="/" className="hover:text-[#44A194] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#44A194] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#44A194]">Shopify Engine</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-6 h-px bg-[#44A194]"></span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
              Engine 01
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-light text-[#1C2321] leading-[1.15] max-w-3xl">
            Shopify Engine
          </h1>
          <p className="text-lg md:text-xl text-[#44A194] font-['Jost',sans-serif] mt-3 max-w-2xl">
            E-commerce operations that actually convert
          </p>
          <p className="text-sm md:text-base text-[#8a8a82] mt-4 max-w-2xl font-['Jost',sans-serif] leading-[1.75]">
            From store setup to conversion optimization, we handle everything Shopify. 
            Launch faster, sell more, and scale with confidence using our proven execution systems.
          </p>
        </div>
      </div>

      {/* Category Stats */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-8 py-6 border-y border-[rgba(28,35,33,0.08)]">
            <div className="text-center">
              <div className="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl font-light text-[#44A194]">45+</div>
              <div className="text-[10px] tracking-[0.1em] uppercase text-[#8a8a82] mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl font-light text-[#44A194]">+32%</div>
              <div className="text-[10px] tracking-[0.1em] uppercase text-[#8a8a82] mt-1">Avg Conversion Lift</div>
            </div>
            <div className="text-center">
              <div className="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl font-light text-[#44A194]">4.9/5</div>
              <div className="text-[10px] tracking-[0.1em] uppercase text-[#8a8a82] mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Grid */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-[#1C2321]">
              What we offer
            </h2>
            <p className="text-sm text-[#8a8a82] mt-2 max-w-2xl mx-auto">
              Choose the service that fits your needs. Mix and match to create your custom package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-[rgba(28,35,33,0.06)]"
                onClick={() => router.push(`/services/shopify/${service.id}`)}
              >
                <div className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321] mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65] mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="text-[#44A194] font-medium">⏱ {service.timeline}</span>
                    <span className="text-[#1C2321] font-['Jost',sans-serif]">{service.price}</span>
                  </div>
                  <button className="text-[10px] tracking-[0.14em] uppercase font-['Jost',sans-serif] text-[#44A194] group-hover:gap-2 transition-all duration-300 flex items-center gap-1">
                    View Service →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Case Studies */}
      <div className="bg-[rgba(68,161,148,0.03)] py-12 md:py-16 px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-px bg-[#44A194]"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
                Success Stories
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321]">
              Real results from real clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-[rgba(28,35,33,0.06)]">
                <div className="mb-3">
                  <div className="text-[11px] tracking-[0.14em] uppercase text-[#44A194] font-['Jost',sans-serif] mb-1">
                    {study.industry}
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-xl font-light text-[#1C2321]">
                    {study.client}
                  </h3>
                </div>
                <div className="text-3xl text-[#44A194] mb-2">"</div>
                <p className="text-sm text-[#1C2321] font-['Jost',sans-serif] leading-[1.65] italic mb-3">
                  {study.quote}
                </p>
                <div className="inline-block bg-[#44A194] text-white text-xs px-3 py-1 rounded-full">
                  {study.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321]">
              Why choose our Shopify Engine
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-[#44A194] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-2 h-2 bg-[#44A194] rounded-full"></div>
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-lg font-light text-[#1C2321] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8a8a82] font-['Jost',sans-serif] leading-[1.65]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Categories */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#1C2321]">
              Other engines you might need
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Paid Ads Engine', 'SEO Engine', 'Content Engine', 'Social Media Engine'].map((engine, idx) => (
              <button
                key={idx}
                onClick={() => router.push(`/services/${engine.toLowerCase().replace(' engine', '').replace(' ', '-')}`)}
                className="px-4 py-2 bg-white border border-[rgba(28,35,33,0.08)] rounded-lg text-sm text-[#1C2321] hover:border-[#44A194] hover:text-[#44A194] transition-all duration-300 font-['Jost',sans-serif]"
              >
                {engine}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#1C2321] py-12 sm:py-16 px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-white leading-[1.2]">
            Ready to fix your Shopify store?
          </h2>
          <p className="text-sm text-white/45 mt-2 mb-6 font-['Jost',sans-serif]">
            Get a free Shopify audit. We'll identify what's leaking and fix it.
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
            Request a Shopify Audit →
          </button>
        </div>
      </div>
    </main>
  )
}