'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronRight, ArrowRight, Factory, Droplets, Zap, Activity, Ship, Recycle, Leaf, FlaskConical, Building2, HardHat, Home } from 'lucide-react'
import Link from 'next/link'

export default function BusinessesPage() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const businesses = [
        { name: 'Petroleum Refining', icon: Factory, href: '/businesses/petroleum-refining' },
        { name: 'Onshore Oil & Gas', icon: Droplets, href: '/businesses/onshore-oil-and-gas' },
        { name: 'Offshore Oil & Gas', icon: Zap, href: '/businesses/offshore-oil-and-gas' },
        { name: 'Pipeline', icon: Activity, href: '/businesses/pipeline' },
        { name: 'Strategic Storages', icon: Building2, href: '/businesses/strategic-storages' },
        { name: 'Petrochemicals', icon: FlaskConical, href: '/businesses/petrochemicals' },
        { name: 'Ports & Terminals', icon: Ship, href: '/businesses/ports-and-terminals' },
        { name: 'Fertilizers', icon: Leaf, href: '/businesses/fertilizers' },
        { name: 'Mining & Metallurgy', icon: HardHat, href: '/businesses/mining-and-metallurgy' },
        { name: 'Infrastructure', icon: Building2, href: '/businesses/infrastructure' },
        { name: 'Water & Waste Management', icon: Recycle, href: '/businesses/water-and-waste-management' },
        { name: 'Bio Fuels', icon: Leaf, href: '/businesses/bio-fuels' },
        { name: 'Green Hydrogen', icon: Zap, href: '/businesses/green-hydrogen' },
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header isScrolled={isScrolled} />

            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="EIL Businesses"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">OUR <span className="text-secondary">BUSINESSES</span></h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Delivering world-class engineering solutions across the global energy value chain
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-3 px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} className="text-gray-400" />
                    <span className="text-primary font-semibold">Businesses</span>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary mb-4">Diverse <span className="text-secondary">Portfolio</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive engineering and consultancy services across a wide range of industrial sectors.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {businesses.map((biz, idx) => (
                            <Link
                                key={idx}
                                href={biz.href}
                                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-secondary/20 transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <biz.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{biz.name}</h3>
                                <p className="text-gray-600 text-sm mb-6">
                                    Providing industry-leading expertise and innovative solutions for the {biz.name} sector worldwide.
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                                    EXPLORE <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-primary text-white">
                <div className="max-w-5xl mx-auto text-center border border-white/10 rounded-3xl p-12">
                    <h2 className="text-4xl font-black mb-4">Global Reach, Local Impact</h2>
                    <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
                        With over six decades of experience, we have the technical prowess to handle projects of any scale, anywhere in the world.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all shadow-xl hover:shadow-secondary/20">
                        Discuss Your Project <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
