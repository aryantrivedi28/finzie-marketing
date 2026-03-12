'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

interface HeaderProps {
  activePage: string
  onNavClick: (page: string) => void
}

const Header = ({ activePage, onNavClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-12 py-5 border-b border-border bg-cream">
      <Link
        href="/"
        onClick={() => onNavClick('home')}
        className="flex flex-col gap-0.5 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <div className="font-display text-xl font-500 letter-spacing-12 text-uppercase text-night">
          ExecuMarketing
        </div>
        <div className="text-xs letter-spacing-24 text-uppercase text-teal font-body font-400">
          Talent Matching
        </div>
      </Link>

      <nav className="flex items-center gap-9">
        <NavButton
          label="For Business"
          isActive={activePage === 'business'}
          onClick={() => onNavClick('business')}
        />
        <NavButton
          label="For Freelancers"
          isActive={activePage === 'freelancers'}
          onClick={() => onNavClick('freelancers')}
        />
        <NavButton
          label="About"
          isActive={activePage === 'about'}
          onClick={() => onNavClick('about')}
        />
        {/* <Button
          variant="primary"
          size="sm"
          onClick={() => onNavClick('home')}
        >
          Post a Project
        </Button> */}
      </nav>
    </header>
  )
}

interface NavButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

const NavButton = ({ label, isActive, onClick }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-body font-400 letter-spacing-18 text-uppercase pb-0.5 relative transition-colors duration-300 ${isActive ? 'text-night' : 'text-stone hover:text-night'
        }`}
    >
      {label}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-teal transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'
          }`}
      />
    </button>
  )
}

export { Header }
