'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import WhatsNew from '@/components/whats-new'

import Solutions from '@/components/solutions'
import Services from '@/components/services'
import GlobalPresence from '@/components/global-presence'
import Stats from '@/components/stats'
import News from '@/components/news'
import Gallery from '@/components/gallery'
import BottomCTA from '@/components/bottom-cta'
import Footer from '@/components/footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} />
      <Hero />
      <WhatsNew />
      <Solutions />
      <Services />
      <GlobalPresence />
      <Stats />
      <News />
      <Gallery />
      <BottomCTA />
      <Footer />
    </main>
  )
}
