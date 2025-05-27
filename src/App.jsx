
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Loader2 } from 'lucide-react';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const JobPostingsPage = lazy(() => import('@/pages/JobPostingsPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen w-screen bg-background fixed inset-0 z-[200]">
    <div className="text-center">
      <Loader2 className="h-16 w-16 animate-spin text-sky-500 mx-auto" />
      <p className="mt-4 text-lg font-semibold text-slate-700">Loading Career Waves...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<PageTransitionWrapper><HomePage /></PageTransitionWrapper>} />
              <Route path="/services" element={<PageTransitionWrapper><ServicesPage /></PageTransitionWrapper>} />
              <Route path="/jobs" element={<PageTransitionWrapper><JobPostingsPage /></PageTransitionWrapper>} />
              <Route path="/about" element={<PageTransitionWrapper><AboutPage /></PageTransitionWrapper>} />
              <Route path="/contact" element={<PageTransitionWrapper><ContactPage /></PageTransitionWrapper>} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
  