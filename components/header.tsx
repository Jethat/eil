'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import {
  Menu, X, Search, ChevronDown,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Monitor, Type, Globe, Contrast, Volume2
} from 'lucide-react'
import { toast } from 'sonner'

interface MenuItem {
  title: string
  href?: string
  items?: { name: string; href: string }[]
}
// ... (rest of the interface/constants remain the same)

const menus: MenuItem[] = [
  {
    title: 'About EIL',
    href: '/about',
    items: [
      { name: 'Overview', href: '/about/overview' },
      { name: 'History', href: '/about/history' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Awards', href: '/about/awards' },
      { name: 'Subsidiaries & JVs', href: '/about/subsidiaries-and-jvs' },
    ],
  },
  {
    title: 'Businesses',
    href: '/businesses',
    items: [
      { name: 'Overview', href: '/businesses/overview' },
      { name: 'Petroleum Refining', href: '/businesses/petroleum-refining' },
      { name: 'Onshore Oil & Gas', href: '/businesses/onshore-oil-and-gas' },
      { name: 'Offshore Oil & Gas', href: '/businesses/offshore-oil-and-gas' },
      { name: 'Pipeline', href: '/businesses/pipeline' },
      { name: 'Strategic Storages', href: '/businesses/strategic-storages' },
      { name: 'Petrochemicals', href: '/businesses/petrochemicals' },
      { name: 'Ports & Terminals', href: '/businesses/ports-and-terminals' },
      { name: 'Fertilizers', href: '/businesses/fertilizers' },
      { name: 'Mining & Metallurgy', href: '/businesses/mining-and-metallurgy' },
      { name: 'Infrastructure', href: '/businesses/infrastructure' },
      { name: 'Water & Waste Management', href: '/businesses/water-and-waste-management' },
      { name: 'Bio Fuels', href: '/businesses/bio-fuels' },
      { name: 'Green Hydrogen', href: '/businesses/green-hydrogen' },
    ],
  },
  {
    title: 'Services',
    href: '/services',
    items: [
      { name: 'Overview', href: '/services/overview' },
      { name: 'Pre FEED', href: '/services/pre-feed' },
      { name: 'FEED', href: '/services/feed' },
      { name: 'PMC', href: '/services/pmc' },
      { name: 'EPCM', href: '/services/epcm' },
      { name: 'EPC', href: '/services/epc' },
      { name: 'Research & Development', href: '/services/research-and-development' },
      { name: 'Supply Chain Management', href: '/services/supply-chain-management' },
      { name: 'Construction', href: '/services/construction' },
      { name: 'Heat & Mass Transfer', href: '/services/heat-and-mass-transfer' },
      { name: 'Plant Operation & Safety', href: '/services/plant-operation-and-safety' },
      { name: 'Environment Engineering', href: '/services/environment-engineering' },
    ],
  },
  {
    title: 'Projects',
    href: '/projects',
    items: [
      { name: 'Overview', href: '/projects/overview' },
      { name: 'Dangote Refinery and Petrochemical Project', href: '/projects/dangote-refinery-and-petrochemical-project' },
      { name: 'Rajasthan Refinery', href: '/projects/rajasthan-refinery' },
      { name: 'Visakh Refinery Modernisation Project', href: '/projects/visakh-refinery-modernisation-project' },
      { name: 'Guru Gobind Singh Polymer Addition Project', href: '/projects/guru-gobind-singh-polymer-addition-project' },
      { name: 'Bina Refinery', href: '/projects/bina-refinery' },
      { name: 'Guru Gobind Singh Refinery', href: '/projects/guru-gobind-singh-refinery' },
      { name: 'Panipat Naphtha Cracker', href: '/projects/panipat-naphtha-cracker' },
      { name: 'PFCCU MRPL Ph III', href: '/projects/pfccu-mrpl-ph-iii' },
      { name: 'Dabhol Bangalore Pipeline', href: '/projects/dabhol-bangalore-pipeline' },
      { name: 'Deen Dayal Field Development', href: '/projects/deen-dayal-field-development' },
      { name: '2nd Phase Expansion of Aluminium Smelter', href: '/projects/2nd-phase-expansion-of-aluminium-smelter' },
      { name: '2nd Phase Expansion of Alumina Refinery', href: '/projects/2nd-phase-expansion-of-alumina-refinery' },
    ],
  },
  {
    title: 'Sustainability',
    href: '/sustainability',
    items: [
      { name: 'Overview', href: '/sustainability/overview' },
      { name: 'Corporate Governance', href: '/sustainability/corporate-governance' },
      { name: 'Corporate Social Responsibility', href: '/sustainability/corporate-social-responsibility' },
      { name: 'Environment', href: '/sustainability/environment' },
      { name: 'Quality Management', href: '/sustainability/quality-management' },
      { name: 'Swachh Bharat Abhiyaan', href: '/sustainability/swachh-bharat-abhiyaan' },
      { name: 'HSE', href: '/sustainability/hse' },
      { name: 'Net Zero', href: '/sustainability/net-zero' },
    ],
  },
  {
    title: 'Careers',
    href: '/careers',
    items: [
      { name: 'Overview', href: '/careers/overview' },
      { name: 'Why Work at EIL', href: '/careers/why-work-at-eil' },
      { name: 'A Great Place to Work', href: '/careers/a-great-place-to-work' },
      { name: 'Training', href: '/careers/training' },
      { name: 'Applying to EIL', href: '/careers/applying-to-eil' },
    ],
  },
]

const utilityLinks = [
  { label: "PM's Programs", href: '#' },
  { label: 'Investors', href: '#' },
  { label: 'Suppliers', href: '#' },
  { label: 'Tenders', href: '#' },
  { label: 'Media', href: '#' },
  { label: 'Vigilance', href: '#' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

interface HeaderProps {
  isScrolled?: boolean
}

export default function Header({ isScrolled = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null)
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null)
  const [fontSize, setFontSize] = useState('normal')
  const [highContrast, setHighContrast] = useState(false)
  const [isHoveringDropdown, setIsHoveringDropdown] = useState<string | null>(null)
  const [language, setLanguage] = useState<'EN' | 'HI'>('EN')
  const [tickerPaused, setTickerPaused] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialization & Persistence
  useEffect(() => {
    if (typeof window === 'undefined') return
    const savedFontSize = localStorage.getItem('eil-font-size') || 'normal'
    const savedContrast = localStorage.getItem('eil-high-contrast') === 'true'
    const savedLang = (localStorage.getItem('eil-lang') as 'EN' | 'HI') || 'EN'

    if (savedFontSize !== 'normal') {
      setFontSize(savedFontSize)
      const root = document.documentElement
      root.style.fontSize = savedFontSize === 'small' ? '14px' : savedFontSize === 'large' ? '18px' : '16px'
    }
    if (savedContrast) {
      document.documentElement.classList.add('high-contrast')
      setHighContrast(true)
    }
    setLanguage(savedLang)
  }, [])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        setActiveMobileMenu(null)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
        setActiveMobileMenu(null)
      }
    }
    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileOpen])

  // Font size handler
  const handleFontSize = (size: 'small' | 'normal' | 'large', skipToast = false) => {
    setFontSize(size)
    localStorage.setItem('eil-font-size', size)
    const root = document.documentElement
    root.style.fontSize = size === 'small' ? '14px' : size === 'large' ? '18px' : '16px'
    if (!skipToast) toast.success(`Font size set to ${size}`)
  }

  // Contrast handler
  const toggleContrast = () => {
    const newState = !highContrast
    setHighContrast(newState)
    localStorage.setItem('eil-high-contrast', String(newState))
    document.documentElement.classList.toggle('high-contrast')
    toast.info(newState ? 'High Contrast Mode Enabled' : 'Standard Contrast Enabled')
  }

  // Language Switcher
  const toggleLanguage = () => {
    const newLang = language === 'EN' ? 'HI' : 'EN'
    setLanguage(newLang)
    localStorage.setItem('eil-lang', newLang)
    toast.info(`Language switched to ${newLang === 'EN' ? 'English' : 'Hindi'}`)
  }

  // Screen Reader Mode
  const toggleScreenReader = () => {
    toast('Screen Reader Optimization', {
      description: 'The site is now in high-accessibility mode for screen readers.',
      icon: <Volume2 className="w-4 h-4 text-primary" />,
    })
  }

  // Handle mouse enter with delay for smoother experience
  const handleMenuMouseEnter = (menuTitle: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDesktopMenu(menuTitle)
    setIsHoveringDropdown(menuTitle)
  }

  // Handle mouse leave with delay to prevent flickering
  const handleMenuMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      if (!isHoveringDropdown) {
        setActiveDesktopMenu(null)
      }
    }, 150)
  }

  // Handle dropdown mouse enter
  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setIsHoveringDropdown(activeDesktopMenu)
  }

  // Handle dropdown mouse leave
  const handleDropdownMouseLeave = (menuTitle: string) => {
    setIsHoveringDropdown(null)
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDesktopMenu(null)
    }, 150)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-primary/98 backdrop-blur-md shadow-2xl py-0'
        : 'bg-primary py-1'
        } text-white`}
      aria-label="Main Header"
    >
      {/* Top Utilities Bar */}
      <div className="hidden lg:block bg-black/20 text-[11px] py-1 px-24 border-b border-white/5">
        <div className="mx-auto max-w-8xl flex items-center justify-between">
          {/* Social Media - Left Side */}
          {/* <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="hover:text-secondary transition-all hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={14} />
              </Link>
            ))}
          </div> */}


          <div className='flex gap-1 text-right'>
            <div className='flex items-center gap-2'>
              <span className='text-xs font-semibold'>NSE</span>
              <span className='text-sm font-bold'>220.10</span>
              <span className='text-xs text-green-400'>▲ +2.16%</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs font-semibold'>BSE</span>
              <span className='text-sm font-bold'>220.05</span>
              <span className='text-xs text-red-400'>▼ -1.52%</span>
            </div>
          </div>


          <div className="flex items-center gap-6">
            {utilityLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-secondary transition-colors whitespace-nowrap opacity-80 hover:opacity-100"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-3 w-[1px] bg-white/20 mx-1" aria-hidden="true" />

            {/* Accessibility & Tools */}
            <div className="flex items-center gap-3">
              <button
                title="Screen Reader"
                className="hover:text-secondary transition-colors"
                onClick={toggleScreenReader}
              >
                <Monitor size={14} />
              </button>

              <div className="flex items-center bg-white/10 rounded-full px-2 py-0.5 gap-2">
                <button onClick={() => handleFontSize('small')} className={`hover:text-secondary text-[9px] font-bold ${fontSize === 'small' ? 'text-secondary' : ''}`}>A-</button>
                <button onClick={() => handleFontSize('normal')} className={`hover:text-secondary text-[11px] font-bold ${fontSize === 'normal' ? 'text-secondary' : ''}`}>A</button>
                <button onClick={() => handleFontSize('large')} className={`hover:text-secondary text-[13px] font-bold ${fontSize === 'large' ? 'text-secondary' : ''}`}>A+</button>
              </div>

              <button
                onClick={toggleContrast}
                title="Contrast"
                className={`hover:text-secondary transition-colors ${highContrast ? 'text-secondary' : ''}`}
              >
                <Contrast size={14} />
              </button>

              <button
                onClick={toggleLanguage}
                title="Language"
                className="hover:text-secondary transition-colors flex items-center gap-1"
              >
                <Globe size={14} />
                <span className="font-bold">{language}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto max-w-8xl  sm:px-4 lg:px-24 py-3 transition-all duration-300">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 group">
            <Link href="/" aria-label="Home" className="relative">
              <div className="absolute -inset-2 rounded-lg" />
              <Image
                src="/eil.png"
                alt="Engineers India Limited Logo"
                width={200}
                height={200}
                priority
                className=" h-14  relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 flex-1 justify-center" aria-label="Main Navigation">
            <Link
              href="/"
              className="px-4 py-2 text-sm hover:text-secondary transition-all font-semibold relative group"
            >
              HOME
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>

            {menus.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => handleMenuMouseEnter(menu.title)}
                onMouseLeave={handleMenuMouseLeave}
              >
                <Link
                  href={menu.href || '#'}
                  className={`flex items-center gap-1 px-2 py-2 rounded-lg transition-all text-sm font-semibold cursor-pointer ${activeDesktopMenu === menu.title || isHoveringDropdown === menu.title ? 'bg-white/10 text-secondary' : 'hover:bg-white/5'
                    }`}
                >
                  {menu.title.toUpperCase()}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeDesktopMenu === menu.title || isHoveringDropdown === menu.title ? 'rotate-180' : ''}`}
                  />
                </Link>

                {/* Hover Bridge - Transparent connector to prevent flickering */}
                {activeDesktopMenu === menu.title && (
                  <div
                    className="absolute top-full left-0 w-full h-4 -mt-4 z-40"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={() => handleDropdownMouseLeave(menu.title)}
                  />
                )}

                {/* Desktop Dropdown */}
                {(activeDesktopMenu === menu.title || isHoveringDropdown === menu.title) && menu.items && (
                  <div
                    className="absolute top-[calc(100%+0.5rem)] left-0 min-w-[280px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={() => handleDropdownMouseLeave(menu.title)}
                  >
                    <div className="p-2 grid gap-1">
                      {menu.items.map((item, idx) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center gap-2 px-2 py-2.5 rounded-lg text-sm transition-all duration-200 ${idx === 0
                            ? 'bg-primary/5 text-primary font-bold mb-1 hover:bg-primary/10'
                            : 'text-gray-600 hover:bg-primary hover:text-white hover:translate-x-1'
                            }`}
                        >
                          {idx !== 0 && <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-40" />}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ))}

            <Link
              href="/contact"
              className=" text-sm font-semibold"

            >
              CONTACT US
            </Link>
          </nav>

          {/* Search and Mobile Toggle */}
          <div className="flex items-center gap-2">
            <div className="relative hidden md:block group">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white/10 hover:bg-white/20 focus:bg-white text-white focus:text-primary rounded-full py-1.5 pl-4 pr-10 w-40 focus:w-64 transition-all duration-500 outline-none text-sm border border-transparent focus:border-secondary"
              />
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-primary" />
            </div>

            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden fixed inset-0 top-[60px] bg-primary z-50 overflow-y-auto animate-in slide-in-from-right duration-500"
        >
          <div className="p-6 space-y-4">
            <Link
              href="/"
              className="block text-lg font-bold border-b border-white/10 pb-4"
              onClick={() => setMobileOpen(false)}
            >
              HOME
            </Link>
            {menus.map((menu) => (
              <div key={menu.title} className="border-b border-white/10 last:border-0">
                <button
                  onClick={() => setActiveMobileMenu(activeMobileMenu === menu.title ? null : menu.title)}
                  className="w-full flex items-center justify-between py-4 text-lg font-semibold"
                >
                  {menu.title}
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${activeMobileMenu === menu.title ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeMobileMenu === menu.title && menu.items && (
                  <div className="pb-4 grid gap-3 pl-4">
                    {menu.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-white/70 hover:text-white transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Link
                href="/contact"
                className="block w-full text-center bg-secondary py-4 rounded-xl font-bold"
                onClick={() => setMobileOpen(false)}
              >
                CONTACT US
              </Link>
            </div>

            <div className="flex justify-center gap-6 pt-8 pb-12">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} className="text-white/50 hover:text-secondary">
                  <social.icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
