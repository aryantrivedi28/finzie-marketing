import React from 'react'
import { cn } from '@/lib/utils'

interface ChatMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  sender: 'user' | 'ai'
  content: string
}

const ChatMessage = React.forwardRef<HTMLDivElement, ChatMessageProps>(
  ({ sender, content, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex gap-3 animate-fade-down', sender === 'user' && 'flex-row-reverse', className)}
      {...props}
    >
      <div
        className={cn(
          'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold',
          sender === 'user' ? 'bg-teal text-white' : 'bg-steel-blue text-white'
        )}
      >
        {sender === 'user' ? 'U' : 'AI'}
      </div>
      <div
        className={cn(
          'max-w-xs px-4 py-3 rounded-lg text-sm font-body text-carbon leading-relaxed',
          sender === 'user'
            ? 'bg-teal/10 text-teal'
            : 'bg-cream-dark text-night'
        )}
      >
        {content}
      </div>
    </div>
  )
)

ChatMessage.displayName = 'ChatMessage'

export { ChatMessage }
