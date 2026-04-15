'use client'

import { useRouter } from 'next/navigation'
import { 
  ArrowRight, 
  CheckCircle2, 
  X, 
  TrendingUp, 
  RefreshCw, 
  Layout, 
  BarChart3, 
  Calendar,
  Target,
  Settings,
  Eye,
  FileText,
  Clock
} from 'lucide-react'

const HowItWorksPage = () => {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push('/')
    setTimeout(() => {
      const ci = document.getElementById('ci')
      if (ci) ci.focus()
    }, 400)
  }

  const steps = [
    {
      number: '01',
      title: 'Intake',
      description: 'You tell us what\'s not working or what you want to grow. One structured call — we take it from there.',
      icon: FileText
    },
    {
      number: '02',
      title: 'System Setup',
      description: 'Right engine configured. Inputs defined. Outputs agreed. Shared tracking sheet created before execution starts.',
      icon: Settings
    },
    {
      number: '03',
      title: 'Execution',
      description: 'The engine runs — on schedule, on brief. No chasing, no managing. Just results.',
      icon: TrendingUp
    },
    {
      number: '04',
      title: 'Tracking',
      description: 'Shared sheet updated every 48 hours. Key metrics, commentary, what\'s being adjusted. No login needed.',
      icon: BarChart3
    },
    {
      number: '05',
      title: 'Review',
      description: 'Monthly review — results vs targets. Adjust the system or activate the next engine.',
      icon: Calendar
    }
  ]

  const trackingBlocks = [
    {
      icon: BarChart3,
      title: 'Live Metrics',
      description: 'Whatever metrics matter for your engine — spend, conversions, rankings — updated continuously.',
      color: '#44A194'
    },
    {
      icon: RefreshCw,
      title: '48-Hour Update Cycle',
      description: 'Data refreshed every 48 hours with commentary on what\'s working and what\'s changing.',
      color: '#44A194'
    },
    {
      icon: Eye,
      title: 'No New Tools',
      description: 'A Google Sheet link. You already know how to open it.',
      color: '#44A194'
    },
    {
      icon: Clock,
      title: 'Monthly Delivery Review',
      description: 'Results vs targets. What we\'re adjusting. What to activate next.',
      color: '#44A194'
    }
  ]

  const comparisonData = [
    {
      title: 'Typical Agency',
      items: [
        'Runs ads on a store that leaks',
        'No tracking — no idea what\'s working',
        'Hourly billing, zero accountability',
        'You manage the process'
      ],
      isHighlight: false
    },
    {
      title: 'DIY Route',
      items: [
        'Months to build internal capability',
        'High overhead, unpredictable output',
        'Context lost when people leave',
        'You own all the risk'
      ],
      isHighlight: false
    },
    {
      title: 'ExecuMarketing',
      items: [
        'Fix the store first, then scale',
        'Clean tracking before spending',
        'Fixed scope, full visibility',
        'One system. One team. Results.'
      ],
      isHighlight: true
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#F4F0E4]">
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
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className="bg-[#F4F0E4] p-6 sm:p-8 relative transition-all duration-300 hover:bg-white group"
                >
                  <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light text-[#44A194] opacity-25 leading-[1] mb-3">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[rgba(68,161,148,0.08)] flex items-center justify-center mb-3 group-hover:bg-[rgba(68,161,148,0.15)] transition-colors">
                    <Icon className="w-5 h-5 text-[#44A194]" />
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#1C2321] mb-2 tracking-[0.04em] font-['Jost',sans-serif]">
                    {step.title}
                  </div>
                  <div className="text-[11.5px] text-[#8a8a82] leading-[1.75] font-['Jost',sans-serif]">
                    {step.description}
                  </div>
                </div>
              )
            })}
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
            {trackingBlocks.map((block, index) => {
              const Icon = block.icon
              return (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-7 flex gap-5 items-start transition-all duration-300 hover:translate-x-1 hover:shadow-[-3px_0_0_#44A194] group"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-[rgba(68,161,148,0.08)] rounded-lg flex items-center justify-center group-hover:bg-[rgba(68,161,148,0.15)] transition-colors">
                    <Icon className="w-5 h-5 text-[#44A194]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#1C2321] mb-1.5 font-['Jost',sans-serif]">
                      {block.title}
                    </div>
                    <div className="text-xs text-[#8a8a82] leading-[1.7] font-['Jost',sans-serif]">
                      {block.description}
                    </div>
                  </div>
                </div>
              )
            })}
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
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`p-6 sm:p-8 transition-all duration-300 hover:shadow-lg ${
                  item.isHighlight 
                    ? 'bg-white border-l-2 border-l-[#44A194] shadow-sm' 
                    : 'bg-[#F4F0E4] hover:bg-white border-l-2 border-l-[rgba(28,35,33,0.08)]'
                }`}
              >
                <div className={`text-[10px] tracking-[0.2em] uppercase mb-4 font-['Jost',sans-serif] ${
                  item.isHighlight ? 'text-[#44A194]' : 'text-[#8a8a82]'
                }`}>
                  {item.title}
                </div>
                <ul className="list-none flex flex-col gap-2.5">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex gap-2.5 text-sm">
                      {item.isHighlight ? (
                        <CheckCircle2 className="w-4 h-4 text-[#44A194] flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-[#EC8F8D] flex-shrink-0 mt-0.5" />
                      )}
                      <span className={item.isHighlight ? 'text-[#3a3a36]' : 'text-[#8a8a82]'}>
                        {listItem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            className="bg-[#EC8F8D] text-white border-none px-8 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#e07a78] hover:scale-105 active:scale-95 whitespace-nowrap rounded-none"
          >
            Start the Intake → <ArrowRight className="w-3 h-3 inline-block ml-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksPage