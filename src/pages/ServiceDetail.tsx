
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

// This data could ideally come from a central data file or API
const servicesData: Record<string, { title: string; desc: string; features: string[]; docs: string[] }> = {
    'personal-loan': {
        title: 'Personal Loan',
        desc: 'Get instant personal loans for travel, medical emergencies, weddings, or home renovation with minimal documentation and quick disbursal.',
        features: ['Loans up to ₹40 Lakhs', 'Interest rates starting from 10.49%', 'Flexible tenure up to 60 months', 'No collateral required', 'Disbursal in 24 hours'],
        docs: ['Identity Proof (Aadhar/PAN)', 'Address Proof', 'Latest 3 months Salary Slips', 'Last 6 months Bank Statement']
    },
    'business-loan': {
        title: 'Business Loans',
        desc: 'Unsecured business loans to help you expand your operations, buy inventory, or manage cash flow gaps without pledging assets.',
        features: ['Loans up to ₹75 Lakhs', 'Unsecured (No Collateral)', 'Flexible repayment options', 'Minimal documentation', 'Quick processing'],
        docs: ['Business Registration Proof', 'GST Returns (Last 12 months)', 'ITR (Last 2 years)', 'Bank Statements (Last 6 months)', 'KYC of Proprietor/Partners']
    },
    'home-loan': {
        title: 'Home Loans',
        desc: 'Turn your dream of owning a home into reality with our affordable home loan options tailored to your needs.',
        features: ['Loans up to 90% of property value', 'High tenure up to 30 years', 'Attractive interest rates', 'Balance transfer facility', 'PMAY Subsidies applicable'],
        docs: ['Property Papers (Agreement to Sale)', 'Income Proof', 'Bank Statements', 'KYC Documents', 'Employment Proof']
    },
    'mortgage-loan': {
        title: 'Loan Against Property',
        desc: 'Unlock the value of your property to fund your personal or business needs with high-value loans at lower interest rates.',
        features: ['Higher Loan Amount', 'Lower Interest Rates compared to PL', 'Tenure up to 15 years', 'Residential & Commercial properties accepted', 'Quick Approval'],
        docs: ['Property Title Deeds', 'Paperwork of Property', 'Income Proof', 'Bank Statements', 'KYC Documents']
    },
    'working-capital': {
        title: 'Working Capital',
        desc: 'Ensure smooth business operations with our working capital solutions including Cash Credit, Overdraft, and Bill Discounting.',
        features: ['Customized limits based on turnover', 'Competitive interest rates', 'Revolving credit facility', 'Interest only on utilized amount', 'Annual renewal'],
        docs: ['Business Financials (Audited)', 'GST Returns', 'Bank Statements', 'Stock Statement', 'Debtors/Creditors List']
    },
    'machinery-loan': {
        title: 'Machinery Loans',
        desc: 'Upgrade your production capabilities by financing new or used machinery with our customized machinery loan solutions.',
        features: ['Funding up to 80% of asset value', 'Terms up to 7 years', 'Low down payment', 'Quick sanction', 'Doorstep service'],
        docs: ['Proforma Invoice / Quotation', 'KYC & Business Proof', 'Bank Statements', 'ITR', 'Machine Details']
    },
    'education-loan': {
        title: 'Education Loan',
        desc: 'Pursue your higher studies in India or abroad without financial worries. Covers tuition fees, accommodation, and more.',
        features: ['Loans up to ₹1 Crore for abroad studies', 'Moratorium period available', 'Tax benefits under Sec 80E', 'Covers 100% of expenses', 'Quick sanction letter'],
        docs: ['Admission Letter', 'Fee Structure', 'Academic Records', 'KYC of Student & Co-applicant', 'Income Proof of Co-applicant']
    },
    'car-loan': {
        title: 'Car Loan',
        desc: 'Drive your dream car home today with up to 100% on-road funding and flexible EMI options.',
        features: ['Up to 100% On-Road Funding', 'Tenure up to 7 years', 'Lowest interest rates', 'Pre-approved offers', 'Instant approval'],
        docs: ['Proforma Invoice', 'KYC Documents', 'Income Proof', 'Bank Statement', 'Employment Proof']
    },
    'gold-loan': {
        title: 'Instant Gold Loan',
        desc: 'Get immediate cash against your gold ornaments with minimal paperwork and secure storage.',
        features: ['High value per gram', 'Lowest interest rates', 'Pay interest only option', 'Secure vault storage', 'Disbursal in 30 mins'],
        docs: ['Identity Proof (Aadhar/PAN)', 'Address Proof', 'Passenger Photo', 'Gold Ornaments']
    }
};

const ServiceDetail = () => {
    const { serviceId } = useParams<{ serviceId: string }>();
    const service = serviceId ? servicesData[serviceId] : null;

    if (!service) {
        return (
            <div className="min-h-screen pt-32 pb-12 flex flex-col items-center justify-center text-center px-4 bg-slate-50">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h2>
                <p className="text-slate-600 mb-8">Sorry, the service you are looking for does not exist.</p>
                <Link to="/services" className="px-6 py-3 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark transition-colors">
                    Back to Services
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-slate-50 pt-24 pb-12 min-h-screen transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb / Back */}
                <Link to="/services" className="inline-flex items-center text-slate-500 hover:text-primary transition-colors mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Services
                </Link>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-colors duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 text-slate-900 p-8 md:p-12 relative overflow-hidden transition-colors duration-300">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="relative z-10">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.title}</h1>
                            <p className="text-slate-700 text-lg md:text-xl max-w-2xl leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
                        {/* Features Column */}
                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                                    Why Choose Our {service.title}?
                                </h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-accent/30 transition-colors"
                                        >
                                            <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} />
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <FileText className="text-accent" /> Required Documents
                                </h2>
                                <ul className="space-y-3 pl-2">
                                    {service.docs.map((doc, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-600">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                            {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* CTA Column */}
                        <div className="md:col-span-1">
                            <div className="bg-slate-100 text-slate-900 p-8 rounded-2xl shadow-lg sticky top-32 border border-slate-200 transition-colors duration-300">
                                <h3 className="text-2xl font-bold mb-4">Apply Now</h3>
                                <p className="text-slate-600 mb-6 text-sm">
                                    Get {service.title} approved quickly. Fill out the form or call us directly.
                                </p>

                                <div className="space-y-4">
                                    <Link
                                        to="/contact"
                                        className="block w-full text-center py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-all shadow-lg hover:translate-y-[-2px]"
                                    >
                                        Apply Online
                                    </Link>

                                    <div className="flex items-center justify-center gap-2 text-slate-400 text-sm py-2">
                                        <span>or</span>
                                    </div>

                                    <a
                                        href="tel:+919876543210"
                                        className="flex items-center justify-center gap-3 w-full py-4 border border-slate-300 hover:border-accent text-slate-900 font-semibold rounded-xl transition-all hover:bg-slate-200"
                                    >
                                        <Phone size={20} />
                                        Call Expert
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
