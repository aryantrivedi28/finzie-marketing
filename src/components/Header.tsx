'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface HeaderProps {
  activePage?: string
  onNavClick?: (page: string) => void
}

const Header = ({ activePage: propActivePage, onNavClick }: HeaderProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Determine active page from URL path
  const getActivePageFromPath = () => {
    const path = pathname || '/'
    if (path === '/') return 'home'
    if (path === '/systems') return 'systems'
    if (path === '/business') return 'business'
    if (path === '/how') return 'how'
    if (path === '/pricing') return 'pricing'
    if (path === '/about') return 'about'
    if (path === '/business') return 'business'
    return 'home'
  }

  const activePage = propActivePage || getActivePageFromPath()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleNavClick = (page: string) => {
    setIsMenuOpen(false)

    // Use Next.js router for navigation
    if (page === 'home') {
      router.push('/')
    } else if (page === 'systems') {
      router.push('/systems')
    } else if (page === 'how') {
      router.push('/how')
    } else if (page === 'pricing') {
      router.push('/pricing')
    } else if (page === 'about') {
      router.push('/about')
    } else if (page === 'business') {
      router.push('/business')
    }

    // Call the optional callback if provided
    if (onNavClick) {
      onNavClick(page)
    }

    // Focus on chat input after navigation to home
    if (page === 'home') {
      setTimeout(() => {
        const ci = document.getElementById('ci')
        if (ci) ci.focus()
      }, 400)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${isScrolled
          ? 'shadow-md bg-[#F4F0E4]/95 backdrop-blur-sm border-[rgba(28,35,33,0.08)]'
          : 'bg-[#F4F0E4] border-[rgba(28,35,33,0.08)]'
        }`}
    >
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-4 md:py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex flex-col gap-0.5 cursor-pointer group"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          >
            <span className="font-['Cormorant_Garamond',serif] text-lg sm:text-xl md:text-xl font-medium tracking-[0.12em] uppercase text-[#1C2321]">
              ExecuMarketing
            </span>
            <span className="text-[9px] tracking-[0.24em] uppercase text-[#44A194]">
              A Finzie Company
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-9">
            <NavButton
              label="Home"
              pageId="home"
              isActive={activePage === 'home'}
              onClick={() => handleNavClick('home')}
            />
            <NavButton
              label="Systems"
              pageId="systems"
              isActive={activePage === 'systems'}
              onClick={() => handleNavClick('systems')}
            />
            <NavButton
              label="For Business"
              pageId="business"
              isActive={activePage === 'business'}
              onClick={() => handleNavClick('business')}
            />
            <NavButton
              label="How It Works"
              pageId="how"
              isActive={activePage === 'how'}
              onClick={() => handleNavClick('how')}
            />
            <NavButton
              label="Pricing"
              pageId="pricing"
              isActive={activePage === 'pricing'}
              onClick={() => handleNavClick('pricing')}
            />
            <NavButton
              label="About Us"
              pageId="about"
              isActive={activePage === 'about'}
              onClick={() => handleNavClick('about')}
            />
            <button
              onClick={() => handleNavClick('home')}
              className="bg-[#44A194] text-white border-none px-5 lg:px-[22px] py-2.5 font-['Jost',sans-serif] text-[11px] tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="menu-button md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-[#1C2321] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#1C2321] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#1C2321] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fadeIn"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="mobile-menu fixed top-[73px] left-0 right-0 bg-[#F4F0E4] z-50 md:hidden shadow-lg animate-slideDown border-b border-[rgba(28,35,33,0.08)]">
              <nav className="flex flex-col p-6 gap-2">
                <MobileNavButton
                  label="Home"
                  pageId="home"
                  isActive={activePage === 'home'}
                  onClick={() => handleNavClick('home')}
                />
                <MobileNavButton
                  label="Systems"
                  pageId="systems"
                  isActive={activePage === 'systems'}
                  onClick={() => handleNavClick('systems')}
                />
                <MobileNavButton
                  label="For Business"
                  pageId="business"
                  isActive={activePage === 'business'}
                  onClick={() => handleNavClick('business')}
                />
                <MobileNavButton
                  label="How It Works"
                  pageId="how"
                  isActive={activePage === 'how'}
                  onClick={() => handleNavClick('how')}
                />
                <MobileNavButton
                  label="Pricing"
                  pageId="pricing"
                  isActive={activePage === 'pricing'}
                  onClick={() => handleNavClick('pricing')}
                />
                <MobileNavButton
                  label="About Us"
                  pageId="about"
                  isActive={activePage === 'about'}
                  onClick={() => handleNavClick('about')}
                />
                <button
                  onClick={() => handleNavClick('home')}
                  className="bg-[#44A194] text-white border-none px-6 py-3 font-['Jost',sans-serif] text-sm tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] hover:scale-105 active:scale-95 mt-4 w-full"
                >
                  Get Started
                </button>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

interface NavButtonProps {
  label: string
  pageId: string
  isActive: boolean
  onClick: () => void
}

const NavButton = ({ label, pageId, isActive, onClick }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-none border-none font-['Jost',sans-serif] text-[11px] font-normal tracking-[0.18em] uppercase pb-0.5 relative transition-colors duration-300 ${isActive ? 'text-[#1C2321]' : 'text-[#8a8a82] hover:text-[#1C2321]'
        }`}
    >
      {label}
      <span
        className={`absolute bottom-[-2px] left-0 right-0 h-[1px] bg-[#44A194] transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
      />
    </button>
  )
}

const MobileNavButton = ({ label, pageId, isActive, onClick }: NavButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-none border-none font-['Jost',sans-serif] text-base font-normal tracking-[0.18em] uppercase py-3 px-4 text-left transition-all duration-300 rounded-lg ${isActive
          ? 'text-[#44A194] bg-[#44A194]/10'
          : 'text-[#1C2321] hover:bg-[#44A194]/5'
        }`}
    >
      {label}
    </button>
  )
}

// Add these animations to your global CSS file or use a CSS-in-JS solution
const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }

  .animate-slideDown {
    animation: slideDown 0.3s ease-out;
  }
`

// Optional: Add styles to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

export { Header }