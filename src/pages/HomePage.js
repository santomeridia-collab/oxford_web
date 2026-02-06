import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Verification from '../components/Verification/Verification';
import Gallery from '../components/Gallery/Gallery';

import Stats from '../components/Stats/Stats';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force refresh when location changes
    setKey(prev => prev + 1);
    
    // Scroll to top when navigating to home page
    window.scrollTo(0, 0);
    
    // Check if we need to scroll to a specific section after navigation
    if (location.state?.scrollTo) {
      const timer = setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the state after scrolling
        navigate(location.pathname, { replace: true, state: {} });
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  // Force component refresh on mount
  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        // Page was loaded from cache, force refresh
        setKey(prev => prev + 1);
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  return (
    <div className="home-page" key={key}>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Verification />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;