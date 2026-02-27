'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Subtle parallax / fade-in on mount
    const el = overlayRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[80vh] min-h-[450px] overflow-hidden">
      {/* ── YouTube Background Video ── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
       <video src="/Video Project 1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover  "></video>
      </div>

      {/* ── Semi-transparent overlay for better text contrast ── */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* ── Hero Content ── */}
      <div
        ref={overlayRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-4"
      >
        {/* Badge */}
        <span
          className="inline-block mb-4 md:mb-5 px-4 md:px-5 py-1.5 text-[10px] md:text-xs font-semibold tracking-widest uppercase rounded-full"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
          }}
        >
          Engineers India Limited · Since 1965
        </span>

        {/* Headline */}
          <h1
            className="font-extrabold text-shadow-white text-shadow-2xs leading-[1.1] tracking-tight text-white mb-4 md:mb-6"
            style={{
              fontSize: 'clamp(2rem, 8vw, 5rem)',
              maxWidth: '900px',
              textShadow: '0 4px 24px rgba(0,0,0,0.5)',
            }}
          >
            61 Years of&nbsp;
            <span
              style={{
                background: 'linear-gradient(90deg, #f59e0b, #ef4444)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Engineering Excellence
            </span>
          </h1>

        {/* Sub-headline */}
        <p
          className="text-white/80 font-light leading-relaxed mb-8 md:mb-10"
          style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
            maxWidth: '680px',
            textShadow: '0 2px 10px rgba(0,0,0,0.4)',
          }}
        >
          India's premier engineering consultancy delivering world-class
          solutions in hydrocarbons, infrastructure &amp; sustainability.
        </p>

        {/* CTA Buttons */}
        {/* <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              color: '#fff',
              boxShadow: '0 8px 30px rgba(245,158,11,0.4)',
            }}
            onMouseEnter={e =>
              ((e.currentTarget as HTMLElement).style.transform = 'translateY(-3px) scale(1.03)')
            }
            onMouseLeave={e =>
              ((e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)')
            }
          >
            Explore Our Services
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.4)',
              backdropFilter: 'blur(8px)',
              color: '#fff',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(255,255,255,0.22)'
              el.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'rgba(255,255,255,0.12)'
              el.style.transform = 'translateY(0)'
            }}
          >
            Our Journey
          </a>
        </div> */}

       
      </div>

      {/* Keyframe for bounce */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}
