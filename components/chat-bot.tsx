'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Send, Minus, Maximize2, Bot, User, Loader2, Shield, Lock, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
    id: string
    text: string
    sender: 'bot' | 'user'
    timestamp: Date
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [askedQuestions, setAskedQuestions] = useState<string[]>([])
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Welcome to Engineers India Limited! How can I assist you with our engineering consultancy and project management services today?',
            sender: 'bot',
            timestamp: new Date(),
        },
    ])
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isTyping])

    const handleSend = async () => {
        if (!inputValue.trim()) return
        await handleSendAction(inputValue)
    }

    const handleSendAction = async (text: string) => {
        // Track the question as asked to hide it from suggestions
        setAskedQuestions(prev => [...prev, text])

        const userMessage: Message = {
            id: Date.now().toString(),
            text: text,
            sender: 'user',
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue('')
        setIsTyping(true)

        // Simulate bot response
        setTimeout(() => {
            const botResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse(text),
                sender: 'bot',
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, botResponse])
            setIsTyping(false)
        }, 1500)
    }

    const getBotResponse = (input: string) => {
        const text = input.toLowerCase()
        if (text.includes('hello') || text.includes('hi')) {
            return "Greetings! I am the EIL Advanced Digital Assistant. How can I facilitate your inquiry into our world-class Engineering, Procurement, and Construction Management (EPCM) services today?"
        }
        if (text.includes('services') || text.includes('what do you do')) {
            return "Engineers India Limited specializes in Concept-to-Commissioning solutions. Our core expertise spans Refining, Petrochemicals, Pipelines, Offshore, Metallurgy, and Infrastructure. We provide specialized technology, process design, and project management services."
        }
        if (text.includes('contact')) {
            return "Our Global Headquarters is located at EIB, New Delhi. For specific division contacts (Marketing, HR, or Procurement), I can provide direct liaison details. Would you like to view our regional office map?"
        }
        if (text.includes('career') || text.includes('job')) {
            return "EIL is a hub for engineering excellence. We offer career paths for both budding engineers and seasoned professionals. You can access our dedicated recruitment portal through the 'Careers' section for live openings and GATE-based recruitments."
        }
        if (text.includes('security') || text.includes('jethat')) {
            return "This chat interface is secured by Jethat Cyber Security Pvt Ltd, ensuring advanced encryption and data integrity for all your communications with EIL."
        }
        return "Insightful query. I've logged your interest. Our system is designed to provide comprehensive data on EIL's multi-disciplinary engineering capabilities. Would you like me to connect you with a segment-specific specialist?"
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && !isMinimized && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 text-primary-foreground flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white p-1.5 shadow-inner flex items-center justify-center overflow-hidden border border-white/20">
                                    <img src="/eil-1.png" alt="EIL Logo" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-sm leading-none tracking-tight">EIL Smart Assistant</h3>
                                        <div className="px-1.5 py-0.5 bg-green-500/20 border border-green-500/30 rounded text-[9px] font-bold text-green-100 flex items-center gap-1">
                                            <Shield size={10} />
                                            ENCRYPTED
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <div className="relative">
                                            <span className="block w-1.5 h-1.5 bg-green-400 rounded-full" />
                                            <span className="absolute inset-0 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                                        </div>
                                        <span className="text-[10px] opacity-80 font-semibold">Intelligence Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(true)}
                                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <Minus size={18} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-900/50">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${message.sender === 'user'
                                            ? 'bg-primary text-primary-foreground rounded-tr-none shadow-blue-500/10'
                                            : 'bg-white dark:bg-slate-800 text-foreground border border-slate-100 dark:border-slate-700 rounded-tl-none'
                                            }`}
                                    >
                                        {message.text}
                                        <div
                                            className={`text-[9px] mt-1.5 font-medium opacity-50 ${message.sender === 'user' ? 'text-right' : 'text-left'
                                                }`}
                                        >
                                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-border flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggested Questions (Horizontal) */}
                        <div className="px-2 pt-2 bg-slate-50/80 dark:bg-slate-900/40 backdrop-blur-sm">
                            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 px-2">
                                {[
                                    'What solutions do you offer?',
                                    'Tell me about EIL projects',
                                    'How to contact EIL Delhi?',
                                    'Check career opportunities',
                                    'Is this chat secure?'
                                ].filter(q => !askedQuestions.includes(q)).map((action) => (
                                    <button
                                        key={action}
                                        onClick={() => handleSendAction(action)}
                                        className="whitespace-nowrap px-3 py-1.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-[11px] font-semibold rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 transition-all active:scale-95 flex items-center gap-1.5 shadow-sm group"
                                    >
                                        <ChevronRight size={10} className="text-primary group-hover:translate-x-0.5 transition-transform" />
                                        {action}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Inquire about EIL services..."
                                    className="w-full pl-4 pr-12 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary text-[13px] transition-all shadow-sm group-hover:shadow-md outline-none"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!inputValue.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-primary-foreground rounded-lg disabled:opacity-30 disabled:grayscale transition-all active:scale-90 shadow-lg shadow-primary/25"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                            <div className="flex flex-col items-center gap-1.5 mt-3">
                                <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                                    <Lock size={10} />
                                    End-to-end encrypted session
                                </p>
                                <div className="flex items-center gap-1 text-[10px] text-muted-foreground/80">
                                    <span>Powered by</span>
                                    <span className="font-bold text-primary/80">Jethat Cyber Security Pvt Ltd</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isMinimized && (
                    <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        onClick={() => setIsMinimized(false)}
                        className="mb-4 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                        <Bot size={18} />
                        <span className="text-sm font-medium">Chat is active</span>
                        <Maximize2 size={14} className="ml-1 opacity-70" />
                    </motion.button>
                )}
            </AnimatePresence>

            <button
                onClick={() => {
                    if (isMinimized) setIsMinimized(false)
                    else setIsOpen(!isOpen)
                }}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${isOpen && !isMinimized
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 rotate-90 scale-90'
                    : 'bg-primary text-primary-foreground hover:scale-110 active:scale-95'
                    }`}
            >
                {isOpen && !isMinimized ? <X size={24} /> : <MessageSquare size={24} />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                    </span>
                )}
            </button>
        </div>
    )
}
