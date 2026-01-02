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
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white p-8 rounded-3xl border border-slate-200/60 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
            <div className="relative z-10">
                <div className="w-14 h-14 bg-accent/5 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors font-heading">
                    {title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {description}
                </p>

                <Link
                    to={link}
                    className="inline-flex items-center text-sm font-bold text-accent hover:text-accent-dark transition-colors"
                >
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
