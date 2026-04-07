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
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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
      ; (window as any).seeAllSystems = seeAllSystems
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
      <div className="flex flex-col min-h-screen">

        {/* Hero Section - Updated to match HTML */}
        <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8 text-center flex-shrink-0">
          <h1 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#1C2321] leading-[1.15] tracking-[-0.01em] max-w-4xl mx-auto">
            Plug-and-play execution<br />for <em className="text-[#44A194] italic not-italic">growing businesses.</em>
          </h1>
          <p className="text-sm text-[#8a8a82] mt-2.5 max-w-2xl mx-auto font-['Jost',sans-serif] leading-[1.75]">
            Tell us what's not working. We activate the right system.
          </p>
        </div>

        {/* Your Existing ClientRequestForm - Preserved */}
        <div className="py-12 md:py-16 px-5 sm:px-6 md:px-8 lg:px-12 border-t border-[rgba(28,35,33,0.08)]">
          <div className="max-w-7xl mx-auto">
            <ClientRequestForm />
          </div>
        </div>

        {/* Stats Bar - From HTML */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[rgba(28,35,33,0.08)]">
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
              6
            </div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Countries</div>
          </div>
          <div className="p-7 sm:p-11 border-r border-[rgba(28,35,33,0.08)] last:border-r-0 hover:bg-[rgba(68,161,148,0.03)] transition-all duration-300">
            <div className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl font-light leading-[1] text-[#1C2321] mb-2">
              4<span className="text-[#44A194] text-xl sm:text-2xl">+ Yrs</span>
            </div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#8a8a82] font-['Jost',sans-serif]">Track Record</div>
          </div>
        </div>

        {/* Four Engines Section - From HTML */}
        <div className="border-t border-[rgba(28,35,33,0.08)] py-12 md:py-16 px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-6 h-px bg-[#44A194]"></span>
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#44A194] font-['Jost',sans-serif]">What We Offer</span>
              </div>
              <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light leading-[1.12] text-[#1C2321]">
                Four execution systems.<br />One partner.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(28,35,33,0.08)]">
              {/* Engine 1 */}
              <div className="bg-[#F4F0E4] p-7 sm:p-9 relative overflow-hidden transition-all duration-300 hover:bg-white">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#EC8F8D]"></div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#EC8F8D] mb-3">Engine 01</div>
                <div className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] mb-2.5">Store Engine</div>
                <div className="text-xs text-[#8a8a82] leading-[1.75] mb-5">Fix conversion leaks, improve AOV, clean up tracking. Before you scale anything.</div>
                <button onClick={() => router.push('/systems')} className="bg-transparent text-[#1C2321] border border-[rgba(28,35,33,0.22)] px-5 py-2 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                  See Details →
                </button>
              </div>

              {/* Engine 2 */}
              <div className="bg-[#F4F0E4] p-7 sm:p-9 relative overflow-hidden transition-all duration-300 hover:bg-white">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#44A194]"></div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#44A194] mb-3">Engine 02</div>
                <div className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] mb-2.5">Paid Ads Engine</div>
                <div className="text-xs text-[#8a8a82] leading-[1.75] mb-5">Meta and Google — managed end to end. Strategy, creative, live campaigns, and monthly optimisation.</div>
                <button onClick={() => router.push('/systems')} className="bg-transparent text-[#1C2321] border border-[rgba(28,35,33,0.22)] px-5 py-2 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                  See Details →
                </button>
              </div>

              {/* Engine 3 */}
              <div className="bg-[#F4F0E4] p-7 sm:p-9 relative overflow-hidden transition-all duration-300 hover:bg-white">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#537D96]"></div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#537D96] mb-3">Engine 03</div>
                <div className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] mb-2.5">SEO Engine</div>
                <div className="text-xs text-[#8a8a82] leading-[1.75] mb-5">Keyword strategy, content briefs, on-page execution. Compounding organic growth on a fixed monthly cadence.</div>
                <button onClick={() => router.push('/systems')} className="bg-transparent text-[#1C2321] border border-[rgba(28,35,33,0.22)] px-5 py-2 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                  See Details →
                </button>
              </div>

              {/* Engine 4 */}
              <div className="bg-[#F4F0E4] p-7 sm:p-9 relative overflow-hidden transition-all duration-300 hover:bg-white">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#EC8F8D]"></div>
                <div className="text-[10px] tracking-[0.22em] uppercase text-[#EC8F8D] mb-3">Engine 04</div>
                <div className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl font-light text-[#1C2321] mb-2.5">Content Engine</div>
                <div className="text-xs text-[#8a8a82] leading-[1.75] mb-5">Social, email, long-form — on a defined schedule. Briefed once, published consistently.</div>
                <button onClick={() => router.push('/systems')} className="bg-transparent text-[#1C2321] border border-[rgba(28,35,33,0.22)] px-5 py-2 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]">
                  See Details →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Band - Dark */}
        <div className="bg-[#1C2321] py-12 sm:py-16 px-5 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-['Cormorant_Garamond',serif] text-2xl sm:text-3xl md:text-4xl font-light text-white leading-[1.2]">
                Fix what's leaking.<br />Scale what <em className="italic text-[#EC8F8D] not-italic">works.</em>
              </h2>
              <p className="text-sm text-white/45 mt-2 font-['Jost',sans-serif]">One call. Right engine activated within 48 hours.</p>
            </div>
            <button
              onClick={() => {
                const ci = document.getElementById('ci')
                if (ci) ci.focus()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="bg-[#EC8F8D] text-white border-none px-8 py-3 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#e07a78] hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Get Started →
            </button>
          </div>
        </div>



      </div>
    </main>
  )
}

export { HomePage }