'use client'

import { useRouter } from 'next/navigation'

const PricingPage = () => {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/')
    setTimeout(() => {
      const ci = document.getElementById('ci')
      if (ci) ci.focus()
    }, 400)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-6 h-px bg-[#44A194]"></span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
              Pricing
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.12] tracking-[-0.01em] text-[#1C2321] max-w-[560px] mb-5">
            Fixed scope.<br />
            No hourly billing.<br />
            <em className="italic text-[#44A194] not-italic">No surprises.</em>
          </h1>
          <p className="text-sm text-[#8a8a82] leading-[1.9] font-['Jost',sans-serif] max-w-[500px]">
            Every engagement is scoped and priced upfront. You know what you're getting before we start.
          </p>
        </div>
      </div>

      {/* Pricing Sections */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto">

          {/* Store Optimisation Section */}
          <div className="mb-12">
            <div className="flex items-center gap-5 py-7">
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif] whitespace-nowrap">
                Store Optimisation
              </span>
              <div className="flex-1 h-px bg-[rgba(28,35,33,0.08)]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(28,35,33,0.08)]">
              {/* Quick Wins Plan */}
              <div className="bg-[#F4F0E4] p-6 sm:p-9 relative overflow-hidden transition-all duration-300 hover:bg-white group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[rgba(28,35,33,0.08)] group-hover:bg-[#44A194] transition-colors duration-300"></div>
                <div className="text-[9px] tracking-[0.28em] uppercase text-[#8a8a82] mb-1.5 font-['Jost',sans-serif]">
                  Minor Fixes
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#1C2321]">
                  Quick Wins
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#44A194] leading-[1] my-4">
                  ~₹25K
                </div>
                <div className="text-[11px] text-[#8a8a82] tracking-[0.1em] mb-6 font-['Jost',sans-serif]">
                  one-time · scoped per project
                </div>
                <hr className="border-t border-[rgba(28,35,33,0.08)] mb-5" />
                <div className="text-xs text-[#8a8a82] mb-4 leading-[1.6]">
                  Bug fixes, small UI tweaks, quick conversion wins.
                </div>
                <ul className="list-none flex flex-col gap-2 mb-7">
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                    <span className="text-[#44A194] text-sm">✓</span>
                    Conversion audit — top drop-off points identified
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                    <span className="text-[#44A194] text-sm">✓</span>
                    UI fixes and trust signal improvements
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                    <span className="text-[#44A194] text-sm">✓</span>
                    Tracking verification (GA4, pixels)
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                    <span className="text-[#44A194] text-sm">✓</span>
                    Before/after metrics report
                  </li>
                </ul>
                <button
                  onClick={handleGetStarted}
                  className="w-full bg-[#44A194] text-white border-none py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a]"
                >
                  Get Started
                </button>
              </div>

              {/* CRO Sprint - Featured Plan */}
              <div className="bg-[#1C2321] p-6 sm:p-9 relative overflow-hidden transition-all duration-300 group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#EC8F8D]"></div>
                <div className="text-[9px] tracking-[0.28em] uppercase text-white/35 mb-1.5 font-['Jost',sans-serif]">
                  Major Overhaul · Most Common
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-2xl font-light text-white">
                  CRO Sprint
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#EC8F8D] leading-[1] my-4">
                  ₹35–40K
                </div>
                <div className="text-[11px] text-white/35 tracking-[0.1em] mb-6 font-['Jost',sans-serif]">
                  one-time · scoped per project
                </div>
                <hr className="border-t border-white/10 mb-5" />
                <div className="text-xs text-white/40 mb-4 leading-[1.6]">
                  Full CRO sprint, AOV setup, checkout optimisation.
                </div>
                <ul className="list-none flex flex-col gap-2 mb-7">
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-white/70 leading-[1.6]">
                    <span className="text-[#EC8F8D] text-sm">✓</span>
                    Full funnel audit — PDP, cart, checkout
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-white/70 leading-[1.6]">
                    <span className="text-[#EC8F8D] text-sm">✓</span>
                    AOV strategy — bundles, upsells, cross-sells
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-white/70 leading-[1.6]">
                    <span className="text-[#EC8F8D] text-sm">✓</span>
                    Checkout flow redesign
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-white/70 leading-[1.6]">
                    <span className="text-[#EC8F8D] text-sm">✓</span>
                    Complete tracking cleanup — GA4, pixels, UTMs
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-white/70 leading-[1.6]">
                    <span className="text-[#EC8F8D] text-sm">✓</span>
                    Shared tracking sheet with weekly metrics
                  </li>
                </ul>
                <button
                  onClick={handleGetStarted}
                  className="w-full bg-[#EC8F8D] text-white border-none py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#e07a78]"
                >
                  Get Started
                </button>
              </div>

              {/* Full Rebuild Plan */}
              <div className="bg-[#F4F0E4] p-6 sm:p-9 relative overflow-hidden transition-all duration-300 hover:bg-white group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[rgba(28,35,33,0.08)] group-hover:bg-[#44A194] transition-colors duration-300"></div>
                <div className="text-[9px] tracking-[0.28em] uppercase text-[#8a8a82] mb-1.5 font-['Jost',sans-serif]">
                  Structural Rebuild
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#1C2321]">
                  Full Rebuild
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#44A194] leading-[1] my-4">
                  ₹45K<span className="text-xl text-[#8a8a82]">+</span>
                </div>
                <div className="text-[11px] text-[#8a8a82] tracking-[0.1em] mb-6 font-['Jost',sans-serif]">
                  one-time · scoped per project
                </div>
                <hr className="border-t border-[rgba(28,35,33,0.08)] mb-5" />
                <div className="text-xs text-[#8a8a82] mb-4 leading-[1.6]">
                  Theme migration, full store architecture rebuild.
                </div>
                <ul className="list-none flex flex-col gap-2 mb-7">
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                    <span className="text-[#44A194] text-sm">✓</span>
                    Theme selection or custom design
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                    <span className="text-[#44A194] text-sm">✓</span>
                    Full store architecture rebuild
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                    <span className="text-[#44A194] text-sm">✓</span>
                    All CRO optimisations included
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                    <span className="text-[#44A194] text-sm">✓</span>
                    Complete analytics setup
                  </li>
                  <li className="flex gap-2.5 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                    <span className="text-[#44A194] text-sm">✓</span>
                    Post-launch support period
                  </li>
                </ul>
                <button
                  onClick={handleGetStarted}
                  className="w-full bg-[#44A194] text-white border-none py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a]"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Marketing & Growth Section */}
          <div className="mb-12">
            <div className="flex items-center gap-5 py-7">
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif] whitespace-nowrap">
                Marketing &amp; Growth
              </span>
              <div className="flex-1 h-px bg-[rgba(28,35,33,0.08)]"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(28,35,33,0.08)] mb-0.5">
              {/* Meta Ads */}
              <div className="bg-white p-7 sm:p-8 border-r border-[rgba(28,35,33,0.08)] last:border-r-0">
                <div className="text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] mb-2.5 font-['Jost',sans-serif]">
                  Engine 02
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] mb-1.5">
                  Meta Ads
                </div>
                <div className="text-sm text-[#44A194] font-medium">
                  ~₹30K / mo
                </div>
              </div>

              {/* Google Ads */}
              <div className="bg-white p-7 sm:p-8 border-r border-[rgba(28,35,33,0.08)] last:border-r-0">
                <div className="text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] mb-2.5 font-['Jost',sans-serif]">
                  Engine 02
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] mb-1.5">
                  Google Ads
                </div>
                <div className="text-sm text-[#44A194] font-medium">
                  ~₹30K / mo
                </div>
              </div>

              {/* SEO */}
              <div className="bg-white p-7 sm:p-8 border-r border-[rgba(28,35,33,0.08)] last:border-r-0">
                <div className="text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] mb-2.5 font-['Jost',sans-serif]">
                  Engine 03
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] mb-1.5">
                  SEO
                </div>
                <div className="text-sm text-[#44A194] font-medium">
                  ~₹30K / mo
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-7 sm:p-8">
                <div className="text-[9px] tracking-[0.22em] uppercase text-[#8a8a82] mb-2.5 font-['Jost',sans-serif]">
                  Engine 04
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] mb-1.5">
                  Content
                </div>
                <div className="text-sm text-[#44A194] font-medium">
                  ~₹30K / mo
                </div>
              </div>
            </div>

            {/* Info Banner */}
            <div className="bg-[rgba(68,161,148,0.05)] border border-[rgba(28,35,33,0.08)] p-5 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="text-sm text-[#3a3a36] leading-[1.6] font-['Jost',sans-serif]">
                ~₹30K per channel per month. Add channels as you scale. Ad spends are separate — managed through your own accounts.
              </div>
              <button
                onClick={handleGetStarted}
                className="bg-transparent text-[#1C2321] border border-[rgba(28,35,33,0.22)] px-6 py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194] whitespace-nowrap"
              >
                Get a Scope
              </button>
            </div>
          </div>

          {/* Common Questions Section */}
          <div>
            <div className="flex items-center gap-5 py-7">
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif] whitespace-nowrap">
                Common Questions
              </span>
              <div className="flex-1 h-px bg-[rgba(28,35,33,0.08)]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(28,35,33,0.08)]">
              {/* Question 1 */}
              <div className="bg-[#F4F0E4] p-7 sm:p-8 transition-all duration-300 hover:bg-white">
                <div className="text-sm font-medium text-[#1C2321] mb-2 font-['Jost',sans-serif]">
                  Do I need to fix my store before running ads?
                </div>
                <div className="text-sm text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                  If your store has conversion leaks, yes — scaling traffic into a broken funnel burns money. We'll tell you honestly after the intake call.
                </div>
              </div>

              {/* Question 2 */}
              <div className="bg-[#F4F0E4] p-7 sm:p-8 transition-all duration-300 hover:bg-white">
                <div className="text-sm font-medium text-[#1C2321] mb-2 font-['Jost',sans-serif]">
                  Are ad spends included?
                </div>
                <div className="text-sm text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                  No. Plan fees cover execution. Ad spends run through your own accounts. We manage the spend — you own it.
                </div>
              </div>

              {/* Question 3 */}
              <div className="bg-[#F4F0E4] p-7 sm:p-8 transition-all duration-300 hover:bg-white">
                <div className="text-sm font-medium text-[#1C2321] mb-2 font-['Jost',sans-serif]">
                  Can I run multiple channels?
                </div>
                <div className="text-sm text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                  Yes. Add channels as you scale. Each scoped independently at ~₹30K/channel/month. Discounts available at 3+ channels.
                </div>
              </div>

              {/* Question 4 */}
              <div className="bg-[#F4F0E4] p-7 sm:p-8 transition-all duration-300 hover:bg-white">
                <div className="text-sm font-medium text-[#1C2321] mb-2 font-['Jost',sans-serif]">
                  How does tracking work?
                </div>
                <div className="text-sm text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                  Shared Google Sheet from day one. Updated every 48 hours — metrics, commentary, what's being adjusted. No dashboard, no login.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Band */}
      <div className="bg-[#1C2321] py-12 sm:py-16 px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-white leading-[1.2]">
              Fixed scope.<br />
              Full <em className="italic text-[#EC8F8D] not-italic">visibility.</em>
            </h2>
            <p className="text-sm text-white/45 mt-2 font-['Jost',sans-serif]">
              One call to scope the right engagement. Active within 48 hours.
            </p>
          </div>
          <button
            onClick={handleGetStarted}
            className="bg-[#EC8F8D] text-white border-none px-8 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#e07a78] hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingPage