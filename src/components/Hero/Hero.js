import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ===== DATA CONFIGURATION =====
  const heroSlides = [
    {
      id: 1,
      title: "KGCE FINE ARTS & ANIMATION",
      subtitle: {
        line1: "2 Year Poly Course",
        line2: "PSC Approved"
      },
      stats: [
        { number: "19+", label: "Years Experience" },
        { number: "4", label: "Courses" },
        { number: "2", label: "Centers" }
      ],
      actions: [
        { text: "View Our Services", style: "btn-primary", target: "programs" },
        { text: "Request Consultation", style: "btn-secondary", target: "contact" }
      ],
      backgroundImage: "/images/hero-fashion.jpg"
    },
    {
      id: 2,
      title: "FDGT FASHION DESIGNING & GARMENT TECHNOLOGY",
      subtitle: {
        line1: "Kerala Govt. Approved",
        line2: "Industry Ready Programs"
      },
      stats: [
        { number: "19+", label: "Years Experience" },
        { number: "4", label: "Courses" },
        { number: "2", label: "Centers" }
      ],
      actions: [
        { text: "View Our Services", style: "btn-primary", target: "programs" },
        { text: "Request Consultation", style: "btn-secondary", target: "contact" }
      ],
      backgroundImage: "/images/hero-fashion.jpg"
    },
    {
      id: 3,
      title: "COMPUTER COURSES",
      subtitle: {
        line1: "Computer Applications & Management",
        line2: "PSC Approved"
      },
      stats: [
        { number: "19+", label: "Years Experience" },
        { number: "4", label: "Courses" },
        { number: "2", label: "Centers" }
      ],
      actions: [
        { text: "View Our Services", style: "btn-primary", target: "programs" },
        { text: "Request Consultation", style: "btn-secondary", target: "contact" }
      ],
      backgroundImage: "/images/hero-fashion.jpg"
    }
  ];

  // ===== AUTO SLIDE FUNCTIONALITY =====
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // ===== UTILITY FUNCTIONS =====
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ===== COMPONENT RENDERS =====
  const renderStats = (stats) => (
    <div className="hero-stats">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <span className="stat-number">{stat.number}</span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );

  const renderActions = (actions) => (
    <div className="hero-actions">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`btn ${action.style}`}
          onClick={() => scrollToSection(action.target)}
        >
          {action.text}
        </button>
      ))}
    </div>
  );

  const renderSlideContent = (slide) => (
    <div className="hero-text">
      <div className="hero-header">
        <h1 className="hero-title">
          {slide.title.includes('KGCE') ? (
            <>
              <span className="kgce-red">KGCE</span> FINE ARTS & ANIMATION
            </>
          ) : slide.id === 2 ? (
            <>
              <span className="kgce-red">FDGT</span> FASHION DESIGNING & GARMENT TECHNOLOGY
            </>
          ) : slide.id === 3 ? (
            <span className="kgce-red">COMPUTER COURSES</span>
          ) : (
            slide.title
          )}
        </h1>
        <div className="hero-subtitle">
          <p className="subtitle-line">{slide.subtitle.line1}</p>
          <p className="subtitle-line">{slide.subtitle.line2}</p>
        </div>
      </div>
      {renderStats(slide.stats)}
      {renderActions(slide.actions)}
    </div>
  );

  // ===== MAIN RENDER =====
  const currentSlideData = heroSlides[currentSlide];
  const heroStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}${currentSlideData.backgroundImage})`
  };

  return (
    <section id="home" className="hero with-background hero-slider" style={heroStyle}>
      <div className="container">
        <div className="hero-content">
          {renderSlideContent(currentSlideData)}
        </div>
      </div>

      {/* Slide transition overlay */}
      <div className="slide-transition-overlay"></div>
    </section>
  );
};

export default Hero;