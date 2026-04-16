'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import ClientRequestForm from '../components/client-request'

// Import all sections
import Hero from '../components/sections/Hero'
import LogoStrip from '../components/sections/LogoStrip'
import ProblemSection from '../components/sections/ProblemSection'
import ProcessSection from '../components/sections/ProcessSection'
import ServicesSection from '../components/sections/ServicesSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import WhyUsSection from '../components/sections/WhyUsSection'
import CTABand from '../components/sections/CtaBand'


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
      {/* Grain Overlay */}
      <div
        className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.028]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }}
      />

      {/* <Header /> */}

      <Hero />
      <LogoStrip />
      <ProblemSection />
      <ProcessSection />
      <ServicesSection />
      <TestimonialsSection />
      {/* Client Request Form Section - Your Existing Form */}
      <div className="py-12 md:py-16 px-5 sm:px-6 md:px-8 lg:px-12 border-t border-[rgba(28,35,33,0.08)]">
        <div className="max-w-7xl mx-auto">
          <ClientRequestForm />
        </div>
      </div>
      <WhyUsSection />

      

      <CTABand
        title="Start Growing Today"
        description="Scale your business with our systems"
        primaryText="Get Started"
        primaryHref="/contact"
      />
      {/* <Footer /> */}

      {/* Global styles for animations */}
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
        
        .hover\\:animation-play-state-paused:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  )
}

export default HomePage;