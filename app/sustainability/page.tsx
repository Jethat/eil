'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronRight, ArrowRight, Leaf, ShieldCheck, Heart, Wind, Droplets, Zap, Recycle, Globe2, Users2 } from 'lucide-react'
import Link from 'next/link'

export default function SustainabilityPage() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const initiatives = [
        { name: 'Corporate Governance', icon: ShieldCheck, href: '/sustainability/corporate-governance' },
        { name: 'Corporate Social Responsibility', icon: Heart, href: '/sustainability/corporate-social-responsibility' },
        { name: 'Environment', icon: Leaf, href: '/sustainability/environment' },
        { name: 'Quality Management', icon: Zap, href: '/sustainability/quality-management' },
        { name: 'Swachh Bharat Abhiyaan', icon: Droplets, href: '/sustainability/swachh-bharat-abhiyaan' },
        { name: 'Net Zero', icon: Wind, href: '/sustainability/net-zero' },
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header isScrolled={isScrolled} />

            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
                        alt="EIL Sustainability"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/75 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">ENVISIONING <span className="text-secondary">SUSTAINABILITY</span></h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Committed to building a greener, cleaner, and more equitable future for generations to come
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-3 px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} className="text-gray-400" />
                    <span className="text-primary font-semibold">Sustainability</span>
                </div>
            </div>

            {/* Philosophy Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-secondary font-black uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
                            <h2 className="text-4xl font-black text-primary mb-8 leading-tight">
                                Delivering ESG-Compliant <span className="text-secondary">Engineering Solutions</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                At EIL, sustainability is not just a corporate buzzword; it's at the core of our business strategy. We integrate environmental, social, and governance (ESG) considerations into every project phase, ensuring that our legacy is one of positive impact.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                                        <Globe2 size={24} />
                                    </div>
                                    <h4 className="font-bold text-primary">Environmental Stewardship</h4>
                                    <p className="text-sm text-gray-500">Minimizing carbon footprint through innovative green technologies.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                                        <Users2 size={24} />
                                    </div>
                                    <h4 className="font-bold text-primary">Social Responsibility</h4>
                                    <p className="text-sm text-gray-500">Empowering communities through transformative CSR initiatives.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary rounded-[40px] rotate-3 scale-95 opacity-20 -z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000"
                                alt="Sustainability at EIL"
                                className="rounded-[40px] shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Initiatives Grid */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary mb-4">Core <span className="text-secondary">Pillars</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Our sustainability framework is built upon these essential pillars of corporate responsibility.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {initiatives.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className="group bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg]">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{item.name}</h3>
                                <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                                    Advancing our commitment through rigorous {item.name.toLowerCase()} standards and impactful projects.
                                </p>
                                <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest group-hover:text-secondary">
                                    LEARN MORE <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Net Zero Vision */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto bg-primary rounded-[50px] p-8 md:p-20 text-white relative overflow-hidden text-center shadow-[0_50px_100px_-20px_rgba(0,111,189,0.3)]">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-10 animate-bounce">
                            <Wind size={40} className="text-secondary" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8">Our Vision for <span className="text-secondary">Net Zero</span></h2>
                        <p className="text-xl md:text-2xl opacity-80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                            "We are committed to achieving Net Zero by 2035, leading the transition to a sustainable energy future through engineering innovation and clean technology."
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20">
                                <div className="text-3xl font-black text-secondary">2035</div>
                                <div className="text-sm font-bold opacity-60">Target Year</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20">
                                <div className="text-3xl font-black text-secondary">50%</div>
                                <div className="text-sm font-bold opacity-60">Reduction by 2030</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20">
                                <div className="text-3xl font-black text-secondary">100%</div>
                                <div className="text-sm font-bold opacity-60">Green Hydrogen</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
