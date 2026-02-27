'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Filter, Search, Maximize2 } from 'lucide-react'

const categories = ['All', 'Oil & Gas', 'Infrastructure', 'Petrochemicals', 'Green Energy', 'Corporate']

const galleryItems = [
    {
        id: 1,
        title: 'Modern Refinery',
        category: 'Oil & Gas',
        image: '/refinery_gallery.png',
        location: 'Gujarat, India',
    },
    {
        id: 2,
        title: 'Cross-Country Pipeline',
        category: 'Infrastructure',
        image: '/pipeline_gallery.png',
        location: 'Rajasthan to Haryana',
    },
    {
        id: 3,
        title: 'Chemical Processing',
        category: 'Petrochemicals',
        image: '/chemical_plant_gallery.png',
        location: 'Tamil Nadu, India',
    },
    {
        id: 4,
        title: 'Sustainable Energy',
        category: 'Green Energy',
        image: '/green_energy_gallery.png',
        location: 'Renewable Park, MP',
    },
    {
        id: 5,
        title: 'Offshore Platform',
        category: 'Oil & Gas',
        image: '/offshore_gallery.png',
        location: 'Mumbai High, India',
    },
    {
        id: 6,
        title: 'Engineering HQ',
        category: 'Corporate',
        image: '/hq_gallery.png',
        location: 'New Delhi, India',
    },
]

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredItems = activeCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory)

    return (
        <section id="gallery" className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a6ed8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#38bdf8]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="h-px w-8 bg-[#1a6ed8]" />
                        <h2 className="text-sm font-bold text-[#1a6ed8] uppercase tracking-[0.2em]">Our Portfolio</h2>
                        <span className="h-px w-8 bg-[#1a6ed8]" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0d3a6e] mb-6">
                        Visualizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a6ed8] to-[#38bdf8]">Engineering Excellence</span>
                    </h2>
                    <p className="max-w-7xl mx-auto text-lg text-gray-500 leading-relaxed font-medium">
                        A glimpse into our world-class projects and industrial expertise across the globe, defining the future of energy.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border-2 ${activeCategory === cat
                                ? 'bg-[#1a6ed8] border-[#1a6ed8] text-white shadow-lg shadow-[#1a6ed8]/25 scale-105'
                                : 'bg-white border-slate-200 text-slate-600 hover:border-[#1a6ed8]/30 hover:text-[#1a6ed8]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  min-h-[600px]">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden bg-white shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a6ed8]/20 hover:-translate-y-2"
                        >
                            <div className="aspect-[4/3] relative w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d3a6e] via-[#0d3a6e]/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                                {/* Magnifying glass icon on hover */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                        <Maximize2 className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-3 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                                        <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                                        <span className="text-[10px] font-black text-[#38bdf8] uppercase tracking-[0.2em]">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/60 text-sm font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                                        {item.location}
                                    </p>

                                    <div className="mt-6 w-0 h-1 bg-gradient-to-r from-[#1a6ed8] to-[#38bdf8] rounded-full transition-all duration-700 group-hover:w-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                {/* <div className="mt-20 text-center">
                    <button className="px-10 py-5 bg-[#0d3a6e] hover:bg-[#1a6ed8] text-white rounded-2xl font-bold text-lg shadow-xl shadow-[#0d3a6e]/20 transition-all duration-300 flex items-center gap-4 mx-auto group active:scale-95">
                        <Search className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        Explore Industrial Archive
                    </button>
                    <p className="mt-6 text-slate-400 text-sm font-semibold tracking-wide flex items-center justify-center gap-2">
                        <Filter className="w-4 h-4" />
                        Displaying {filteredItems.length} curated projects
                    </p>
                </div> */}
            </div>
        </section>
    )
}
