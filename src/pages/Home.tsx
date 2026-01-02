// ProCashu Home Page
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Calculator, Building, Home as HomeIcon, LineChart, ShieldCheck, Users, Banknote, Video, MessageCircle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ui/ServiceCard';
import ServiceCarousel from '../components/ui/ServiceCarousel';
import Testimonials from '../components/ui/Testimonials';
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
        <div className="bg-slate-50 min-h-screen transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white border-b border-slate-100 transition-colors duration-300">
                {/* Enhanced Premium Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-slate-50/50 -skew-x-12 transform" />
                    <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 flex-grow flex items-center">
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm text-accent font-bold text-xs tracking-widest uppercase"
                            >
                                <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                                Trusted Financial Partner
                            </motion.div>
                            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight font-heading text-slate-900">
                                Your Dreams, <br />
                                <span className="text-accent underline decoration-accent/20 underline-offset-8">
                                    Our Capital
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                                ProCashu bridges the gap between your aspirations and capital with professional financial solutions tailored for your success.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    onClick={() => trackEvent('apply_now_clicked', {
                                        source: 'hero_section',
                                        page: 'home'
                                    })}
                                    className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    Apply Now <ArrowRight size={20} />
                                </Link>
                                <Link
                                    to="/services"
                                    onClick={() => trackEvent('explore_services_clicked', {
                                        source: 'hero_section',
                                        page: 'home'
                                    })}
                                    className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-lg border border-slate-300 transition-all flex items-center justify-center"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative hidden md:block h-[600px] w-full"
                        >
                            {/* 3D Composition with Floating Animation */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Main Card */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="relative w-80 h-96 rounded-[2.5rem] p-8 z-20 overflow-hidden shadow-2xl bg-gradient-to-br from-white to-accent/5 border border-white"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -mr-16 -mt-16 blur-2xl" />

                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center shadow-lg shadow-accent/30">
                                            <Banknote className="text-white w-9 h-9" />
                                        </div>
                                        <div>
                                            <div className="text-slate-500 text-xs mb-1 font-bold uppercase tracking-widest">Total Disbursed</div>
                                            <div className="text-5xl font-black text-accent tracking-tighter mb-4 drop-shadow-sm">₹50Cr+</div>
                                            <div className="h-2.5 w-full bg-slate-100/80 rounded-full overflow-hidden border border-slate-200/50 backdrop-blur-sm">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "85%" }}
                                                    transition={{ duration: 1.5, delay: 1 }}
                                                    className="h-full bg-gradient-to-r from-accent to-accent-dark shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                                                ></motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Floating "Approved" Pill */}
                                <motion.div
                                    animate={{
                                        y: [0, 15, 0],
                                        x: [0, 5, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.5
                                    }}
                                    className="absolute top-20 right-0 lg:-right-8 w-64 h-22 rounded-3xl p-5 z-30 flex items-center gap-4 bg-white/90 backdrop-blur-md shadow-2xl border border-white/50"
                                >
                                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-100 shadow-inner">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <div className="text-slate-900 font-bold text-base">Approved</div>
                                        <div className="text-[11px] text-green-600 font-bold uppercase tracking-wider">Instant Verification</div>
                                    </div>
                                </motion.div>

                                {/* Floating "Happy Clients" Card */}
                                <motion.div
                                    animate={{
                                        y: [0, -15, 0],
                                        x: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 7,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    className="absolute bottom-16 left-0 lg:-left-12 w-60 h-auto rounded-3xl p-5 z-30 bg-white/90 backdrop-blur-md shadow-2xl border border-white/50"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-primary border border-blue-100">
                                            <Users size={16} />
                                        </div>
                                        <div className="text-slate-900 font-bold text-sm uppercase tracking-wider">Happy Clients</div>
                                    </div>
                                    <div className="flex -space-x-3">
                                        {[
                                            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&fit=crop",
                                            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&fit=crop",
                                            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&fit=crop",
                                            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&h=100&fit=crop"
                                        ].map((url, i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden ring-2 ring-slate-50">
                                                <img src={url} alt="client" className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white shadow-md ring-2 ring-slate-50">+5k</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <div className="w-full bg-slate-50 border-y border-slate-200 relative z-20 py-12 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Years Experience', value: '15+' },
                            { label: 'Happy Clients', value: '5000+' },
                            { label: 'Loan Disbursed', value: '₹500Cr+' },
                            { label: 'Partner Banks', value: '20+' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group p-4"
                            >
                                <div className="text-4xl md:text-5xl font-black text-accent mb-2 transition-all transform group-hover:scale-110 drop-shadow-sm">{stat.value}</div>
                                <div className="text-slate-500 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section className="py-24 bg-white relative transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Services</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
                        <p className="text-slate-600 text-lg">
                            Tailored financial products for your personal and business growth.
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
            <div className="relative z-10 bg-white transition-colors duration-300">
                <ServiceCarousel />
            </div>

            {/* Assistance Section */}
            <section className="py-24 bg-white transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight font-heading">
                                Expert assistance <br />
                                <span className="text-primary">whenever you need it</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                                Quick and easy support for your loan disbursal and repayment.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#1b3168] to-[#2563eb] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
                            >
                                Go To Contact Zone
                            </Link>
                        </div>
                        <div className="space-y-12">
                            {[
                                {
                                    title: 'Immediate support',
                                    subtitle: 'with video tutorials',
                                    icon: Video,
                                    color: 'bg-blue-50 text-blue-500'
                                },
                                {
                                    title: '24/7',
                                    subtitle: 'chat assistance',
                                    icon: MessageCircle,
                                    color: 'bg-cyan-50 text-cyan-500'
                                },
                                {
                                    title: 'Connect',
                                    subtitle: 'with our experts on phone',
                                    icon: PhoneCall,
                                    color: 'bg-indigo-50 text-indigo-500'
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className={`w-16 h-16 rounded-3xl ${item.color} flex items-center justify-center shadow-inner transition-transform group-hover:scale-110`}>
                                        <item.icon size={32} />
                                    </div>
                                    <div>
                                        <h4 className="text-2xl font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-500 font-medium">{item.subtitle}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="py-24 bg-slate-50 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                                    alt="Office"
                                    className="w-full h-[500px] object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/10" />
                            </motion.div>
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/5 text-accent font-black text-[10px] uppercase tracking-[0.2em] mb-6 border border-accent/10">
                                About ProCashu
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-slate-900 font-heading">
                                Empowering Your <br />
                                <span className="text-accent underline decoration-accent/10 underline-offset-8">Financial Future</span>
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                                With over 15 years of industry leadership, we blend financial expertise with modern technology to deliver seamless, transparent, and rapid funding solutions.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Lowest Interest Rates',
                                    'Minimal Documentation',
                                    'Fast Approval Process',
                                    'No Hidden Charges'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                                        <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center border border-accent/20">
                                            <ShieldCheck size={16} />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="pt-4"
                            >
                                <Link
                                    to="/about"
                                    className="inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20 group"
                                >
                                    Read More About Us <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Testimonials />
        </div >
    );
};

export default Home;
