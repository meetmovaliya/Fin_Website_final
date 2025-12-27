
const partners = [
    { name: 'HDFC Bank', type: 'Private', domain: 'hdfcbank.com' },
    { name: 'ICICI Bank', type: 'Private', domain: 'icicibank.com' },
    { name: 'Axis Bank', type: 'Private', domain: 'axisbank.com' },
    { name: 'SBI', type: 'Public', domain: 'sbi.co.in' },
    { name: 'Kotak Mahindra', type: 'Private', domain: 'kotak.com' },
    { name: 'Bajaj Finserv', type: 'NBFC', domain: 'bajajfinserv.in' },
    { name: 'Tata Capital', type: 'NBFC', domain: 'tatacapital.com' },
    { name: 'Aditya Birla', type: 'NBFC', domain: 'adityabirlacapital.com' },
    { name: 'IndusInd Bank', type: 'Private', domain: 'indusind.com' },
    { name: 'Yes Bank', type: 'Private', domain: 'yesbank.in' },
    { name: 'IDFC First', type: 'Private', domain: 'idfcfirstbank.com' },
    { name: 'Bank of Baroda', type: 'Public', domain: 'bankofbaroda.in' },
];

const Partners = () => {
    return (
        <div className="bg-gray-50 dark:bg-secondary-dark pt-24 pb-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary-dark dark:text-white mb-6">Our Banking Partners</h1>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                        We work with India's leading banks and NBFCs to ensure you get the best interest rates and approval chances.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {partners.map((partner, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800/90 border border-gray-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all p-6 rounded-xl shadow-sm hover:shadow-md flex flex-col items-center justify-center text-center group h-40">
                            <img
                                src={`https://logo.clearbit.com/${partner.domain}`}
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = `https://placehold.co/200x80/f8fafc/0f172a?text=${encodeURIComponent(partner.name)}&font=montserrat`;
                                }}
                                alt={`${partner.name} Logo`}
                                className="h-12 w-auto object-contain mb-4 opacity-80 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 transform group-hover:scale-110"
                            />
                            <span className="text-xs text-gray-400 dark:text-slate-400 font-medium">{partner.type}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
