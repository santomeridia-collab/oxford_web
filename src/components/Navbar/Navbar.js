import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (target) => {
    setIsMobileMenuOpen(false);
    
    if (target === 'programs') {
      // Navigate to separate Programs page
      navigate('/programs');
    } else if (target === 'home') {
      // Navigate to home page
      navigate('/');
    } else {
      // For other sections, check if we're on home page
      if (location.pathname === '/') {
        // If on home page, scroll to section immediately
        setTimeout(() => {
          scrollToSection(target);
        }, 50);
      } else {
        // If on other page, navigate to home with state to scroll after navigation
        navigate('/', { state: { scrollTo: target } });
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo" onClick={() => handleNavigation('home')}>
            <div className="logo-container">
              <img src="/images/oxford-logo.svg" alt="Oxford Logo" className="logo-image" />
              <div className="logo-text">
                <span className="logo-main">OXFORD</span>
                <span className="logo-sub">Fashion Institute</span>
              </div>
            </div>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation('home'); }}>Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation('about'); }}>About Us</a>
            <a href="/programs" onClick={(e) => { e.preventDefault(); handleNavigation('programs'); }}>Programs</a>
            <a href="#verification" onClick={(e) => { e.preventDefault(); handleNavigation('verification'); }}>Verification</a>
            <a href="#gallery" onClick={(e) => { e.preventDefault(); handleNavigation('gallery'); }}>Showcase</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation('contact'); }}>Contact Us</a>
          </div>

          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;