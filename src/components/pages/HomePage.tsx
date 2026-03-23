'use client'

import React from 'react'
import dynamic from 'next/dynamic'
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
  return (
    <main className="flex-1 min-h-screen bg-[#F4F0E4]">
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12 text-center flex-shrink-0">
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#1C2321] leading-[1.2] md:leading-[1.25] tracking-[-0.01em] animate-fade-down max-w-5xl mx-auto">
            Stop searching.{' '}
            <em className="text-[#44A194] italic not-italic font-medium">
              Let AI match you
            </em>{' '}
            to the right{' '}
            <span className="block sm:inline">
              specialist.
            </span>
          </h1>
          
          {/* Optional Subtitle */}
          <p className="text-sm sm:text-base text-[#8a8a82] mt-4 md:mt-6 max-w-2xl mx-auto font-['Jost',sans-serif]">
            Get matched with vetted marketing specialists in under 24 hours.
            Start your project today.
          </p>
        </div>

        {/* Form Container */}
        <div className="flex-1 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-8 md:pb-12">
          <ClientRequestForm />
        </div>
      </div>
    </main>
  )
}

export { HomePage }