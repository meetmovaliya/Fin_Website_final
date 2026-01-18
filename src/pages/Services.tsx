
import ServiceCard from '../components/ui/ServiceCard';
import { Briefcase, Calculator, Building, Home as HomeIcon, LineChart, Users, Zap, GraduationCap, Car } from 'lucide-react';

const allServices = [
    {
        title: 'Personal Loan',
        description: 'Instant personal loans for your immediate needs. Travel, wedding, or medical emergency.',
        icon: Users,
        link: '/services/personal-loan'
    },
    {
        title: 'Business Loans',
        description: 'Expand your business with our unsecured business loans. Fast approval for SMEs.',
        icon: Briefcase,
        link: '/services/business-loan'
    },
    {
        title: 'Home Loans',
        description: 'Buy your dream house with the lowest interest rates and extended repayment tenure.',
        icon: HomeIcon,
        link: '/services/home-loan'
    },
    {
        title: 'Loan Against Property',
        description: 'High-value loans against your residential or commercial property for diverse needs.',
        icon: Building,
        link: '/services/mortgage-loan'
    },
    {
        title: 'Working Capital',
        description: 'Manage your cash flow efficiently with CC/OD limits and trade finance products.',
        icon: LineChart,
        link: '/services/working-capital'
    },
    {
        title: 'Machinery Loans',
        description: 'Finance new machinery or equipment to boost your production capacity.',
        icon: Calculator,
        link: '/services/machinery-loan'
    },
    {
        title: 'Education Loan',
        description: 'Fund your higher education in India or abroad with our sudent-friendly loans.',
        icon: GraduationCap,
        link: '/services/education-loan'
    },
    {
        title: 'Car Loan',
        description: 'Drive home your dream car with up to 100% on-road funding options.',
        icon: Car,
        link: '/services/car-loan'
    },
    {
        title: 'Instant Gold Loan',
        description: 'Quick cash against your gold ornaments with minimal documentation.',
        icon: Zap,
        link: '/services/gold-loan'
    }
];

import SEO from '../components/seo/SEO';

const Services = () => {
    return (
        <div className="bg-slate-50 pt-24 pb-12 transition-colors duration-300">
            <SEO
                title="Our Services - Loans & Financial Solutions"
                description="Explore our wide range of financial services including Personal Loans, Business Loans, Home Loans, and more. Low interest rates and quick disbursal."
                canonical="https://procashu.com/services"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
                    <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We offer a wide array of financial products designed to meet the diverse needs of individuals and enterprises.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allServices.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
