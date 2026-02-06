import React from 'react';
import './About.css';

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Oxford Fashion Institute</h2>
            <p className="about-lead">
              Founded in 1998 in Wandoor, Malappuram, Oxford Community College is committed to delivering quality, career-focused education. With certified and experienced faculty,
              modern teaching methods, and well-maintained campuses at Wandoor and Kalikavu, the college provides an excellent learning environment.
            </p>
            <p>
              Over 5,000 students have graduated from Oxford, with an 80% placement rate.
              The institution is accredited by APJ Abdul Kalam Technological University and is the only KGTE Fashion Designing and Garment Manufacturing Technology college in Eranad Taluk.
              It also offers KGCE-approved fine arts and animation courses, paramedical programs, teacher training, and
              globally recognized online fashion design courses supported by a dedicated learning app.
            </p>
            <p>
              Oxford Community College actively contributes to society through social initiatives,
              including a free two-year fashion designing course aimed at empowering women and promoting financial independence.
            </p>

            <div className="about-stats">
              <div className="stats-grid1">
                <div className="stat-card1">
                  <div className="stat-number1">Expert</div>
                  <div className="stat-label1">Faculty</div>
                  <div className="stat-description1">Industry professionals with 15+ years experience</div>
                </div>
                <div className="stat-card1">
                  <div className="stat-number1">Modern</div>
                  <div className="stat-label1">Facilities</div>
                  <div className="stat-description1">State-of-the-art equipment and design studios</div>
                </div>
                <div className="stat-card1">
                  <div className="stat-number1">Strong</div>
                  <div className="stat-label1">Connections</div>
                  <div className="stat-description1">Partnerships with leading fashion brands</div>
                </div>
                <div className="stat-card1">
                  <div className="stat-number1">Career</div>
                  <div className="stat-label1">Support</div>
                  <div className="stat-description1">Comprehensive placement assistance and guidance</div>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('programs')}
              >
                View Our Services
              </button>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h3>Certifications & Accreditations</h3>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-icon">✓</div>
              <span>Government Approved</span>
            </div>
            <div className="cert-item">
              <div className="cert-icon">✓</div>
              <span>AICTE Recognized</span>
            </div>
            <div className="cert-item">
              <div className="cert-icon">✓</div>
              <span>Industry Certified</span>
            </div>
            <div className="cert-item">
              <div className="cert-icon">✓</div>
              <span>ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;