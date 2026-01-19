'use client';

import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function IsThisForYou() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Green Column - For You */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-emerald-50/50 rounded-3xl p-8 lg:p-12 border border-emerald-100"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                            This is for you if you are a doctor who:
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Wants more OPD visits",
                                "Is tired of Practo & portals",
                                "Gets views but no appointments",
                                "Wants local patient trust",
                                "Wants done-for-you growth"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Red Column - Not For You */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-rose-50/50 rounded-3xl p-8 lg:p-12 border border-rose-100"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                            This is <span className="text-rose-600">NOT</span> for:
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Influencers",
                                "Bloggers",
                                "E-commerce brands",
                                "Personal creators"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <XCircle className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
