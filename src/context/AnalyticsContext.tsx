// Analytics Context Provider
import { createContext, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import {
    trackPageView,
    trackEvent,
    initializeAnalytics,
    setAnalyticsConsent,
    hasAnalyticsConsent,
    getAnalyticsData
} from '../utils/analytics';

interface AnalyticsContextType {
    trackEvent: (type: string, data?: any) => void;
    getAnalyticsData: () => any;
    setConsent: (accepted: boolean) => void;
    hasConsent: () => boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
    const location = useLocation();

    // Track page views on route change
    useEffect(() => {
        if (hasAnalyticsConsent()) {
            trackPageView(location.pathname);
        }
    }, [location]);

    // Initialize analytics on mount
    useEffect(() => {
        if (hasAnalyticsConsent()) {
            initializeAnalytics();
        }
    }, []);

    const contextValue: AnalyticsContextType = {
        trackEvent,
        getAnalyticsData,
        setConsent: setAnalyticsConsent,
        hasConsent: hasAnalyticsConsent
    };

    return (
        <AnalyticsContext.Provider value={contextValue}>
            {children}
        </AnalyticsContext.Provider>
    );
};

// Custom hook to use analytics
export const useAnalytics = () => {
    const context = useContext(AnalyticsContext);
    if (context === undefined) {
        throw new Error('useAnalytics must be used within an AnalyticsProvider');
    }
    return context;
};
