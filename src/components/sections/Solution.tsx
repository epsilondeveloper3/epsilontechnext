'use client';

import { ShieldCheck, Target, HeartPulse, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: BrainCircuit,
        title: "Patient Psychology",
        description: "We structure content that addresses patient fears and builds immediate trust."
    },
    {
        icon: ShieldCheck,
        title: "Medically Safe Strategy",
        description: "Ethical marketing that complies with healthcare guidelines. No gimmicks."
    },
    {
        icon: Target,
        title: "Hyper-Local Targeting",
        description: "We show your content to people within 10km of your clinic who need you."
    },
    {
        icon: HeartPulse,
        title: "Focus on OPD Footfall",
        description: "We don't chase likes. We chase booked appointments and phone calls."
    }
];

export function Solution() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/2 right-0 -z-10 w-96 h-96 bg-primary/5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/2" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                            Why Choose Epsilon Technology?
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            We Are The Specialized Growth Partner <span className="text-primary">Exclusively For Doctors.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Generic marketing agencies don't understand the nuances of healthcare. We do. Epsilon Technology is built to bridge the gap between top-tier doctors and the patients who need them.
                        </p>
                        <div className="p-6 bg-slate-50 border-l-4 border-primary rounded-r-xl">
                            <p className="font-medium text-slate-800 italic">
                                "Our mission is simple: To help you help more patients by making you the most trusted doctor in your city."
                            </p>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600 text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
