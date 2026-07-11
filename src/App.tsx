import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import Placeholder from './pages/Placeholder';
import Industries from './pages/Industries';
import Sustainability from './pages/Sustainability';
import TestimonialsPage from './pages/TestimonialsPage';
import Resources from './pages/Resources';

function App() {
  const [showSplash, setShowSplash] = useState(() => {
    return !sessionStorage.getItem('hasSeenSplash');
  });

  useEffect(() => {
    if (showSplash) {
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem('hasSeenSplash', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  return (
    <HelmetProvider>
      <AnimatePresence>
        {showSplash && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              className="text-4xl md:text-6xl font-extrabold text-primary-500 text-center px-4"
            >
              KVRK Construction Ltd.
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Router>
        <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-quote" element={<GetQuote />} />
              
              {/* Enterprise Modules */}
              <Route path="/our-team" element={<Placeholder title="Our Team" />} />
              <Route path="/careers" element={<Placeholder title="Careers" />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/blog" element={<Placeholder title="Blog & News" />} />
              <Route path="/faq" element={<Placeholder title="FAQs" />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
