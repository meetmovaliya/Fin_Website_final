import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo_final.png';
import { useTheme } from '../../context/ThemeContext';

const servicesList = [
    { title: 'Personal Loan', desc: 'Instant personal loans for your immediate needs.', link: '/services/personal-loan' },
    { title: 'Business Loans', desc: 'Expand your business with our unsecured business loans.', link: '/services/business-loan' },
    { title: 'Home Loans', desc: 'Buy your dream house with the lowest interest rates.', link: '/services/home-loan' },
    { title: 'Loan Against Property', desc: 'High-value loans against your residential or commercial property.', link: '/services/mortgage-loan' },
    { title: 'Working Capital', desc: 'Manage your cash flow efficiently with CC/OD limits.', link: '/services/working-capital' },
    { title: 'Machinery Loans', desc: 'Finance new machinery to boost your production capacity.', link: '/services/machinery-loan' },
    { title: 'Education Loan', desc: 'Fund your higher education in India or abroad.', link: '/services/education-loan' },
    { title: 'Car Loan', desc: 'Drive home your dream car with up to 100% funding.', link: '/services/car-loan' },
    { title: 'Instant Gold Loan', desc: 'Quick cash against your gold ornaments.', link: '/services/gold-loan' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // For mobile
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setIsServicesOpen(false);
    }, [location]);

    const menuButtonClass = theme === 'dark' ? 'text-white' : 'text-secondary';
    const navbarBgClass = isScrolled
        ? 'bg-white/80 dark:bg-black/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-200 dark:border-white/10'
        : 'bg-transparent py-6';

    const logoTextClass = theme === 'dark' ? 'text-white' : 'text-secondary';

    const getLinkClass = (path: string) => {
        const isActive = location.pathname === path;
        if (isActive) return 'text-primary';

        // Dark Mode: Always white text (bg is dark or dark glass)
        if (theme === 'dark') return 'text-gray-300 hover:text-white';

        // Light Mode:
        // Scrolled: Dark Text (bg is white glass)
        // Not Scrolled: Dark Text (bg is light Hero)
        return 'text-secondary/80 hover:text-secondary';
    };

    return (
        <>
            {/* Main Navbar */}
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${navbarBgClass}`}
            >
                <div className="w-full px-4 md:px-12 lg:px-20 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <img
                                src={logo}
                                alt="ProCashu Logo"
                                className="h-12 w-12 object-cover object-center rounded-full transition-transform transform group-hover:scale-105 ring-2 ring-white/10"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-2xl font-bold font-sans leading-none tracking-wide ${logoTextClass}`}>
                                PROCASHU
                            </span>
                            <span className="text-[10px] font-bold text-primary tracking-[0.2em] leading-none mt-1">
                                THE DREAM CASH
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className={`text-sm font-medium transition-colors ${getLinkClass('/')}`}>Home</Link>
                        <Link to="/about" className={`text-sm font-medium transition-colors ${getLinkClass('/about')}`}>About</Link>

                        {/* Services Mega Menu */}
                        <div className="relative group">
                            <button className={`flex items-center gap-1 text-sm font-medium transition-colors group-hover:text-primary ${getLinkClass('/services')}`}>
                                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>

                            {/* Dropdown Content */}
                            <div className="absolute top-full -left-48 w-[600px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                <div className="bg-white dark:bg-secondary-dark rounded-2xl shadow-xl border border-gray-100 dark:border-white/10 p-6 grid grid-cols-2 gap-x-8 gap-y-4 before:absolute before:top-2 before:left-[13rem] before:w-4 before:h-4 before:bg-white dark:before:bg-secondary-dark before:rotate-45 before:border-t before:border-l before:border-gray-100 dark:before:border-white/10">
                                    {servicesList.map((service, index) => (
                                        <Link
                                            key={index}
                                            to={service.link}
                                            className="group/item flex flex-col gap-1 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">
                                                    {service.title}
                                                </span>
                                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-primary" />
                                            </div>
                                            <span className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">{service.desc}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link to="/partners" className={`text-sm font-medium transition-colors ${getLinkClass('/partners')}`}>Partners</Link>
                        <Link to="/contact" className={`text-sm font-medium transition-colors ${getLinkClass('/contact')}`}>Contact</Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${menuButtonClass}`}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        <Link
                            to="/contact"
                            className="bg-primary hover:bg-primary-light text-secondary-dark px-5 py-2 rounded-full font-semibold text-sm transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${menuButtonClass}`}
                        >
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg transition-colors ${menuButtonClass}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden fixed top-[60px] left-0 w-full bg-secondary-dark border-b border-gray-800 z-40 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-4 gap-2 max-h-[80vh] overflow-y-auto">
                            <Link to="/" className="text-lg font-medium p-3 rounded-lg text-gray-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/about" className="text-lg font-medium p-3 rounded-lg text-gray-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>About</Link>

                            {/* Mobile Services Accordion */}
                            <div>
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="w-full flex items-center justify-between text-lg font-medium p-3 rounded-lg text-gray-300 hover:bg-white/5"
                                >
                                    Services <ChevronDown size={20} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden pl-4"
                                        >
                                            <div className="flex flex-col gap-1 py-2 border-l border-white/10 ml-2">
                                                {servicesList.map((service, index) => (
                                                    <Link
                                                        key={index}
                                                        to={service.link}
                                                        className="block py-2 px-4 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-r-lg"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {service.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link to="/partners" className="text-lg font-medium p-3 rounded-lg text-gray-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>Partners</Link>
                            <Link to="/contact" className="text-lg font-medium p-3 rounded-lg text-gray-300 hover:bg-white/5" onClick={() => setIsOpen(false)}>Contact</Link>

                            <Link
                                to="/contact"
                                className="bg-primary text-center text-secondary-dark px-5 py-3 rounded-lg font-bold mt-4 mx-3"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
