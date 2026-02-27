import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ChatBot from '@/components/chat-bot'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'EIL – Global Engineering Consultancy Offering Total Energy Solutions',
  description: 'Engineers India Limited (EIL) - A leading global engineering consultancy providing comprehensive solutions for oil, gas, and energy sectors. Celebrating 60 years of nation building since 1965.',
  generator: 'v0.app',
  keywords: 'Engineers India, EIL, Engineering Consultancy, Energy Solutions, Oil & Gas, Project Management',
  icons: {
    icon: [
      {
        url: '/eil-1.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/eil-1.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/eil-1.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/eil-1.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <ChatBot />
        <Analytics />
      </body>
    </html>
  )
}
