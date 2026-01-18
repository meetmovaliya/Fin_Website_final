
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white text-slate-600 pt-20 pb-10 border-t border-slate-200 relative overflow-hidden transition-colors duration-300">
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="text-2xl font-black font-heading text-slate-900 flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-accent/20 transition-all duration-300">
                                P
                            </div>
                            <span>ProCashu<span className="text-accent">.</span></span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Empowering your financial dreams with tailored loan solutions. We bridge the gap between your aspirations and reality with over 15 years of excellence.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:bg-accent hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                            <span className="w-8 h-0.5 bg-accent rounded-full"></span> Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', link: '/about' },
                                { name: 'Our Services', link: '/services' },
                                { name: 'Partners', link: '/partners' },
                                { name: 'Contact Zone', link: '/contact' },
                                { name: 'Support', link: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.link} className="hover:text-accent font-bold transition-all flex items-center gap-2 text-sm group">
                                        <ArrowRight size={14} className="text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                            <span className="w-8 h-0.5 bg-accent rounded-full"></span> Popular Loans
                        </h3>
                        <ul className="space-y-4">
                            {['Personal Loan', 'Business Loan', 'Home Loan', 'Mortgage Loan', 'Working Capital'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="hover:text-accent font-bold transition-all flex items-center gap-2 text-sm group">
                                        <ArrowRight size={14} className="text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                            <span className="w-8 h-0.5 bg-accent rounded-full"></span> Contact Us
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2.5 rounded-lg bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-sm font-medium pt-1">
                                    STPI , Near Nocci Business park,<br />Balasore, Odisha 756056
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-lg bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    <Phone size={18} />
                                </div>
                                <span className="text-sm font-bold">+91 91245 55371</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2.5 rounded-lg bg-accent/5 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                                    <Mail size={18} />
                                </div>
                                <span className="text-sm font-bold">hr@procashu.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} SDV Finconsultant LLP. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
