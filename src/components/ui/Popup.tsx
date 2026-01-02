import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { submitForm } from '../../services/formService';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        city: '',
        phone: '',
        service: '',
        message: ''
    });

    useEffect(() => {
        // Don't show popup on researchers' key areas to keep testing clean
        const path = window.location.pathname;
        if (path === '/partners' || path === '/') return;

        // Show popup after 5 seconds on other pages
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const result = await submitForm(formData);

        setIsSubmitting(false);
        alert(result.message);

        if (result.success) {
            setIsOpen(false);
            setFormData({ name: '', email: '', city: '', phone: '', service: '', message: '' });
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden border-t-4 border-primary transition-colors duration-300"
                    >
                        {/* Header */}
                        <div className="bg-slate-50 px-6 py-4 flex justify-between items-center border-b border-slate-100 transition-colors duration-300">
                            <h3 className="text-primary font-bold text-xl flex items-center gap-2">
                                <span className="text-accent">!</span> Loan Requirement <span className="text-accent">!</span>
                            </h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-primary transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="City"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone No."
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                />
                            </div>
                            <div>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                >
                                    <option value="">Select Services</option>
                                    <option value="personal">Personal Loan</option>
                                    <option value="business">Business Loan</option>
                                    <option value="home">Home Loan</option>
                                    <option value="mortgage">Mortgage Loan</option>
                                </select>
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message (optional)"
                                    rows={3}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-accent/20 transform hover:-translate-y-0.5 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Now'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Popup;
