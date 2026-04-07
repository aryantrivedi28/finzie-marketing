'use client'

interface SystemsProps {
  onNavClick?: (page: string) => void
}

const Systems = ({ onNavClick }: SystemsProps) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2.5 mb-4">
            <span className="w-6 h-px bg-[#44A194]"></span>
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
              Our Systems
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.12] tracking-[-0.01em] text-[#1C2321] max-w-[600px] mb-5">
            Four engines.<br />
            Pick what you need.<br />
            <em className="italic text-[#44A194] not-italic">We handle the rest.</em>
          </h1>
          <p className="text-sm text-[#8a8a82] leading-[1.9] font-['Jost',sans-serif] max-w-[500px]">
            Every system runs on a fixed process — scoped inputs, measurable outputs, tracked via shared sheet. No managing people. No chasing deliverables.
          </p>
        </div>
      </div>

      {/* Engines Section */}
      <div className="border-t border-[rgba(28,35,33,0.08)] px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12 lg:gap-16">

            {/* Engine 01 - Store Engine */}
            <div className="bg-white border border-[rgba(28,35,33,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1">
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EC8F8D] to-[#d4706e]"></div>
                <div className="p-6 sm:p-8 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="text-[9px] tracking-[0.28em] uppercase text-[#44A194] mb-3 block font-['Jost',sans-serif]">
                    Engine 01 — Conversion
                  </span>
                  <div className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321] mb-2.5">
                    Store Engine
                  </div>
                  <p className="text-xs sm:text-sm text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                    Scaling a broken funnel burns money. We fix it first — conversion leaks, AOV gaps, and tracking blind spots — before a single ad rupee is spent.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(28,35,33,0.08)]">
                <div className="bg-white p-6 sm:p-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a82] mb-3.5 font-['Jost',sans-serif]">
                    What the engine delivers
                  </div>
                  <ul className="list-none flex flex-col gap-2">
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Conversion audit — PDP, cart, checkout, trust gaps
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      AOV setup — bundles, upsells, cross-sells
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Tracking cleanup — GA4, pixels, UTMs
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      UI fixes and quick-win implementation
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Shared tracking sheet from day one
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F4F0E4] p-6 sm:p-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a82] mb-3.5 font-['Jost',sans-serif]">
                    Outcomes
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-light text-[#44A194] leading-[1]">
                        +35%
                      </div>
                      <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] uppercase mt-0.5">
                        Conversion rate improvement
                      </div>
                    </div>
                    <div>
                      <div className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-light text-[#44A194] leading-[1]">
                        +22%
                      </div>
                      <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] uppercase mt-0.5">
                        Average order value lift
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 border-t border-[rgba(28,35,33,0.08)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[rgba(68,161,148,0.03)]">
                <div>
                  <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] font-['Jost',sans-serif]">
                    From
                  </div>
                  <strong className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] block mt-0.5">
                    ~₹25,000 one-time
                  </strong>
                </div>
                <button
                  onClick={() => onNavClick?.('pricing')}
                  className="bg-[#44A194] text-white border-none px-6 py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] hover:scale-105 active:scale-95"
                >
                  View Pricing
                </button>
              </div>
            </div>

            {/* Engine 02 - Paid Ads Engine */}
            <div className="bg-white border border-[rgba(28,35,33,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1">
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#44A194] to-[#537D96]"></div>
                <div className="p-6 sm:p-8 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="text-[9px] tracking-[0.28em] uppercase text-[#44A194] mb-3 block font-['Jost',sans-serif]">
                    Engine 02 — Paid Acquisition
                  </span>
                  <div className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321] mb-2.5">
                    Paid Ads Engine
                  </div>
                  <p className="text-xs sm:text-sm text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                    Full-funnel paid campaigns across Meta and Google. Strategy, creative direction, live management, and monthly optimisation — all in one engine.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(28,35,33,0.08)]">
                <div className="bg-white p-6 sm:p-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a82] mb-3.5 font-['Jost',sans-serif]">
                    What the engine delivers
                  </div>
                  <ul className="list-none flex flex-col gap-2">
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Campaign strategy and audience architecture
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Ad creative briefing and production oversight
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Live management — Meta and Google
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Retargeting across active channels
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Shared tracking sheet updated every 48 hrs
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Monthly optimisation and budget review
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F4F0E4] p-6 sm:p-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a82] mb-3.5 font-['Jost',sans-serif]">
                    Outcomes
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-light text-[#44A194] leading-[1]">
                        4.2×
                      </div>
                      <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] uppercase mt-0.5">
                        ROAS at month 3
                      </div>
                    </div>
                    <div>
                      <div className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-light text-[#44A194] leading-[1]">
                        −38%
                      </div>
                      <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] uppercase mt-0.5">
                        CPA vs benchmark
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 border-t border-[rgba(28,35,33,0.08)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[rgba(68,161,148,0.03)]">
                <div>
                  <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] font-['Jost',sans-serif]">
                    From
                  </div>
                  <strong className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] block mt-0.5">
                    ~₹30,000 / channel / mo
                  </strong>
                </div>
                <button
                  onClick={() => onNavClick?.('pricing')}
                  className="bg-[#44A194] text-white border-none px-6 py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] hover:scale-105 active:scale-95"
                >
                  View Pricing
                </button>
              </div>
            </div>

            {/* Engine 03 - SEO Engine */}
            <div className="bg-white border border-[rgba(28,35,33,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1">
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#537D96] to-[#44A194]"></div>
                <div className="p-6 sm:p-8 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="text-[9px] tracking-[0.28em] uppercase text-[#44A194] mb-3 block font-['Jost',sans-serif]">
                    Engine 03 — Organic Growth
                  </span>
                  <div className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321] mb-2.5">
                    SEO Engine
                  </div>
                  <p className="text-xs sm:text-sm text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                    Keyword strategy, content briefs, on-page execution, and link acquisition — running on a fixed monthly cadence. Long-term compounding organic traffic.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(28,35,33,0.08)]">
                <div className="bg-white p-6 sm:p-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a82] mb-3.5 font-['Jost',sans-serif]">
                    What the engine delivers
                  </div>
                  <ul className="list-none flex flex-col gap-2">
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Keyword research and topical authority mapping
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Monthly content briefs — written to rank
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      On-page execution across existing pages
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Technical SEO audit and fix log
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Backlink acquisition — outreach-based
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Monthly ranking report via shared sheet
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F4F0E4] p-6 sm:p-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a82] mb-3.5 font-['Jost',sans-serif]">
                    Outcomes
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-light text-[#44A194] leading-[1]">
                        +210%
                      </div>
                      <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] uppercase mt-0.5">
                        Organic traffic in 6 months
                      </div>
                    </div>
                    <div>
                      <div className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl font-light text-[#44A194] leading-[1]">
                        3.4×
                      </div>
                      <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] uppercase mt-0.5">
                        Increase in ranked keywords
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 border-t border-[rgba(28,35,33,0.08)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[rgba(68,161,148,0.03)]">
                <div>
                  <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] font-['Jost',sans-serif]">
                    From
                  </div>
                  <strong className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] block mt-0.5">
                    ~₹30,000 / mo
                  </strong>
                </div>
                <button
                  onClick={() => onNavClick?.('pricing')}
                  className="bg-[#44A194] text-white border-none px-6 py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] hover:scale-105 active:scale-95"
                >
                  View Pricing
                </button>
              </div>
            </div>

            {/* Engine 04 - Content Engine */}
            <div className="bg-white border border-[rgba(28,35,33,0.08)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:-translate-y-1">
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EC8F8D] to-[#44A194]"></div>
                <div className="p-6 sm:p-8 border-b border-[rgba(28,35,33,0.08)]">
                  <span className="text-[9px] tracking-[0.28em] uppercase text-[#44A194] mb-3 block font-['Jost',sans-serif]">
                    Engine 04 — Brand &amp; Content
                  </span>
                  <div className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl font-light text-[#1C2321] mb-2.5">
                    Content Engine
                  </div>
                  <p className="text-xs sm:text-sm text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                    Social, email, and long-form on a defined monthly schedule. Briefed once, produced consistently, published without you managing it.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(28,35,33,0.08)]">
                <div className="bg-white p-6 sm:p-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a82] mb-3.5 font-['Jost',sans-serif]">
                    What the engine delivers
                  </div>
                  <ul className="list-none flex flex-col gap-2">
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Monthly content calendar — approved once
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Social posts — copy and creative direction
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Email newsletters — fortnightly or monthly
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Long-form articles and thought leadership
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Publishing and scheduling — fully managed
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F4F0E4] p-6 sm:p-8">
                  <div className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a82] mb-3.5 font-['Jost',sans-serif]">
                    Channels
                  </div>
                  <ul className="list-none flex flex-col gap-2 mb-5">
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      LinkedIn, Instagram, Twitter / X
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Email via your existing ESP
                    </li>
                    <li className="flex gap-3 text-xs sm:text-[12.5px] text-[#3a3a36] leading-[1.6]">
                      <span className="w-3.5 h-px bg-[#44A194] mt-2 flex-shrink-0"></span>
                      Blog and website long-form
                    </li>
                  </ul>
                  <div>
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#8a8a82] mb-2 font-['Jost',sans-serif]">
                      Output
                    </div>
                    <div className="text-xs text-[#8a8a82] leading-[1.7]">
                      5× more content. Zero internal hours managing it.
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-8 border-t border-[rgba(28,35,33,0.08)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[rgba(68,161,148,0.03)]">
                <div>
                  <div className="text-[10px] text-[#8a8a82] tracking-[0.1em] font-['Jost',sans-serif]">
                    From
                  </div>
                  <strong className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] block mt-0.5">
                    ~₹30,000 / mo
                  </strong>
                </div>
                <button
                  onClick={() => onNavClick?.('pricing')}
                  className="bg-[#44A194] text-white border-none px-6 py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] hover:scale-105 active:scale-95"
                >
                  View Pricing
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Band */}
      <div className="bg-[#44A194] py-12 sm:py-14 px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-white leading-[1.2]">
              Not sure which engine<br className="hidden sm:block" />
              to start with?
            </h2>
            <p className="text-sm text-white/65 mt-2 font-['Jost',sans-serif]">
              Tell us your goal. We'll recommend the right sequence.
            </p>
          </div>
          <button
            onClick={() => onNavClick?.('home')}
            className="bg-white text-[#44A194] border-none px-8 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 whitespace-nowrap"
          >
            Talk to Us →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Systems