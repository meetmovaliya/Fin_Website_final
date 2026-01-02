// Cookie Consent Banner Component
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield } from 'lucide-react';
import { useAnalytics } from '../../context/AnalyticsContext';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);
    const { setConsent, hasConsent } = useAnalytics();

    useEffect(() => {
        // Check if user has already made a choice
        const consentGiven = hasConsent();
        const consentRejected = document.cookie.includes('procashu_cookie_consent=rejected');

        if (!consentGiven && !consentRejected) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setShowBanner(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [hasConsent]);

    const handleAccept = () => {
        setConsent(true);
        setShowBanner(false);
    };

    const handleReject = () => {
        setConsent(false);
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
                >
                    <div className="glass rounded-2xl p-6 shadow-2xl border border-slate-200 bg-white/95 backdrop-blur-xl">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg">
                                    <Cookie className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg">
                                        Cookie Consent
                                    </h3>
                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                        <Shield className="w-3 h-3" />
                                        <span>Privacy Protected</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleReject}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                            We use cookies and analytics to improve your experience, track page views, and understand user behavior.
                            We may also request your location to provide better services.
                        </p>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 px-4 py-2.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={handleReject}
                                className="flex-1 px-4 py-2.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-200 transition-all"
                            >
                                Reject
                            </button>
                        </div>

                        {/* Privacy Link */}
                        <p className="text-xs text-slate-500 mt-4 text-center">
                            By accepting, you agree to our data collection practices.
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
