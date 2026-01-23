import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Dribbble, Instagram, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
    title: "About Jaydeep Kataria | Epsilon Technology Founder",
    description: "Meet Jaydeep Kataria, the founder of Epsilon Technology. A specialized doctor marketing expert in Gujarat helping clinics grow with digital strategies.",
    openGraph: {
        title: "About Jaydeep Kataria | Doctor Marketing Expert",
        description: "Helping doctors in Gujarat grow their practice since 2024.",
        images: ["/images/jayde.png"],
        type: 'profile',
    }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            {/* Hero Profile Section */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div className="flex-1 order-2 md:order-1">
                        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            Founder & Lead Strategist
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            Hi, I'm <span className="text-blue-600">Jaydeep Kataria.</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            I don't just "do marketing". I help Doctors and Healthcare professionals in Gujarat build a brand that lasts.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            After observing that most marketing agencies sell generic "packages" to doctors without understanding medical ethics or patient psychology, I founded <strong>Epsilon Technology</strong> to change that.
                        </p>

                        <div className="flex gap-4 mb-8">
                            <Link href="https://www.instagram.com/epsilontechnology/" target="_blank" className="p-3 bg-slate-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                <Instagram size={24} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/epsilon-technology8" className="p-3 bg-slate-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="https://dribbble.com/epsilontech" className="p-3 bg-slate-100 rounded-full hover:bg-pink-100 hover:text-pink-600 transition-colors">
                                <Dribbble size={24} />
                            </Link>
                        </div>

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary text-white hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-200 h-16 px-10 text-xl font-bold active:scale-95"
                        >
                            Work With Me
                        </Link>
                    </div>
                    <div className="flex-1 order-1 md:order-2 flex justify-center">
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-slate-100 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                            <Image
                                src="/images/jayde.png"
                                alt="Jaydeep Kataria"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-slate-50 mt-24">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">My Journey</h2>
                    <div className="prose prose-lg prose-slate text-slate-600">
                        <p>
                            It started with a simple observation in Junagadh. I noticed brilliant doctors sitting in empty clinics while average ones were overflowing with patients. The difference wasn't skill—it was <strong>Digital Visibility</strong>.
                        </p>
                        <p>
                            I realized that the "best" doctor isn't always the busiest. The busiest doctor is the one patients can <em>find</em> and <em>trust</em> online.
                        </p>
                        <p>
                            That's when I decided to specialize solely in <strong>Healthcare Marketing</strong>. Unlike generic agencies that juggle real estate, restaurants, and salons, I focus 100% on medical professionals. I know the difference between 'Cardiology' and 'Radiology', and I know what patients search for in each.
                        </p>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why I'm Different</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Exclusively Healthcare Focused",
                            "Storytelling First Approach",
                            "Data-Driven SEO Strategies",
                            "Ethical Marketing Practices",
                            "Native Gujarati Content Expert",
                            "Direct Access to Founder"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 border rounded-xl bg-slate-50">
                                <CheckCircle2 className="text-green-500 shrink-0" />
                                <span className="font-semibold text-slate-900">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Jaydeep Kataria",
                        "jobTitle": "Founder",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "url": "https://epsilon-technology.com"
                        },
                        "url": "https://epsilon-technology.com/about",
                        "image": "https://epsilon-technology.com/images/jayde.png",
                        "description": "Jaydeep Kataria is a specialized doctor marketing expert and founder of Epsilon Technology, helping clinics in Gujarat grow.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Junagadh",
                            "addressRegion": "Gujarat",
                            "addressCountry": "India"
                        },
                        "sameAs": [
                            "https://www.instagram.com/jaydeepkataria/",
                            "https://www.linkedin.com/in/jaydeepkataria",
                            "https://dribbble.com/epsilontech",
                        ]
                    })
                }}
            />
        </main>
    );
}
