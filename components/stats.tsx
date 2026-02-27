'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe2, Clock3, Users2, Briefcase, Plus } from 'lucide-react'

const stats = [
  {
    value: 27,
    suffix: '',
    label: 'Overseas Locations',
    sub: 'Active presence across 5 continents',
    icon: Globe2,
    gradient: 'from-[#1a6ed8] via-[#38bdf8] to-[#0ea5e9]',
  },
  {
    value: 60,
    suffix: '+',
    label: 'Years of Excellence',
    sub: 'Industrial legacy since 1965',
    icon: Clock3,
    gradient: 'from-[#0d3a6e] via-[#1a6ed8] to-[#38bdf8]',
  },
  {
    value: 2800,
    suffix: '+',
    label: 'Expert Engineers',
    sub: 'Multidisciplinary technical workforce',
    icon: Users2,
    gradient: 'from-[#0ea5e9] via-[#0d3a6e] to-[#1a6ed8]',
  },
  {
    value: 7500,
    suffix: '+',
    label: 'Milestones Achieved',
    sub: 'Global assignments completed with precision',
    icon: Briefcase,
    gradient: 'from-[#1a6ed8] via-[#38bdf8] to-[#0d3a6e]',
  },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 2500
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#0d3a6e]">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d3a6e] via-[#1a6ed8]/40 to-[#0d3a6e]" />

      {/* ── Refinery Backdrop with advanced styling ── */}
      <img
        src="/refinery_gallery.png"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none select-none"
      />

      {/* ── Glowing geometric accent ── */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#38bdf8]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#1a6ed8]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-24">
        {/* Header Strip */}
        {/* <div className="flex flex-col items-center mb-16">
          <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4">
            <p className="text-[#38bdf8] text-[10px] font-black uppercase tracking-[0.3em]">Corporate Performance</p>
          </div>
          <h3 className="text-3xl md:text-4xl font-black text-white text-center">Engineers India <span className="text-[#38bdf8]">By The Numbers</span></h3>
        </div> */}

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="group relative h-[280px] rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-white/30 hover:-translate-y-3 transition-all duration-500 p-8 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/20"
              >
                {/* Decorative Gradient Line */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${stat.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

                {/* Icon bubble */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-xl group-hover:rotate-12 transition-all duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-black text-white tracking-tighter">
                      <Counter target={stat.value} suffix={stat.suffix} />
                    </span>
                    {stat.suffix === '+' && <Plus className="w-6 h-6 text-[#38bdf8] stroke-[4]" />}
                  </div>

                  <p className="text-[#7dd3fc] text-sm font-black uppercase tracking-widest mb-2 group-hover:translate-x-1 transition-transform">
                    {stat.label}
                  </p>
                  <p className="text-white/40 text-[11px] font-bold leading-relaxed max-w-[150px]">
                    {stat.sub}
                  </p>
                </div>

                {/* Glassy detail circle */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-[#38bdf8]/20 transition-all duration-700" />
              </div>
            )
          })}
        </div>

        {/* Bottom divider with stylized info */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border border-[#38bdf8]/30 flex items-center justify-center text-[#38bdf8]">
              <Clock3 className="w-5 h-5" />
            </div>
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest">A Fortune 500 Legacy Brand since 1965</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0d3a6e] bg-slate-400" />
              ))}
            </div>
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Trusted by 250+ Global Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}
