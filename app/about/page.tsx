'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronRight, Award, Users, Globe, Target, TrendingUp, ArrowRight } from 'lucide-react'

export default function AboutPage() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const milestones = [
        { year: '1965', title: 'Founded', description: 'Established as Engineers India Limited (EIL)' },
        { year: '1970', title: 'First International Project', description: 'Entered the global market with our first overseas assignment' },
        { year: '1990', title: 'IPO Launched', description: 'Listed on Indian stock exchanges' },
        { year: '2000', title: 'Global Expansion', description: 'Expanded operations to 30+ countries' },
        { year: '2020', title: 'Green Energy Initiative', description: 'Ventured into renewable energy and sustainable solutions' },
        { year: '2024', title: '60 Years of Excellence', description: 'Celebrating six decades of engineering excellence' },
    ]

const leadership = [
        { name: 'Dr. S. K. H.', role: 'Chairman & Managing Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
        { name: 'Shri R. K. Singh', role: 'Director (Technical)', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400' },
        { name: 'Smt. P. Sharma', role: 'Director (Finance)', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header isScrolled={isScrolled} />

            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="About EIL"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">ABOUT <span className="text-secondary">EIL</span></h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Pioneering engineering excellence since 1965, delivering innovative solutions for the global energy sector
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-3 px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
                    <a href="/" className="hover:text-primary transition-colors">Home</a>
                    <ChevronRight size={14} className="text-gray-400" />
                    <span className="text-primary font-semibold">About EIL</span>
                </div>
            </div>

            {/* Overview Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-black text-primary mb-6">
                                Engineering Tomorrow's <span className="text-secondary">World</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Engineers India Limited (EIL) is a leading global engineering consultancy company headquartered in New Delhi, India. With over six decades of experience, we have established ourselves as a trusted partner for delivering world-class projects across the oil, gas, petrochemicals, chemicals, fertilizers, and infrastructure sectors.
                                </p>
                                <p>
                                    Our comprehensive range of services spans the entire project lifecycle - from concept to commissioning - including consulting, engineering, design, project management, procurement, and construction management. We operate across 30+ countries, serving prestigious clients in the Middle East, Africa, Southeast Asia, and beyond.
                                </p>
                                <p>
                                    At EIL, we are committed to sustainable development and have diversified into renewable energy, green hydrogen, and environmental engineering to support the global transition towards a carbon-neutral future.
                                </p>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <a href="/about/overview" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-secondary transition-all">
                                    Learn More <ArrowRight size={18} />
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                                alt="EIL Office"
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-secondary text-white p-6 rounded-2xl shadow-xl">
                                <div className="text-4xl font-black">60+</div>
                                <div className="text-sm font-semibold">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">2500+</div>
                            <div className="text-lg opacity-80">Projects Completed</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">30+</div>
                            <div className="text-lg opacity-80">Countries</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">5000+</div>
                            <div className="text-lg opacity-80">Professionals</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl md:text-5xl font-black text-secondary mb-2">$50B+</div>
                            <div className="text-lg opacity-80">Project Value</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary mb-4">Our <span className="text-secondary">Journey</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Six decades of innovation, growth, and delivering excellence across the globe</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="text-3xl font-black text-secondary mb-2">{milestone.year}</div>
                                <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                                <p className="text-gray-600">{milestone.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary mb-4">Our <span className="text-secondary">Leadership</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Guided by experienced leaders committed to excellence and innovation</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {leadership.map((leader, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="relative mb-6 mx-auto w-64 h-64 overflow-hidden rounded-full">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-primary">{leader.name}</h3>
                                <p className="text-secondary font-semibold">{leader.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-4 bg-primary text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4">Our <span className="text-secondary">Values</span></h2>
                        <p className="opacity-80 max-w-2xl mx-auto">The principles that guide everything we do</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Excellence</h3>
                            <p className="opacity-70">Striving for the highest standards in everything we deliver</p>
                        </div>
                        <div className="text-center p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                            <p className="opacity-70">Working together to achieve extraordinary results</p>
                        </div>
                        <div className="text-center p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                            <p className="opacity-70">Committed to environmental responsibility</p>
                        </div>
                        <div className="text-center p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="text-secondary" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Innovation</h3>
                            <p className="opacity-70">Continuously pushing boundaries with new solutions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto text-center bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-white">
                    <h2 className="text-4xl font-black mb-4">Join Our Global Team</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Be part of a dynamic organization that's shaping the future of energy
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="/careers" className="bg-secondary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-xl font-bold transition-all">
                            View Careers
                        </a>
                        <a href="/contact" className="bg-white text-primary hover:bg-secondary hover:text-white px-8 py-4 rounded-xl font-bold transition-all">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

