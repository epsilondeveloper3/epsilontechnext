"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const painPoints = [
    {
        problem: "Struggling to find a reliable app development team?",
        solution: "We assign you a dedicated, managed team with a proven track record. No freelancers, no disappearing acts."
    },
    {
        problem: "Want to sell online in India but don't know where to start?",
        solution: "We build complete ecommerce stores (Shopify or Custom) and guide you through payment gateways and logistics."
    },
    {
        problem: "Need a professional website that builds trust instantly?",
        solution: "We design modern, premium corporate websites that position you as an industry leader from day one."
    }
];

export function PainPoints() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-4">
                        We Solve The Hardest Parts of Going Digital
                    </h2>
                    <p className="text-lg text-slate-600">
                        Stop worrying about the tech. Focus on your business while we handle the rest.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {painPoints.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                    {item.problem}
                                </h3>
                            </div>
                            <div className="pl-9 relative">
                                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-slate-100" />
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
