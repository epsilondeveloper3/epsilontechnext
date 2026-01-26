"use client";

import { Activity, ShoppingBag, Rocket, Building2, CheckCircle } from "lucide-react";

export function Industries() {
    const industries = [
        {
            name: "Healthcare",
            icon: Activity,
            features: ["Telemedicine Apps", "Patient Management", "HIPAA Compliant Solutions"],
        },
        {
            name: "E-commerce",
            icon: ShoppingBag,
            features: ["Custom Marketplaces", "Inventory Management", "Payment Gateway Integration"],
        },
        {
            name: "Startups",
            icon: Rocket,
            features: ["MVP Development", "Scalable Architecture", "Rapid Prototyping"],
        },
        {
            name: "Enterprises",
            icon: Building2,
            features: ["Digital Transformation", "Legacy Modernization", "Enterprise ERP Systems"],
        },
    ];

    return (
        <section className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                        Industries We Transform
                    </h2>
                    <p className="text-lg text-slate-400">
                        We bring deep domain expertise to every project, ensuring our solutions solve real industry challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {industries.map((industry, index) => (
                        <div key={index} className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-700 transition-colors duration-300 border border-slate-700">
                            <div className="w-12 h-12 bg-sky-500/10 text-sky-400 rounded-xl flex items-center justify-center mb-6">
                                <industry.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
                            <ul className="space-y-3">
                                {industry.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                        <CheckCircle className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
