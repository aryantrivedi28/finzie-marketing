'use client'

import React from 'react'
import { ChatInterface } from '../ChatInterface'
import ClientRequestForm  from '../../app/client-request/page'

const HomePage = () => {
  return (
    <main className="flex-1">
      <div className="flex flex-col min-h-[calc(100vh-61px)]">
        {/* Hero Section */}
        <div className="px-6 md:px-12 py-7 md:py-8 text-center flex-shrink-0">
          <h1 className="font-display text-3xl md:text-5xl font-300 text-night leading-tight animate-fade-down">
            Stop searching. <em className="text-teal italic">Let AI match you</em> to the right <span className="block">specialist.</span>
          </h1>
        </div>

        {/* Chat Container */}
        <div className="flex-1 flex flex-col max-w-full w-full mx-auto px-6 md:px-12 pb-8">
          {/* <ChatInterface /> */}
          <ClientRequestForm />
        </div>
      </div>
    </main>
  )
}

export { HomePage }
