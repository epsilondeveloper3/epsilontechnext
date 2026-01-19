'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar } from 'lucide-react';

export function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        city: '',
        specialty: '',
        clinic: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/send-email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', mobile: '', city: '', specialty: '', clinic: '' });
                // Reset success message after 3 seconds
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div id="booking" className="absolute top-0 left-0 -mt-24 pointer-events-none opacity-0" />
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready to Grow Your Clinic?
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                Book a free strategy call to see how we can help you get more patients. No obligation.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Free Growth Consultation</p>
                                        <p className="text-sm">30-minute strategy session via Zoom/Meet</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <MessageCircle size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Direct WhatsApp Support</p>
                                        <p className="text-sm">Get instant answers to your questions</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Dr. Name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="mobile" className="text-sm font-medium text-slate-700">WhatsApp Number</label>
                                        <input
                                            id="mobile"
                                            type="tel"
                                            placeholder="+91 73593 15576"
                                            required
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="city" className="text-sm font-medium text-slate-700">City</label>
                                        <input
                                            id="city"
                                            type="text"
                                            placeholder="e.g. Mumbai"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="specialty" className="text-sm font-medium text-slate-700">Specialty</label>
                                        <input
                                            id="specialty"
                                            type="text"
                                            placeholder="e.g. Dermatologist"
                                            required
                                            value={formData.specialty}
                                            onChange={handleChange}
                                            className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="clinic" className="text-sm font-medium text-slate-700">Clinic Name</label>
                                    <input
                                        id="clinic"
                                        type="text"
                                        placeholder="Clinic Name"
                                        value={formData.clinic}
                                        onChange={handleChange}
                                        className="w-full h-11 px-4 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    />
                                </div>

                                <Button
                                    className="w-full text-lg h-12"
                                    size="lg"
                                    disabled={status === 'loading' || status === 'success'}
                                >
                                    {status === 'loading' ? 'Sending...' : status === 'success' ? 'Request Sent!' : 'Book Free Consultation'}
                                </Button>

                                {status === 'error' && (
                                    <p className="text-xs text-center text-red-500 mt-2">
                                        Something went wrong. Please try again or WhatsApp us directly.
                                    </p>
                                )}

                                <p className="text-xs text-center text-slate-400 mt-4">
                                    By booking, you agree to receive updates via WhatsApp.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
