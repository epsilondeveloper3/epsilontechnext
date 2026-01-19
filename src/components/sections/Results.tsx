'use client';

import Image from 'next/image';
import { Play, Heart, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder data for results
const results = [
    {
        title: "Doctor Recommendation",
        embedUrl: "https://www.instagram.com/reel/DNh44Bissbj/embed",
        stats: { views: "195k+", likes: "512+" }
    },
    {
        title: "Viral Reel",
        embedUrl: "https://www.instagram.com/reel/DFX0HANA3e3/embed",
        stats: { views: "1.1M+", likes: "1.4k+" }
    },
    {
        title: "Navratri Ortho Care",
        embedUrl: "https://www.instagram.com/reel/DO_M0fLkrm0/embed",
        stats: { views: "168k+", likes: "528+" }
    },
    {
        title: "Peadiatric Advice",
        embedUrl: "https://www.instagram.com/reel/DPlJCV1j69W/embed",
        stats: { views: "197k+", likes: "550+" }
    },
    {
        title: "Free OPD Announcement",
        embedUrl: "https://www.instagram.com/reel/DRo6ggqE16-/embed",
        stats: { views: "350k+", likes: "13.4k+" }
    },
    {
        title: "Funny Video",
        embedUrl: "https://www.instagram.com/reel/DDPMiE5xmih/embed",
        stats: { views: "37.5k+", likes: "3.9k+" }
    }
];

export function Results() {
    return (
        <section id="portfolio" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Real Results. Real Patients.
                    </h2>
                    <p className="text-lg text-slate-600">
                        See how we transformed these doctors' practices.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8">
                    {results.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col w-full sm:w-[320px] rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100"
                        >
                            <div className="relative h-[580px] bg-slate-100 group">
                                <iframe
                                    src={item.embedUrl}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowTransparency={true}
                                    allow="encrypted-media"
                                />

                                {/* Integrated Stats Overlay (Masks Instagram footer & shows real stats) */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-white z-20 px-5 flex flex-col justify-center border-t border-slate-50">
                                    <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
                                    <div className="flex items-center gap-4 text-xs font-semibold">
                                        <span className="flex items-center gap-1 text-primary bg-blue-50 px-2 py-1 rounded-full">
                                            <Eye size={12} />
                                            {item.stats.views} Views
                                        </span>
                                        <span className="flex items-center gap-1 text-pink-600 bg-pink-50 px-2 py-1 rounded-full">
                                            <Heart size={12} />
                                            {item.stats.likes}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-xl font-medium text-slate-800 italic">"This reel resulted in real appointment calls."</p>
                </div>
            </div>
        </section>
    );
}
