// app/layout.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'
import './globals.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  // Determine current page from URL path
  const getCurrentPageFromPath = () => {
    const path = pathname || '/'
    if (path === '/') return 'home'
    if (path === '/business') return 'business'
    if (path === '/freelancers') return 'freelancers'
    if (path === '/about') return 'about'
    if (path === '/systems') return 'systems'
    if (path === '/how') return 'how'
    if (path === '/pricing') return 'pricing'
    return 'home'
  }

  const currentPage = getCurrentPageFromPath()

  const handleNavigation = (page: string) => {
    if (page === 'home') {
      router.push('/')
    } else if (page === 'business') {
      router.push('/business')
    } else if (page === 'freelancers') {
      router.push('/freelancers')
    } else if (page === 'about') {
      router.push('/about')
    } else if (page === 'systems') {
      router.push('/systems')
    } else if (page === 'how') {
      router.push('/how')
    } else if (page === 'pricing') {
      router.push('/pricing')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="flex flex-col min-h-screen bg-[#F4F0E4]">
          <Header activePage={currentPage} onNavClick={handleNavigation} />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}