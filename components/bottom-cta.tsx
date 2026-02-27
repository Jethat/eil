'use client'

import React from 'react'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'

export default function BottomCTA() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with deep navy and industrial overlay */}
            <div className="absolute inset-0 bg-[#0d3a6e]">
                <img
                    src="/refinery_gallery.png"
                    alt=""
                    className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                />
             
            </div>
            <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-24">
                <div className="flex flex-col items-center text-center">
                  
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="h-1 w-12 bg-[#38bdf8] rounded-full" />
                            <span className="text-[#38bdf8] text-sm font-black uppercase tracking-[0.3em]">Ready to Collaborate?</span>
                        </div>

                        <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight mb-8">
                            Let's Engineer the 
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1a6ed8] to-[#38bdf8]">Future Together</span>
                        </h2>

                        <p className="text-blue-100/70 text-lg font-medium mb-10 max-w-2xl leading-relaxed">
                            Partner with Engineers India Limited to leverage world-class expertise and six decades of industrial excellence for your next project.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <button type="button" className="px-10 py-5 bg-linear-to-r from-[#1a6ed8] to-[#38bdf8] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#1a6ed8]/20 hover:scale-105 transition-transform flex items-center gap-3 group">
                                Start a Conversation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button type="button" className="px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all">
                                Download Brochure
                            </button>
                        </div>
                        </div>
            </div>
        </section>
    )
}
