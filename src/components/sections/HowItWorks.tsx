'use client';

import { Search, Clapperboard, TrendingUp, MessageSquare, PhoneIncoming } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: Search,
        title: "Clinic & Audience Analysis",
        description: "We analyze your specialty, local competition, and ideal patient profile."
    },
    {
        icon: Clapperboard,
        title: "Content & Reels Strategy",
        description: "We create scripts and ideas for high-engagement reels that educate and convert."
    },
    {
        icon: TrendingUp,
        title: "Growth & Ad Campaigns",
        description: "We launch targeted campaigns to reach thousands of local patients instantly."
    },
    {
        icon: MessageSquare,
        title: "WhatsApp & DM Automation",
        description: "Auto-replies handle common queries so you focus on patients."
    },
    {
        icon: PhoneIncoming,
        title: "Tracking Calls & Inquiries",
        description: "You get a clear report of how many appointments were generated."
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Fill Your Appointment Book</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A proven 5-step system designed specifically for medical practices.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }} // Slide from right for even (desktop left), left for odd (desktop right) logic inverted for visual flow
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >

                                {/* Content Side */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                                        <p className="text-slate-400 text-sm">{step.description}</p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shrink-0 border-4 border-slate-900 shadow-xl">
                                    <step.icon size={20} />
                                    <div className="absolute -bottom-8 text-xs text-slate-500 font-mono">0{i + 1}</div>
                                </div>

                                {/* Empty Side for balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
