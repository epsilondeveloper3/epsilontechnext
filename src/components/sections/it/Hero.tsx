"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Zap, ShoppingCart, Layout } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Hero() {
    const [index, setIndex] = useState(0);
    const heroStates = [
        {
            text: "Mobile Apps",
            sub: "Turn your startup idea into a scalable, world-class mobile application.",
            gradient: "text-sky-600"
        },
        {
            text: "Online Stores",
            sub: "Launch a high-performance ecommerce store that drives sales 24/7.",
            gradient: "text-emerald-600"
        },
        {
            text: "Websites",
            sub: "Build a professional corporate website that establishes trust and authority.",
            gradient: "text-indigo-600"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroStates.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden bg-white text-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[30%] -right-[10%] w-[70vw] h-[70vw] bg-sky-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-indigo-50 rounded-full blur-3xl opacity-60" />
                <div className="absolute bottom-[0%] right-[20%] w-[30vw] h-[30vw] bg-emerald-50 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-sm font-medium mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                        </span>
                        Accepting New Global Clients
                    </motion.div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-slate-900 min-h-[160px] sm:min-h-[auto]">
                        Build Scalable{' '}
                        <span className="block sm:inline">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className={`${heroStates[index].gradient} inline-block`}
                                >
                                    {heroStates[index].text}
                                </motion.span>
                            </AnimatePresence>
                        </span>{' '}
                        for Global Business
                    </h1>

                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed h-16 sm:h-auto">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {heroStates[index].sub}
                            </motion.span>
                        </AnimatePresence>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                            Book a Free Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Success Stories
                        </Button>
                    </div>

                    {/* Persona Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto"
                    >
                        {/* Card 1: Startup */}
                        <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-100 transition-all group cursor-pointer" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-4 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Startup Founders</h3>
                            <p className="text-sm text-slate-600">Launch your mobile app with a trusted technical partner. Scalable & Secure.</p>
                        </div>
                        {/* Card 2: Ecommerce */}
                        <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all group cursor-pointer" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Wholesalers</h3>
                            <p className="text-sm text-slate-600">Expand your business online with a custom high-conversion ecommerce store.</p>
                        </div>
                        {/* Card 3: Business */}
                        <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group cursor-pointer" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">New Businesses</h3>
                            <p className="text-sm text-slate-600">Establish immediate credibility with a professional, modern corporate website.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
