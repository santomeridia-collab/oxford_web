import React, { useState, useEffect, useRef } from 'react';
import './Programs.css';

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);
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

  const programsData = [
    // Fashion Designing Courses
    {
      id: 1,
      title: 'Poly Diploma in Fashion Designing',
      category: 'fashion',
      duration: '2 Years',
      level: 'Diploma',
      description: 'Comprehensive fashion design program covering advanced techniques, pattern making, garment construction, and fashion business fundamentals.',
      features: ['Advanced Pattern Making', 'Garment Construction', 'Fashion Illustration', 'Textile Science', 'Fashion Business', 'Portfolio Development', 'Industry Internship', 'Design Software'],
      image: '/images/polyfd.jpg',
      icon: 'fas fa-palette',
      color: '#4682B4',
      eligibility: '10+2 or equivalent',
      career: ['Fashion Designer', 'Pattern Maker', 'Fashion Stylist', 'Design Consultant', 'Fashion Entrepreneur'],
      fee: 'Contact for Details'
    },
    {
      id: 2,
      title: 'Diploma in Fashion Designing',
      category: 'fashion',
      duration: '1 Year',
      level: 'Diploma',
      description: 'Intensive one-year program focusing on core fashion design skills, creativity development, and practical industry knowledge.',
      features: ['Fashion Sketching', 'Pattern Development', 'Sewing Techniques', 'Color Theory', 'Fashion Trends', 'Basic Business Skills', 'Project Work', 'Industry Exposure'],
      image: '/images/hero-main.jpg',
      icon: 'fas fa-cut',
      color: '#87CEEB',
      eligibility: '10th pass or above',
      career: ['Junior Fashion Designer', 'Fashion Assistant', 'Boutique Owner', 'Fashion Merchandiser'],
      fee: 'Contact for Details'
    },
    {
      id: 3,
      title: 'Certificate in Fashion Designing',
      category: 'fashion',
      duration: '6 Months',
      level: 'Certificate',
      description: 'Quick-start program for fashion enthusiasts covering essential design skills and basic garment construction techniques.',
      features: ['Basic Sketching', 'Simple Patterns', 'Hand Sewing', 'Machine Operation', 'Design Basics', 'Fashion Awareness', 'Mini Projects', 'Skill Assessment'],
      image: '/images/dfd.jpg',
      icon: 'fas fa-scissors',
      color: '#B2BEB5',
      eligibility: 'No specific requirement',
      career: ['Fashion Assistant', 'Tailor', 'Boutique Helper', 'Freelance Designer'],
      fee: 'Contact for Details'
    },
    {
      id: 4,
      title: 'Stitching & Cutting',
      category: 'fashion',
      duration: '3 Months',
      level: 'Certificate',
      description: 'Practical hands-on course focusing on professional stitching techniques and precise cutting methods for garment making.',
      features: ['Professional Cutting', 'Advanced Stitching', 'Finishing Techniques', 'Quality Control', 'Speed Training', 'Machine Maintenance', 'Pattern Reading', 'Production Methods'],
      image: '/images/sc.jpg',
      icon: 'fas fa-tshirt',
      color: '#4682B4',
      eligibility: 'Basic sewing knowledge preferred',
      career: ['Professional Tailor', 'Garment Maker', 'Production Assistant', 'Alteration Specialist'],
      fee: 'Contact for Details'
    },
    // Fine Arts & Animation Course
    {
      id: 5,
      title: 'Fine Arts & Animation',
      category: 'arts',
      duration: '1-2 Years',
      level: 'Certificate/Diploma',
      description: 'Explore creative arts with comprehensive training in drawing, painting, digital art, 2D/3D animation, and multimedia design for creative professionals.',
      features: ['Drawing & Painting', '2D Animation', '3D Modeling', 'Digital Art', 'Character Design', 'Storyboarding', 'Visual Effects', 'Multimedia Design'],
      image: '/images/artsanimation.jpg',
      icon: 'fas fa-paint-brush',
      color: '#87CEEB',
      eligibility: '10+2 or equivalent',
      career: ['Animator', 'Graphic Designer', 'Visual Artist', 'Game Designer', 'VFX Artist', 'Illustrator'],
      fee: 'Contact for Details'
    },
    // Computer Courses
    {
      id: 6,
      title: 'PGDCA (Post Graduate Diploma in Computer Applications)',
      category: 'computer',
      duration: '1 Year',
      level: 'Post Graduate Diploma',
      description: 'Professional programme focused on both theoretical and practical aspects of computer applications. Students gain knowledge in operating systems, database management systems, and web programming.',
      features: ['Operating Systems', 'Database Management', 'Web Programming', 'Software Development', 'System Analysis', 'Project Management', 'Industry Training', 'Practical Labs'],
      image: '/images/pgca.jpg',
      icon: 'fas fa-laptop-code',
      color: '#87CEEB',
      eligibility: 'Graduate in any discipline',
      career: ['Software Developer', 'System Analyst', 'Database Administrator', 'Web Developer', 'IT Consultant'],
      fee: 'Contact for Details'
    },
    {
      id: 7,
      title: 'DCA (Diploma in Computer Applications)',
      category: 'computer',
      duration: '6 Months',
      level: 'Diploma',
      description: 'This course provides scientific, practical, and technical knowledge of commonly used computer tools. The curriculum combines updated academic content with relevant industrial training.',
      features: ['MS Office Suite', 'Internet Applications', 'Basic Programming', 'Computer Fundamentals', 'Digital Literacy', 'Practical Projects', 'Industry Exposure', 'Certification Prep'],
      image: '/images/dca.jpg',
      icon: 'fas fa-desktop',
      color: '#B2BEB5',
      eligibility: '10+2 or equivalent',
      career: ['Computer Operator', 'Data Entry Operator', 'Office Assistant', 'IT Support'],
      fee: 'Contact for Details'
    },
    {
      id: 8,
      title: 'Computer Teacher Training Course',
      category: 'computer',
      duration: '1 Year',
      level: 'Professional Certificate',
      description: 'Designed for aspiring teaching professionals, this course covers educational theories, learning methods, classroom management, assessment techniques, and modern teaching approaches.',
      features: ['Educational Psychology', 'Teaching Methodologies', 'Classroom Management', 'Assessment Techniques', 'Digital Teaching Tools', 'Curriculum Development', 'Student Counseling', 'Modern Pedagogy'],
      image: '/images/ct.jpg',
      icon: 'fas fa-chalkboard-teacher',
      color: '#4682B4',
      eligibility: 'Graduate with computer knowledge',
      career: ['Computer Teacher', 'Training Instructor', 'Educational Consultant', 'Curriculum Developer'],
      fee: 'Contact for Details'
    },
    // Management Course
    {
      id: 9,
      title: 'Diploma in Financial Management',
      category: 'management',
      duration: '3 Months',
      level: 'Diploma',
      description: 'A foundational management programme covering key functional management areas with quantitative and theoretical inputs, preparing students for managerial roles.',
      features: ['Financial Planning', 'Investment Analysis', 'Risk Management', 'Budgeting & Control', 'Financial Markets', 'Corporate Finance', 'Case Studies', 'Practical Applications'],
      image: '/images/finance1.jpg',
      icon: 'fas fa-chart-line',
      color: '#87CEEB',
      eligibility: 'Graduate in any discipline',
      career: ['Financial Analyst', 'Investment Advisor', 'Finance Manager', 'Business Consultant'],
      fee: 'Contact for Details'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Programs', icon: 'fas fa-th-large' },
    { id: 'fashion', name: 'Fashion Designing', icon: 'fas fa-palette' },
    { id: 'arts', name: 'Fine Arts & Animation', icon: 'fas fa-paint-brush' },
    { id: 'computer', name: 'Computer Courses', icon: 'fas fa-laptop-code' },
    { id: 'management', name: 'Short Term Courses', icon: 'fas fa-chart-line' }
  ];

  const filteredPrograms = activeCategory === 'all'
    ? programsData
    : programsData.filter(program => program.category === activeCategory);

  const openModal = (program) => {
    setSelectedProgram(program);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProgram(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="programs" className="programs-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`programs-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h2>Choose Your Path to <span className="text-gradient">Professional Excellence</span></h2>
          <p>
            Oxford College offers career-oriented programs across Fashion Designing, Computer Courses, and Management,
            designed to build practical and industry-ready skills for your successful future.
          </p>
        </div>

        {/* Category Filters */}
        <div className={`category-filters ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className={`programs-grid ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {filteredPrograms.map((program, index) => (
            <div
              key={program.id}
              className="program-card"
              style={{
                animationDelay: `${index * 0.1}s`,
                '--accent-color': program.color
              }}
            >
              <div className="card-header">
                <div className="card-image">
                  <img src={program.image} alt={program.title} />
                  <div className="image-overlay">
                    <div className="program-icon">
                      <i className={program.icon}></i>
                    </div>
                  </div>
                </div>
                <div className="card-badge">
                  <span className="level">{program.level}</span>
                  <span className="duration">{program.duration}</span>
                </div>
              </div>

              <div className="card-content">
                <h3>{program.title}</h3>
                <p className="program-description">{program.description}</p>

                <div className="program-features">
                  {program.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                  {program.features.length > 3 && (
                    <span className="feature-more">+{program.features.length - 3} more</span>
                  )}
                </div>

                <div className="program-info">
                  <div className="info-item">
                    <i className="fas fa-rupee-sign"></i>
                    <span>{program.fee}</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-user-graduate"></i>
                    <span>{program.eligibility}</span>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => openModal(program)}
                  >
                    <i className="fas fa-info-circle"></i>
                    View Details
                  </button>
                  <button className="btn btn-secondary">
                    <i className="fas fa-phone"></i>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* College Info Section */}
        <div className={`college-info ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="info-content">
            <h3>About Oxford College</h3>
            <p>
              Oxford College is a one-stop solution for career-oriented skills. We offer a wide range of professional
              courses that help students develop practical, functional, and industry-relevant skills in engineering,
              technology, fashion, and design.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Khadeeja Building, Nilambur Road, Wandoor</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>8156998798</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>oxfordwdr@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`programs-info ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4>Flexible Timings</h4>
              <p>Choose from morning, afternoon, or weekend batches to suit your schedule</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h4>Industry Certification</h4>
              <p>Get certified by leading industry bodies and enhance your career prospects</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Placement Support</h4>
              <p>100% placement assistance with our network of industry partners</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-scholarship"></i>
              </div>
              <h4>Scholarships Available</h4>
              <p>Merit-based scholarships for deserving and talented students</p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <div className="modal-image">
                <img src={selectedProgram.image} alt={selectedProgram.title} />
                <div className="modal-badge">
                  <span>{selectedProgram.level}</span>
                </div>
              </div>
              <div className="modal-title">
                <h2>{selectedProgram.title}</h2>
                <p>{selectedProgram.description}</p>
                <div className="modal-meta">
                  <span><i className="fas fa-clock"></i> {selectedProgram.duration}</span>
                  <span><i className="fas fa-rupee-sign"></i> {selectedProgram.fee}</span>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>Course Features</h3>
                <div className="features-grid">
                  {selectedProgram.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Career Opportunities</h3>
                <div className="career-list">
                  {selectedProgram.career.map((career, index) => (
                    <span key={index} className="career-tag">{career}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Eligibility</h3>
                <p>{selectedProgram.eligibility}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
                Apply Now
              </button>
              <button className="btn btn-secondary">
                <i className="fas fa-phone"></i>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Background Elements */}
      <div className="programs-bg-elements">
        <div className="bg-gradient gradient-1"></div>
        <div className="bg-gradient gradient-2"></div>
        <div className="bg-gradient gradient-3"></div>
      </div>
    </section>
  );
};

export default Programs;