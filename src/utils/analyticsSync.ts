// Utility to sync analytics data to Google Sheets via Apps Script Web App
import { getAnalyticsData } from './analytics';
import { CONFIG } from '../services/formService';

const GOOGLE_SHEETS_URL = CONFIG.GOOGLE_SCRIPT_URL;

export const syncToGoogleSheets = async (force: boolean = false) => {
    if (!GOOGLE_SHEETS_URL || GOOGLE_SHEETS_URL.includes('YOUR_GOOGLE_SCRIPT_WEB_APP_URL')) {
        console.warn('Google Sheets Sync: URL not configured.');
        return false;
    }

    try {
        const data = getAnalyticsData();

        // Only sync if there's new data or forced
        const lastSync = localStorage.getItem('last_analytics_sync');
        const now = Date.now();

        // Sync throttle: once every 2 hours (2 * 60 * 60 * 1000)
        const TWO_HOURS = 7200000;
        if (!force && lastSync && now - parseInt(lastSync) < TWO_HOURS) {
            return false;
        }

        await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors', // Apps Script requires no-cors if not handling preflight
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: 'analytics',
                timestamp: new Date().toISOString(),
                visitorId: data.visitorId,
                sessionId: data.sessionId,
                location: data.location,
                device: data.device,
                pageViews: data.pageViews,
                events: data.events
            }),
        });

        localStorage.setItem('last_analytics_sync', now.toString());
        console.log('Google Sheets Sync: Success');
        return true;
    } catch (error) {
        console.error('Google Sheets Sync: Failed', error);
        return false;
    }
};
