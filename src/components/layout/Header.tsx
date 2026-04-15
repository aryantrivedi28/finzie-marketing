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
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Determine active page from URL path
  const getActivePageFromPath = () => {
    const path = pathname || '/'
    if (path === '/') return 'home'
    if (path === '/systems') return 'systems'
    if (path === '/business') return 'business'
    if (path === '/how') return 'how'
    if (path === '/pricing') return 'pricing'
    if (path === '/about') return 'about'
    if (path.startsWith('/services')) return 'services'
    if (path === '/contact') return 'contact'
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false)
      }
      if (isServicesOpen && !target.closest('.services-dropdown')) {
        setIsServicesOpen(false)
        setActiveCategory(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen, isServicesOpen])

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
    setIsServicesOpen(false)
    setActiveCategory(null)

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
    } else if (page === 'services') {
      router.push('/services')
    } else if (page === 'contact'){
      router.push('/contact')
    }

    if (onNavClick) {
      onNavClick(page)
    }

    if (page === 'home') {
      setTimeout(() => {
        const ci = document.getElementById('ci')
        if (ci) ci.focus()
      }, 400)
    }
  }

  const handleServiceClick = (path: string) => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setActiveCategory(null)
    router.push(path)
  }

  // Service categories data with subcategories
  const serviceCategories = [
    {
      id: 'shopify',
      name: 'Shopify Engine',
      path: '/services/shopify',
      subcategories: [
        { name: 'Store Setup & Migration', path: '/services/shopify/store-setup' },
        { name: 'Theme Development', path: '/services/shopify/theme-development' },
        { name: 'Conversion Rate Optimization', path: '/services/shopify/cro' },
        { name: 'App Integration', path: '/services/shopify/app-integration' },
        { name: 'Shopify Plus', path: '/services/shopify/shopify-plus' },
        { name: 'Liquid Development', path: '/services/shopify/liquid-development' },
        { name: 'Checkout Optimization', path: '/services/shopify/checkout-optimization' },
        { name: 'AOV Strategy', path: '/services/shopify/aov-strategy' },
      ]
    },
    {
      id: 'ads',
      name: 'Paid Ads Engine',
      path: '/services/ads',
      subcategories: [
        { name: 'Meta Ads', path: '/services/ads/meta-ads' },
        { name: 'Google Ads', path: '/services/ads/google-ads' },
        { name: 'TikTok Ads', path: '/services/ads/tiktok-ads' },
        { name: 'LinkedIn Ads', path: '/services/ads/linkedin-ads' },
        { name: 'Twitter/X Ads', path: '/services/ads/twitter-ads' },
        { name: 'Retargeting', path: '/services/ads/retargeting' },
        { name: 'YouTube Ads', path: '/services/ads/youtube-ads' },
      ]
    },
    {
      id: 'seo',
      name: 'SEO Engine',
      path: '/services/seo',
      subcategories: [
        { name: 'Technical SEO', path: '/services/seo/technical-seo' },
        { name: 'On-Page SEO', path: '/services/seo/onpage-seo' },
        { name: 'Off-Page SEO', path: '/services/seo/offpage-seo' },
        { name: 'Keyword Research', path: '/services/seo/keyword-research' },
        { name: 'Content Briefs', path: '/services/seo/content-briefs' },
        { name: 'Local SEO', path: '/services/seo/local-seo' },
        { name: 'E-commerce SEO', path: '/services/seo/ecommerce-seo' },
        { name: 'SEO Audits', path: '/services/seo/seo-audits' },
      ]
    },
    {
      id: 'content',
      name: 'Content Engine',
      path: '/services/content',
      subcategories: [
        { name: 'Blog Writing', path: '/services/content/blog-writing' },
        { name: 'Email Newsletters', path: '/services/content/email-newsletters' },
        { name: 'Long-form Articles', path: '/services/content/longform-articles' },
        { name: 'Thought Leadership', path: '/services/content/thought-leadership' },
        { name: 'Case Studies', path: '/services/content/case-studies' },
        { name: 'Whitepapers', path: '/services/content/whitepapers' },
        { name: 'Product Descriptions', path: '/services/content/product-descriptions' },
        { name: 'Ghostwriting', path: '/services/content/ghostwriting' },
      ]
    },
    {
      id: 'social',
      name: 'Social Media Engine',
      path: '/services/social',
      subcategories: [
        { name: 'Instagram Management', path: '/services/social/instagram' },
        { name: 'LinkedIn Strategy', path: '/services/social/linkedin' },
        { name: 'Twitter/X Management', path: '/services/social/twitter' },
        { name: 'Content Calendar', path: '/services/social/content-calendar' },
        { name: 'Community Management', path: '/services/social/community-management' },
        { name: 'Social Media Strategy', path: '/services/social/strategy' },
        { name: 'Influencer Outreach', path: '/services/social/influencer-outreach' },
        { name: 'Social Analytics', path: '/services/social/analytics' },
      ]
    },
    {
      id: 'design',
      name: 'Design Engine',
      path: '/services/design',
      subcategories: [
        { name: 'UI/UX Design', path: '/services/design/ui-ux-design' },
        { name: 'Graphic Design', path: '/services/design/graphic-design' },
        { name: 'Ad Creative Design', path: '/services/design/ad-creatives' },
      ]
    }
  ]

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

            {/* Services Dropdown - Nested on Hover */}
            <div
              className="relative services-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => {
                setIsServicesOpen(false)
                setActiveCategory(null)
              }}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`bg-none border-none font-['Jost',sans-serif] text-[11px] font-normal tracking-[0.18em] uppercase pb-0.5 relative transition-colors duration-300 flex items-center gap-1 ${activePage === 'services' ? 'text-[#1C2321]' : 'text-[#8a8a82] hover:text-[#1C2321]'
                  }`}
              >
                Services
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                  className={`absolute bottom-[-2px] left-0 right-0 h-[1px] bg-[#44A194] transition-transform duration-300 origin-left ${activePage === 'services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                />
              </button>

              {/* First Level Dropdown - Categories */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-[rgba(28,35,33,0.08)] overflow-hidden transition-all duration-200 z-50 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
              >
                {serviceCategories.map((category) => (
                  <div
                    key={category.id}
                    className="relative"
                    onMouseEnter={() => setActiveCategory(category.id)}
                  >
                    {/* Category Item */}
                    <div className="flex items-center justify-between px-4 py-3 hover:bg-[rgba(68,161,148,0.05)] cursor-pointer">
                      <button
                        onClick={() => handleServiceClick(category.path)}
                        className="flex-1 text-left"
                      >
                        <span className="text-[0.85rem] font-semibold text-[#1C2321] hover:text-[#44A194] transition-colors">
                          {category.name}
                        </span>
                      </button>
                      <svg
                        className="w-3 h-3 text-[#8a8a82]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Second Level Dropdown - Subcategories (appears to the RIGHT) */}
                    {activeCategory === category.id && (
                      <div
                        className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-[rgba(28,35,33,0.08)] overflow-hidden z-50"
                        onMouseEnter={() => setActiveCategory(category.id)}   // ✅ KEEP ACTIVE
                        onMouseLeave={() => setActiveCategory(null)}         // ✅ CLOSE ONLY HERE
                      >
                        <div className="py-2">
                          <div className="px-4 py-2 border-b border-[rgba(28,35,33,0.05)]">
                            <button
                              onClick={() => handleServiceClick(category.path)}
                              className="w-full text-left text-[0.75rem] font-semibold text-[#44A194] hover:text-[#38857a] transition-colors"
                            >
                              View All {category.name} →
                            </button>
                          </div>
                          {category.subcategories.map((sub, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleServiceClick(sub.path)}
                              className="w-full text-left px-4 py-2 text-[0.75rem] text-[#8a8a82] hover:text-[#44A194] hover:bg-[rgba(68,161,148,0.05)] transition-colors"
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="border-t border-[rgba(28,35,33,0.08)] p-3 bg-[rgba(68,161,148,0.03)]">
                  <button
                    onClick={() => handleServiceClick('/services')}
                    className="w-full text-center text-[0.75rem] font-semibold text-[#44A194] hover:text-[#38857a] transition-colors"
                  >
                    View All Services →
                  </button>
                </div>
              </div>
            </div>

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
              onClick={() => handleNavClick('contact')}
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
            <div className="mobile-menu fixed top-[73px] left-0 right-0 bg-[#F4F0E4] z-50 md:hidden shadow-lg animate-slideDown border-b border-[rgba(28,35,33,0.08)] max-h-[calc(100vh-73px)] overflow-y-auto">
              <nav className="flex flex-col p-6 gap-2">
                <MobileNavButton
                  label="Home"
                  pageId="home"
                  isActive={activePage === 'home'}
                  onClick={() => handleNavClick('home')}
                />

                {/* Mobile Services Accordion with Subcategories */}
                <div className="border-b border-[rgba(28,35,33,0.08)] pb-2">
                  <MobileServicesAccordion
                    serviceCategories={serviceCategories}
                    onServiceClick={handleServiceClick}
                    setIsMenuOpen={setIsMenuOpen}
                  />
                </div>

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
                  onClick={() => handleNavClick('contact')}
                  className="bg-[#44A194] text-white border-none px-6 py-3 font-['Jost',sans-serif] text-sm tracking-[0.18em] uppercase cursor-pointer transition-all duration-300 hover:bg-[#38857a] hover:scale-105 active:scale-95 mt-4 w-full rounded-lg"
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
      className={`bg-none border-none font-['Jost',sans-serif] text-[11px] font-normal tracking-[0.18em] uppercase pb-0.5 relative transition-colors duration-300 group ${isActive ? 'text-[#1C2321]' : 'text-[#8a8a82] hover:text-[#1C2321]'
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

interface MobileServicesAccordionProps {
  serviceCategories: Array<{
    id: string
    name: string
    path: string
    subcategories: Array<{ name: string; path: string }>
  }>
  onServiceClick: (path: string) => void
  setIsMenuOpen: (open: boolean) => void
}

const MobileServicesAccordion = ({ serviceCategories, onServiceClick, setIsMenuOpen }: MobileServicesAccordionProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null)

  return (
    <div className="w-full">
      <button
        onClick={() => setIsServicesOpen(!isServicesOpen)}
        className="w-full flex items-center justify-between font-['Jost',sans-serif] text-base font-normal tracking-[0.18em] uppercase py-3 px-4 text-left transition-all duration-300 rounded-lg hover:bg-[#44A194]/5"
      >
        <span>Services</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isServicesOpen && (
        <div className="ml-4 mt-2 space-y-2">
          <button
            onClick={() => {
              onServiceClick('/services')
              setIsMenuOpen(false)
            }}
            className="w-full text-left py-2 px-3 text-[0.85rem] font-semibold text-[#44A194] hover:bg-[#44A194]/5 rounded-lg transition-colors"
          >
            All Services →
          </button>

          {serviceCategories.map((category) => (
            <div key={category.id} className="space-y-1">
              {/* Category button - click to show/hide subcategories on mobile */}
              <button
                onClick={() => setActiveMobileCategory(activeMobileCategory === category.id ? null : category.id)}
                className="w-full flex items-center justify-between py-2 px-3 text-[0.85rem] font-semibold text-[#1C2321] hover:text-[#44A194] hover:bg-[#44A194]/5 rounded-lg transition-colors"
              >
                <span>{category.name}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${activeMobileCategory === category.id ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Subcategories - visible when category is active */}
              {activeMobileCategory === category.id && (
                <div className="ml-4 space-y-1">
                  <button
                    onClick={() => {
                      onServiceClick(category.path)
                      setIsMenuOpen(false)
                    }}
                    className="w-full text-left py-1.5 px-3 text-[0.75rem] font-medium text-[#44A194] hover:bg-[#44A194]/5 rounded-lg transition-colors"
                  >
                    View All {category.name} →
                  </button>
                  {category.subcategories.map((sub, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        onServiceClick(sub.path)
                        setIsMenuOpen(false)
                      }}
                      className="w-full text-left py-1.5 px-3 text-[0.75rem] text-[#8a8a82] hover:text-[#44A194] hover:bg-[#44A194]/5 rounded-lg transition-colors"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
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

  @keyframes slideRight {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
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