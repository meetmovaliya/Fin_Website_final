
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary-dark text-slate-300 pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-sm"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-bold font-heading text-white flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-secondary-dark font-bold shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                                P
                            </div>
                            <span>ProCashu<span className="text-primary">.</span></span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering your financial dreams with tailored loan solutions. We bridge the gap between your aspirations and reality.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-secondary-dark flex items-center justify-center transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full"></span> Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', link: '/about' },
                                { name: 'Our Services', link: '/services' },
                                { name: 'Partners', link: '/partners' },
                                { name: 'Awards', link: '/about' },
                                { name: 'Careers', link: '/about' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link} className="hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                                        <ArrowRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full"></span> Loans
                        </h3>
                        <ul className="space-y-4">
                            {['Personal Loan', 'Business Loan', 'Home Loan', 'Mortgage Loan', 'Working Capital'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-2 text-sm group">
                                        <ArrowRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full"></span> Contact Us
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                                <span className="text-sm">
                                    123 Finance Hub, Business District,<br /> Mumbai, Maharashtra 400001
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span className="text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail size={20} className="text-primary shrink-0" />
                                <span className="text-sm">info@procashu.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} SDV Finconsultant LLP. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
