'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Globe, MapPin, ChevronRight, Trophy } from 'lucide-react'

const highlights = [
  { text: 'Significant footprints in MENA Region', icon: Globe },
  { text: 'Engineering Hub in Abu Dhabi', icon: MapPin },
  { text: 'Fortune 500 Clients Worldwide', icon: Trophy },
]

export default function GlobalPresence() {
  return (
    <section
      id="presence"
      className="relative bg-white border-t-8 border-[#1a6ed8] overflow-hidden py-24"
    >
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f0f6ff]/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* ── Left: Text Column ── */}
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-1 w-12 bg-gradient-to-r from-[#1a6ed8] to-[#38bdf8] rounded-full" />
              <span className="text-[#1a6ed8] text-sm font-black uppercase tracking-[0.2em]">Global Influence</span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-black text-[#0d3a6e] leading-[1.1] mb-8">
              Expanding Our<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a6ed8] to-[#38bdf8]">Industrial Horizon</span>
            </h2>

            {/* <p className="text-slate-500 text-lg font-medium mb-12 max-w-lg leading-relaxed">
              With over six decades of engineering excellence, we've built a global network that spans across continents, delivering complex solutions to the world's most demanding sectors.
            </p> */}

            {/* Highlight List */}
            <div className="grid grid-cols-1 gap-2 mb-12">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-4 p-2 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-[#1a6ed8]/10 hover:border-[#1a6ed8]/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#1a6ed8] group-hover:scale-110 transition-all">
                    <item.icon className="w-4 h-4  text-[#1a6ed8] group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-[#0d3a6e] font-bold text-lg group-hover:text-[#1a6ed8] transition-colors">{item.text}</p>
                    <div className="h-0.5 w-0 group-hover:w-full bg-[#38bdf8] transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="#"
              className="inline-flex items-center gap-3 bg-[#0d3a6e] hover:bg-[#1a6ed8] text-white text-lg font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-[#0d3a6e]/20 active:scale-95 group"
            >
              Learn More About Our Reach
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── Right: Map Image ── */}
          <div className="relative p-8 lg:p-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a6ed8]/10 to-transparent rounded-full blur-[100px] animate-pulse" />
            <div className="relative w-full h-full aspect-video  overflow-hidden bg-white shadow-2xl border-8 border-slate-50 group">
              <Image
                src="/map.gif"
                alt="Global Presence Map"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-[3s]"
                unoptimized
              />

              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 p-6 rounded-3xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/50 animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#38bdf8] flex items-center justify-center text-white">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#0d3a6e]">70+</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
