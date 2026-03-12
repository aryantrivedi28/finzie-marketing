import React from 'react'

const TypingIndicator = () => {
  return (
    <div className="flex gap-2 animate-fade-down">
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-steel-blue text-white text-xs font-bold">
        AI
      </div>
      <div className="flex items-center gap-1 px-4 py-3 rounded-lg bg-cream-dark">
        <div className="w-2 h-2 bg-stone rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-stone rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-stone rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  )
}

export { TypingIndicator }
