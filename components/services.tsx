'use client'

import Link from 'next/link'

const cards = [
    {
        id: 'businesses',
        label: 'BUSINESSES',
        href: '/businesses',
        icon: (
            /* Offshore oil rig / platform */
            <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
                {/* Sea */}
                <path d="M4 50 Q20 44 40 50 Q60 56 76 50" stroke="#1a6ed8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M4 56 Q20 50 40 56 Q60 62 76 56" stroke="#1a6ed8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
                {/* Platform legs */}
                <line x1="24" y1="44" x2="18" y2="50" stroke="#1a6ed8" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="40" y1="44" x2="40" y2="50" stroke="#1a6ed8" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="56" y1="44" x2="62" y2="50" stroke="#1a6ed8" strokeWidth="2.5" strokeLinecap="round" />
                {/* Platform deck */}
                <rect x="18" y="36" width="44" height="8" rx="1" stroke="#1a6ed8" strokeWidth="2.5" fill="#e8f4ff" />
                {/* Derrick */}
                <path d="M36 36 L32 16 L48 16 L44 36Z" stroke="#1a6ed8" strokeWidth="2.5" fill="#e8f4ff" strokeLinejoin="round" />
                {/* Cross braces */}
                <line x1="33.5" y1="30" x2="46.5" y2="22" stroke="#1a6ed8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="33.5" y1="22" x2="46.5" y2="30" stroke="#1a6ed8" strokeWidth="1.5" strokeLinecap="round" />
                {/* Flare stack */}
                <line x1="55" y1="36" x2="55" y2="24" stroke="#1a6ed8" strokeWidth="2" strokeLinecap="round" />
                <path d="M52 22 Q55 18 58 22" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
        ),
    },
    {
        id: 'projects',
        label: 'PROJECTS',
        href: '/projects',
        icon: (
            /* Blueprint / engineering drawing with gears */
            <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
                {/* Document */}
                <rect x="12" y="6" width="40" height="52" rx="3" stroke="#1a6ed8" strokeWidth="2.5" fill="#e8f4ff" />
                {/* Lines on document */}
                <line x1="20" y1="18" x2="44" y2="18" stroke="#1a6ed8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="26" x2="38" y2="26" stroke="#1a6ed8" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="20" y1="34" x2="42" y2="34" stroke="#1a6ed8" strokeWidth="1.5" strokeLinecap="round" />
                {/* Gear overlapping document */}
                <circle cx="56" cy="42" r="12" fill="#e8f4ff" stroke="#1a6ed8" strokeWidth="2.5" />
                <circle cx="56" cy="42" r="5" fill="#1a6ed8" />
                {/* Gear teeth */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180
                    const x1 = 56 + 12 * Math.cos(rad)
                    const y1 = 42 + 12 * Math.sin(rad)
                    const x2 = 56 + 16 * Math.cos(rad)
                    const y2 = 42 + 16 * Math.sin(rad)
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a6ed8" strokeWidth="3" strokeLinecap="round" />
                })}
                <circle cx="56" cy="42" r="3" fill="white" />
            </svg>
        ),
    },
    {
        id: 'services',
        label: 'SERVICES',
        href: '/services',
        icon: (
            /* Hand holding a gear */
            <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
                {/* Gear */}
                <circle cx="40" cy="22" r="12" fill="#e8f4ff" stroke="#1a6ed8" strokeWidth="2.5" />
                <circle cx="40" cy="22" r="5" fill="#1a6ed8" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180
                    const x1 = 40 + 12 * Math.cos(rad)
                    const y1 = 22 + 12 * Math.sin(rad)
                    const x2 = 40 + 16 * Math.cos(rad)
                    const y2 = 22 + 16 * Math.sin(rad)
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a6ed8" strokeWidth="3" strokeLinecap="round" />
                })}
                <circle cx="40" cy="22" r="3" fill="white" />
                {/* Hand / palm */}
                <path
                    d="M18 48 C18 42 24 40 30 40 L44 40 C50 40 54 42 56 46 L60 50 C62 52 60 56 57 55 L52 53"
                    stroke="#1a6ed8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
                />
                <path
                    d="M18 48 L20 56 L58 56 L56 46"
                    stroke="#1a6ed8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="#e8f4ff"
                />
            </svg>
        ),
    },
    {
        id: 'sustainability',
        label: 'SUSTAINABILITY',
        href: '/sustainability',
        icon: (
            /* Leaf / green energy icon */
            <svg viewBox="0 0 80 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-16">
                {/* Leaf */}
                <path
                    d="M40 56 C20 50 10 30 20 12 C30 5 50 15 60 30 C65 38 55 50 40 56Z"
                    stroke="#1a6ed8"
                    strokeWidth="2.5"
                    fill="#e8f4ff"
                    strokeLinejoin="round"
                />
                {/* Leaf vein */}
                <path
                    d="M40 56 C38 45 35 35 40 12"
                    stroke="#1a6ed8"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M35 40 L45 38"
                    stroke="#1a6ed8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M32 48 L40 44"
                    stroke="#1a6ed8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M48 32 L40 38"
                    stroke="#1a6ed8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                {/* Small leaf accent */}
                <path
                    d="M55 50 C50 45 48 40 52 35"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
        ),
    },
]

export default function Services() {
    return (
        <section id="services" className=" z-10 py-16 border-t border-gray-100">
            <div className="mx-auto max-w-8xl px-4 sm:px-4 lg:px-24">

                {/* 3-column cards */}
                <div className="grid grid-cols-1  z-10  sm:grid-cols-4 gap-20">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="group flex flex-col items-center text-center"
                        >
                            {/* Icon box */}
                            <div className="mb-5 w-36 h-32 rounded-2xl border-2 border-[#1a6ed8]/25 bg-white flex items-center justify-center shadow-sm group-hover:border-[#1a6ed8]/60 group-hover:shadow-md group-hover:shadow-[#1a6ed8]/10 transition-all duration-300">
                                {card.icon}
                            </div>

                            {/* Label */}
                            <h3 className="text-base font-extrabold text-gray-800 tracking-widest uppercase mb-1 group-hover:text-[#1a6ed8] transition-colors">
                                {card.label}
                            </h3>

                            {/* Read More */}
                            <Link
                                href={card.href}
                                className="text-sm text-gray-400 hover:text-[#1a6ed8] transition-colors underline-offset-2 hover:underline"
                            >
                                Read More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
