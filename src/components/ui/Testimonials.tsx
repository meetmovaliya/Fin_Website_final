import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "As a small business owner, finding the right financing partner was crucial. ProCashu truly understood my needs and tailored a loan solution that perfectly matched my business requirements. Their personalized approach made the entire process smooth and stress-free. Thanks to ProCashu, my business is thriving!",
        name: "Piyush Nagar",
        location: "Ahemdabad",
        rating: 5,
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&fit=crop"
    },
    {
        id: 2,
        text: "We faced many cash flow problems in 2020. We connected with ProCashu during that time. The entire process was very fast and approval was given immediately. We were left in no uncertainty. Thanks to ProCashu, we are now in a healthy position.",
        name: "K. S. Man",
        location: "Hariyana",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&h=256&fit=crop"
    },
    {
        id: 3,
        text: "The home loan process was surprisingly efficient. I've heard horror stories about documentation, but ProCashu's team guided me through every step. I'm now a proud homeowner thanks to their support and competitive rates.",
        name: "Sneha Roy",
        location: "Mumbai",
        rating: 5,
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&fit=crop"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-gray-50 dark:bg-secondary-dark transition-colors duration-300 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center md:text-left">
                    <span className="text-secondary dark:text-primary-light font-bold tracking-widest text-sm uppercase">TESTIMONIALS</span>
                    <h2 className="text-4xl md:text-5xl font-black text-secondary-dark dark:text-white mt-4 font-heading">
                        OUR CUSTOMER REVIEWS
                    </h2>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatePresence mode="wait">
                            {/* We show 2 cards at a time on desktop, 1 on mobile */}
                            {[0, 1].map((offset) => {
                                const index = (currentIndex + offset) % testimonials.length;
                                const testimonial = testimonials[index];
                                return (
                                    <motion.div
                                        key={`${index}-${testimonial.id}`}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5 }}
                                        className={`bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl border-b-8 border-secondary dark:border-primary border-opacity-80 relative flex flex-col justify-between h-auto min-h-[480px] md:min-h-[420px] pb-14 ${offset === 1 ? 'hidden md:flex' : 'flex'}`}
                                    >
                                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 italic">
                                            "{testimonial.text}"
                                        </p>

                                        <div className="flex flex-col items-center mt-auto">
                                            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-gray-100 dark:border-slate-700 shadow-inner bg-slate-200 flex-shrink-0">
                                                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                                            </div>
                                            <h4 className="text-xl font-bold text-secondary-dark dark:text-white leading-tight">{testimonial.name}</h4>
                                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-none">{testimonial.location}</p>
                                            <div className="flex gap-1 absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-md border border-gray-100 dark:border-slate-700">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} size={18} fill="#FFD700" className="text-[#FFD700]" />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center flex-wrap gap-3 mt-12">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-12 bg-secondary dark:bg-primary' : 'w-2.5 bg-gray-300 dark:bg-slate-600'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
