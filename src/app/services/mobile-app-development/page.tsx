"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Smartphone, Code2, Rocket, Globe } from "lucide-react";
import Image from "next/image";

export default function MobileAppServices() {
    return (
        <main className="bg-white">
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6"
                            >
                                Mobile App Development
                                <span className="block text-sky-600">That Scales With You</span>
                            </motion.h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We build high-performance iOS and Android applications using React Native. From MVP to millions of users, we are the engineering partner for ambitious startups.
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" className="rounded-full bg-sky-600 text-white hover:bg-sky-700">
                                    Start Your Project
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full">
                                    View Portfolio
                                </Button>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <Image
                                src="/blog_mobile_app_dev.png"
                                alt="Mobile App Development"
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
