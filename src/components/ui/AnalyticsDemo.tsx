// Analytics Demo Component - Shows real-time analytics data
import { useState, useEffect } from 'react';
import { useAnalytics } from '../../context/AnalyticsContext';
import { X, BarChart3, MapPin, Monitor, Clock, MousePointer } from 'lucide-react';

const AnalyticsDemo = () => {
    const { getAnalyticsData } = useAnalytics();
    const [data, setData] = useState<any>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Update data every second
        const interval = setInterval(() => {
            setData(getAnalyticsData());
        }, 1000);

        return () => clearInterval(interval);
    }, [getAnalyticsData]);

    if (!data) return null;

    const sessionDuration = Math.floor((Date.now() - data.sessionStart) / 1000);
    const minutes = Math.floor(sessionDuration / 60);
    const seconds = sessionDuration % 60;

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
                title="View Analytics"
            >
                <BarChart3 className="w-6 h-6" />
            </button>

            {/* Analytics Panel */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-96 max-h-[600px] overflow-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 backdrop-blur-xl">
                    {/* Header */}
                    <div className="sticky top-0 bg-gradient-to-r from-primary to-primary-dark p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-white" />
                            <h3 className="font-bold text-white">Live Analytics</h3>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-4">
                        {/* Session Info */}
                        <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Clock className="w-4 h-4 text-primary" />
                                <h4 className="font-semibold text-slate-900 dark:text-white">Session</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-600 dark:text-slate-400">Duration:</span>
                                    <span className="font-mono text-slate-900 dark:text-white">
                                        {minutes}m {seconds}s
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600 dark:text-slate-400">Visitor ID:</span>
                                    <span className="font-mono text-xs text-slate-900 dark:text-white">
                                        {data.visitorId.slice(0, 12)}...
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600 dark:text-slate-400">Session ID:</span>
                                    <span className="font-mono text-xs text-slate-900 dark:text-white">
                                        {data.sessionId.slice(0, 12)}...
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        {data.location && (
                            <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-600 dark:text-slate-400">City:</span>
                                        <span className="font-medium text-slate-900 dark:text-white">
                                            {data.location.city || 'Unknown'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-600 dark:text-slate-400">Country:</span>
                                        <span className="font-medium text-slate-900 dark:text-white">
                                            {data.location.country || 'Unknown'}
                                        </span>
                                    </div>
                                    {data.location.latitude && (
                                        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                                            {data.location.latitude.toFixed(4)}, {data.location.longitude.toFixed(4)}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Device */}
                        <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <Monitor className="w-4 h-4 text-primary" />
                                <h4 className="font-semibold text-slate-900 dark:text-white">Device</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-600 dark:text-slate-400">Type:</span>
                                    <span className="font-medium text-slate-900 dark:text-white capitalize">
                                        {data.device.type}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600 dark:text-slate-400">Browser:</span>
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        {data.device.browser}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600 dark:text-slate-400">OS:</span>
                                    <span className="font-medium text-slate-900 dark:text-white">
                                        {data.device.os}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600 dark:text-slate-400">Resolution:</span>
                                    <span className="font-mono text-xs text-slate-900 dark:text-white">
                                        {data.device.screenResolution}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Page Views */}
                        <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <MousePointer className="w-4 h-4 text-primary" />
                                <h4 className="font-semibold text-slate-900 dark:text-white">
                                    Page Views ({data.pageViews.length})
                                </h4>
                            </div>
                            <div className="space-y-2 max-h-40 overflow-y-auto">
                                {data.pageViews.slice(-5).reverse().map((pv: any, i: number) => (
                                    <div key={i} className="text-sm flex justify-between items-center">
                                        <span className="font-mono text-xs text-slate-900 dark:text-white">
                                            {pv.path}
                                        </span>
                                        {pv.timeSpent && (
                                            <span className="text-xs text-slate-500 dark:text-slate-400">
                                                {Math.floor(pv.timeSpent / 1000)}s
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Events */}
                        {data.events.length > 0 && (
                            <div className="bg-gray-50 dark:bg-slate-800 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <MousePointer className="w-4 h-4 text-primary" />
                                    <h4 className="font-semibold text-slate-900 dark:text-white">
                                        Events ({data.events.length})
                                    </h4>
                                </div>
                                <div className="space-y-2 max-h-40 overflow-y-auto">
                                    {data.events.slice(-5).reverse().map((event: any, i: number) => (
                                        <div key={i} className="text-sm">
                                            <div className="font-medium text-slate-900 dark:text-white">
                                                {event.type}
                                            </div>
                                            {event.data && (
                                                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                                                    {JSON.stringify(event.data)}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Export Button */}
                        <button
                            onClick={() => {
                                const dataStr = JSON.stringify(data, null, 2);
                                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                                const url = URL.createObjectURL(dataBlob);
                                const link = document.createElement('a');
                                link.href = url;
                                link.download = `analytics-${new Date().toISOString()}.json`;
                                link.click();
                            }}
                            className="w-full px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:scale-105 transition-transform"
                        >
                            Export Data (JSON)
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AnalyticsDemo;
