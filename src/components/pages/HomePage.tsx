'use client'

import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import ClientRequestForm from '../../app/client-request/page'

// Dynamic import for ChatInterface if needed later
const ChatInterface = dynamic(
  () => import('../ChatInterface').then(mod => mod.ChatInterface),
  {
    loading: () => (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-2 border-[#44A194] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
    ssr: false
  }
)

interface HomePageProps {
  showChat?: boolean
}

const HomePage = ({ showChat = false }: HomePageProps) => {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [gone, setGone] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const rmWelcome = () => {
    if (!gone) {
      const welcome = document.getElementById('welcome')
      if (welcome) {
        welcome.style.opacity = '0'
        welcome.style.transition = 'opacity 0.3s'
        setTimeout(() => welcome.remove(), 300)
      }
      setGone(true)
    }
  }

  const addMessage = async (role: string, content: string) => {
    setMessages(prev => [...prev, { role, content }])
    scrollToBottom()
  }

  const showTyping = () => {
    setIsTyping(true)
    scrollToBottom()
  }

  const hideTyping = () => {
    setIsTyping(false)
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const handleSend = async (text: string) => {
    if (!text.trim()) return

    rmWelcome()
    await addMessage('u', text)
    setStep(prev => prev + 1)
    showTyping()

    if (step === 0) {
      await delay(1400)
      hideTyping()
      await addMessage('a', `Got it. Is your store currently live and getting traffic, or are you starting from scratch?`)
    } else if (step === 1) {
      await delay(1200)
      hideTyping()
      await addMessage('a', `Understood. What's your rough monthly budget for execution? Helps us scope the right starting point.`)
    } else if (step === 2) {
      await delay(1800)
      hideTyping()
      await addMessage('a', `Based on what you've shared, here's where I'd start:
        <div class="exec-card mt-2 bg-white border border-[rgba(28,35,33,0.08)] p-5 relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#44A194] to-[#537D96]"></div>
          <div class="text-[9px] tracking-[0.2em] uppercase text-[#44A194] mb-2.5">✦ Recommended System</div>
          <div class="font-['Cormorant_Garamond',serif] text-lg font-light text-[#1C2321] mb-1.5">Store Engine → Paid Ads Engine</div>
          <div class="text-xs text-[#8a8a82] leading-[1.65] mb-3">Fix the funnel first. Then scale traffic into something that converts.</div>
          <ul class="list-none flex flex-col gap-1.5 mb-3.5">
            <li class="flex gap-2 text-[11.5px] text-[#3a3a36]"><span class="text-[#44A194]">✓</span> Conversion audit and quick-win fixes</li>
            <li class="flex gap-2 text-[11.5px] text-[#3a3a36]"><span class="text-[#44A194]">✓</span> Tracking cleanup before any ad spend</li>
            <li class="flex gap-2 text-[11.5px] text-[#3a3a36]"><span class="text-[#44A194]">✓</span> Meta campaigns activated once store is ready</li>
            <li class="flex gap-2 text-[11.5px] text-[#3a3a36]"><span class="text-[#44A194]">✓</span> Shared tracking sheet from day one</li>
          </ul>
          <div class="flex gap-2">
            <button onclick="window.confirmEngine()" class="flex-1 bg-[#44A194] text-white border-none py-2 font-['Jost',sans-serif] text-[10px] tracking-[0.14em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a]">Activate This</button>
            <button onclick="window.seeAllSystems()" class="bg-transparent text-[#8a8a82] border border-[rgba(28,35,33,0.08)] py-2 px-3.5 font-['Jost',sans-serif] text-[10px] tracking-[0.14em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">See All Systems</button>
          </div>
        </div>`)
    } else {
      await delay(1200)
      hideTyping()
      await addMessage('a', `Noted. Our team will follow up within 2 hours with a scoped recommendation. Anything else?`)
    }
  }

  const confirmEngine = () => {
    addMessage('a', `✓ <strong>Activation initiated.</strong> You'll receive your intake brief and shared tracking sheet within the hour. Execution starts within 48 hours.`)
  }

  const seeAllSystems = () => {
    router.push('/systems')
  }

  // Make functions available globally
  if (typeof window !== 'undefined') {
    (window as any).confirmEngine = confirmEngine
    ;(window as any).seeAllSystems = seeAllSystems
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      const textarea = e.currentTarget
      handleSend(textarea.value)
      textarea.value = ''
      textarea.style.height = 'auto'
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target
    textarea.style.height = 'auto'
    textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px'
  }

  const fillChip = (text: string) => {
    const textarea = document.getElementById('ci') as HTMLTextAreaElement
    if (textarea) {
      textarea.value = text
      textarea.style.height = 'auto'
      textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px'
      textarea.focus()
    }
  }

  return (
    <main className="flex-1 min-h-screen bg-[#F4F0E4]">
      {/* Grain Overlay */}
      <div 
        className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Header */}
      <header 
        className={`sticky top-0 z-[300] bg-[#F4F0E4] border-b border-[rgba(28,35,33,0.09)] px-5 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between h-[72px] transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_2px_24px_rgba(28,35,33,0.07)]' : ''
        }`}
      >
        <a href="/" className="flex flex-col gap-[3px] cursor-pointer no-underline">
          <span className="font-['Cormorant_Garamond',serif] text-[22px] font-medium tracking-[0.14em] uppercase text-[#1C2321] leading-none">
            ExecuMarketing
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#44A194] font-['Jost',sans-serif] font-normal">
            Marketing That Executes
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <a href="/services" className="nav-link">Services</a>
          <a href="/how-it-works" className="nav-link">How It Works</a>
          <a href="/case-studies" className="nav-link">Our Work</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="bg-[#1C2321] text-white font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.18em] uppercase py-3 px-[26px] ml-4 transition-colors duration-300 hover:bg-[#44A194] no-underline inline-flex items-center gap-2">
            <span>Work With Us</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`block w-6 h-[1.5px] bg-[#1C2321] transition-all duration-300 ${isMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#1C2321] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-[#1C2321] transition-all duration-300 ${isMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed top-[72px] left-0 right-0 bg-[#F4F0E4] border-b border-[rgba(28,35,33,0.09)] z-[299] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <nav className="flex flex-col">
            <a href="/services" className="nav-link-mobile">Services</a>
            <a href="/how-it-works" className="nav-link-mobile">How It Works</a>
            <a href="/case-studies" className="nav-link-mobile">Our Work</a>
            <a href="/about" className="nav-link-mobile">About</a>
            <a href="/contact" className="bg-[#1C2321] text-white font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.18em] uppercase py-3 px-[26px] mx-6 my-4 transition-colors duration-300 hover:bg-[#44A194] text-center">
              Work With Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-72px)] grid grid-cols-1 lg:grid-cols-2 border-b border-[rgba(28,35,33,0.09)] overflow-hidden">
        {/* Left Column */}
        <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-[100px] flex flex-col justify-center relative">
          {/* Vertical rule */}
          <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[rgba(28,35,33,0.09)] to-transparent" />

          <div className="flex items-center gap-3.5 text-[11px] font-medium tracking-[0.28em] uppercase text-[#44A194] mb-8 animate-[fadeUp_0.7s_0.1s_ease_both]">
            <span className="w-8 h-px bg-[#44A194]" />
            Marketing Execution Agency
          </div>

          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(48px,5.5vw,76px)] font-light leading-[1.08] tracking-[-0.01em] text-[#1C2321] mb-7 animate-[fadeUp_0.7s_0.2s_ease_both]">
            Your marketing,<br />
            <em className="italic text-[#44A194] not-italic">executed</em> by people<br />
            who've done it before.
          </h1>

          <p className="text-[17px] font-light leading-[1.85] text-[#7a7a72] max-w-[460px] mb-11 animate-[fadeUp_0.7s_0.35s_ease_both]">
            We fix what's leaking, build what's missing, and scale what works —
            <strong className="text-[#3a3a36] font-medium"> managed end to end.</strong> No briefing five agencies. No managing freelancers.
            Just results, on your timeline.
          </p>

          <div className="flex items-center gap-4 flex-wrap mb-[60px] animate-[fadeUp_0.7s_0.45s_ease_both]">
            <a href="/contact" className="inline-flex items-center gap-2.5 bg-[#1C2321] text-white font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-4 px-8 no-underline relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#44A194] -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              <span className="relative z-[1]">Start a Project</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-[1] transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/how-it-works" className="inline-flex items-center gap-2.5 bg-transparent text-[#1C2321] font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-[15px] px-8 border border-[rgba(28,35,33,0.25)] no-underline transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
              See How It Works
            </a>
          </div>

          <div className="flex items-center gap-7 animate-[fadeUp_0.7s_0.55s_ease_both]">
            <div className="flex flex-col gap-0.5">
              <span className="font-['Cormorant_Garamond',serif] text-[30px] font-normal text-[#1C2321] leading-none">
                200<span className="text-[#44A194]">+</span>
              </span>
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a7a72]">Projects Delivered</span>
            </div>
            <div className="w-px h-10 bg-[rgba(28,35,33,0.09)]" />
            <div className="flex flex-col gap-0.5">
              <span className="font-['Cormorant_Garamond',serif] text-[30px] font-normal text-[#1C2321] leading-none">
                48<span className="text-[#44A194] text-sm">hr</span>
              </span>
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a7a72]">Kickoff Window</span>
            </div>
            <div className="w-px h-10 bg-[rgba(28,35,33,0.09)]" />
            <div className="flex flex-col gap-0.5">
              <span className="font-['Cormorant_Garamond',serif] text-[30px] font-normal text-[#1C2321] leading-none">
                4<span className="text-[#44A194] text-sm">+</span>
              </span>
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a7a72]">Years Track Record</span>
            </div>
            <div className="w-px h-10 bg-[rgba(28,35,33,0.09)]" />
            <div className="flex flex-col gap-0.5">
              <span className="font-['Cormorant_Garamond',serif] text-[30px] font-normal text-[#1C2321] leading-none">
                6
              </span>
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#7a7a72]">Countries Served</span>
            </div>
          </div>
        </div>

        {/* Right Column - Dark Panel */}
        <div className="hidden lg:flex flex-col bg-[#1C2321] relative overflow-hidden">
          <div className="absolute bottom-[-24px] right-[-20px] font-['Cormorant_Garamond',serif] text-[200px] font-semibold text-white/3 tracking-[-0.04em] leading-none pointer-events-none select-none">
            EXECUTE
          </div>

          <div className="flex flex-col gap-px p-12 xl:p-[64px_52px] flex-1 justify-center">
            {[
              { num: '01', title: 'Paid Media', sub: 'Meta · Google · TikTok' },
              { num: '02', title: 'SEO & Content', sub: 'Strategy · Briefs · On-page' },
              { num: '03', title: 'Social Media', sub: 'Content · Community · Strategy' },
              { num: '04', title: 'E-commerce & CRO', sub: 'Shopify · Landing pages · AOV' },
              { num: '05', title: 'CRM & Retention', sub: 'Email flows · Automations · Lifecycle' }
            ].map((service, idx) => (
              <a
                key={service.num}
                href={`/services/${service.title.toLowerCase().replace(/[&]/g, '').replace(/\s+/g, '-')}`}
                className="bg-white/4 border border-white/7 p-[22px_28px] flex items-center justify-between no-underline transition-all duration-300 hover:bg-[rgba(68,161,148,0.12)] hover:border-[rgba(68,161,148,0.3)] opacity-0 animate-[slideInRight_0.6s_${0.3 + idx * 0.12}s_ease_both]"
                style={{ animationFillMode: 'both' }}
              >
                <div className="flex items-center gap-[18px]">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#44A194] font-['Jost',sans-serif] min-w-[24px]">
                    {service.num}
                  </span>
                  <div>
                    <div className="font-['Jost',sans-serif] text-sm font-normal tracking-[0.06em] text-white/90">
                      {service.title}
                    </div>
                    <div className="text-[11px] text-white/38 tracking-[0.04em] mt-[3px]">
                      {service.sub}
                    </div>
                  </div>
                </div>
                <span className="text-white/25 text-lg transition-all duration-300 group-hover:text-[#44A194] group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="p-6 xl:p-[24px_52px] border-t border-white/7 flex items-center justify-between animate-[fadeUp_0.6s_0.9s_ease_both]">
            <span className="text-[10px] tracking-[0.22em] uppercase text-white/35">Managed end to end</span>
            <span className="text-[10px] tracking-[0.16em] uppercase text-[#44A194] border border-[rgba(68,161,148,0.3)] py-[5px] px-3.5">
              Activate in 48 hrs
            </span>
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <section className="border-b border-[rgba(28,35,33,0.09)] bg-[#EAE5D5] py-8 px-5 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
        <div className="max-w-[1240px] mx-auto flex items-center gap-0">
          <span className="text-[10px] font-medium tracking-[0.24em] uppercase text-[#7a7a72] whitespace-nowrap pr-10 border-r border-[rgba(28,35,33,0.09)] mr-10 flex-shrink-0">
            Trusted by
          </span>
          <div className="overflow-hidden flex-1 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
            <div className="flex gap-14 items-center w-max animate-[logoScroll_28s_linear_infinite] hover:animation-play-state-paused">
              {['Brandly', 'Meridian Co.', 'Aether Labs', 'Stackwell', 'Novaform', 'Crossfield', 'Vantage DTC', 'Praxis Retail'].map((logo, i) => (
                <React.Fragment key={i}>
                  <span className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                    {logo}
                  </span>
                  {i === 7 && (
                    <>
                      <span className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                        Brandly
                      </span>
                      <span className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                        Meridian Co.
                      </span>
                      <span className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                        Aether Labs
                      </span>
                      <span className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                        Stackwell
                      </span>
                      <span className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                        Novaform
                      </span>
                      <span className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                        Crossfield
                      </span>
                      <span className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                        Vantage DTC
                      </span>
                      <span className="font-['Cormorant_Garamond',serif] text-[17px] font-normal tracking-[0.12em] text-[rgba(28,35,33,0.28)] whitespace-nowrap transition-colors duration-300 hover:text-[rgba(28,35,33,0.55)] cursor-default uppercase">
                        Praxis Retail
                      </span>
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center">
          <div className="opacity-0 translate-y-7 transition-[opacity,transform] duration-700 ease-[ease]">
            <div className="inline-flex items-center gap-3 font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.26em] uppercase text-[#44A194] mb-5">
              <span className="w-7 h-px bg-[#44A194]" />
              The Problem We Solve
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,4vw,58px)] font-light leading-[1.1] tracking-[-0.01em] text-[#1C2321] mb-6">
              Most businesses lose money<br />
              <em className="italic text-[#44A194] not-italic">before</em> they ever scale.
            </h2>
            <p className="text-base leading-[1.9] text-[#7a7a72] mb-4 max-w-[440px]">
              Conversion gaps, underperforming ads, content that doesn't rank, and retention strategies that were never built.
              <strong className="text-[#3a3a36] font-medium"> Most agencies sell you more traffic into a broken system.</strong>
            </p>
            <p className="text-base leading-[1.9] text-[#7a7a72] mb-4 max-w-[440px]">
              We fix the foundation first. Then we scale what's working — with specialists who've solved this exact problem before,
              managed by us, accountable to you.
            </p>
            <div className="flex gap-3.5 flex-wrap mt-9">
              <a href="/contact" className="inline-flex items-center gap-2.5 bg-[#1C2321] text-white font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-4 px-8 no-underline relative overflow-hidden group">
                <span className="absolute inset-0 bg-[#44A194] -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
                <span className="relative z-[1]">Book a Discovery Call</span>
              </a>
              <a href="/case-studies" className="inline-flex items-center gap-2.5 bg-transparent text-[#1C2321] font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-[15px] px-8 border border-[rgba(28,35,33,0.25)] no-underline transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                See Our Work
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-[3px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px] mb-[3px]">
              <div className="bg-white p-7 border border-[rgba(28,35,33,0.09)]">
                <div className="text-[9px] tracking-[0.26em] uppercase text-[#7a7a72] mb-4">Typical Agency</div>
                <ul className="list-none flex flex-col gap-2.5">
                  <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                    <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> One-size-fits-all retainers
                  </li>
                  <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                    <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> Junior staff, senior pricing
                  </li>
                  <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                    <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> You manage the relationship
                  </li>
                  <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                    <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> Slow to start, slower to pivot
                  </li>
                </ul>
              </div>
              <div className="bg-white p-7 border border-[rgba(28,35,33,0.09)]">
                <div className="text-[9px] tracking-[0.26em] uppercase text-[#7a7a72] mb-4">Freelance Platforms</div>
                <ul className="list-none flex flex-col gap-2.5">
                  <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                    <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> You screen, you brief, you QC
                  </li>
                  <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                    <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> No accountability after delivery
                  </li>
                  <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                    <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> Inconsistent quality
                  </li>
                  <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-[#7a7a72]">
                    <span className="flex-shrink-0 mt-0.5 text-sm">✕</span> Scattered, uncoordinated work
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#1C2321] p-7 border border-[rgba(28,35,33,0.09)]">
              <div className="text-[9px] tracking-[0.26em] uppercase text-[#44A194] mb-4">ExecuMarketing</div>
              <ul className="list-none flex flex-col gap-2.5">
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-white/85">
                  <span className="flex-shrink-0 mt-0.5 text-sm text-[#44A194]">✓</span> <strong className="text-white">We orchestrate everything.</strong> You approve outcomes.
                </li>
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-white/85">
                  <span className="flex-shrink-0 mt-0.5 text-sm text-[#44A194]">✓</span> Senior specialists on every account — QC'd before delivery
                </li>
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-white/85">
                  <span className="flex-shrink-0 mt-0.5 text-sm text-[#44A194]">✓</span> Fixed scope, clear timeline, no scope-creep surprises
                </li>
                <li className="flex gap-3 items-start text-[13px] leading-[1.6] text-white/85">
                  <span className="flex-shrink-0 mt-0.5 text-sm text-[#44A194]">✓</span> Kick off within 48 hours of your discovery call
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)] bg-[#EAE5D5]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-[72px]">
            <div>
              <div className="inline-flex items-center gap-3 font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.26em] uppercase text-[#44A194] mb-5">
                <span className="w-7 h-px bg-[#44A194]" />
                How We Work
              </div>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,4vw,56px)] font-light leading-[1.1] tracking-[-0.01em] text-[#1C2321]">
                You see <em className="italic text-[#44A194] not-italic">outcomes.</em><br />
                We manage everything else.
              </h2>
            </div>
            <div>
              <p className="text-base leading-[1.9] text-[#7a7a72] mb-3">
                Most agencies hand you a report and a Slack channel.
                We hand you <strong className="text-[#3a3a36] font-medium">delivered work.</strong>
              </p>
              <p className="text-base leading-[1.9] text-[#7a7a72] mb-3">
                Our internal model is built so that every brief is broken into tasks, assigned to the right specialist, reviewed before it reaches you, and tracked against real results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(28,35,33,0.09)]">
            {[
              { num: '01', title: 'Discovery & Scope', desc: 'We get on a call. Understand your goals, your gaps, and what\'s already been tried. No templates — every brief is written from scratch.' },
              { num: '02', title: 'Team Assembly', desc: 'We assign the right specialist for your exact brief — someone with proven experience in your category, vetted by our team.' },
              { num: '03', title: 'Execution & QC', desc: 'Work happens. Our ops team manages timelines and communication. Every deliverable is reviewed by a senior specialist before it reaches you.' },
              { num: '04', title: 'Delivery & Scale', desc: 'Structured updates. Real results. And when the first engagement is done, we identify what to scale next — so momentum doesn\'t stop.' }
            ].map((step, idx) => (
              <div key={step.num} className="bg-[#F4F0E4] p-10 md:p-8 xl:p-10 relative overflow-hidden transition-all duration-300 hover:bg-white group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194] scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-x-100" />
                <span className="text-[9px] tracking-[0.26em] uppercase text-[#44A194] mb-5 block font-medium">
                  Step {step.num}
                </span>
                <div className="font-['Cormorant_Garamond',serif] text-[22px] font-normal text-[#1C2321] mb-3.5 leading-[1.2]">
                  {step.title}
                </div>
                <p className="text-[13.5px] leading-[1.8] text-[#7a7a72]">
                  {step.desc}
                </p>
                <span className="absolute bottom-[-16px] right-[-8px] font-['Cormorant_Garamond',serif] text-[100px] font-semibold text-[rgba(68,161,148,0.06)] leading-none pointer-events-none">
                  {step.num}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)]">
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

          <div className="grid grid-cols-1 gap-px bg-[rgba(28,35,33,0.09)]">
            {[
              { num: '01', title: 'Paid Advertising', desc: 'Meta, Google, TikTok — managed end to end. Strategy, creative, live campaigns, and monthly optimisation. You don\'t touch the dashboard unless you want to.', tags: ['Meta Ads', 'Google Ads', 'TikTok Ads', 'Creative'], href: '/services/paid-media' },
              { num: '02', title: 'SEO & Content', desc: 'Keyword strategy, content briefs, on-page execution — on a fixed monthly cadence. Compounding organic growth you\'ll feel in 90 days.', tags: ['Keyword Strategy', 'On-page SEO', 'Content Briefs', 'Link Building'], href: '/services/seo-content' },
              { num: '03', title: 'Social Media Management', desc: 'Content, community, and strategy — across the channels your audience actually lives on. Briefed once, published consistently, tracked monthly.', tags: ['Instagram', 'LinkedIn', 'TikTok', 'Community'], href: '/services/social-media' },
              { num: '04', title: 'E-commerce & CRO', desc: 'Fix conversion leaks, improve AOV, clean up tracking. We audit your store, identify the gaps, and execute the fixes — before you spend another rupee on traffic.', tags: ['Shopify', 'CRO', 'Landing Pages', 'AOV'], href: '/services/ecommerce' }
            ].map((service, idx) => (
              <a key={service.num} href={service.href} className="bg-[#F4F0E4] p-12 md:p-11 xl:p-12 relative overflow-hidden no-underline transition-all duration-300 hover:bg-white group">
                <div className="absolute left-0 bottom-0 top-0 w-[3px] bg-[#44A194] scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-y-100" />
                <span className="text-[9px] tracking-[0.26em] uppercase text-[#44A194] mb-5 block font-medium">
                  {service.num} — {service.num === '01' ? 'Paid Media' : service.num === '02' ? 'Organic Growth' : service.num === '03' ? 'Social' : 'E-commerce'}
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
              </a>
            ))}
            {/* Wide card - CRM */}
            <a href="/services/crm-automation" className="bg-[#F4F0E4] p-12 md:p-11 xl:p-12 relative overflow-hidden no-underline transition-all duration-300 hover:bg-white group flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
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
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)] bg-[#1C2321] relative overflow-hidden">
        <div className="absolute top-[-60px] left-10 font-['Cormorant_Garamond',serif] text-[400px] text-white/2.5 leading-none pointer-events-none">
          "
        </div>
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-[72px]">
            <div className="inline-flex items-center gap-3 font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.26em] uppercase text-[#44A194] mb-5">
              <span className="w-7 h-px bg-[#44A194]" />
              Client Stories
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,3.8vw,52px)] font-light text-white leading-[1.15]">
              They stopped guessing.<br />
              They started <em className="italic text-[#EC8F8D] not-italic">growing.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {[
              { quote: 'We needed a paid media team fast. ExecuMarketing had someone briefed and live on our Meta campaigns within 48 hours. The quality was immediately apparent — results in the first two weeks.', name: 'Growth Lead', role: 'Funded D2C Brand' },
              { quote: 'I\'d tried three other agencies before this. The difference isn\'t just the talent — it\'s that someone is actually managing the process. I got updates without chasing anyone.', name: 'Founder', role: 'SaaS Company, Bangalore' },
              { quote: 'Our CRM setup and email automation was done in two weeks, including training. That timeline felt impossible. ExecuMarketing made it feel easy — and the results spoke immediately.', name: 'Marketing Director', role: 'Mid-Market Brand' }
            ].map((testi, idx) => (
              <div key={idx} className="bg-white/4 p-11 xl:p-[44px_40px] border-l-2 border-transparent transition-all duration-300 hover:border-l-[#EC8F8D] hover:bg-white/7">
                <p className="font-['Cormorant_Garamond',serif] text-[17px] font-light italic text-white/80 leading-[1.7] mb-7">
                  {testi.quote}
                </p>
                <div>
                  <div className="text-xs font-medium tracking-[0.14em] uppercase text-white/60 mb-0.5">
                    {testi.name}
                  </div>
                  <div className="text-[11px] text-[#44A194] tracking-[0.1em]">
                    {testi.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-[120px] px-5 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(28,35,33,0.09)]">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-[100px] items-start">
          <div>
            <div className="inline-flex items-center gap-3 font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.26em] uppercase text-[#44A194] mb-5">
              <span className="w-7 h-px bg-[#44A194]" />
              Why ExecuMarketing
            </div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(36px,3.8vw,54px)] font-light leading-[1.1] tracking-[-0.01em] text-[#1C2321] mb-6">
              Built for businesses<br />
              that can't afford <em className="italic text-[#44A194] not-italic">to get it wrong.</em>
            </h2>
            <p className="text-[15px] leading-[1.9] text-[#7a7a72] mb-8">
              Whether you're a funded startup that needs to move fast, an SMB that's been burned before, or a scaling brand that needs a reliable marketing partner — the principles are the same.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2.5 bg-[#1C2321] text-white font-['Jost',sans-serif] text-xs font-medium tracking-[0.18em] uppercase py-4 px-8 no-underline relative overflow-hidden group mt-3">
              <span className="absolute inset-0 bg-[#44A194] -translate-x-full group-hover:translate-x-0 transition-transform duration-[0.35s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              <span className="relative z-[1]">Work With Us</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-[1] transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col">
            {[
              { num: '01', title: 'We orchestrate. We don\'t just assign.', desc: 'Every project has an ops lead who owns delivery, timelines, and communication. You don\'t manage freelancers. We do — and we QC everything before it reaches you.' },
              { num: '02', title: 'Senior specialists on every account.', desc: 'We don\'t match you with whoever\'s available. We assign based on category experience, past performance, and fit with your brief. Then a senior specialist reviews the work before delivery.' },
              { num: '03', title: 'Fixed scope. No surprise invoices.', desc: 'You know exactly what you\'re getting, what the timeline is, and what it costs. No scope creep, no retainer that quietly grows, no bill for \'strategy calls\'.' },
              { num: '04', title: 'Kick off in 48 hours, not 4 weeks.', desc: 'One discovery call. Within 48 hours, your team is assembled and briefed. We don\'t drag out onboarding — we get to work.' }
            ].map((diff, idx) => (
              <div key={diff.num} className="grid grid-cols-[64px_1fr] gap-6 py-9 border-b border-[rgba(28,35,33,0.09)] first:pt-0 last:border-b-0 last:pb-0 transition-all duration-300 hover:pl-2">
                <span className="font-['Cormorant_Garamond',serif] text-[44px] font-light text-[rgba(68,161,148,0.25)] leading-none pt-1">
                  {diff.num}
                </span>
                <div>
                  <div className="text-base font-medium text-[#1C2321] mb-2.5 tracking-[0.02em]">
                    {diff.title}
                  </div>
                  <p className="text-sm leading-[1.8] text-[#7a7a72]">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Request Form Section - Your Existing Form */}
      <div className="py-12 md:py-16 px-5 sm:px-6 md:px-8 lg:px-12 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <ClientRequestForm />
        </div>
      </div>

      {/* CTA Band */}
      <section className="py-[100px] px-5 sm:px-6 md:px-8 lg:px-12 bg-[#44A194] border-b border-[rgba(28,35,33,0.09)]">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(30px,3.8vw,52px)] font-light text-white leading-[1.15] max-w-[560px]">
              Ready to fix the gaps<br />and <em className="italic">start executing?</em>
            </h2>
            <p className="text-sm text-white/65 mt-3 max-w-[500px]">
              Tell us what you need. One call. Your team activated within 48 hours.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href="/contact" className="inline-flex items-center gap-2.5 bg-white text-[#44A194] font-['Jost',sans-serif] text-xs font-semibold tracking-[0.18em] uppercase py-[18px] px-[38px] no-underline transition-all duration-300 hover:bg-[#1C2321] hover:text-white">
              <span>Book a Discovery Call</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C2321] py-[72px] px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[60px] pb-[60px] border-b border-white/8 mb-9">
            <div>
              <div className="font-['Cormorant_Garamond',serif] text-xl font-medium tracking-[0.14em] uppercase text-white mb-4">
                ExecuMarketing
              </div>
              <p className="text-[13px] leading-[1.8] text-white/40 max-w-[220px] mb-7">
                Marketing execution for businesses that can't afford to get it wrong.
              </p>
              <div className="flex gap-3.5">
                <a href="#" className="w-[34px] h-[34px] border border-white/12 flex items-center justify-center text-white/40 no-underline text-[13px] font-medium font-['Jost',sans-serif] transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                  in
                </a>
                <a href="#" className="w-[34px] h-[34px] border border-white/12 flex items-center justify-center text-white/40 no-underline text-[13px] font-medium font-['Jost',sans-serif] transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                  𝕏
                </a>
                <a href="#" className="w-[34px] h-[34px] border border-white/12 flex items-center justify-center text-white/40 no-underline text-[13px] font-medium font-['Jost',sans-serif] transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                  ig
                </a>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-medium tracking-[0.26em] uppercase text-white/40 mb-5">Services</div>
              <ul className="list-none flex flex-col gap-3">
                <li><a href="/services/paid-media" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Paid Media</a></li>
                <li><a href="/services/seo-content" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">SEO & Content</a></li>
                <li><a href="/services/social-media" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Social Media</a></li>
                <li><a href="/services/ecommerce" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">E-commerce & CRO</a></li>
                <li><a href="/services/crm-automation" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">CRM & Automation</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-medium tracking-[0.26em] uppercase text-white/40 mb-5">Company</div>
              <ul className="list-none flex flex-col gap-3">
                <li><a href="/about" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">About Us</a></li>
                <li><a href="/how-it-works" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">How It Works</a></li>
                <li><a href="/case-studies" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Our Work</a></li>
                <li><a href="/for-talent" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Join as a Specialist</a></li>
                <li><a href="/contact" className="text-[13.5px] text-white/55 no-underline transition-colors duration-300 hover:text-[#44A194]">Contact</a></li>
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-medium tracking-[0.26em] uppercase text-white/40 mb-5">Let's Talk</div>
              <p className="text-[13px] text-white/40 leading-[1.8] mb-5">
                Ready to start a project or just want to explore options? We respond within one business day.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2.5 bg-[#44A194] text-white font-['Jost',sans-serif] text-[11px] font-medium tracking-[0.18em] uppercase py-[13px] px-6 no-underline transition-all duration-300 hover:bg-[#38857a]">
                Work With Us
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[11px] text-white/25 tracking-[0.1em]">© 2026 ExecuMarketing. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="/privacy" className="text-[11px] text-white/25 no-underline tracking-[0.1em] transition-colors duration-300 hover:text-white/50">Privacy Policy</a>
              <a href="/terms" className="text-[11px] text-white/25 no-underline tracking-[0.1em] transition-colors duration-300 hover:text-white/50">Terms of Service</a>
              <a href="/contact" className="text-[11px] text-white/25 no-underline tracking-[0.1em] transition-colors duration-300 hover:text-white/50">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Add global styles for animations and nav links */}
      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .nav-link {
          background: none;
          border: none;
          font-family: 'Jost', sans-serif;
          font-size: 11.5px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7a7a72;
          cursor: pointer;
          padding: 8px 14px;
          position: relative;
          transition: color 0.3s;
          text-decoration: none;
          display: inline-block;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 14px;
          right: 14px;
          height: 1px;
          background: #44A194;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover {
          color: #1C2321;
        }
        
        .nav-link:hover::after {
          transform: scaleX(1);
        }
        
        .nav-link-mobile {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #7a7a72;
          padding: 14px 24px;
          text-decoration: none;
          display: block;
          border-bottom: 1px solid rgba(28, 35, 33, 0.09);
        }
        
        .nav-link-mobile:hover {
          color: #1C2321;
        }
        
        .hover\\:animation-play-state-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  )
}

export { HomePage }