// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import ClientLayoutWrapper from "../components/layout/ClientLayoutWrapper";

// Simplified Metadata for SEO - Fixed for SEMrush visibility
export const metadata: Metadata = {
  title: {
    default: 'ExecuMarketing - Marketing Execution Agency for Growing Businesses',
    template: '%s | ExecuMarketing'
  },
  description: 'Full-service marketing agency fixing conversion gaps and scaling revenue. Paid media, SEO, content, social media, and CRM - managed end to end.',
  keywords: ['marketing agency', 'paid media', 'SEO services', 'content marketing', 'social media management', 'CRM', 'ecommerce marketing', 'CRO', 'marketing execution'],
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
    title: 'ExecuMarketing - Marketing Execution for Growing Businesses',
    description: 'We fix what\'s leaking, build what\'s missing, and scale what works - managed end to end.',
    url: 'https://execumarketing.com',
    siteName: 'ExecuMarketing',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ExecuMarketing - Marketing Execution Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExecuMarketing - Marketing Execution for Growing Businesses',
    description: 'We fix what\'s leaking, build what\'s missing, and scale what works - managed end to end.',
    images: ['/twitter-image.jpg'],
  },
  icons: {
    icon: '/exeicon.png',
    shortcut: '/exeicon.png',
    apple: '/exeicon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://execumarketing.com',
  },
  category: 'marketing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport - Critical for mobile SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Theme Colors */}
        <meta name="theme-color" content="#44A194" />
        
        {/* RSS Feed */}
        <link rel="alternate" type="application/rss+xml" title="ExecuMarketing Blog" href="/feed.xml" />
      </head>
      <body>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}