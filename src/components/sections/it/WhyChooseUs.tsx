"use client";

import { CheckCircle2, Globe2, ShieldCheck, Zap } from "lucide-react";

const reasons = [
    {
        title: "Global Expertise",
        description: "We work with clients across the globe, delivering international standard solutions.",
        icon: Globe2,
    },
    {
        title: "Top-Tier Quality",
        description: "Our code is clean, scalable, and built to withstand high-traffic environments.",
        icon: ShieldCheck,
    },
    {
        title: "Fast Delivery",
        description: "Agile development methodology ensures timely delivery without compromising quality.",
        icon: Zap,
    },
    {
        title: "Proven Track Record",
        description: "Years of experience delivering successful projects for startups and enterprises.",
        icon: CheckCircle2,
    },
];

import { FadeIn } from "@/components/animations/FadeIn";

export function WhyChooseUs() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <FadeIn direction="right">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                                Why Global Leaders Choose Epsilon
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We don't just write code; we build partners. Our commitment to excellence and innovation creates digital products that stand out in the crowded market.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {reasons.map((reason, index) => (
                                    <div key={index} className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-sky-50 text-sky-600">
                                                <reason.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="font-bold text-slate-900">{reason.title}</h3>
                                        </div>
                                        <p className="text-sm text-slate-600 pl-14">
                                            {reason.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <FadeIn direction="left" delay={0.2}>
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105 -z-10" />
                            <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden backdrop-blur-xl bg-opacity-95">
                                {/* Decorative background elements */}
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-slate-800 opacity-50 blur-3xl"></div>
                                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-sky-900 opacity-50 blur-3xl"></div>

                                <blockquote className="relative z-10">
                                    <div className="text-5xl text-sky-500 mb-4">"</div>
                                    <p className="text-xl font-medium leading-relaxed mb-6 italic">
                                        Jaydeep's team delivered an exceptional ReactJS-based FieldR app for our sports tech startup. Their expertise extended beyond web development to mobile app development. Passionate leadership and a deep understanding of our business goals were evident throughout the project.
                                    </p>
                                    <footer className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold">
                                            TH
                                        </div>
                                        <div>
                                            <div className="font-bold">Thariq H.</div>
                                            <div className="text-slate-400 text-sm">Product Manager, FieldR</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
