"use client";

import { Search, PenTool, Code, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
    {
        number: "01",
        title: "Free Consultation",
        description: "We discuss your idea, budget, and timeline. You get expert advice on the best tech stack and strategy—completely free.",
        icon: Search,
    },
    {
        number: "02",
        title: "Requirement Gathering",
        description: "We document every detail of your feature requirements to ensure the final product matches your vision perfectly.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Design & Development",
        description: "We create stunning UI/UX designs and write clean, scalable code. You see progress every two weeks.",
        icon: Code,
    },
    {
        number: "04",
        title: "Rigorous Testing",
        description: "Our QA team tests your app on multiple devices to ensure it's bug-free, secure, and ready for the real world.",
        icon: Rocket,
    },
    {
        number: "05",
        title: "Launch & Support",
        description: "We handle the App Store/Play Store submission or server deployment. We stay with you to ensure a smooth launch.",
        icon: Rocket,
    }
];

export function Process() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        From Napkin Sketch to Market Leader
                    </h2>
                    <p className="text-lg text-slate-600">
                        Clients choose us because we don't just "code". We follow a proven, transparent process that eliminates risk and guarantees results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-100 -z-10" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative bg-white pt-4">
                            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg shadow-slate-200">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 text-center mb-3">
                                {step.title}
                            </h3>
                            <p className="text-slate-600 text-center text-sm leading-relaxed mb-6">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button size="lg" className="rounded-full bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100 hover:text-slate-900 shadow-sm" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                        Book a Free Strategy Session <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
