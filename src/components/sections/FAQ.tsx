'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion";

const defaultFaqs = [
    {
        question: "Why should I hire a specialized doctor marketing company?",
        answer: "General marketing agencies often use generic strategies that don't work in healthcare. A specialized doctor marketing company understands medical ethics, patient psychology, and the specific regulations (like MCI guidelines) that doctors must follow. We ensure your growth is safe, professional, and targeted."
    },
    {
        question: "How is your approach different from other healthcare marketing agencies?",
        answer: "Most agencies focus on 'likes' and 'vanity metrics'. We focus on 'patient inquiries' and 'OPD footfall'. Our strategy combines high-quality video content (Reels) with local SEO and automated WhatsApp funnels to actually convert viewers into patients."
    },
    {
        question: "Do you guarantee results?",
        answer: "While no one can ethically guarantee specific medical outcomes, our track record speaks for itself. We have consistently helped doctors increase their patient inquiries by 2x-3x within the first 3-6 months of working with us."
    },
    {
        question: "Is this service suitable for small clinics?",
        answer: "Absolutely. In fact, our 'Visibility Booster' plan is designed specifically for individual practitioners and small clinics looking to establish a strong digital presence without breaking the bank."
    },
    {
        question: "What is included in your doctor marketing services?",
        answer: "Our services include Instagram Growth & Management, Video Production (Reels), Local SEO (Google My Business), Facebook/Instagram Ads, and Lead Automation. We are a full-service partner for your clinic's digital growth."
    }
];

interface FAQProps {
    customFaqs?: Array<{ question: string; answer: string; }>;
}

export function FAQ({ customFaqs }: FAQProps) {
    const data = customFaqs || defaultFaqs;

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50" id="faq">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to know about growing your medical practice.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {data.map((faq, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="border border-slate-200 bg-white rounded-xl px-6 data-[state=open]:border-blue-200 data-[state=open]:ring-2 data-[state=open]:ring-blue-50 transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <AccordionTrigger className="text-lg font-semibold text-slate-900 text-left py-6 hover:no-underline hover:text-blue-600 transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
