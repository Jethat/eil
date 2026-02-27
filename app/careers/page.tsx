'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronRight, ArrowRight, Star, Heart, Lightbulb, Users, GraduationCap, Briefcase, Search, Globe, MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function CareersPage() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const segments = [
        { name: 'Why Work at EIL', icon: Heart, href: '/careers/why-work-at-eil' },
        { name: 'A Great Place to Work', icon: Star, href: '/careers/a-great-place-to-work' },
        { name: 'Training & Development', icon: GraduationCap, href: '/careers/training' },
        { name: 'Current Openings', icon: Search, href: '/careers/applying-to-eil' },
    ]

    const benefits = [
        { title: 'Global Exposure', icon: Globe, desc: 'Work on prestigious projects across 30+ countries.' },
        { title: 'Continuous Learning', icon: Lightbulb, desc: 'State-of-the-art training and skill development programs.' },
        { title: 'Diverse Culture', icon: Users, desc: 'A collaborative environment with the best engineering minds.' },
        { title: 'Career Growth', icon: Briefcase, desc: 'Clear paths for advancement and leadership roles.' },
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header isScrolled={isScrolled} />

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=2000"
                        alt="Join EIL Team"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <span className="bg-secondary text-primary font-black px-6 py-2 rounded-full text-sm mb-8 inline-block animate-bounce shadow-xl">WE ARE HIRING</span>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                        BUILD THE <span className="text-secondary">FUTURE</span> <br /> OF ENERGY
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-12 font-light">
                        Join a team of visionaries and engineers who are reshaping the global energy landscape through innovation and excellence.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/careers/applying-to-eil" className="bg-white text-primary px-10 py-5 rounded-2xl font-bold hover:bg-secondary hover:text-white transition-all shadow-2xl flex items-center gap-2 text-lg">
                            Search Jobs <Search size={20} />
                        </Link>
                        <Link href="/careers/why-work-at-eil" className="bg-primary border border-white/20 text-white px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-lg">
                            Explore Culture
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-3 px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} className="text-gray-400" />
                    <span className="text-primary font-semibold">Careers</span>
                </div>
            </div>

            {/* Navigation Cards */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {segments.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{item.name}</h3>
                                <div className="flex items-center gap-2 text-primary font-bold text-xs">
                                    EXPLORE <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture/Benefits Section */}
            <section className="py-24 px-4 bg-primary text-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
                            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
                                Empowering Minds, <br />
                                <span className="text-secondary">Transforming Lives</span>
                            </h2>
                            <div className="space-y-10">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-secondary flex-shrink-0 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                                            <benefit.icon size={30} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                                            <p className="text-white/60 leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 relative">
                            <div className="space-y-6 pt-12">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="EIL Team 1" />
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="EIL Team 2" />
                            </div>
                            <div className="space-y-6">
                                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="EIL Team 3" />
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" className="rounded-3xl shadow-2xl" alt="EIL Team 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-12 inline-block">
                        <div className="flex gap-1 text-secondary">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="currentColor" />)}
                        </div>
                    </div>
                    <blockquote className="text-2xl md:text-4xl font-light text-primary italic mb-12 leading-relaxed">
                        "EIL is more than just a workplace; it's a launchpad for grand ideas. The mentorship and technical depth available here are unparalleled in the global engineering space."
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg" alt="Testimonial Author" />
                        <div className="text-left">
                            <div className="font-bold text-primary">Arjun Mehta</div>
                            <div className="text-sm text-gray-500">Senior Principal Engineer, 12 Years at EIL</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-secondary to-secondary/80 rounded-[40px] p-12 md:p-20 text-primary text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
                    <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to <span className="underline">Apply?</span></h2>
                    <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto font-bold uppercase tracking-widest">Your career at the pinnacle of engineering begins here.</p>
                    <Link href="/careers/applying-to-eil" className="inline-flex items-center gap-4 bg-primary text-white px-12 py-6 rounded-3xl font-black hover:scale-105 transition-all shadow-2xl text-xl">
                        JOIN THE LEAGUE <ArrowRight size={28} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
