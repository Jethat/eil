'use client'

import { Calendar, ArrowRight, Building2, Factory, Landmark, Cpu, Bell, ExternalLink } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const newsItems = [
  {
    id: 1,
    date: '26 Feb 2026',
    title: 'EIL Secures Major PMC Contract for Refinery Modernization Project',
    description:
      'Engineers India Limited has been awarded a prestigious project management consultancy contract for a major refinery modernization project worth ₹2,500 crore.',
    category: 'Projects',
    color: '#1a6ed8',
  },
  {
    id: 2,
    date: '15 Feb 2026',
    title: 'EIL Showcases Green Hydrogen Solutions at Energy Summit 2026',
    description:
      'Presented cutting-edge green hydrogen production models and carbon-capture integration achieving industry-leading efficiency benchmarks.',
    category: 'Events',
    color: '#0ea5e9',
  },
  {
    id: 3,
    date: '08 Feb 2026',
    title: 'EIL Expands MENA Footprint with New Abu Dhabi Engineering Hub',
    description:
      'Established a state-of-the-art engineering hub in Abu Dhabi to serve Fortune 500 clients across the Middle East and North Africa region.',
    category: 'Expansion',
    color: '#0d3a6e',
  },
  {
    id: 4,
    date: '31 Jan 2026',
    title: 'EIL Wins Prestigious National Engineering Excellence Award',
    description:
      'Received national recognition for breakthrough work in sustainable infrastructure development and project engineering.',
    category: 'Recognition',
    color: '#1a6ed8',
  },
  {
    id: 5,
    date: '22 Jan 2026',
    title: 'Record Growth: EIL Reports Strong Q3 Order Book of ₹14,000 Cr',
    description:
      'Strong financial performance driven by hydrocarbon, fertiliser and infrastructure sector projects across domestic and international markets.',
    category: 'Financial',
    color: '#0ea5e9',
  },
]

const expertiseCards = [
  {
    icon: Factory,
    title: 'Refinery & Petrochemical',
    description: 'World-class refinery design, FEED and engineering services for the hydrocarbon sector.',
    image: '/refinery_gallery.png',
    accent: '#1a6ed8',
  },
  {
    icon: Landmark,
    title: 'Infrastructure Development',
    description: 'Sustainable pipelines, terminals, storage and utility infrastructure solutions.',
    image: '/pipeline_gallery.png',
    accent: '#0d3a6e',
  },
  {
    icon: Cpu,
    title: 'Digital Engineering',
    description: 'Smart plant technologies, AI-driven project controls and digital twin solutions.',
    image: '/chemical_plant_gallery.png',
    accent: '#0ea5e9',
  },
]

const categoryColors: Record<string, string> = {
  Projects: 'text-blue-600 bg-blue-50',
  Events: 'text-sky-600 bg-sky-50',
  Expansion: 'text-indigo-600 bg-indigo-50',
  Recognition: 'text-cyan-600 bg-cyan-50',
  Financial: 'text-blue-600 bg-blue-50',
}

function NewsMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const doubled = [...newsItems, ...newsItems]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let animId: number
    let startTime: number | null = null
    const speed = 0.04

    const step = (ts: number) => {
      if (!startTime) startTime = ts
      if (paused) {
        startTime = ts - (track.scrollTop / speed)
        animId = requestAnimationFrame(step)
        return
      }
      const elapsed = ts - startTime
      const scrollPos = (elapsed * speed) % (track.scrollHeight / 2)
      track.scrollTop = scrollPos
      animId = requestAnimationFrame(step)
    }
    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [paused])

  return (
    <div
      ref={trackRef}
      className="h-[550px] overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {doubled.map((item, idx) => (
        <div
          key={`${item.id}-${idx}`}
          className="group mb-4 mx-2 p-6 rounded-2xl border border-slate-100 bg-white/70 backdrop-blur-sm hover:border-[#1a6ed8]/40 hover:shadow-xl hover:shadow-[#1a6ed8]/5 transition-all duration-500 cursor-pointer relative overflow-hidden"
        >
          <div className={`absolute top-0 left-0 w-1 h-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} style={{ backgroundColor: item.color }} />

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <Calendar size={14} className="text-[#1a6ed8]" />
              {item.date}
            </div>
            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${categoryColors[item.category]}`}>
              {item.category}
            </span>
          </div>

          <h3 className="text-base font-bold text-[#0d3a6e] mb-2 leading-tight group-hover:text-[#1a6ed8] transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="flex items-center gap-2 text-[#1a6ed8] text-xs font-bold group-hover:gap-3 transition-all duration-300">
            Read Full Article <ArrowRight size={14} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function News() {
  return (
    <section id="news" className="py-24 bg-[#f8fbff] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#1a6ed8] to-[#38bdf8] shadow-lg shadow-[#1a6ed8]/20">
                <Bell className="w-5 h-5 text-white animate-bounce" />
              </div>
              <p className="text-[#1a6ed8] text-sm font-black tracking-[0.2em] uppercase">Newsroom</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d3a6e] leading-tight">
              Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a6ed8] to-[#38bdf8]">Insights & Updates</span>
            </h2>
          </div>
          <p className="text-slate-500 text-lg font-medium max-w-md hidden lg:block"> Our global engineers are constantly pushing boundaries. Stay updated with the latest from EIL. </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* News Feed - Left */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-50 mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <span className="text-sm font-black text-[#0d3a6e] uppercase tracking-widest">Live Bulletins</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">Auto-updating</span>
              </div>

              <NewsMarquee />

              <button className="w-full mt-4 py-5 rounded-2xl bg-[#0d3a6e] text-white font-bold text-base hover:bg-[#1a6ed8] transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl shadow-[#0d3a6e]/10">
                Access Media Center
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Featured Expertise - Right */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="w-5 h-5 text-[#1a6ed8]" />
              <h3 className="text-sm font-black text-[#0d3a6e] uppercase tracking-[0.2em]">Our Excellence</h3>
            </div>

            {expertiseCards.map((card, i) => (
              <div
                key={i}
                className="group relative h-48 overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl hover:shadow-[#1a6ed8]/20 transition-all duration-500 cursor-pointer"
              >
                {/* Image Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-125 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0d3a6e]/95 via-[#0d3a6e]/60 to-transparent group-hover:from-[#1a6ed8]/90 group-hover:via-[#1a6ed8]/40 transition-colors duration-700" />
                </div>

                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <card.icon className="w-6 h-6 text-white group-hover:text-[#1a6ed8] transition-colors" />
                  </div>
                  <h4 className="text-xl font-black text-white mb-2 group-hover:translate-x-2 transition-transform duration-500">
                    {card.title}
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    {card.description}
                  </p>

                  <div className="absolute right-8 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="pt-6">
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-[#1a6ed8] to-[#0ea5e9] text-white relative overflow-hidden group shadow-2xl shadow-blue-500/20">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <h5 className="text-2xl font-black mb-3 italic">Partner with the Leaders</h5>
                <p className="text-blue-50 text-sm mb-6 max-w-xs font-medium">Over 6 decades of experience in delivering complex global assignments.</p>
                <button className="px-6 py-3 rounded-xl bg-white text-[#0d3a6e] font-black text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all">Get in Touch</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
