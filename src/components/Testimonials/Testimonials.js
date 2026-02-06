import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonialsData = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Fashion Designer',
      company: 'Zara India',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'Oxford Fashion Institute transformed my creative vision into reality. The comprehensive curriculum and industry exposure prepared me perfectly for my career at Zara. The faculty\'s guidance and state-of-the-art facilities made all the difference.',
      course: 'Fashion Design Diploma',
      year: '2022',
      achievement: 'Lead Designer at Zara India'
    },
    {
      id: 2,
      name: 'Arjun Menon',
      role: 'Textile Designer',
      company: 'Fabindia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'The textile design program at Oxford opened doors I never knew existed. From traditional weaving techniques to modern digital printing, I learned it all. Now I\'m creating sustainable fashion collections that make a real impact.',
      course: 'Textile Design',
      year: '2021',
      achievement: 'Senior Textile Designer at Fabindia'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      role: 'Fashion Entrepreneur',
      company: 'Founder, Ethereal Designs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'Oxford didn\'t just teach me fashion design; it taught me how to build a business. The entrepreneurship modules and industry connections helped me launch my own label. Today, Ethereal Designs is featured in major fashion weeks.',
      course: 'Fashion Design & Business',
      year: '2020',
      achievement: 'Successful Fashion Entrepreneur'
    },
    {
      id: 4,
      name: 'Rahul Kumar',
      role: 'Fashion Photographer',
      company: 'Vogue India',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'The fashion photography program exceeded my expectations. Learning from industry professionals and having access to professional studios gave me the edge I needed. Now I\'m shooting for major fashion magazines.',
      course: 'Fashion Photography',
      year: '2023',
      achievement: 'Staff Photographer at Vogue India'
    },
    {
      id: 5,
      name: 'Kavya Nair',
      role: 'Fashion Stylist',
      company: 'Bollywood Films',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'Oxford\'s fashion styling course was incredibly comprehensive. From personal styling to editorial work, I learned every aspect. The practical training and industry internships prepared me for my dream job in Bollywood.',
      course: 'Fashion Styling',
      year: '2022',
      achievement: 'Celebrity Fashion Stylist'
    },
    {
      id: 6,
      name: 'Vikram Singh',
      role: 'Brand Manager',
      company: 'H&M India',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      testimonial: 'The fashion merchandising program at Oxford gave me deep insights into the business side of fashion. Understanding consumer behavior, retail strategies, and brand management helped me secure my position at H&M.',
      course: 'Fashion Merchandising',
      year: '2021',
      achievement: 'Brand Manager at H&M India'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, testimonialsData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialsData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? testimonialsData.length - 1 : prev - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i 
        key={index} 
        className={`fas fa-star ${index < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`testimonials-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="testimonials-badge">
            <i className="fas fa-quote-left"></i>
            <span>Success Stories</span>
          </div>
          <h2>What Our <span className="text-gradient">Alumni Say</span></h2>
          <p>
            Hear from our successful graduates who are now making their mark in the fashion industry 
            across the globe. Their success is our pride.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`testimonials-carousel ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="carousel-container">
            <button className="carousel-nav prev" onClick={prevSlide}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="testimonials-wrapper">
              <div 
                className="testimonials-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonialsData.map((testimonial, index) => (
                  <div key={testimonial.id} className="testimonial-slide">
                    <div className="testimonial-card">
                      <div className="card-header">
                        <div className="quote-icon">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="rating">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      
                      <div className="testimonial-content">
                        <p>"{testimonial.testimonial}"</p>
                      </div>
                      
                      <div className="testimonial-author">
                        <div className="author-image">
                          <img src={testimonial.image} alt={testimonial.name} />
                          <div className="image-border"></div>
                        </div>
                        <div className="author-info">
                          <h4>{testimonial.name}</h4>
                          <p className="author-role">{testimonial.role}</p>
                          <p className="author-company">{testimonial.company}</p>
                          <div className="author-details">
                            <span className="course">{testimonial.course}</span>
                            <span className="year">Class of {testimonial.year}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="achievement-badge">
                        <i className="fas fa-trophy"></i>
                        <span>{testimonial.achievement}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="carousel-nav next" onClick={nextSlide}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <span className="indicator-progress"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Alumni Success Stats */}
        <div className={`alumni-stats ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">95%</span>
                <span className="stat-label">Placement Rate</span>
                <span className="stat-description">Within 6 months of graduation</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-building"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">200+</span>
                <span className="stat-label">Partner Companies</span>
                <span className="stat-description">Leading fashion brands globally</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">25+</span>
                <span className="stat-label">Countries</span>
                <span className="stat-description">Where our alumni work</span>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">150+</span>
                <span className="stat-label">Entrepreneurs</span>
                <span className="stat-description">Started their own fashion brands</span>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Network CTA */}
        <div className={`alumni-cta ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="cta-content">
            <h3>Join Our Alumni Network</h3>
            <p>Connect with successful graduates, access exclusive opportunities, and be part of our growing fashion community.</p>
            <div className="cta-actions">
              <button className="btn btn-primary">
                <i className="fas fa-users"></i>
                Join Alumni Network
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-calendar"></i>
                Alumni Events
              </button>
            </div>
          </div>
          <div className="cta-visual">
            <div className="network-visualization">
              <div className="network-node main">
                <i className="fas fa-university"></i>
              </div>
              <div className="network-node node-1">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="network-node node-2">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="network-node node-3">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="network-node node-4">
                <i className="fas fa-user-graduate"></i>
              </div>
              <div className="network-connections">
                <div className="connection connection-1"></div>
                <div className="connection connection-2"></div>
                <div className="connection connection-3"></div>
                <div className="connection connection-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="testimonials-bg-elements">
        <div className="bg-pattern pattern-1"></div>
        <div className="bg-pattern pattern-2"></div>
        <div className="bg-pattern pattern-3"></div>
      </div>
    </section>
  );
};

export default Testimonials;