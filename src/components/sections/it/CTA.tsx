"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTA() {
    return (
        <section id="booking" className="py-24 relative overflow-hidden bg-slate-900">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-sky-900/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-indigo-900/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-1/2 text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                            Ready to Build Your Next Big Thing?
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Fill out the form to get your <span className="text-sky-400 font-bold">Free Strategy Consultation</span>. Our team will analyze your requirements and get back to you with a roadmap.
                        </p>

                        <div className="flex flex-col gap-4 text-slate-300">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">1</span>
                                <div><strong className="text-white block">Free Project Estimate</strong>Within 24 hours</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">2</span>
                                <div><strong className="text-white block">NDA Protection</strong>Your idea is safe with us</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">3</span>
                                <div><strong className="text-white block">No Obligation</strong>Honest technical advice</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Start Your Project</h3>
                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                alert("Thank you! Our team will contact you shortly to schedule your free consultation.");
                            }}>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                    <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Project Type</label>
                                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all">
                                        <option>Mobile App Development</option>
                                        <option>Ecommerce Website</option>
                                        <option>Corporate Website</option>
                                        <option>Web Application</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                    <textarea required rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"></textarea>
                                </div>
                                <Button size="lg" className="w-full h-12 text-lg font-bold bg-sky-600 hover:bg-sky-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                                    Book Free Consultation
                                </Button>
                                <p className="text-xs text-center text-slate-500 mt-4">
                                    By submitting, you agree to our privacy policy. We respect your inbox.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
