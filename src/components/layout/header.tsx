'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Doctor Marketing', href: '#doctor-marketing' }, // Anchor for now or pages
    { name: 'IT Services', href: '/it-services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isITServices = pathname === '/it-services';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update nav links based on context if needed, but fixed paths work best
    const displayNavLinks = [
        { name: 'Doctor Marketing', href: '/' }, // Always go to home
        { name: 'IT Services', href: '/it-services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'About', href: '#about' }, // Maps to 'Why Work With Us' on IT page
        { name: 'Contact', href: '#contact' }, // Maps to 'Client CTA' on IT page
    ];

    // IT Services page starts, so we need white text initially
    const isDarkHero = isITServices && !isScrolled;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Using the logo image */}
                    <div className="relative h-10 w-40 md:h-12 md:w-48">
                        <Image
                            src="/logo.png"
                            alt="Epsilon Technology"
                            fill
                            className={`object-contain object-left transition-all ${isDarkHero ? 'brightness-0 invert' : ''}`}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {displayNavLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors ${pathname === link.href
                                ? (isDarkHero ? 'text-blue-400' : 'text-primary font-semibold')
                                : (isDarkHero ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-primary')
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        size="sm"
                        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                        className={isDarkHero ? "bg-white text-slate-900 hover:bg-slate-100" : ""}
                    >
                        {isITServices ? 'Discuss Project' : 'Book Growth Call'}
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden ${isDarkHero ? 'text-white' : 'text-slate-800'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {displayNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4" onClick={() => {
                                setMobileMenuOpen(false);
                                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                {isITServices ? 'Discuss Project' : 'Book Free Doctor Growth Consultation'}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
