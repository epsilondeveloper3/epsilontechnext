import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="relative h-12 w-48 mb-6">
                            <Image
                                src="/logo.png"
                                alt="Epsilon Technology"
                                fill
                                className="object-contain object-left brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Specialised in doctor social media growth. Delivering IT & app development globally.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link href="/" className="hover:text-primary transition-colors">Doctor Social Growth</Link></li>
                            <li><Link href="/it-services" className="hover:text-primary transition-colors">IT Services</Link></li>
                            <li><Link href="/it-services#services" className="hover:text-primary transition-colors">App Development</Link></li>
                            <li><Link href="/it-services#services" className="hover:text-primary transition-colors">Web Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Company</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link href="/it-services#about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/it-services#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
                        <address className="not-italic text-slate-400 text-sm space-y-4">
                            <p>Junagadh, Gujarat, India</p>
                            <p><a href="mailto:jaydeep@epsilon-technology.com" className="hover:text-white">jaydeep@epsilon-technology.com</a></p>
                            <p><a href="tel:+917359315576" className="hover:text-white">+91 73593 15576</a></p>
                        </address>
                    </div>
                </div>

                <div className="text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} Epsilon Technology. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
