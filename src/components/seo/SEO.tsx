// import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO = ({ title, description, canonical }: SEOProps) => {
    // React 19 Incompatibility Fix:
    // react-helmet-async causes a crash ("<HelmetDispatcher> component") in React 19.
    // Temporarily disabling SEO meta tags to restore website functionality.

    // Fix: Use variables to prevent build error
    console.log("SEO disabled:", title, description, canonical);

    return null;

    /*
    return (
        <Helmet>
            <title>{title} | ProCashu</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${title} | ProCashu`} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="ProCashu" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${title} | ProCashu`} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
    */
};

export default SEO;
