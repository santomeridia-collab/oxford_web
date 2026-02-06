import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    preferredTime: '',
    source: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const sectionRef = useRef(null);

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

  const courses = [
    'Fashion Design',
    'Textile Design',
    'Fashion Merchandising',
    'Fashion Styling',
    'Fashion Photography',
    'Fashion Journalism'
  ];

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Our Campus',
      details: [
        'Oxford Community College',
        'Khadeeja Building, Nilambur Road',
        'Wandoor-679328, Malappuram, Kerala'
      ],
      action: 'Get Directions'
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: [
        '+91 8156998798',
        'Office Hours',
        'Send us your query anytime!'
      ],
      action: 'Call Now'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: [
        'oxfordwdr@gmail.com',
        'Send us your query anytime!',
        'We respond within 24 hours'
      ],
      action: 'Send Email'
    },
    {
      icon: 'fas fa-clock',
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: By Appointment',
        'Sunday: Closed'
      ],
      action: 'Schedule Visit'
    }
  ];

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.course) {
      errors.course = 'Please select a course';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: '',
        preferredTime: '',
        source: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`contact-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h2>Start Your Fashion Journey <span className="text-gradient">Today</span></h2>
          <p>
            Ready to transform your passion into a profession? Get in touch with our admissions team 
            and take the first step towards your dream career in fashion.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className={`contact-form-section ${isVisible ? 'animate-fadeInLeft' : ''}`}>
            <div className="form-container">
              <div className="form-header">
                <h3>Apply Now</h3>
                <p>Fill out the form below and our admissions team will get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <div className="input-wrapper">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className={formErrors.name ? 'error' : ''}
                      />
                    </div>
                    {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <div className="input-wrapper">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className={formErrors.email ? 'error' : ''}
                      />
                    </div>
                    {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <div className="input-wrapper">
                      <i className="fas fa-phone"></i>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className={formErrors.phone ? 'error' : ''}
                      />
                    </div>
                    {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="course">Interested Course *</label>
                    <div className="input-wrapper">
                      <i className="fas fa-graduation-cap"></i>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className={formErrors.course ? 'error' : ''}
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>
                    {formErrors.course && <span className="error-message">{formErrors.course}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="preferredTime">Preferred Contact Time</label>
                    <div className="input-wrapper">
                      <i className="fas fa-clock"></i>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 7 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="source">How did you hear about us?</label>
                    <div className="input-wrapper">
                      <i className="fas fa-info-circle"></i>
                      <select
                        id="source"
                        name="source"
                        value={formData.source}
                        onChange={handleInputChange}
                      >
                        <option value="">Select source</option>
                        <option value="google">Google Search</option>
                        <option value="social">Social Media</option>
                        <option value="friend">Friend/Family</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <div className="input-wrapper">
                    <i className="fas fa-comment"></i>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your interests, goals, or any questions you have..."
                      rows="5"
                      className={formErrors.message ? 'error' : ''}
                    ></textarea>
                  </div>
                  {formErrors.message && <span className="error-message">{formErrors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Submit Application
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <i className="fas fa-check-circle"></i>
                    Thank you! Your application has been submitted successfully. We'll contact you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`contact-info-section ${isVisible ? 'animate-fadeInRight' : ''}`}>
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                    <button className="info-action">
                      {info.action}
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-content">
                  <i className="fas fa-map-marked-alt"></i>
                  <h4>Find Us Here</h4>
                  <p>Oxford Community College, Khadeeja Building, Wandoor</p>
                  <button className="btn btn-secondary">
                    <i className="fas fa-directions"></i>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h4>Quick Actions</h4>
              <div className="actions-grid">
                <button className="action-btn">
                  <i className="fas fa-download"></i>
                  <span>Download Brochure</span>
                </button>
                <button className="action-btn">
                  <i className="fas fa-calendar"></i>
                  <span>Schedule Campus Tour</span>
                </button>
                <button className="action-btn">
                  <i className="fas fa-video"></i>
                  <span>Virtual Meeting</span>
                </button>
                <button className="action-btn">
                  <i className="fas fa-whatsapp"></i>
                  <span>WhatsApp Chat</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`faq-section ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h5>What are the admission requirements?</h5>
              <p>Minimum 10+2 qualification from a recognized board. Portfolio review for design courses.</p>
            </div>
            <div className="faq-item">
              <h5>When does the next batch start?</h5>
              <p>New batches start every quarter. Next intake is in April 2024.</p>
            </div>
            <div className="faq-item">
              <h5>Do you provide placement assistance?</h5>
              <p>Yes, we have 95% placement rate with our network of 200+ industry partners.</p>
            </div>
            <div className="faq-item">
              <h5>Are scholarships available?</h5>
              <p>Merit-based scholarships up to 50% are available for deserving students.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="contact-bg-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
};

export default Contact;