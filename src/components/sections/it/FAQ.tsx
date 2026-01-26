"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
    {
        question: "How much does a typical project cost?",
        answer: "Every project is unique. A simple MVP might start around $3k-$5k, while complex enterprise platforms can range from $10k to $50k+. We provide transparent, itemized quotes so you know exactly what you're paying for.",
    },
    {
        question: "Do you sign an NDA? Will my idea be safe?",
        answer: "Absolutely. We respect your intellectual property. We are happy to sign a Non-Disclosure Agreement (NDA) before hearing your idea to ensure your total peace of mind.",
    },
    {
        question: "How long does it take to build an app?",
        answer: "A standard MVP (Minimum Viable Product) usually takes 4-8 weeks. Larger, feature-rich applications can take 3-6 months. We work in agile sprints to urge speed without compromising quality.",
    },
    {
        question: "Do you provide support after launch?",
        answer: "Yes! We offer 3 months of free bug-fix support after deployment. Beyond that, we have flexible maintenance packages to handle updates, server monitoring, and new feature additions.",
    },
    {
        question: "Can you take over an existing project?",
        answer: "Yes. Many of our clients come to us with unfinished or buggy code from other agencies. We perform a code audit and then help stabilize and scale your existing codebase.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Common Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Clear answers to help you make an informed decision.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-sky-200 data-[state=open]:ring-4 data-[state=open]:ring-sky-50 transition-all">
                            <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-sky-600 hover:no-underline py-6 text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="mt-12 text-center p-8 bg-sky-50 rounded-2xl border border-sky-100">
                    <h3 className="font-bold text-slate-900 mb-2">Still have questions?</h3>
                    <p className="text-slate-600 mb-6">Directly chat with our technical lead.</p>
                    <Button className="bg-sky-600 hover:bg-sky-500 text-white rounded-full px-8 h-12">
                        Chat on WhatsApp
                    </Button>
                </div>
            </div>
        </section>
    );
}
