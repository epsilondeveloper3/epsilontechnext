"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    // Upwork Reviews
    {
        quote: "One heck of an amazing guy, understands and delivers in his domain so fast. Created an application for our restaurant allowing customers to browse menu and view promotions seamlessly.",
        author: "Restaurant Owner",
        role: "Brundhavan, USA",
        initials: "RO",
        color: "bg-blue-100 text-blue-600",
        source: "Upwork"
    },
    {
        quote: "Jaydeep did an outstanding job developing my app in React Native. He was professional, communicative, and delivered high-quality work within the agreed timeline. The app is smooth and intuitive.",
        author: "Client",
        role: "Dating App Founder, Kenya",
        initials: "DA",
        color: "bg-purple-100 text-purple-600",
        source: "Upwork"
    },
    // Google Reviews
    {
        quote: "Great experience with the team of Epsilon. Quite hard working individuals, who will give their creative opinions in the work and respond in no time to all your queries.",
        author: "Harsh Patel",
        role: "Owner, Shubhceramics",
        initials: "HP",
        color: "bg-orange-100 text-orange-600",
        source: "Google"
    },
    {
        quote: "I've had the privilege of working with Epsilon Technology for the past three years... The team at Epsilon is not only skilled but also exceptionally patient. I highly recommend Epsilon Technology.",
        author: "Palak Sheth",
        role: "Long-term Client",
        initials: "PS",
        color: "bg-indigo-100 text-indigo-600",
        source: "Google"
    },
    {
        quote: "Thank you for the great job done for the figma design. Always responding whenever need be. Developed a virtual card integrating with PayPal.",
        author: "Fintech Client",
        role: "United States",
        initials: "FC",
        color: "bg-green-100 text-green-600",
        source: "Upwork"
    },
    {
        quote: "Oh man, one of the best company I gave worked with. The perfect blend of tech expertise & Honesty.",
        author: "Deep Karia",
        role: "Local Guide",
        initials: "DK",
        color: "bg-teal-100 text-teal-600",
        source: "Google"
    },
    {
        quote: "Professional approach with an enthusiastic work ethic. Looking forward to working together again!",
        author: "CTO",
        role: "Tech Client, USA",
        initials: "TC",
        color: "bg-pink-100 text-pink-600",
        source: "Upwork"
    },
    {
        quote: "Worked with Jaydeep and his team. The team has good technical knowledge. If there is any opportunity for a project in a future, I will also like to work with him again.",
        author: "Chirag Paneliya",
        role: "Client",
        initials: "CP",
        color: "bg-rose-100 text-rose-600",
        source: "Google"
    },
    {
        quote: "I have worked with Jaydeep and team on JavaScript based project. His team is good with timely manners. Team is technical to understand the flow of projects and work.",
        author: "Nikunj Mandani",
        role: "Client",
        initials: "NM",
        color: "bg-cyan-100 text-cyan-600",
        source: "Google"
    },
    {
        quote: "Jaydeep's team delivered an exceptional ReactJS-based FieldR app for our sports tech startup. Their expertise extended beyond web development to mobile app development. Passionate leadership and a deep understanding of our business goals were evident throughout the project.",
        author: "Thariq H.",
        role: "Product Manager, FieldR",
        initials: "TH",
        color: "bg-violet-100 text-violet-600",
        source: "Verified"
    }
];

export function Testimonials() {
    // Duplicate for marquee effect
    const marqueeList = [...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 mb-16 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Trusted by Clients Globally
                    </h2>
                    <p className="text-lg text-slate-600">
                        From Upwork to Google Reviews, our commitment to quality has earned us 5-star ratings across the board.
                    </p>
                </div>
            </div>

            <div className="relative w-full flex overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex gap-6 md:gap-8 px-4"
                    animate={{ x: ["0%", "-50%"] }} // Updated for single duplication (2 sets total)
                    transition={{
                        duration: 60, // Slower due to more items
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    style={{ width: "max-content" }}
                >
                    {marqueeList.map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[85vw] sm:w-[400px] bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star key={starIndex} size={16} className="fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full uppercase border ${t.source === 'Google'
                                    ? 'bg-blue-50 text-blue-600 border-blue-100'
                                    : t.source === 'Upwork'
                                        ? 'bg-green-50 text-green-600 border-green-100'
                                        : 'bg-slate-100 text-slate-600 border-slate-200'
                                    }`}>
                                    {t.source}
                                </span>
                            </div>

                            <p className="text-slate-700 leading-relaxed mb-6 italic flex-grow">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 mt-auto">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 leading-tight">{t.author}</h4>
                                    <p className="text-slate-500 text-xs uppercase tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
