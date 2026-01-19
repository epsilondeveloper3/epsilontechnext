'use client';

import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Mr Jaydeep is well experience in Degital marketing. Shreeji Multispecialty hospital tie up with Epsilon for last couple of years. He help us in patient's foot fall. Highly recommend for social media & Website development.",
        author: "Devam Dave",
        role: "Shreeji Multispecialty Hospital",
        initials: "DD",
        color: "bg-blue-100 text-blue-600"
    },
    {
        quote: "Epsilon Technology is a one-stop solution for all digital marketing needs... they've helped our business scale like never before. Highly recommend them for businesses of any size!",
        author: "Dr. Hiral",
        role: "Cosmetologist, Gujarat",
        initials: "DH",
        color: "bg-purple-100 text-purple-600"
    },
    {
        quote: "I received a very great experience with the services provided by Epsilon's team. They provided very accurate approach and also gave good ideas... Thank you so much jaydeepbhai and team.",
        author: "Healthcare Physiotherapy Clinic",
        role: "Physiotherapy Clinic",
        initials: "HP",
        color: "bg-green-100 text-green-600"
    },
    {
        quote: "Excellent work. Working with this guys for 2 years.",
        author: "Dr. D.P. Vora",
        role: "Orthopeadic Surgeon",
        initials: "DV",
        color: "bg-orange-100 text-orange-600"
    },
    {
        quote: "Expert and easy to work with. Thoroughly enjoyed working with Mr Jaydeep and team.",
        author: "Dr. Dharmesh",
        role: "Medical Professional",
        initials: "DD",
        color: "bg-pink-100 text-pink-600"
    }
];

export function Testimonials() {
    // Creating 4 sets to ensure there is enough content to scroll seamlessly on even large screens
    // and to allow us to simply animate by -25% (1/4th) of the total width for a perfect loop.
    const marqueeList = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[0%] left-[0%] w-[30%] h-[30%] bg-blue-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full relative z-10 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Trusted by Leading <span className="text-primary">Medical Professionals</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Don't just take our word for it. Here's what doctors and clinics have to say about our growth strategies.
                        </p>
                    </motion.div>
                </div>

                {/* Marquee Row */}
                <div className="relative w-full flex overflow-hidden mask-gradient-sides">
                    {/* Gradient Fade Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

                    <motion.div
                        className="flex gap-6 md:gap-8 px-4"
                        // Animate from 0% to -25% of the element's width.
                        // Since the element contains 4 identical sets, -25% shifts exactly one set's width.
                        animate={{ x: ["0%", "-25%"] }}
                        transition={{
                            duration: 40, // 40 seconds for one loop cycle (smooth slow pace)
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        style={{ width: "max-content" }} // Ensure div is wide enough to hold all items
                    >
                        {marqueeList.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star key={starIndex} size={16} className="fill-orange-400 text-orange-400" />
                                    ))}
                                </div>

                                <div className="relative mb-8 h-[160px] overflow-hidden">
                                    {/* Fixed height to ensure good alignment in horizontal row */}
                                    <Quote className="absolute -top-2 -left-2 text-slate-100 w-12 h-12 transform -scale-x-100" />
                                    <p className="text-slate-700 text-lg leading-relaxed relative z-10 italic line-clamp-5">
                                        "{t.quote}"
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${t.color}`}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 leading-tight">{t.author}</h4>
                                        <p className="text-slate-500 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
