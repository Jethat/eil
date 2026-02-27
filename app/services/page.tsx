'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronRight, ArrowRight, ClipboardCheck, Ruler, Truck, Settings, ShieldCheck, Microscope, Construction, Wind, ShieldAlert, Leaf } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const services = [
        { name: 'Pre FEED', icon: ClipboardCheck, href: '/services/pre-feed' },
        { name: 'FEED', icon: Ruler, href: '/services/feed' },
        { name: 'PMC', icon: Settings, href: '/services/pmc' },
        { name: 'EPCM', icon: ShieldCheck, href: '/services/epcm' },
        { name: 'EPC', icon: Construction, href: '/services/epc' },
        { name: 'Research & Development', icon: Microscope, href: '/services/research-and-development' },
        { name: 'Supply Chain Management', icon: Truck, href: '/services/supply-chain-management' },
        { name: 'Construction', icon: Construction, href: '/services/construction' },
        { name: 'Heat & Mass Transfer', icon: Wind, href: '/services/heat-and-mass-transfer' },
        { name: 'Plant Operation & Safety', icon: ShieldAlert, href: '/services/plant-operation-and-safety' },
        { name: 'Environment Engineering', icon: Leaf, href: '/services/environment-engineering' },
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header isScrolled={isScrolled} />

            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000"
                        alt="EIL Services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">OUR <span className="text-secondary">SERVICES</span></h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        End-to-end engineering excellence from concept to commissioning
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-3 px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} className="text-gray-400" />
                    <span className="text-primary font-semibold">Services</span>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary mb-4">Comprehensive <span className="text-secondary">Solutions</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We offer a complete suite of services across the entire project lifecycle to ensure seamless delivery and optimal performance.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((svc, idx) => (
                            <Link
                                key={idx}
                                href={svc.href}
                                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-secondary/20 transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <svc.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{svc.name}</h3>
                                <p className="text-gray-600 text-sm mb-6">
                                    Delivering specialized {svc.name} services with a focus on efficiency, quality, and technical precision.
                                </p>
                                <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
                                    LEARN MORE <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black text-primary mb-6">Why Partner With <span className="text-secondary">EIL?</span></h2>
                        <div className="space-y-6">
                            {[
                                { title: '60+ Years of Experience', desc: 'A legacy of excellence in engineering and consultancy.' },
                                { title: 'State-of-the-Art Technology', desc: 'Utilizing the latest digital tools and methodologies for project success.' },
                                { title: 'Global Talent Pool', desc: 'Over 5,000 skilled professionals dedicated to your mission.' },
                                { title: 'Sustainability Focused', desc: 'Committed to delivering green and sustainable solutions.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white flex-shrink-0">
                                        <ChevronRight size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-primary">{item.title}</h4>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-primary rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32" />
                        <h3 className="text-3xl font-bold mb-6">Ready to start?</h3>
                        <p className="text-white/80 mb-10 text-lg leading-relaxed">
                            Contact our expert team today to discuss how our services can help you achieve your project goals efficiently and sustainably.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all shadow-xl hover:shadow-secondary/20">
                            Get in Touch <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
