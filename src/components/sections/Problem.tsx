'use client';

import { AlertCircle, Clock, Users, TrendingDown, FileWarning } from 'lucide-react';
import { motion } from 'framer-motion';

const problems = [
    {
        icon: Users,
        title: "Patients are searching online",
        description: "90% of patients check Instagram and Google reviews before choosing a new doctor. If you aren't visible, they choose your competitor."
    },
    {
        icon: TrendingDown,
        title: "Random posting fails",
        description: "Posting generic health tips without a strategy doesn't bring patients. You need a funnel that converts views into appointments."
    },
    {
        icon: Clock,
        title: "Word-of-mouth is too slow",
        description: "Relying only on referrals caps your growth. You need a predictable system to generate new patient inquiries daily."
    },
    {
        icon: FileWarning,
        title: "Agencies don't get medicine",
        description: "Most agencies post cringe trends that hurt your reputation. You need medically accurate, professional content that builds trust."
    }
];

export function Problem() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        The Problem? Most Doctors Struggle to Grow Online.
                    </h2>
                    <p className="text-lg text-slate-600">
                        You know digital presence is important, but you're too busy saving lives to figure out hashtags and reels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6">
                                <problem.icon className="w-6 h-6 text-rose-500" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
