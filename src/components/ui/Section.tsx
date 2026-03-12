import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2
}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, columns = 1, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        'py-16 px-6 md:px-12',
        columns === 2 && 'grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20',
        className
      )}
      {...props}
    />
  )
)

Section.displayName = 'Section'

const SectionEyebrow = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'text-xs font-body font-400 letter-spacing-16 text-uppercase text-teal mb-4',
      className
    )}
    {...props}
  />
))

SectionEyebrow.displayName = 'SectionEyebrow'

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'font-display text-4xl md:text-5xl font-300 text-night leading-tight mb-6',
      className
    )}
    {...props}
  />
))

SectionTitle.displayName = 'SectionTitle'

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-lg text-carbon leading-relaxed', className)}
    {...props}
  />
))

SectionDescription.displayName = 'SectionDescription'

export {
  Section,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
}
