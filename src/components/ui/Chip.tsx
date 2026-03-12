import React from 'react'
import { cn } from '@/lib/utils'

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  variant?: 'default' | 'teal'
}

const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, selected = false, variant = 'default', ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-body font-400 letter-spacing-16 text-uppercase transition-all duration-300 border',
        variant === 'default' && selected
          ? 'bg-teal text-white border-teal'
          : variant === 'default'
            ? 'border-border text-carbon hover:border-teal hover:text-teal'
            : 'border-teal/20 text-teal hover:bg-teal/10',
        className
      )}
      {...props}
    />
  )
)

Chip.displayName = 'Chip'

export { Chip }
