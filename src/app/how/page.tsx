'use client'

import { useRouter } from 'next/navigation'

const HowItWorksPage = () => {
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
              How It Works
            </span>
          </div>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.12] tracking-[-0.01em] text-[#1C2321] max-w-[560px] mb-5">
            Five steps.<br />
            Every engagement.<br />
            <em className="italic text-[#44A194] not-italic">No exceptions.</em>
          </h1>
          <p className="text-sm text-[#8a8a82] leading-[1.9] font-['Jost',sans-serif] max-w-[440px]">
            Same operational flow regardless of which engine you activate. Predictable input. Consistent output.
          </p>
        </div>
      </div>

      {/* 5 Steps Flow */}
      <div className="border-t border-[rgba(28,35,33,0.08)] px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[rgba(28,35,33,0.08)]">
            
            {/* Step 1 */}
            <div className="bg-[#F4F0E4] p-6 sm:p-8 relative transition-all duration-300 hover:bg-white group">
              <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#44A194] opacity-25 leading-[1] mb-3">
                01
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em] font-['Jost',sans-serif]">
                Intake
              </div>
              <div className="text-[11.5px] text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                You tell us what's not working or what you want to grow. One structured call — we take it from there.
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F4F0E4] p-6 sm:p-8 relative transition-all duration-300 hover:bg-white group">
              <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#44A194] opacity-25 leading-[1] mb-3">
                02
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em] font-['Jost',sans-serif]">
                System Setup
              </div>
              <div className="text-[11.5px] text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                Right engine configured. Inputs defined. Outputs agreed. Shared tracking sheet created before execution starts.
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F4F0E4] p-6 sm:p-8 relative transition-all duration-300 hover:bg-white group">
              <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#44A194] opacity-25 leading-[1] mb-3">
                03
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em] font-['Jost',sans-serif]">
                Execution
              </div>
              <div className="text-[11.5px] text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                The engine runs — on schedule, on brief. No chasing, no managing. Just results.
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#F4F0E4] p-6 sm:p-8 relative transition-all duration-300 hover:bg-white group">
              <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#44A194] opacity-25 leading-[1] mb-3">
                04
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em] font-['Jost',sans-serif]">
                Tracking
              </div>
              <div className="text-[11.5px] text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                Shared sheet updated every 48 hours. Key metrics, commentary, what's being adjusted. No login needed.
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-[#F4F0E4] p-6 sm:p-8 relative transition-all duration-300 hover:bg-white group">
              <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#44A194] opacity-25 leading-[1] mb-3">
                05
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em] font-['Jost',sans-serif]">
                Review
              </div>
              <div className="text-[11.5px] text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                Monthly review — results vs targets. Adjust the system or activate the next engine.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Tracking Section */}
      <div className="border-t border-[rgba(28,35,33,0.08)] px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-[#44A194]"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
                Tracking
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-light leading-[1.12] tracking-[-0.01em] text-[#1C2321] max-w-[500px] mb-5">
              Shared sheets.<br />
              Not <em className="italic text-[#44A194] not-italic">dashboards.</em>
            </h2>
            <p className="text-sm text-[#8a8a82] leading-[1.9] font-['Jost',sans-serif] max-w-[440px]">
              One link. Updated every 48 hours. Metrics, commentary, what we're adjusting. Open it anytime — no login, no learning curve.
            </p>
          </div>

          {/* Right Column - Tracking Blocks */}
          <div className="flex flex-col gap-px bg-[rgba(28,35,33,0.08)]">
            
            {/* Block 1 */}
            <div className="bg-white p-6 sm:p-7 flex gap-5 items-start transition-all duration-300 hover:translate-x-1 hover:shadow-[-3px_0_0_#44A194]">
              <div className="w-10 h-10 flex-shrink-0 bg-[rgba(68,161,148,0.08)] flex items-center justify-center text-lg">
                📊
              </div>
              <div>
                <div className="text-sm font-medium text-[#1C2321] mb-1.5 font-['Jost',sans-serif]">
                  Live Metrics
                </div>
                <div className="text-xs text-[#8a8a82] leading-[1.7] font-['Jost',sans-serif]">
                  Whatever metrics matter for your engine — spend, conversions, rankings — updated continuously.
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-white p-6 sm:p-7 flex gap-5 items-start transition-all duration-300 hover:translate-x-1 hover:shadow-[-3px_0_0_#44A194]">
              <div className="w-10 h-10 flex-shrink-0 bg-[rgba(68,161,148,0.08)] flex items-center justify-center text-lg">
                🔄
              </div>
              <div>
                <div className="text-sm font-medium text-[#1C2321] mb-1.5 font-['Jost',sans-serif]">
                  48-Hour Update Cycle
                </div>
                <div className="text-xs text-[#8a8a82] leading-[1.7] font-['Jost',sans-serif]">
                  Data refreshed every 48 hours with commentary on what's working and what's changing.
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="bg-white p-6 sm:p-7 flex gap-5 items-start transition-all duration-300 hover:translate-x-1 hover:shadow-[-3px_0_0_#44A194]">
              <div className="w-10 h-10 flex-shrink-0 bg-[rgba(68,161,148,0.08)] flex items-center justify-center text-lg">
                📋
              </div>
              <div>
                <div className="text-sm font-medium text-[#1C2321] mb-1.5 font-['Jost',sans-serif]">
                  No New Tools
                </div>
                <div className="text-xs text-[#8a8a82] leading-[1.7] font-['Jost',sans-serif]">
                  A Google Sheet link. You already know how to open it.
                </div>
              </div>
            </div>

            {/* Block 4 */}
            <div className="bg-white p-6 sm:p-7 flex gap-5 items-start transition-all duration-300 hover:translate-x-1 hover:shadow-[-3px_0_0_#44A194]">
              <div className="w-10 h-10 flex-shrink-0 bg-[rgba(68,161,148,0.08)] flex items-center justify-center text-lg">
                📅
              </div>
              <div>
                <div className="text-sm font-medium text-[#1C2321] mb-1.5 font-['Jost',sans-serif]">
                  Monthly Delivery Review
                </div>
                <div className="text-xs text-[#8a8a82] leading-[1.7] font-['Jost',sans-serif]">
                  Results vs targets. What we're adjusting. What to activate next.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="border-t border-[rgba(28,35,33,0.08)] px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2.5 mb-4 justify-center">
              <span className="w-6 h-px bg-[#44A194]"></span>
              <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">
                Why It Matters
              </span>
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-light leading-[1.12] tracking-[-0.01em] text-[#1C2321]">
              What disappears<br />from your plate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(28,35,33,0.08)]">
            
            {/* Typical Agency */}
            <div className="bg-[#F4F0E4] p-6 sm:p-8 transition-all duration-300 hover:bg-white border-l-3 border-l-[rgba(28,35,33,0.08)]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] mb-4 font-['Jost',sans-serif]">
                Typical Agency
              </div>
              <ul className="list-none flex flex-col gap-2.5">
                <li className="flex gap-2.5 text-sm text-[#8a8a82]">
                  <span className="text-[#EC8F8D]">×</span>
                  Runs ads on a store that leaks
                </li>
                <li className="flex gap-2.5 text-sm text-[#8a8a82]">
                  <span className="text-[#EC8F8D]">×</span>
                  No tracking — no idea what's working
                </li>
                <li className="flex gap-2.5 text-sm text-[#8a8a82]">
                  <span className="text-[#EC8F8D]">×</span>
                  Hourly billing, zero accountability
                </li>
                <li className="flex gap-2.5 text-sm text-[#8a8a82]">
                  <span className="text-[#EC8F8D]">×</span>
                  You manage the process
                </li>
              </ul>
            </div>

            {/* DIY Route */}
            <div className="bg-[#F4F0E4] p-6 sm:p-8 transition-all duration-300 hover:bg-white border-l-3 border-l-[rgba(28,35,33,0.08)]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] mb-4 font-['Jost',sans-serif]">
                DIY Route
              </div>
              <ul className="list-none flex flex-col gap-2.5">
                <li className="flex gap-2.5 text-sm text-[#8a8a82]">
                  <span className="text-[#EC8F8D]">×</span>
                  Months to build internal capability
                </li>
                <li className="flex gap-2.5 text-sm text-[#8a8a82]">
                  <span className="text-[#EC8F8D]">×</span>
                  High overhead, unpredictable output
                </li>
                <li className="flex gap-2.5 text-sm text-[#8a8a82]">
                  <span className="text-[#EC8F8D]">×</span>
                  Context lost when people leave
                </li>
                <li className="flex gap-2.5 text-sm text-[#8a8a82]">
                  <span className="text-[#EC8F8D]">×</span>
                  You own all the risk
                </li>
              </ul>
            </div>

            {/* ExecuMarketing */}
            <div className="bg-white p-6 sm:p-8 border-l-3 border-l-[#44A194] shadow-sm">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#44A194] mb-4 font-['Jost',sans-serif]">
                ExecuMarketing
              </div>
              <ul className="list-none flex flex-col gap-2.5">
                <li className="flex gap-2.5 text-sm text-[#3a3a36]">
                  <span className="text-[#44A194]">✓</span>
                  Fix the store first, then scale
                </li>
                <li className="flex gap-2.5 text-sm text-[#3a3a36]">
                  <span className="text-[#44A194]">✓</span>
                  Clean tracking before spending
                </li>
                <li className="flex gap-2.5 text-sm text-[#3a3a36]">
                  <span className="text-[#44A194]">✓</span>
                  Fixed scope, full visibility
                </li>
                <li className="flex gap-2.5 text-sm text-[#3a3a36]">
                  <span className="text-[#44A194]">✓</span>
                  One system. One team. Results.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Band */}
      <div className="bg-[#1C2321] py-12 sm:py-16 px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-white leading-[1.2]">
              One call.<br />
              Right engine <em className="italic text-[#EC8F8D] not-italic">activated.</em>
            </h2>
            <p className="text-sm text-white/45 mt-2 font-['Jost',sans-serif]">
              Running within 48 hours.
            </p>
          </div>
          <button
            onClick={handleGetStarted}
            className="bg-[#EC8F8D] text-white border-none px-8 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#e07a78] hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Start the Intake →
          </button>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksPage