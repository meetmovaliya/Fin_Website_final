// Analytics Utility Service
// Comprehensive tracking for user behavior, location, device info, and more

interface AnalyticsData {
    visitorId: string;
    sessionId: string;
    location?: {
        country?: string;
        city?: string;
        latitude?: number;
        longitude?: number;
        timestamp: number;
    };
    device: {
        type: 'mobile' | 'tablet' | 'desktop';
        browser: string;
        os: string;
        screenResolution: string;
    };
    pageViews: Array<{
        path: string;
        timestamp: number;
        timeSpent?: number;
    }>;
    events: Array<{
        type: string;
        data: any;
        timestamp: number;
    }>;
    referrer: string;
    sessionStart: number;
    lastActivity: number;
}

// Cookie Management
export const CookieManager = {
    set: (name: string, value: string, days: number = 365) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    },

    get: (name: string): string | null => {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    delete: (name: string) => {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }
};

// Generate unique IDs
const generateId = (): string => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// Device Detection
const detectDevice = (): AnalyticsData['device'] => {
    const ua = navigator.userAgent;
    let type: 'mobile' | 'tablet' | 'desktop' = 'desktop';

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        type = 'tablet';
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        type = 'mobile';
    }

    // Detect browser
    let browser = 'Unknown';
    if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
    else if (ua.indexOf('SamsungBrowser') > -1) browser = 'Samsung Internet';
    else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) browser = 'Opera';
    else if (ua.indexOf('Trident') > -1) browser = 'Internet Explorer';
    else if (ua.indexOf('Edge') > -1) browser = 'Edge';
    else if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
    else if (ua.indexOf('Safari') > -1) browser = 'Safari';

    // Detect OS
    let os = 'Unknown';
    if (ua.indexOf('Win') > -1) os = 'Windows';
    else if (ua.indexOf('Mac') > -1) os = 'MacOS';
    else if (ua.indexOf('Linux') > -1) os = 'Linux';
    else if (ua.indexOf('Android') > -1) os = 'Android';
    else if (ua.indexOf('like Mac') > -1) os = 'iOS';

    return {
        type,
        browser,
        os,
        screenResolution: `${window.screen.width}x${window.screen.height}`
    };
};

// Geolocation Tracking
export const trackLocation = async (): Promise<AnalyticsData['location'] | null> => {
    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            console.log('Geolocation not supported');
            resolve(null);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                // Try to get city/country from reverse geocoding API (optional)
                try {
                    const response = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                    );
                    const data = await response.json();

                    resolve({
                        country: data.countryName || 'Unknown',
                        city: data.city || data.locality || 'Unknown',
                        latitude,
                        longitude,
                        timestamp: Date.now()
                    });
                } catch (error) {
                    console.log('Reverse geocoding failed, using coordinates only');
                    resolve({
                        latitude,
                        longitude,
                        timestamp: Date.now()
                    });
                }
            },
            (error) => {
                console.log('Geolocation permission denied or error:', error.message);
                resolve(null);
            },
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 0
            }
        );
    });
};

// Analytics Manager
class Analytics {
    private data: AnalyticsData;
    private storageKey = 'procashu_analytics';
    private currentPageStart: number = Date.now();
    private consentGiven: boolean = false;

    constructor() {
        this.data = this.loadData();
        this.checkConsent();
    }

    private checkConsent(): void {
        const consent = CookieManager.get('procashu_cookie_consent');
        this.consentGiven = consent === 'accepted';
    }

    public setConsent(accepted: boolean): void {
        this.consentGiven = accepted;
        CookieManager.set('procashu_cookie_consent', accepted ? 'accepted' : 'rejected', 365);

        if (accepted) {
            this.initialize();
        }
    }

    public hasConsent(): boolean {
        return this.consentGiven;
    }

    private loadData(): AnalyticsData {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                const data = JSON.parse(stored);
                // Check if session is still valid (30 minutes)
                if (Date.now() - data.lastActivity < 30 * 60 * 1000) {
                    return data;
                }
            }
        } catch (error) {
            console.error('Failed to load analytics data:', error);
        }

        // Create new session
        return this.createNewSession();
    }

    private createNewSession(): AnalyticsData {
        let visitorId = CookieManager.get('procashu_visitor_id');
        if (!visitorId) {
            visitorId = generateId();
            CookieManager.set('procashu_visitor_id', visitorId, 365);
        }

        return {
            visitorId,
            sessionId: generateId(),
            device: detectDevice(),
            pageViews: [],
            events: [],
            referrer: document.referrer || 'direct',
            sessionStart: Date.now(),
            lastActivity: Date.now()
        };
    }

    private saveData(): void {
        if (!this.consentGiven) return;

        try {
            this.data.lastActivity = Date.now();
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        } catch (error) {
            console.error('Failed to save analytics data:', error);
        }
    }

    public async initialize(): Promise<void> {
        if (!this.consentGiven) return;

        // Track location if not already tracked
        if (!this.data.location) {
            const location = await trackLocation();
            if (location) {
                this.data.location = location;
                this.saveData();
            }
        }

        // Log initialization
        console.log('Analytics initialized:', {
            visitorId: this.data.visitorId,
            sessionId: this.data.sessionId,
            device: this.data.device,
            location: this.data.location
        });
    }

    public trackPageView(path: string): void {
        if (!this.consentGiven) return;

        // Save time spent on previous page
        if (this.data.pageViews.length > 0) {
            const lastPage = this.data.pageViews[this.data.pageViews.length - 1];
            if (!lastPage.timeSpent) {
                lastPage.timeSpent = Date.now() - this.currentPageStart;
            }
        }

        // Track new page view
        this.data.pageViews.push({
            path,
            timestamp: Date.now()
        });

        this.currentPageStart = Date.now();
        this.saveData();

        console.log('Page view tracked:', path);
    }

    public trackEvent(type: string, data?: any): void {
        if (!this.consentGiven) return;

        this.data.events.push({
            type,
            data,
            timestamp: Date.now()
        });

        this.saveData();

        console.log('Event tracked:', type, data);
    }

    public getAnalyticsData(): AnalyticsData {
        return this.data;
    }

    public getSessionDuration(): number {
        return Date.now() - this.data.sessionStart;
    }

    public isReturningVisitor(): boolean {
        const visitorId = CookieManager.get('procashu_visitor_id');
        return visitorId !== null && visitorId === this.data.visitorId;
    }

    public clearData(): void {
        localStorage.removeItem(this.storageKey);
        CookieManager.delete('procashu_visitor_id');
        CookieManager.delete('procashu_cookie_consent');
        this.data = this.createNewSession();
        this.consentGiven = false;
    }
}

// Export singleton instance
export const analytics = new Analytics();

// Utility functions for easy tracking
export const trackPageView = (path: string) => analytics.trackPageView(path);
export const trackEvent = (type: string, data?: any) => analytics.trackEvent(type, data);
export const getAnalyticsData = () => analytics.getAnalyticsData();
export const initializeAnalytics = () => analytics.initialize();
export const setAnalyticsConsent = (accepted: boolean) => analytics.setConsent(accepted);
export const hasAnalyticsConsent = () => analytics.hasConsent();
