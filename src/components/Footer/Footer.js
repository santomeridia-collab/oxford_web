import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setSubscribeStatus('error');
      return;
    }

    setIsSubscribing(true);
    setSubscribeStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About Us', action: () => scrollToSection('about') },
    { name: 'Programs', action: () => scrollToSection('programs') },
    { name: 'Admissions', action: () => scrollToSection('contact') },
    { name: 'Gallery', action: () => scrollToSection('gallery') },
    { name: 'Alumni', href: '#alumni' },
    { name: 'Careers', href: '#careers' }
  ];

  const programs = [
    'Fashion Design',
    'Textile Design',
    'Fashion Merchandising',
    'Fashion Styling',
    'Fashion Photography',
    'Fashion Journalism'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', href: '#facebook', color: '#1877f2' },
    { name: 'Instagram', icon: 'fab fa-instagram', href: '#instagram', color: '#e4405f' },
    { name: 'YouTube', icon: 'fab fa-youtube', href: '#youtube', color: '#ff0000' },
    { name: 'WhatsApp', icon: 'fab fa-whatsapp', href: '#whatsapp', color: '#25d366' }
  ];

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', text: 'Khadeeja Building, Nilambur Road, Wandoor-679328, Malappuram, Kerala' },
    { icon: 'fas fa-phone', text: '+91 8156998798' },
    { icon: 'fas fa-envelope', text: 'oxfordwdr@gmail.com' },
    { icon: 'fas fa-clock', text: 'Mon - Fri: 9:00 AM - 6:00 PM' }
  ];

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Updated with Fashion Trends</h3>
              <p>Subscribe to our newsletter for the latest fashion insights, course updates, and industry news.</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="newsletter-input"
                />
                <button
                  type="submit"
                  className={`newsletter-btn ${isSubscribing ? 'loading' : ''}`}
                  disabled={isSubscribing}
                >
                  {isSubscribing ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Subscribe
                    </>
                  )}
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <div className="subscribe-message success">
                  <i className="fas fa-check-circle"></i>
                  Thank you for subscribing!
                </div>
              )}
              {subscribeStatus === 'error' && (
                <div className="subscribe-message error">
                  <i className="fas fa-exclamation-circle"></i>
                  Please enter a valid email address.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Company Info */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <img src="/images/oxford-logo.svg" alt="Oxford Fashion Institute" className="footer-logo-image" />
                <div className="logo-text">
                  <span className="logo-main">Oxford</span>
                  <span className="logo-sub">Community College</span>
                </div>
              </div>
              <p className="company-description">
                Oxford Community College in Wandoor, Malappuram - nurturing creative minds and transforming passion into profession with quality education and industry connections.
              </p>
              <div className="contact-info">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <i className={info.icon}></i>
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.action ? (
                      <button onClick={link.action} className="footer-link">
                        {link.name}
                      </button>
                    ) : (
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div className="footer-section">
              <h4>Our Programs</h4>
              <ul className="footer-links">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a href="#programs" className="footer-link">
                      {program}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#blog" className="footer-link">Fashion Blog</a></li>
                <li><a href="#events" className="footer-link">Events</a></li>
                <li><a href="#workshops" className="footer-link">Workshops</a></li>
                <li><a href="#library" className="footer-link">Digital Library</a></li>
                <li><a href="#placement" className="footer-link">Placement Cell</a></li>
                <li><a href="#alumni" className="footer-link">Alumni Network</a></li>
              </ul>
            </div>

            {/* Social & Awards */}
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="social-link"
                    style={{ '--social-color': social.color }}
                    title={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>

              <div className="awards-section">
                <h5>Awards & Recognition</h5>
                <div className="awards-list">
                  <div className="award-item">
                    <i className="fas fa-trophy"></i>
                    <span>Best Fashion Institute 2023</span>
                  </div>
                  <div className="award-item">
                    <i className="fas fa-medal"></i>
                    <span>Excellence in Education</span>
                  </div>
                  <div className="award-item">
                    <i className="fas fa-star"></i>
                    <span>Industry Recognition Award</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2024 Oxford Community College. All rights reserved.</p>
              <div className="legal-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </div>

            <div className="footer-actions">
              <div className="certifications">
                <span className="cert-badge">
                  <i className="fas fa-certificate"></i>
                  AICTE Approved
                </span>
                <span className="cert-badge">
                  <i className="fas fa-shield-alt"></i>
                  Govt. Recognized
                </span>
              </div>

              <button onClick={scrollToTop} className="back-to-top">
                <i className="fas fa-arrow-up"></i>
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="footer-bg-elements">
        <div className="bg-pattern pattern-1"></div>
        <div className="bg-pattern pattern-2"></div>
        <div className="bg-pattern pattern-3"></div>
      </div>
    </footer>
  );
};

export default Footer;