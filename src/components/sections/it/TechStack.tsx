"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
    { name: "React Native", logo: "/tech/react.svg" },
    { name: "Next.js", logo: "/tech/nextdotjs.svg" },
    { name: "Flutter", logo: "/tech/flutter.svg" },
    { name: "Node.js", logo: "/tech/nodedotjs.svg" },
    { name: "Python", logo: "/tech/python.svg" },
    { name: "AWS", logo: "/tech/amazonwebservices.svg" },
    { name: "Firebase", logo: "/tech/firebase.svg" },
    { name: "Supabase", logo: "/tech/supabase.svg" },
    { name: "PostgreSQL", logo: "/tech/postgresql.svg" },
    { name: "GraphQL", logo: "/tech/graphql.svg" },
    { name: "Docker", logo: "/tech/docker.svg" },
    { name: "Kubernetes", logo: "/tech/kubernetes.svg" },
    { name: "OpenAI", logo: "/tech/openai.svg" },
];

export function TechStack() {
    return (
        <section className="py-12 bg-white border-b border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                    Powering your product with modern engineering
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

                <motion.div
                    className="flex gap-16 px-8 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                    style={{ width: "max-content" }}
                >
                    {[...technologies, ...technologies].map((tech, i) => (
                        <div key={i} className="flex items-center gap-4 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <div className="relative w-12 h-12">
                                <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-lg font-bold text-slate-700 whitespace-nowrap hidden sm:block">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
