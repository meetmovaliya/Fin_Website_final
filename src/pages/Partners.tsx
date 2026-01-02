const partners = [
    { name: 'HDFC Bank', type: 'Private', domain: 'hdfcbank.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/1024px-HDFC_Bank_Logo.svg.png' },
    { name: 'ICICI Bank', type: 'Private', domain: 'icicibank.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/1024px-ICICI_Bank_Logo.svg.png' },
    { name: 'Axis Bank', type: 'Private', domain: 'axisbank.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Axis_Bank_logo.svg/1024px-Axis_Bank_logo.svg.png' },
    { name: 'SBI', type: 'Public', domain: 'sbi.co.in', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/1024px-SBI-logo.svg.png' },
    { name: 'Kotak Mahindra', type: 'Private', domain: 'kotak.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Kotak_Mahindra_Bank_logo.svg/1024px-Kotak_Mahindra_Bank_logo.svg.png' },
    { name: 'Bajaj Finserv', type: 'NBFC', domain: 'bajajfinserv.in', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Bajaj_Finserv_Logo.svg/1024px-Bajaj_Finserv_Logo.svg.png' },
    { name: 'Tata Capital', type: 'NBFC', domain: 'tatacapital.com', logo: '/images/partners/tata-capital.png' },
    { name: 'Aditya Birla', type: 'NBFC', domain: 'adityabirlacapital.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Aditya_Birla_Group_Logo.svg/1024px-Aditya_Birla_Group_Logo.svg.png' },
    { name: 'IndusInd Bank', type: 'Private', domain: 'indusind.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/IndusInd_Bank_logo.svg/1024px-IndusInd_Bank_logo.svg.png' },
    { name: 'Yes Bank', type: 'Private', domain: 'yesbank.in', logo: '/images/partners/yes-bank.png' },
    { name: 'IDFC First', type: 'Private', domain: 'idfcfirstbank.com', logo: '/images/partners/idfc-first.png' },
    { name: 'Bank of Baroda', type: 'Public', domain: 'bankofbaroda.in', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bank_of_Baroda_Logo.svg/1024px-Bank_of_Baroda_Logo.svg.png' },
    { name: 'Standard Chartered', type: 'Foreign', domain: 'sc.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Standard_Chartered_logo.svg/1024px-Standard_Chartered_logo.svg.png' },
    { name: 'HSBC Bank', type: 'Foreign', domain: 'hsbc.co.in', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/HSBC_logo_%282018%29.svg/1024px-HSBC_logo_%282018%29.svg.png' },
    { name: 'PNB', type: 'Public', domain: 'pnbindia.in', logo: '/images/partners/pnb.png' },
    { name: 'Union Bank', type: 'Public', domain: 'unionbankofindia.co.in', logo: '/images/partners/union-bank.png' },
];

const Partners = () => {
    return (
        <div className="bg-slate-50 pt-24 pb-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Banking Partners</h1>
                    <div className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We work with India's leading banks and NBFCs to ensure you get the best interest rates and approval chances.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {partners.map((partner, i) => (
                        <div key={i} className="bg-white border border-slate-200 hover:border-primary/50 transition-all p-6 rounded-xl shadow-sm hover:shadow-md flex flex-col items-center justify-center text-center group h-40">
                            <img
                                src={partner.logo}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    if (target.src.includes('wikimedia')) {
                                        target.src = `https://www.google.com/s2/favicons?domain=${partner.domain}&sz=128`;
                                    } else {
                                        target.src = `https://placehold.co/200x80/f8fafc/0f172a?text=${encodeURIComponent(partner.name)}&font=montserrat`;
                                    }
                                }}
                                alt={`${partner.name} Logo`}
                                className="h-12 w-auto object-contain mb-4 transition-all transform group-hover:scale-110"
                            />
                            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">{partner.name}</span>
                            <span className="text-[10px] text-slate-500 font-medium mt-1">{partner.type}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
