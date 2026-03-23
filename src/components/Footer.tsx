'use client'

import React from 'react'

interface FooterLink {
  label: string
  href: string
  onClick?: () => void
}

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks: FooterLink[] = [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle smooth scroll for anchor links
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-[#F4F0E4] border-t border-[rgba(28,35,33,0.08)]">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-[26px]">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <span className="text-[10px] sm:text-xs text-[#8a8a82] tracking-[0.1em] block">
              © {currentYear} ExecuMarketing. A Finzie Company.
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[10px] sm:text-xs text-[#8a8a82] no-underline tracking-[0.1em] transition-all duration-300 hover:text-[#44A194] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#44A194] focus:ring-opacity-50 rounded px-1"
                aria-label={`${link.label} page`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Optional: Back to Top Button for mobile */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="md:hidden fixed bottom-4 right-4 bg-[#44A194] text-white p-3 rounded-full shadow-lg hover:bg-[#38857a] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#44A194] focus:ring-offset-2 z-40"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </footer>
  )
}

// Optional: Create a more comprehensive footer with multiple columns
interface FooterColumnProps {
  title: string
  links: Array<{
    label: string
    href: string
    isExternal?: boolean
  }>
}

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs sm:text-sm font-['Jost',sans-serif] font-semibold text-[#1C2321] tracking-[0.1em] uppercase">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noopener noreferrer' : undefined}
              className="text-[10px] sm:text-xs text-[#8a8a82] hover:text-[#44A194] transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Alternative: Enhanced Footer with more sections
const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = {
    company: {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    services: {
      title: 'Services',
      links: [
        { label: 'For Business', href: '/business' },
        { label: 'For Freelancers', href: '/freelancers' },
        { label: 'Enterprise', href: '/enterprise' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'FAQs', href: '/faqs' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
      ],
    },
  }

  return (
    <footer className="bg-[#F4F0E4] border-t border-[rgba(28,35,33,0.08)]">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {Object.values(footerSections).map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-6 border-t border-[rgba(28,35,33,0.08)]">
          <div className="text-center sm:text-left">
            <span className="text-[10px] sm:text-xs text-[#8a8a82] tracking-[0.1em] block">
              © {currentYear} ExecuMarketing. A Finzie Company.
            </span>
          </div>
          
          <div className="flex gap-4">
            {/* Social Links */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8a82] hover:text-[#44A194] transition-colors duration-300"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8a8a82] hover:text-[#44A194] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-[#44A194] text-white p-3 rounded-full shadow-lg hover:bg-[#38857a] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#44A194] focus:ring-offset-2 z-40"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  )
}

export { Footer, EnhancedFooter }