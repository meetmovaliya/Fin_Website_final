
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Smartphone, Home, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const carouselData = [
    {
        id: 'personal',
        title: 'Personal Loan',
        subtitle: 'Unlock possibilities with a personal loan designed for your needs.',
        features: ['Attractive interest rates', 'High loan eligibility', 'Seamless loan process', 'Easy repayments'],
        link: '/services/personal-loan',
        color: 'from-blue-500 to-cyan-400',
        icon: Smartphone,
        image: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=1000' // Placeholder 3D character
    },
    {
        id: 'business',
        title: 'MSME Business Loan',
        subtitle: 'Expand, innovate, succeed – our MSME business loans make it possible.',
        features: ['Collateral-free options', 'Quick disbursal', 'Flexible tenure', 'Minimal documentation'],
        link: '/services/business-loan',
        color: 'from-orange-500 to-red-400',
        icon: Briefcase,
        image: 'https://img.freepik.com/free-psd/3d-illustration-businessman-with-glasses_23-2149436194.jpg?w=1000'
    },
    {
        id: 'home',
        title: 'Home Loan',
        subtitle: 'Bring home the convenience you need. Your dream home is just a click away.',
        features: ['Low interest rates', 'Long repayment tenure', 'Tax benefits', 'Doorstep service'],
        link: '/services/home-loan',
        color: 'from-green-500 to-emerald-400',
        icon: Home,
        image: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?w=1000'
    },
    {
        id: 'gold',
        title: 'Gold Loan',
        subtitle: 'Instant cash against your gold. Secure, fast, and reliable.',
        features: ['Highest value per gram', 'Safe storage', 'Instant approval', 'Pay interest only'],
        link: '/services/gold-loan',
        color: 'from-yellow-400 to-amber-500',
        icon: Zap,
        image: 'https://img.freepik.com/free-psd/3d-male-cartoon-character-illustration_23-2148938903.jpg?w=1000'
    }
];

const ServiceCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = carouselData[currentIndex];



    return (
        <div className="py-20 overflow-hidden relative">
            {/* Background Decoration - Simplified */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className={`absolute -right-20 top-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl transition-colors duration-1000`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-white rounded-[2.5rem] p-8 md:p-14 border border-slate-200/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                <div className="mb-10 text-center md:text-left">
                    <span className="text-accent font-black tracking-[0.2em] text-xs uppercase bg-accent/5 px-4 py-2 rounded-full border border-accent/10">Our Products</span>
                </div>

                <div className="relative min-h-[750px] sm:min-h-[600px] md:h-[500px]">
                    <AnimatePresence initial={false} mode='wait' custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                        >
                            {/* Left: Image / Art with Floating Icons */}
                            <div className="relative w-full flex items-center justify-center order-2 md:order-1 pt-12 md:pt-0">
                                <div className="relative w-full max-w-[320px] mx-auto aspect-square">
                                    {/* Decorative Elements */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-10 rounded-full blur-3xl animate-pulse`} />

                                    <motion.div
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-3xl z-20 border border-slate-100"
                                    >
                                        💰
                                    </motion.div>
                                    <motion.div
                                        animate={{ y: [0, 15, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                        className="absolute top-1/2 -left-10 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center text-3xl z-20 border border-slate-100"
                                    >
                                        📈
                                    </motion.div>

                                    {/* Main Character Image */}
                                    <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl z-10">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="order-1 md:order-2 space-y-4 md:space-y-6 text-center md:text-left">
                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 font-heading"
                                >
                                    {slide.title}
                                </motion.h2>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg sm:text-xl text-slate-600 max-w-lg mx-auto md:mx-0 leading-relaxed"
                                >
                                    {slide.subtitle}
                                </motion.p>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 md:pt-4"
                                >
                                    {slide.features.map((feature, i) => (
                                        <div key={i} className="flex items-center justify-center md:justify-start gap-2">
                                            <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" />
                                            <span className="text-slate-500 font-medium text-sm sm:text-base">{feature}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col sm:flex-row gap-4 pt-8 justify-center md:justify-start"
                                >
                                    <Link
                                        to="/contact"
                                        className="px-10 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2 transform hover:-translate-y-1"
                                    >
                                        Apply Now <ArrowRight size={20} />
                                    </Link>
                                    <Link
                                        to={slide.link}
                                        className="px-10 py-4 bg-white border border-slate-200 hover:border-accent text-slate-700 font-bold rounded-xl transition-all flex items-center justify-center"
                                    >
                                        Explore More
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex justify-center md:justify-start gap-4 mt-8 md:mt-0 md:absolute md:bottom-12 md:left-[55%] z-20">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center bg-white hover:bg-accent hover:text-white hover:border-accent transition-all text-slate-600 shadow-sm"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex items-center gap-3 font-bold text-slate-400">
                        <span className="text-accent text-lg">{currentIndex + 1}</span>
                        <span className="w-10 h-px bg-slate-200"></span>
                        <span>{carouselData.length}</span>
                    </div>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center bg-white hover:bg-accent hover:text-white hover:border-accent transition-all text-slate-600 shadow-sm"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCarousel;
