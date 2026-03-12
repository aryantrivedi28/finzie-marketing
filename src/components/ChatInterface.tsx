'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Chip } from './ui/Chip'
import { ChatMessage } from './ui/ChatMessage'
import { TypingIndicator } from './ui/TypingIndicator'
import { MatchCard } from './ui/MatchCard'
import { Badge } from './ui/badge'

type ConversationStep = 'welcome' | 'service' | 'budget' | 'timeline' | 'details' | 'match'

interface Message {
  id: string
  sender: 'user' | 'ai'
  content: string
}

const CONVERSATION_FLOW = {
  welcome: {
    prompt: "What type of marketing support do you need?",
    options: ['Paid Ads', 'Social Media', 'SEO', 'CRM Setup']
  },
  service: {
    prompt: "What's your budget range?",
    options: ['Under $5K', '$5K - $25K', '$25K - $100K', '$100K+']
  },
  budget: {
    prompt: "When do you need to start?",
    options: ['Immediately', 'This week', 'This month', 'Flexible']
  },
  timeline: {
    prompt: "Tell us more about your project needs.",
    options: null
  },
  details: {
    prompt: "Finding your perfect match...",
    options: null
  },
  match: {  // Add this
    prompt: "Here are your matches!",
    options: null
  }
}

const MOCK_MATCHES = [
  {
    name: 'Sarah Chen',
    title: 'PPC Specialist',
    specialty: 'Paid Ads',
    match: 98,
    available: true
  },
  {
    name: 'Marcus Johnson',
    title: 'Social Media Manager',
    specialty: 'Social Media',
    match: 96,
    available: true
  },
  {
    name: 'Elena Rodriguez',
    title: 'SEO Expert',
    specialty: 'SEO',
    match: 94,
    available: true
  }
]

const ChatInterface = () => {
  const [step, setStep] = useState<ConversationStep>('welcome')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      content: 'Stop searching. Let AI match you to the right marketing specialist.'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleChipClick = (option: string) => {
    // Add user message
    setMessages(prev => [...prev, {
      id: String(Date.now()),
      sender: 'user',
      content: option
    }])
    setInputValue('')

    // Simulate typing
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)

      // Move to next step
      let nextStep: ConversationStep = 'welcome'
      if (step === 'welcome') nextStep = 'service'
      else if (step === 'service') nextStep = 'budget'
      else if (step === 'budget') nextStep = 'timeline'
      else if (step === 'timeline') nextStep = 'details'
      else if (step === 'details') nextStep = 'match'

      setStep(nextStep)

      // Add AI response
      if (nextStep === 'match') {
        setMessages(prev => [...prev, {
          id: String(Date.now()),
          sender: 'ai',
          content: 'Perfect! I found 3 specialists who match your needs. Click to view profiles.'
        }])
      } else if (CONVERSATION_FLOW[nextStep].prompt) {
        setMessages(prev => [...prev, {
          id: String(Date.now()),
          sender: 'ai',
          content: CONVERSATION_FLOW[nextStep].prompt
        }])
      }
    }, 1500)
  }

  const handleInputSubmit = () => {
    if (!inputValue.trim()) return

    setMessages(prev => [...prev, {
      id: String(Date.now()),
      sender: 'user',
      content: inputValue
    }])
    setInputValue('')

    if (step === 'timeline') {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setStep('details')
        setMessages(prev => [...prev, {
          id: String(Date.now()),
          sender: 'ai',
          content: CONVERSATION_FLOW.details.prompt
        }])

        setTimeout(() => {
          setStep('match')
          setMessages(prev => [...prev, {
            id: String(Date.now()),
            sender: 'ai',
            content: 'Perfect! I found 3 specialists who match your needs. Click to view profiles.'
          }])
        }, 2000)
      }, 1500)
    }
  }

  const currentFlow = CONVERSATION_FLOW[step]
  const showOptions = currentFlow.options && step !== 'match'
  const showMatches = step === 'match'

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-border shadow-lg overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-cream flex-shrink-0">
        <div className="w-2 h-2 rounded-full bg-teal animate-dot-glow" />
        <span className="text-xs font-body font-500 letter-spacing-18 text-uppercase text-carbon">
          Talent Matching
        </span>
        <Badge variant="teal" className="ml-auto text-xs">
          AI-Powered
        </Badge>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            sender={message.sender}
            content={message.content}
          />
        ))}

        {isTyping && <TypingIndicator />}

        {/* Matches Display */}
        {showMatches && !isTyping && (
          <div className="grid gap-4 pt-4">
            {MOCK_MATCHES.map((match, idx) => (
              <MatchCard
                key={idx}
                name={match.name}
                title={match.title}
                specialty={match.specialty}
                match={match.match}
                available={match.available}
              />
            ))}
          </div>
        )}

        {/* Suggestion Chips */}
        {showOptions && !isTyping && (
          <div className="flex flex-wrap gap-2 pt-4">
            {currentFlow.options?.map(option => (
              <Chip
                key={option}
                onClick={() => handleChipClick(option)}
                className="text-xs"
              >
                {option}
              </Chip>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-5 py-4 border-t border-border bg-cream flex-shrink-0">
        {step === 'timeline' && (
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit()}
              placeholder="Describe your project..."
              className="flex-1"
            />
            <Button
              size="default"
              onClick={handleInputSubmit}
              disabled={!inputValue.trim()}
            >
              Send
            </Button>
          </div>
        )}
        {step !== 'timeline' && step !== 'match' && (
          <div className="text-xs text-stone text-center font-body">
            Choose from the options above
          </div>
        )}
        {step === 'match' && (
          <div className="text-xs text-stone text-center font-body">
            View specialist profiles and get started
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 bg-cream/50 border-t border-border text-xs text-stone text-center font-body letter-spacing-16">
        Matched to verified talent · AI-vetted · Onboard in 24 hrs
      </div>
    </div>
  )
}

export { ChatInterface }
