// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import  ClientLayoutWrapper  from "../components/layout/ClientLayoutWrapper"

// Metadata for SEO
export const metadata: Metadata = {
  title: 'ExecuMarketing — Marketing Execution for Growing Businesses',
  description: 'ExecuMarketing is a full-service marketing agency that fixes conversion gaps and scales revenue. Paid media, SEO, content, social, and CRM — managed end to end.',
  keywords: 'marketing agency, paid media, SEO, content marketing, social media management, CRM, marketing execution, ecommerce marketing, CRO',
  authors: [{ name: 'ExecuMarketing' }],
  creator: 'ExecuMarketing',
  publisher: 'ExecuMarketing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'ExecuMarketing — Marketing Execution for Growing Businesses',
    description: 'We fix what\'s leaking, build what\'s missing, and scale what works — managed end to end.',
    url: 'https://execumarketing.com',
    siteName: 'ExecuMarketing',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ExecuMarketing - Marketing Execution Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExecuMarketing — Marketing Execution for Growing Businesses',
    description: 'We fix what\'s leaking, build what\'s missing, and scale what works — managed end to end.',
    images: ['/twitter-image.jpg'],
    creator: '@execumarketing',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#44A194',
      },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://execumarketing.com',
  },
}

// You need to create a client component wrapper for the interactive parts
// Since metadata requires server component, separate the client logic
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap" 
          rel="stylesheet"
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Additional meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#44A194" />
        <meta name="msapplication-TileColor" content="#44A194" />
        
        {/* RSS feed if needed */}
        <link rel="alternate" type="application/rss+xml" title="ExecuMarketing Blog" href="/feed.xml" />
      </head>
      <body>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  )
}
