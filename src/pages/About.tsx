
import { motion } from 'framer-motion';
import { Target, Eye, CheckCircle } from 'lucide-react';

import SEO from '../components/seo/SEO';

const About = () => {
    return (
        <div className="bg-slate-50 pt-24 pb-12 transition-colors duration-300">
            <SEO
                title="About Us - Leading Financial Consultancy"
                description="Learn about ProCashu, a trusted financial partner with over 15 years of experience in providing seamless loan solutions and financial advice."
                canonical="https://procashu.com/about"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About ProCashu</h1>
                    <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We are a leading financial consultancy firm dedicated to helping individuals and businesses achieve their financial goals through tailored loan solutions and expert advice.
                    </p>
                </div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg transition-colors duration-300"
                    >
                        <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                            <Eye size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                        <p className="text-slate-600 leading-relaxed">
                            To be the most trusted and accessible financial partner for millions, simplifying the lending process and enabling financial freedom for all.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-8 bg-white rounded-2xl border border-slate-100 shadow-lg transition-colors duration-300"
                    >
                        <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                            <Target size={32} />
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                        <p className="text-slate-600 leading-relaxed">
                            To provide transparent, quick, and hassle-free financial solutions while maintaining the highest standards of integrity and customer service.
                        </p>
                    </motion.div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-primary text-center mb-12">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Fast Processing', desc: 'Get your loans approved and disbursed in record time with our streamlined process.' },
                            { title: 'Lowest Interest Rates', desc: 'We partner with top banks to offer you the most competitive rates in the market.' },
                            { title: 'Expert Guidance', desc: 'Our team of financial experts is always ready to guide you to the best product.' },
                            { title: 'Zero Hidden Charges', desc: 'Complete transparency in all our dealings. What you see is what you get.' },
                            { title: 'Minimal Documentation', desc: 'Hassle-free paperwork with our digital-first approach.' },
                            { title: 'Secure & Safe', desc: 'Your data privacy and security is our top priority.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4">
                                <CheckCircle className="text-accent shrink-0" size={24} />
                                <div>
                                    <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
