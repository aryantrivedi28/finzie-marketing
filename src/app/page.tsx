'use client'

import { useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HomePage } from '../components/pages/HomePage'
import { ForBusinessPage } from '../components/pages/ForBusinessPage'
import { ForFreelancersPage } from '../components/pages/ForFreelancersPage'
import { AboutPage } from '../components/pages/AboutPage'

type PageType = 'home' | 'business' | 'freelancers' | 'about'

export default function Page() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const handleNavigation = (page: string) => {
    setCurrentPage(page as PageType)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'business':
        return <ForBusinessPage onNavigate={handleNavigation} />
      case 'freelancers':
        return <ForFreelancersPage />
      case 'about':
        return <AboutPage />
      case 'home':
      default:
        return <HomePage />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Header activePage={currentPage} onNavClick={handleNavigation} />
      {renderPage()}
      <Footer />
    </div>
  )
}
