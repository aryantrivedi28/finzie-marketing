import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
})

const jost = Jost({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'ExecuMarketing - AI Matching for Marketing Talent',
  description: 'AI-powered matching platform connecting businesses with verified marketing specialists. Brief your project, get matched instantly, start within 24 hours.',
  generator: 'app',
  openGraph: {
    title: 'ExecuMarketing',
    description: 'AI-powered matching for marketing specialists',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      style={{
        '--font-display': cormorant.style.fontFamily,
        '--font-body': jost.style.fontFamily,
      } as React.CSSProperties}
      suppressHydrationWarning={true}  // Add this line
    >
      <body className="font-body antialiased bg-cream text-night">
        {children}
        <Analytics />
      </body>
    </html>
  )
}