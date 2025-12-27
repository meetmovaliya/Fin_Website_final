// ProCashu Home Page
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Calculator, Building, Home as HomeIcon, LineChart, ShieldCheck, Users, Banknote } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ui/ServiceCard';
import ServiceCarousel from '../components/ui/ServiceCarousel';
import { useAnalytics } from '../context/AnalyticsContext';

const services = [
    {
        title: 'Personal Loan',
        description: 'Quick and easy personal loans to fulfill your dreams. Attractive interest rates and flexible repayment options.',
        icon: Users,
        link: '/services/personal-loan'
    },
    {
        title: 'Business Loans',
        description: 'Fuel your business growth with our tailored business loan solutions. Capital for expansion, inventory, or operations.',
        icon: Briefcase,
        link: '/services/business-loan'
    },
    {
        title: 'Home Loans',
        description: 'Make your dream home a reality. We offer competitive home loan rates with hassle-free processing.',
        icon: HomeIcon,
        link: '/services/home-loan'
    },
    {
        title: 'Mortgage Loans',
        description: 'Unlock the value of your property with our Loan Against Property (LAP) schemes for your financial needs.',
        icon: Building,
        link: '/services/mortgage-loan'
    },
    {
        title: 'Working Capital',
        description: 'Keep your business running smoothly with our range of working capital solutions (CC/OD/DOD/BG/LC).',
        icon: LineChart,
        link: '/services/working-capital'
    },
    {
        title: 'Machinery Loans',
        description: 'Upgrade your technology and infrastructure with our specialized machinery loans for manufacturing units.',
        icon: Calculator,
        link: '/services/machinery-loan'
    }
];

