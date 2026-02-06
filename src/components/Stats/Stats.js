import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardRotations, setCardRotations] = useState({});
  const [counters, setCounters] = useState({
    students: 0,
    years: 0,
    placement: 0,
    programs: 0,
    faculty: 0,
    awards: 0
  });

  const sectionRef = useRef(null);

  const statsData = [
    {
      key: 'students',
      target: 500,
      suffix: '+',
      label: 'Happy Students',
      icon: 'fas fa-user-graduate',
      color: '#667eea',
      backTitle: 'Student Success',
      backDescription: 'Our graduates excel in their careers',
      backFeatures: ['100% Job Assistance', 'Industry Mentorship', 'Alumni Network', 'Career Guidance']
    },
    {
      key: 'years',
      target: 21,
      suffix: '+',
      label: 'Years Excellence',
      icon: 'fas fa-calendar-alt',
      color: '#764ba2',
      backTitle: 'Legacy of Excellence',
      backDescription: 'Quarter century of educational leadership',
      backFeatures: ['Established 1999', 'Proven Track Record', 'Industry Recognition', 'Continuous Innovation']
    },
    {
      key: 'placement',
      target: 95,
      suffix: '%',
      label: 'Placement Rate',
      icon: 'fas fa-briefcase',
      color: '#f093fb',
      backTitle: 'Career Success',
      backDescription: 'Outstanding placement opportunities',
      backFeatures: ['Top Companies', 'High Packages', 'Multiple Offers', 'Dream Jobs']
    },
    {
      key: 'programs',
      target: 4,
      suffix: '+',
      label: 'Programs Offered',
      icon: 'fas fa-graduation-cap',
      color: '#4facfe',
      backTitle: 'Diverse Courses',
      backDescription: 'Comprehensive educational portfolio',
      backFeatures: ['Fashion Design', 'Interior Design', 'Engineering', 'Technology']
    },
    {
      key: 'faculty',
      target: 50,
      suffix: '+',
      label: 'Expert Faculty',
      icon: 'fas fa-chalkboard-teacher',
      color: '#43e97b',
      backTitle: 'Expert Mentors',
      backDescription: 'Industry professionals as teachers',
      backFeatures: ['PhD Holders', 'Industry Experience', 'Research Experts', 'Dedicated Support']
    },
    {
      key: 'awards',
      target: 10,
      suffix: '+',
      label: 'Awards Won',
      icon: 'fas fa-trophy',
      color: '#ffd700',
      backTitle: 'Recognition',
      backDescription: 'Excellence acknowledged globally',
      backFeatures: ['National Awards', 'International Recognition', 'Quality Certifications', 'Student Achievements']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    statsData.forEach((stat) => {
      let current = 0;
      const increment = stat.target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, 20);
    });
  };

  const handleCardClick = (cardKey) => {
    setCardRotations(prev => ({
      ...prev,
      [cardKey]: (prev[cardKey] || 0) + 360
    }));
  };

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        {/* Background Elements */}
        <div className="stats-bg-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-circle circle-3"></div>
        </div>

        {/* Section Header */}
        <div className={`stats-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="stats-badge">
            <i className="fas fa-chart-line"></i>
            <span>OXFORD</span>
          </div>
          <h2>Welcome to <span className="text-gradient oxford-blue">Oxford Fashion Institute</span></h2>
          <p>
            Oxford College offers career-focused courses in engineering, technology, fashion, and design, providing practical skills for employment-ready graduates.

          </p>
        </div>

        {/* Stats Grid */}
        <div className={`stats-grid ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {statsData.map((stat, index) => (
            <div
              key={stat.key}
              className="stat-card"
              style={{
                animationDelay: `${index * 0.1}s`,
                transform: `rotateY(${cardRotations[stat.key] || 0}deg)`
              }}
              onClick={() => handleCardClick(stat.key)}
            >
              {/* Front Side */}
              <div className="stat-card-front">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number">
                  <span className="counter">{counters[stat.key]}</span>
                  <span className="suffix">{stat.suffix}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>

              {/* Back Side */}
              <div className="stat-card-back">
                <div className="back-content">
                  <div className="back-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="back-title">{stat.backTitle}</div>
                  <div className="back-description">{stat.backDescription}</div>
                  <ul className="back-features">
                    {stat.backFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Preview */}
        <div className={`success-preview ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="success-content">
            <h3>Our Team</h3>
            <p>Oxford Community College is dedicated to and involved in several social service projects</p>
            <div className="brand-logos">
              <div className="brand-logo">
                <img
                  src="/images/1.jpeg"
                  alt="Sujisha"
                  className="brand-logo-image"
                />
                <span>Sujisha</span>
              </div>
              <div className="brand-logo">
                <img
                  src="/images/2.jpeg"
                  alt="Rafeeda"
                  className="brand-logo-image"
                />
                <span>Rafeeda</span>
              </div>
              <div className="brand-logo">
                <img
                  src="/images/5.jpeg"
                  alt="Jamsheena"
                  className="brand-logo-image"
                />
                <span>Jamsheena</span>
              </div>
              <div className="brand-logo">
                <img
                  src="/images/6.jpeg"
                  alt="Rinala"
                  className="brand-logo-image"
                />
                <span>Rinala</span>
              </div>
              <div className="brand-logo">
                <img
                  src="/images/4.jpeg"
                  alt="Shunju"
                  className="brand-logo-image"
                />
                <span>Shunju</span>
              </div>
              <div className="brand-logo">
                <img
                  src="/images/3.jpeg"
                  alt="Shadiya"
                  className="brand-logo-image"
                />
                <span>Shadiya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;