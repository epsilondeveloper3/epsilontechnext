'use client';

import { Button } from '@/components/ui/button';
import { BadgeCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-teal-50/50 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4" />

            <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary font-medium text-sm mb-8">
                        <BadgeCheck size={16} />
                        <span>Exclusively for Doctors & Healthcare Professionals</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]"
                >
                    Turn Instagram Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">Patient Acquisition Machine</span> for Your Clinic
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    As a specialized <strong>doctor marketing company</strong>, we help medical professionals get real patient inquiries using Instagram reels, local ads, and automation — not just likes or followers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Button size="xl" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book Free Doctor Growth Call
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="xl" variant="outline" className="gap-2" onClick={() => window.open('https://wa.me/919106698776', '_blank')}>
                        <MessageCircle className="w-5 h-5 text-green-600" />
                        WhatsApp Us Now
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
