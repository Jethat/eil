'use client'

import React, { useState, useEffect, use } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ChevronRight, ArrowRight, Layout, Info, BarChart, Settings, Shield, Globe } from 'lucide-react'
import Link from 'next/link'

interface SubPageProps {
    params: Promise<{ category: string; slug: string }>
}

export default function SubPage({ params }: SubPageProps) {
    const [isScrolled, setIsScrolled] = useState(false)
    const { category, slug } = use(params)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

    const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1)

    return (
        <main className="min-h-screen bg-white">
            <Header isScrolled={isScrolled} />

            {/* Hero Section */}
            <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">
                        {title}
                    </h1>
                    <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4 px-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm font-medium">
                    <Link href="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} className="text-gray-400" />
                    <Link href={`/${category}`} className="text-gray-500 hover:text-primary transition-colors">{categoryTitle}</Link>
                    <ChevronRight size={14} className="text-gray-400" />
                    <span className="text-primary font-bold">{title}</span>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-3xl font-black text-primary mb-6">
                                    Introduction to <span className="text-secondary">{title}</span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Engineers India Limited (EIL) provides world-class solutions in {title}. With our extensive experience and technical expertise, we deliver innovative and sustainable results that exceed client expectations.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-secondary/30 transition-all group">
                                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Info size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Our Approach</h3>
                                    <p className="text-gray-600">We utilize cutting-edge technology and proven methodologies to ensure the highest quality standards in every project.</p>
                                </div>
                                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-secondary/30 transition-all group">
                                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                        <BarChart size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-2">Technical Excellence</h3>
                                    <p className="text-gray-600">Our team of experts brings deep domain knowledge to provide specialized solutions for complex challenges.</p>
                                </div>
                            </div>

                            <div className="space-y-6 text-gray-600">
                                <p>
                                    As a leader in the industry, EIL has been at the forefront of {categoryTitle} for over six decades. Our commitment to excellence and innovation has made us a preferred partner for major projects across the globe.
                                </p>
                                <p>
                                    We believe in delivering value through technology and expertise. Our {title} services are designed to address the unique needs of our clients while maintaining the highest safety and environmental standards.
                                </p>
                            </div>

                            {/* Features List */}
                            <div className="bg-primary/5 p-8 rounded-3xl">
                                <h3 className="text-2xl font-bold text-primary mb-6">Key Highlights</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        'Industry-leading expertise',
                                        'Sustainable solutions',
                                        'Global footprint',
                                        'Cutting-edge technology',
                                        'Safety-first approach',
                                        'Quality assurance'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white flex-shrink-0">
                                                <ChevronRight size={14} />
                                            </div>
                                            <span className="font-semibold text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Contact Card */}
                            <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
                                <h3 className="text-2xl font-bold mb-4 relative z-10">Need Assistance?</h3>
                                <p className="text-white/70 mb-8 relative z-10">Our experts are here to help you with your next project in {title}.</p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-primary transition-all relative z-10"
                                >
                                    Contact Us <ArrowRight size={18} />
                                </Link>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-primary mb-6">Why Choose EIL?</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: Shield, title: 'Trusted Partner' },
                                        { icon: Settings, title: 'Technical Mastery' },
                                        { icon: Globe, title: 'Global Presence' },
                                        { icon: Layout, title: 'Integrated Solutions' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="text-secondary flex-shrink-0">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                <p className="text-sm text-gray-500">Delivering excellence through experience.</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
