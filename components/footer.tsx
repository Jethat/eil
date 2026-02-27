'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Github, Mail, ArrowRight, Send, MapPin, Phone, Printer, X, Facebook } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-300 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(59,130,246,0.3),_transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.2),_transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-24 py-16">
        {/* Main Footer Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/eil.png" 
                  alt="EIL Logo" 
                  width={180} 
                  height={60}
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Engineers India Limited (EIL) is a leading engineering consultancy and engineering, procurement, and construction (EPC) company committed to delivering world-class solutions for sustainable infrastructure development.
            </p> */}
            

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">Core-6, SCOPE Complex, 7 Lodhi Road, New Delhi - 110003, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400">+91-11-24361600</span>
              </div>
              <div className="flex items-center gap-3">
                <Printer className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-400">+91-11-24360689</span>
              </div>
            </div>
 {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex items-center gap-3">
                {[
                  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                  { icon: X, href: '#', label: 'X', color: 'hover:bg-slate-700' },
                  { icon: Facebook, href: 'mailto:corpcomm@eil.co.in', label: 'Email', color: 'hover:bg-red-500' },
                ].map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center text-slate-400 hover:text-white ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
            </div>
           
           
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5 relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'Engineering & Design',
                'Project Management',
                'Procurement',
                'Construction & Commissioning',
                'Technical Audits',
                'R&D Services',
                'Overseas Projects'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Businesses', href: '#businesses' },
                { name: 'Projects', href: '#projects' },
                { name: 'Career Opportunities', href: '#careers' },
                { name: 'Tenders', href: '#tenders' },
                { name: 'Media Center', href: '#media' },
                { name: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h4 className="font-semibold text-white mb-5 relative inline-block">
              Resources
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                'Annual Reports',
                'Corporate Policies',
                'Investor Relations',
                'Sustainability',
                'Quality Standards',
                'Certifications',
                'Download Center'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Secondary Links */}
            <div className="mb-8 pb-8 border-b border-slate-800">
            <div className="flex flex-wrap justify-between items-center gap-6">
              <div className="flex flex-wrap gap-6 text-xs text-slate-500">
              <Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <span className="w-1 h-1 bg-blue-500 rounded-full" />
                Accessibility Statement
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <span className="w-1 h-1 bg-blue-500 rounded-full" />
                Compliance
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <span className="w-1 h-1 bg-blue-500 rounded-full" />
                Investor Relations
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <span className="w-1 h-1 bg-blue-500 rounded-full" />
                Code of Conduct
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <span className="w-1 h-1 bg-blue-500 rounded-full" />
                Responsible AI
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                <span className="w-1 h-1 bg-blue-500 rounded-full" />
                Terms of Use
              </Link>
              </div>
              {/* Visitor Counter */}
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <span>Visitors:</span>
              <span className="inline-flex items-center gap-1 bg-slate-800/50 px-3 py-1 rounded border border-slate-700">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-300 font-mono">2,847,392</span>
              </span>
              </div>
            </div>
            </div>
        

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p className="flex items-center gap-2">
              <span>© 1965-2026 Engineers India Limited.</span>
              <span className="text-slate-600">|</span>
              <span>All rights reserved.</span>
            </p>
            <p className="flex items-center gap-1">
              <span>Last updated:</span>
              <span className="text-slate-400">
                {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
            </p>
          </div>
        </div>
      </div>

    
    </footer>
  )
}

