
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { submitForm } from '../services/formService';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Note: formService expects 'service' field, we'll just pass 'Contact Query' or empty
        const submissionData = { ...formData, service: 'Contact Form Inquiry' };

        const result = await submitForm(submissionData);

        setIsSubmitting(false);
        alert(result.message);

        if (result.success) {
            setFormData({ name: '', email: '', phone: '', city: '', message: '' });
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-secondary-dark pt-24 pb-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark dark:text-white mb-6">Contact Us</h1>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    {/* Contact Info */}
                    <div className="h-full">
                        <div className="bg-white dark:bg-slate-800/90 p-8 rounded-2xl shadow-lg border-l-4 border-primary h-full flex flex-col justify-center transition-colors duration-300">
                            <h3 className="text-2xl font-bold text-secondary dark:text-white mb-8">Get in Touch</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-secondary dark:text-white">Call Us</p>
                                        <p className="text-gray-500 dark:text-slate-300">+91 98765 43210</p>
                                        <p className="text-gray-500 dark:text-slate-300">+91 98765 00000</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-secondary dark:text-white">Email Us</p>
                                        <p className="text-gray-500 dark:text-slate-300">info@procashu.com</p>
                                        <p className="text-gray-500 dark:text-slate-300">support@procashu.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-secondary dark:text-white">Visit Us</p>
                                        <p className="text-gray-500 dark:text-slate-300">123 Finance Hub, Business District,<br />Mumbai, Maharashtra 400001</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-secondary dark:text-white">Working Hours</p>
                                        <p className="text-gray-500 dark:text-slate-300">Mon - Sat: 9:30 AM - 6:30 PM</p>
                                        <p className="text-gray-500 dark:text-slate-300">Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white dark:bg-slate-800/90 p-8 rounded-2xl shadow-lg transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-secondary dark:text-white mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white dark:placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white dark:placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-300"
                                    />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white dark:placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white dark:placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors duration-300"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-600 dark:bg-slate-700/50 dark:text-white dark:placeholder-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none resize-none transition-colors duration-300"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-primary hover:bg-primary-dark text-secondary-dark font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all ${isSubmitting ? 'opacity-70' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
