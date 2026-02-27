'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronRight, ArrowRight, Building2, Droplets, Target, Zap, Waves, FlaskConical, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const projectCategories = [
        { name: 'Refineries', icon: Building2 },
        { name: 'Petrochemicals', icon: FlaskConical },
        { name: 'Pipelines', icon: Droplets },
        { name: 'Offshore', icon: Waves },
        { name: 'Strategic Storage', icon: Target },
        { name: 'Power & Infrastructure', icon: Zap },
    ]

    const majorProjects = [
        {
            name: 'Dangote Refinery Project',
            location: 'Nigeria',
            type: 'Refining',
            description: 'World\'s largest single-train refinery with 650,000 bpd capacity.',
            status: 'Ongoing',
            image: 'https://images.unsplash.com/photo-1541975097412-50448b97e9d8?auto=format&fit=crop&q=80&w=800'
        },
        {
            name: 'Rajasthan Refinery',
            location: 'India',
            type: 'Petrochemical',
            description: 'Integrated refinery and petrochemical complex project in Barmer.',
            status: 'Ongoing',
            image: 'https://images.unsplash.com/photo-1516937461826-1933f24bc286?auto=format&fit=crop&q=80&w=800'
        },
        {
            name: 'Visakh Refinery Modernisation',
            location: 'India',
            type: 'Refining',
            description: 'Modernization and capacity expansion for HPCL Visakhapatnam.',
            status: 'Completed',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800'
        },
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header isScrolled={isScrolled} />

            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="EIL Projects"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">OUR <span className="text-secondary">PROJECTS</span></h1>
                    <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                        Executing landmark projects across the globe with precision and engineering excellence
                    </p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-3 px-4">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} className="text-gray-400" />
                    <span className="text-primary font-semibold">Projects</span>
                </div>
            </div>

            {/* Categories Section */}
            <section className="py-20 px-4 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {projectCategories.map((cat, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group">
                                <div className="text-primary group-hover:text-secondary transition-colors mb-2 flex justify-center">
                                    <cat.icon size={28} />
                                </div>
                                <h3 className="font-bold text-gray-800 text-sm">{cat.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Major Projects Section */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-black text-primary mb-4">Landmark <span className="text-secondary">Achievements</span></h2>
                            <p className="text-gray-600 max-w-2xl">Showcasing our most significant projects that demonstrate our global capabilities and engineering prowess.</p>
                        </div>
                        <Link href="/projects/overview" className="text-primary font-black flex items-center gap-2 group">
                            VIEW ALL PROJECTS <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {majorProjects.map((project, idx) => (
                            <div key={idx} className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                                        {project.type}
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                                        <CheckCircle2 size={12} className="text-green-500" />
                                        {project.status}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs font-bold mb-3 uppercase tracking-widest">
                                        <MapPin size={14} className="text-secondary" />
                                        {project.location}
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-1">{project.name}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <Link
                                        href={`/projects/${project.name.toLowerCase().replace(/ /g, '-')}`}
                                        className="flex items-center gap-2 text-primary font-bold text-sm"
                                    >
                                        CASE STUDY <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Graphic */}
            <section className="py-24 px-4 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-4 gap-12 text-center text-white">
                        <div>
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                                    <Target size={32} />
                                </div>
                            </div>
                            <div className="text-4xl font-black mb-2">2500+</div>
                            <div className="text-white/60 font-bold uppercase tracking-wider text-sm">Projects Delivered</div>
                        </div>
                        <div>
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                                    <Building2 size={32} />
                                </div>
                            </div>
                            <div className="text-4xl font-black mb-2">30+</div>
                            <div className="text-white/60 font-bold uppercase tracking-wider text-sm">Countries Active</div>
                        </div>
                        <div>
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                                    <Calendar size={32} />
                                </div>
                            </div>
                            <div className="text-4xl font-black mb-2">60+</div>
                            <div className="text-white/60 font-bold uppercase tracking-wider text-sm">Years of Trust</div>
                        </div>
                        <div>
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                                    <CheckCircle2 size={32} />
                                </div>
                            </div>
                            <div className="text-4xl font-black mb-2">Zero</div>
                            <div className="text-white/60 font-bold uppercase tracking-wider text-sm">LTI Projects</div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
