import { motion } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    link: string;
    index: number;
}

const ServiceCard = ({ title, description, icon: Icon, link, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass-card p-8 rounded-2xl overflow-hidden bg-white/80 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 shadow-lg dark:shadow-xl transition-all duration-300"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-primary/20 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500 ease-out blur-md" />

            <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 border-2 border-primary/20 dark:border-primary/30 rounded-xl flex items-center justify-center text-primary dark:text-primary mb-6 group-hover:bg-primary group-hover:text-white dark:group-hover:text-secondary-dark group-hover:border-primary transition-all duration-300 shadow-md dark:shadow-lg">
                    <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary transition-colors font-heading">
                    {title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {description}
                </p>

                <Link
                    to={link}
                    className="inline-flex items-center text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-primary transition-colors"
                >
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
