'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import {
    Mail, Phone, MapPin, Send,
    Linkedin, Twitter, Facebook, Instagram,
    ChevronRight
} from 'lucide-react'

export default function ContactPage() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Thank you for your message! Our team will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <main className="min-h-screen bg-white">
            <Header isScrolled={isScrolled} />

            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Us"
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 text-center text-white px-4 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">GET IN <span className="text-secondary">TOUCH</span></h1>
                    <nav className="flex items-center justify-center gap-2 text-sm font-bold opacity-80">
                        <a href="/" className="hover:text-secondary transition-colors">HOME</a>
                        <ChevronRight size={16} />
                        <span className="text-secondary">CONTACT US</span>
                    </nav>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-16">

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-primary mb-8 relative inline-block">
                                Contact Information
                                <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-secondary rounded-full" />
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about our services or projects? Reach out to us and we'll be happy to assist you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group hover:bg-primary hover:text-white transition-all duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Our Head Office</h4>
                                        <p className="text-sm text-gray-600">Core-6, SCOPE Complex, 7 Lodhi Road, New Delhi - 110003, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group hover:bg-primary hover:text-white transition-all duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Call Us Anywhere</h4>
                                        <p className="text-sm text-gray-600">+91-11-24361600</p>
                                        <p className="text-sm text-gray-600">+91-11-24360689 (Fax)</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary flex-shrink-0 group hover:bg-primary hover:text-white transition-all duration-300">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Email At Us</h4>
                                        <p className="text-sm text-gray-600">info@eil.co.in</p>
                                        <p className="text-sm text-gray-600">corpcomm@eil.co.in</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150" />
                            <h3 className="text-xl font-bold mb-4 relative z-10">Follow Our Media</h3>
                            <p className="text-white/70 text-sm mb-6 relative z-10">Stay updated with our latest projects and achievements across our social channels.</p>
                            <div className="flex gap-4 relative z-10">
{[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                    <button 
                                        key={i} 
                                        aria-label={`Follow on ${Icon.name || 'social media'}`}
                                        className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Icon size={20} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12">
                            <h2 className="text-3xl font-black text-primary mb-2">Send Us A Message</h2>
                            <p className="text-gray-500 mb-10">We're here to help you build the future of energy.</p>

                            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">FULL NAME</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 focus:bg-white focus:border-secondary transition-all outline-none"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 focus:bg-white focus:border-secondary transition-all outline-none"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-gray-700">SUBJECT</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="How can we help?"
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 focus:bg-white focus:border-secondary transition-all outline-none"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-gray-700">YOUR MESSAGE</label>
                                    <textarea
                                        rows={6}
                                        required
                                        placeholder="Describe your inquiry..."
                                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 focus:bg-white focus:border-secondary transition-all outline-none resize-none"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto bg-primary hover:bg-secondary text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-secondary/20 hover:-translate-y-1 active:translate-y-0"
                                    >
                                        SEND MESSAGE
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

