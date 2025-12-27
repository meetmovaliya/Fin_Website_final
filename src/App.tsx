import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Contact from './pages/Contact';

import ServiceDetail from './pages/ServiceDetail';
import Popup from './components/ui/Popup';
import CookieConsent from './components/ui/CookieConsent';
// import AnalyticsDemo from './components/ui/AnalyticsDemo';
import { AnalyticsProvider } from './context/AnalyticsContext';

function App() {
  return (
    <Router>
      <AnalyticsProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-secondary-dark flex flex-col font-sans transition-colors duration-300">
          <Navbar />
          <Popup />
          <main className="flex-grow">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
          {/* <AnalyticsDemo /> */}
        </div>
      </AnalyticsProvider>
    </Router>
  );
}

// Scroll restoration component
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
