'use client'

import React, { useState, useRef, useEffect } from 'react'

type Message = {
  id: string
  sender: 'user' | 'ai'
  content: string | React.ReactNode
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      content: (
        <div className="flex flex-col items-center justify-center gap-3.5 py-4">
          <p className="text-[11px] text-[#8a8a82] tracking-[0.2em] uppercase">What do you want to execute?</p>
          <div className="flex flex-wrap gap-1.5 w-full justify-center">
            <Chip
              icon="📣"
              label="Build and manage our social media presence"
              onClick={() => sendMessage('Build and manage our social media presence')}
            />
            <Chip
              icon="🔍"
              label="Write SEO content for our website"
              onClick={() => sendMessage('Write SEO content for our website')}
            />
            <Chip
              icon="⚙️"
              label="Set up our CRM and marketing automation"
              onClick={() => sendMessage('Set up our CRM and marketing automation')}
            />
            <Chip
              icon="🛍️"
              label="Run paid ads for my Shopify store"
              onClick={() => sendMessage('Run paid ads for my Shopify store')}
            />
          </div>
        </div>
      )
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [step, setStep] = useState(0)
  const [gone, setGone] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 100) + 'px'
    }
  }

  const removeWelcome = () => {
    if (!gone) {
      setMessages(prev => prev.filter(msg => msg.id !== 'welcome'))
      setGone(true)
    }
  }

  const addMessage = (sender: 'user' | 'ai', content: string | React.ReactNode) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender,
      content
    }
    setMessages(prev => [...prev, newMessage])
  }

  const showTyping = () => {
    setIsTyping(true)
  }

  const hideTyping = () => {
    setIsTyping(false)
  }

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const sendMessage = async (text?: string) => {
    const messageText = text || inputValue
    if (!messageText.trim()) return

    // Remove welcome if it exists
    if (!gone) {
      removeWelcome()
    }

    // Add user message
    addMessage('user', messageText)
    setInputValue('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
    setStep(prev => prev + 1)
    
    // Show typing indicator
    showTyping()

    if (step === 0) {
      await delay(1500)
      hideTyping()
      addMessage('ai', 'Got it. Is this a <strong>one-time project</strong> or do you need <strong>ongoing support?</strong>')
    } 
    else if (step === 1) {
      await delay(1300)
      hideTyping()
      addMessage('ai', 'Understood. What\'s your rough <strong>monthly budget?</strong> No commitment — just helps us match you to the right tier of talent.')
    } 
    else if (step === 2) {
      await delay(2000)
      hideTyping()
      addMessage('ai', (
        <div>
          I've found a strong match from our verified talent pool:
          <MatchCard
            name="Sneha R."
            title="Senior Marketing Specialist"
            rating={4.9}
            projects={142}
            tags={['Paid Ads', 'Social Media', 'SEO', 'CRM']}
            fitScore={97}
            onOnboard={() => handleOnboard()}
            onSeeMore={() => handleSeeMore()}
          />
        </div>
      ))
    } 
    else {
      await delay(1200)
      hideTyping()
      addMessage('ai', 'Noted. Our team will follow up within 2 hours with a tailored recommendation. Anything else to add?')
    }
  }

  const handleOnboard = () => {
    addMessage('ai', '✓ <strong>Onboarding initiated.</strong> Sneha will receive your brief within the hour. Expect a kickoff confirmation by tomorrow morning.')
  }

  const handleSeeMore = () => {
    setInputValue('Show me more options')
    if (textareaRef.current) {
      textareaRef.current.value = 'Show me more options'
      adjustTextareaHeight()
    }
    sendMessage('Show me more options')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full max-w-[720px] w-full mx-auto">
      <div className="flex-1 flex flex-col border border-[rgba(28,35,33,0.08)] bg-white shadow-[0_16px_64px_rgba(0,0,0,0.07)] relative overflow-hidden min-h-[400px]">
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#44A194] via-[#537D96] to-[#EC8F8D]" />
        
        {/* Top Bar */}
        <div className="flex items-center gap-2.5 px-5 py-3 border-b border-[rgba(28,35,33,0.08)] bg-[#F4F0E4] flex-shrink-0">
          <div className="w-[7px] h-[7px] rounded-full bg-[#44A194] animate-[dotGlow_2.4s_infinite]" />
          <span className="text-[11px] tracking-[0.18em] uppercase text-[#3a3a36] font-normal">
            ExecuMarketing Assistant
          </span>
          <span className="ml-auto bg-[rgba(68,161,148,0.1)] text-[#44A194] text-[9px] tracking-[0.16em] uppercase px-2.5 py-1">
            Matches in &lt; 24 hrs
          </span>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-3.5 scrollbar-thin scrollbar-thumb-[rgba(28,35,33,0.08)] scrollbar-track-transparent">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex gap-2 max-w-[84%] ${
                message.sender === 'user' ? 'self-end flex-row-reverse ml-auto' : 'self-start'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-[26px] h-[26px] rounded-full flex-shrink-0 flex items-center justify-center text-[11px] mt-0.5 ${
                  message.sender === 'ai'
                    ? 'bg-[#44A194] text-white font-[\'Cormorant_Garamond\',serif] text-[13px]'
                    : 'bg-[#1C2321] text-white text-[9px] tracking-[0.04em]'
                }`}
              >
                {message.sender === 'ai' ? 'E' : 'You'}
              </div>
              
              {/* Message Bubble */}
              <div
                className={`p-[11px_15px] text-[13.5px] leading-[1.75] ${
                  message.sender === 'ai'
                    ? 'bg-[#F4F0E4] border border-[rgba(28,35,33,0.08)] text-[#3a3a36] rounded-[0_10px_10px_10px]'
                    : 'bg-[#44A194] text-white rounded-[10px_0_10px_10px]'
                }`}
              >
                {typeof message.content === 'string' ? (
                  <span dangerouslySetInnerHTML={{ __html: message.content }} />
                ) : (
                  message.content
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2 self-start">
              <div className="w-[26px] h-[26px] rounded-full bg-[#44A194] text-white flex items-center justify-center font-['Cormorant_Garamond',serif] text-[13px]">
                E
              </div>
              <div className="flex gap-1 bg-[#F4F0E4] border border-[rgba(28,35,33,0.08)] p-[10px_14px] rounded-[0_10px_10px_10px]">
                <div className="w-[5px] h-[5px] rounded-full bg-[#44A194] opacity-40 animate-[tdp_1.4s_infinite_ease-in-out]" />
                <div className="w-[5px] h-[5px] rounded-full bg-[#44A194] opacity-40 animate-[tdp_1.4s_infinite_ease-in-out] animation-delay-200" />
                <div className="w-[5px] h-[5px] rounded-full bg-[#44A194] opacity-40 animate-[tdp_1.4s_infinite_ease-in-out] animation-delay-400" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} id="cb" className="h-px" />
        </div>

        {/* Input Area */}
        <div className="flex items-end gap-2.5 px-5 py-3.5 border-t border-[rgba(28,35,33,0.08)] flex-shrink-0">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              adjustTextareaHeight()
            }}
            onKeyDown={handleKeyDown}
            placeholder="Describe your project..."
            rows={1}
            className="flex-1 bg-none border-none outline-none font-['Jost',sans-serif] text-sm font-light text-[#1C2321] resize-none max-h-[100px] leading-[1.6] placeholder:text-[#8a8a82] placeholder:italic"
          />
          <button
            onClick={() => sendMessage()}
            className="bg-[#44A194] border-none w-[34px] h-[34px] flex items-center justify-center cursor-pointer flex-shrink-0 transition-all duration-300 hover:bg-[#38857a] hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 text-center text-[10px] text-[#8a8a82] tracking-[0.1em] border-t border-[rgba(28,35,33,0.08)] flex-shrink-0">
          Matched to verified talent · AI-vetted · Onboard in 24 hrs
        </div>
      </div>
    </div>
  )
}

// Chip Component
const Chip = ({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="bg-none border-none px-3 py-1.5 cursor-pointer text-center transition-all duration-200 border border-transparent hover:border-[rgba(28,35,33,0.08)] hover:bg-white/60 group"
    >
      <span className="text-xs text-[#8a8a82] leading-[1.5] italic transition-colors duration-200 group-hover:text-[#3a3a36]">
        {label}
      </span>
    </button>
  )
}

// MatchCard Component
const MatchCard = ({ 
  name, 
  title, 
  rating, 
  projects, 
  tags, 
  fitScore,
  onOnboard,
  onSeeMore 
}: { 
  name: string
  title: string
  rating: number
  projects: number
  tags: string[]
  fitScore: number
  onOnboard: () => void
  onSeeMore: () => void
}) => {
  return (
    <div className="bg-white border border-[rgba(28,35,33,0.08)] p-4 mt-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#44A194] to-[#537D96]" />
      <div className="text-[9px] tracking-[0.2em] uppercase text-[#44A194] mb-2.5">
        ✦ Top Match — {fitScore}% Fit Score
      </div>
      <div className="flex items-center gap-2.5 mb-2.5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#44A194] to-[#537D96] flex items-center justify-center font-['Cormorant_Garamond',serif] text-[17px] text-white flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-sm font-medium text-[#1C2321] mb-0.5">{name}</h4>
          <p className="text-[11px] text-[#8a8a82]">{title} · {rating}★ · {projects} projects</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-2.5">
        {tags.map(tag => (
          <span key={tag} className="bg-[rgba(68,161,148,0.08)] text-[#44A194] text-[9px] px-2 py-0.5 tracking-[0.1em] uppercase">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={onOnboard}
          className="flex-1 bg-[#44A194] text-white border-none px-2.5 py-2 font-['Jost',sans-serif] text-[10px] tracking-[0.14em] uppercase cursor-pointer transition-colors duration-300 hover:bg-[#38857a]"
        >
          Onboard {name.split(' ')[0]}
        </button>
        <button
          onClick={onSeeMore}
          className="bg-transparent text-[#8a8a82] border border-[rgba(28,35,33,0.08)] px-3.5 py-2 font-['Jost',sans-serif] text-[10px] tracking-[0.14em] uppercase cursor-pointer transition-all duration-300 hover:border-[#44A194] hover:text-[#44A194]"
        >
          See More
        </button>
      </div>
    </div>
  )
}

export { ChatInterface }