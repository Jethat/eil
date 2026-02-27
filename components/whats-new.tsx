'use client'

import React from 'react'
import { FileText } from 'lucide-react'

const tickerItems = [
    {
        text: "100 Days Campaign for Dividend Claims & KYC Updates .",
        size: "454.28 KB",
    },
    {
        text: "Unaudited Financial Results - Q1, FY2025-26 .",
        size: "4.97 MB",
    },
    {
        text: "Circular - Closure of Trading Window for Trading in EIL Securities .",
        size: "2.31 MB",
    }
]

export default function WhatsNew() {
    return (
        <div className="relative w-full border-b border-gray-200 shadow-sm flex  md:flex-row h-auto md:h-20 overflow-hidden">
            {/* Title Section */}
            <div className="bg-[#2d529f] text-white flex items-center  md:justify-start px-8 py-2 md:py-0 font-bold text-lg whitespace-nowrap z-20 shadow-[5px_0_15px_rgba(0,0,0,0.15)]">
                What's New
            </div>

            {/* Ticker Section */}
            <div className="relative flex-1 bg-[#fdf9d8] flex items-center overflow-hidden">
                <div className="animate-marquee flex whitespace-nowrap items-center py-2 px-4 hover:[animation-play-state:paused] cursor-pointer">
                    {/* Repeating items for infinite loop effect */}
                    {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
                        <div key={idx} className="flex items-center text-[13px] text-gray-800 font-semibold transition-all">
                            <span className="hover:text-[#2d529f]">{item.text}</span>
                            <div className="flex items-center gap-1 mx-2">
                                <FileText size={14} className="text-black" strokeWidth={2.5} />
                                <span className="text-[12px] font-normal text-gray-600">({item.size})</span>
                            </div>
                            <span className="mx-6 text-gray-400 font-normal">|</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </div>
    )
}
