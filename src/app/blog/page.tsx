import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
    title: "Blog | Doctor Marketing Insights & Tips | Epsilon Technology",
    description: "Read our latest articles on doctor marketing, healthcare SEO, and patient acquisition strategies for clinics in India.",
    openGraph: {
        title: "Epsilon Technology Blog",
        description: "Expert insights on growing your medical practice.",
    }
};

const posts = [
    {
        title: "7 Proven Marketing Ideas for Doctors in Junagadh (2025 Guide)",
        excerpt: "Are you a doctor in Junagadh looking to increase your patient footfall? Here are 7 actionable strategies to grow your clinic... ",
        date: "Jan 15, 2026",
        author: "Jaydeep Kataria",
        slug: "doctor-marketing-ideas-junagadh",
        category: "Local SEO"
    },
    // Future posts can be added here
];

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Latest Insights
                    </h1>
                    <p className="text-lg text-slate-600">
                        Expert tips on digital marketing for doctors and healthcare professionals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {posts.map((post, i) => (
                        <Link href={`/blog/${post.slug}`} key={i} className="group cursor-pointer">
                            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 h-full flex flex-col">
                                <div className="h-48 bg-blue-100 relative overflow-hidden">
                                    {/* Placeholder for blog image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-blue-300">
                                        Blog Image
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">{post.category}</span>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-blue-600 font-medium text-sm">
                                        Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