const Home = () => {
    const { trackEvent } = useAnalytics();

    return (
        <div className="bg-gray-50 dark:bg-secondary-dark min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-secondary-dark text-slate-900 dark:text-white transition-colors duration-300">
                {/* Premium Animated Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[70%] bg-gradient-to-br from-primary/10 via-primary-dark/5 to-transparent dark:from-primary/20 dark:via-primary-dark/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[0%] right-[0%] w-[50%] h-[60%] bg-gradient-to-tl from-purple-200 via-blue-200 to-transparent dark:from-purple-900/20 dark:via-blue-900/10 rounded-full blur-[100px]" />
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 brightness-100 mix-blend-overlay"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 flex-grow flex items-center">
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-white/5 backdrop-blur-md rounded-full border border-gray-200 dark:border-white/10 text-primary-dark dark:text-primary-light text-sm font-semibold tracking-wider hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-default shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                TRUSTED FINANCIAL PARTNER
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-heading text-slate-900 dark:text-white">
                                Your Dreams, <br />
                                <span className="text-gradient">
                                    Our Capital
                                </span>
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed font-light">
                                ProCashu bridges the gap between your aspirations and capital with inclusive financial solutions tailored for you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    onClick={() => trackEvent('apply_now_clicked', {
                                        source: 'hero_section',
                                        page: 'home'
                                    })}
                                    className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-secondary-dark font-bold rounded-xl transition-all transform hover:scale-105 shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2"
                                >
                                    Apply Now <ArrowRight size={20} />
                                </Link>
                                <Link
                                    to="/services"
                                    onClick={() => trackEvent('explore_services_clicked', {
                                        source: 'hero_section',
                                        page: 'home'
                                    })}
                                    className="px-8 py-4 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 text-slate-700 dark:text-white font-semibold rounded-xl backdrop-blur-sm border border-gray-200 dark:border-white/10 transition-all hover:border-primary/50 dark:hover:border-white/20 flex items-center justify-center shadow-sm dark:shadow-none"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden md:block h-[600px] w-full"
                        >
                            {/* 3D-like Composition */}
                            <div className="relative w-full h-full perspective-1000">
                                {/* Main Card - Enhanced */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 rounded-[2rem] p-8 transform -rotate-6 transition-all duration-700 hover:rotate-0 hover:scale-105 z-20 overflow-hidden shadow-2xl bg-gradient-to-br from-orange-50 via-white to-purple-50 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-slate-800/70 backdrop-blur-xl border-4 border-primary/20 dark:border-white/20 hover:border-primary/40 dark:hover:border-white/30">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-orange-500/10 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 via-transparent to-purple-500/10"></div>
                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow ring-4 ring-primary/20">
                                            <Banknote className="text-white w-9 h-9" />
                                        </div>
                                        <div>
                                            <div className="text-slate-800 dark:text-slate-300 text-sm mb-2 font-bold uppercase tracking-wider">Total Disbursed</div>
                                            <div className="text-6xl font-black bg-gradient-to-r from-primary via-orange-600 to-primary-dark dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent tracking-tight mb-4 drop-shadow-lg">₹50Cr+</div>
                                            <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner ring-2 ring-slate-300 dark:ring-slate-600">
                                                <div className="h-full w-[85%] bg-gradient-to-r from-primary via-orange-500 to-primary-dark rounded-full animate-pulse shadow-lg"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-20 right-10 w-64 h-24 rounded-2xl p-4 animate-float z-30 flex items-center gap-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-xl border-2 border-green-500/30 dark:border-green-500/20 hover:border-green-500/50 transition-all">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 border-2 border-green-500/40"><ShieldCheck /></div>
                                    <div>
                                        <div className="text-slate-900 dark:text-white font-bold text-lg">Approved</div>
                                        <div className="text-xs text-green-600 dark:text-green-400 font-semibold">Instant Verification</div>
                                    </div>
                                </div>

                                <div className="absolute bottom-16 -left-8 w-52 h-auto rounded-2xl p-4 animate-float z-30 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-xl border-2 border-blue-500/30 dark:border-blue-500/20 hover:border-blue-500/50 transition-all" style={{ animationDelay: '2s' }}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border-2 border-blue-500/40"><Users size={14} /></div>
                                        <div className="text-slate-900 dark:text-white font-bold text-xs">Happy Clients</div>
                                    </div>
                                    <div className="flex -space-x-2">
                                        <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden">
                                            <img src="/images/clients/client1.png" alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden">
                                            <img src="/images/clients/client2.png" alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden">
                                            <img src="/images/clients/client3.png" alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 shadow-md overflow-hidden">
                                            <img src="/images/clients/client4.png" alt="Client" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-800 bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-[9px] font-bold text-white shadow-md">+5k</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="w-full bg-white dark:bg-secondary-dark border-y border-gray-100 dark:border-white/5 relative z-20 py-12 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Years Experience', value: '15+' },
                            { label: 'Happy Clients', value: '5000+' },
                            { label: 'Loan Disbursed', value: '₹500Cr+' },
                            { label: 'Partner Banks', value: '20+' },
                        ].map((stat, i) => (
                            <div key={i} className="group hover:-translate-y-1 transition-transform duration-300">
                                <div className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-slate-500 mb-2 group-hover:text-primary dark:group-hover:text-transparent dark:group-hover:from-primary dark:group-hover:to-primary-dark transition-all">{stat.value}</div>
                                <div className="text-slate-500 dark:text-slate-400 font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="py-32 bg-gray-50 dark:bg-secondary-dark relative transition-colors duration-300">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-gray-50 to-gray-50 dark:from-blue-900/10 dark:via-secondary-dark dark:to-secondary-dark pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">Our Services</h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full mb-8"></div>
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            Comprehensive financial products tailored to your personal and business needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Carousel Section */}
            <div className="relative z-10 bg-white dark:bg-transparent transition-colors duration-300">
                <ServiceCarousel />
            </div>

            {/* About Preview */}
            <section className="py-32 bg-gray-50 dark:bg-secondary-dark relative overflow-hidden transition-colors duration-300">
                <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-l from-primary/5 to-transparent blur-[100px]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 dark:ring-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                                    alt="Office"
                                    className="w-full transform transition duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60 dark:opacity-80"></div>
                            </div>
                        </div>
                        <div>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-gray-200 dark:bg-white/5 dark:border-white/10 text-primary-dark dark:text-primary font-semibold text-sm mb-6 shadow-sm dark:shadow-none">
                                About ProCashu
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">
                                Empowering Your <br />
                                <span className="text-gradient">Financial Future</span>
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
                                With over 15 years of industry leadership, we blend traditional financial expertise with modern technology to deliver seamless, transparent, and rapid funding solutions.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Lowest Interest Rates',
                                    'Minimal Documentation',
                                    'Fast Approval Process',
                                    'No Hidden Charges'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium">
                                        <div className="w-8 h-8 rounded-full bg-green-500/10 text-green-600 dark:text-green-500 flex items-center justify-center border border-green-500/20">
                                            <ShieldCheck size={16} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                to="/about"
                                className="inline-flex items-center text-primary-dark dark:text-primary font-bold hover:text-primary dark:hover:text-white transition-colors group"
                            >
                                Read More About Us <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
