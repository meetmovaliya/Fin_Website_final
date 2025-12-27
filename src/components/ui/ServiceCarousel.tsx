
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

    // Floating animation variants
    const floatingVariant: any = {
        float: {
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const orbitVariant: any = {
        spin: {
            rotate: 360,
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    return (
        <div className="py-20 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className={`absolute -right-20 top-20 w-96 h-96 bg-gradient-to-br ${slide.color} opacity-20 rounded-full blur-[100px] transition-colors duration-1000`} />
                <div className={`absolute -left-20 bottom-20 w-72 h-72 bg-gradient-to-tr ${slide.color} opacity-10 rounded-full blur-[100px] transition-colors duration-1000`} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 glass dark:glass rounded-3xl p-8 md:p-12 border border-white/20 dark:border-white/5 bg-white/40 dark:bg-white/5 shadow-xl">
                <div className="mb-8">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Products</span>
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
                            {/* Left: Image / Art */}
                            <div className="relative w-full flex items-center justify-center order-2 md:order-1 pt-12 md:pt-0">
                                <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto aspect-square bg-white/5 rounded-[2rem] sm:rounded-[3rem] overflow-visible border border-white/10 backdrop-blur-sm">
                                    {/* Animated Floating Elements mimicking GIFs */}
                                    <motion.div
                                        variants={floatingVariant}
                                        animate="float"
                                        className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-glow flex items-center justify-center text-2xl md:text-3xl z-20 border-4 border-secondary-dark"
                                    >
                                        💰
                                    </motion.div>
                                    <motion.div
                                        variants={floatingVariant}
                                        animate="float"
                                        transition={{ delay: 1 }}
                                        className="absolute top-1/2 -left-8 md:-left-12 w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl shadow-xl flex items-center justify-center text-2xl md:text-3xl z-20 border-4 border-secondary-dark"
                                    >
                                        %
                                    </motion.div>

                                    <motion.div
                                        variants={floatingVariant}
                                        animate="float"
                                        transition={{ delay: 1.5 }}
                                        className="absolute -bottom-6 -left-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-2xl z-20 border border-white/20"
                                    >
                                        ⚡
                                    </motion.div>

                                    {/* Main Character Image */}
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover object-center rounded-[1.8rem] sm:rounded-[2.5rem] shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500 ring-1 ring-white/20"
                                    />

                                    {/* Orbiting Circle */}
                                    <motion.div
                                        variants={orbitVariant}
                                        animate="spin"
                                        className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full scale-125 md:scale-150 z-0"
                                    />
                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="order-1 md:order-2 space-y-4 md:space-y-6 text-center md:text-left">
                                <motion.h2
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 dark:text-white font-heading"
                                >
                                    {slide.title}
                                </motion.h2>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
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
                                            <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                                            <span className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base">{feature}</span>
                                        </div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col sm:flex-row gap-4 pt-6 justify-center md:justify-start"
                                >
                                    <Link
                                        to="/contact"
                                        className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-secondary-dark font-bold rounded-xl transition-all shadow-glow hover:shadow-glow-lg text-center"
                                    >
                                        Apply Now
                                    </Link>
                                    <Link
                                        to={slide.link}
                                        className="px-8 py-4 border border-slate-200 dark:border-white/20 hover:border-primary text-slate-700 dark:text-white hover:text-primary font-semibold rounded-xl transition-all text-center"
                                    >
                                        Know More
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex justify-center md:justify-start gap-6 mt-12 md:mt-0 md:absolute md:bottom-12 md:left-[55%] z-20">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/20 flex items-center justify-center hover:bg-primary hover:text-secondary-dark hover:border-primary transition-all text-slate-700 dark:text-white bg-white/5 backdrop-blur-sm"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div className="flex items-center gap-3 font-medium text-slate-500 dark:text-slate-400">
                        <span className="text-primary">{currentIndex + 1}</span>
                        <span className="w-12 h-px bg-slate-200 dark:bg-white/20"></span>
                        <span>{carouselData.length}</span>
                    </div>
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/20 flex items-center justify-center hover:bg-primary hover:text-secondary-dark hover:border-primary transition-all text-slate-700 dark:text-white bg-white/5 backdrop-blur-sm"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCarousel;
