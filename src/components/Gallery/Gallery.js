import React, { useState, useEffect, useRef } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

  const galleryData = [
    {
      id: 1,
      title: 'Modern Learning Facilities',
      category: 'facilities',
      type: 'Campus Facilities',
      description: 'Our state-of-the-art learning facilities equipped with modern technology and comfortable spaces for effective education.',
      image: '/images/g1.jpg',
      tags: ['Modern Facilities', 'Learning Space', 'Technology']
    },
    {
      id: 2,
      title: 'Student Workshop Activities',
      category: 'events',
      type: 'Educational Activities',
      description: 'Interactive workshop sessions where students engage in hands-on learning and skill development activities.',
      image: '/images/g2.jpg',
      tags: ['Workshop', 'Student Activity', 'Learning']
    },
    {
      id: 3,
      title: 'Academic Excellence',
      category: 'achievements',
      type: 'Student Success',
      description: 'Celebrating our students\' academic achievements and their journey towards professional excellence.',
      image: '/images/g3.jpg',
      tags: ['Achievement', 'Excellence', 'Success']
    },
    {
      id: 4,
      title: 'Campus Life & Community',
      category: 'campus',
      type: 'Campus Life',
      description: 'Vibrant campus life fostering community spirit, friendship, and personal growth among our students.',
      image: '/images/g4.jpg',
      tags: ['Campus Life', 'Community', 'Student Life']
    },
    {
      id: 5,
      title: 'Practical Learning Sessions',
      category: 'events',
      type: 'Educational Events',
      description: 'Hands-on learning sessions that bridge theory and practice, preparing students for real-world challenges.',
      image: '/images/g5.jpg',
      tags: ['Practical Learning', 'Skills', 'Training']
    },
    {
      id: 6,
      title: 'Infrastructure & Resources',
      category: 'facilities',
      type: 'Campus Infrastructure',
      description: 'Well-designed infrastructure and comprehensive resources supporting quality education and student development.',
      image: '/images/g6.jpg',
      tags: ['Infrastructure', 'Resources', 'Quality Education']
    },
    {
      id: 2,
      title: 'Student Workshop Activities',
      category: 'events',
      type: 'Educational Activities',
      description: 'Interactive workshop sessions where students engage in hands-on learning and skill development activities.',
      image: '/images/g2.jpg',
      tags: ['Workshop', 'Student Activity', 'Learning']
    },
    {
      id: 3,
      title: 'Academic Excellence',
      category: 'achievements',
      type: 'Student Success',
      description: 'Celebrating our students\' academic achievements and their journey towards professional excellence.',
      image: '/images/g3.jpg',
      tags: ['Achievement', 'Excellence', 'Success']
    }
  ];

  const filters = [
    { id: 'all', name: 'All Gallery', icon: 'fas fa-th-large', count: galleryData.length },
    { id: 'facilities', name: 'Facilities', icon: 'fas fa-building', count: galleryData.filter(item => item.category === 'facilities').length },
    { id: 'events', name: 'Events', icon: 'fas fa-calendar-alt', count: galleryData.filter(item => item.category === 'events').length },
    { id: 'students', name: 'Student Work', icon: 'fas fa-user-graduate', count: galleryData.filter(item => item.category === 'students').length },
    { id: 'campus', name: 'Campus Life', icon: 'fas fa-users', count: galleryData.filter(item => item.category === 'campus').length },
    { id: 'achievements', name: 'Achievements', icon: 'fas fa-trophy', count: galleryData.filter(item => item.category === 'achievements').length }
  ];

  const filteredImages = activeFilter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleKeyPress = (e) => {
    if (selectedImage) {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentImageIndex, filteredImages]);

  return (
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={`gallery-header ${isVisible ? 'animate-fadeInUp' : ''}`}>
          
          <h2>Explore Our <span className="text-gradient">Creative Journey</span></h2>
          <p>
            Take a visual tour through our state-of-the-art facilities, vibrant campus life,
            and the incredible achievements of our students and faculty.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`gallery-filters ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <i className={filter.icon}></i>
              <span>{filter.name}</span>
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={`gallery-grid ${isVisible ? 'animate-fadeInUp' : ''}`}>
          {filteredImages.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(item, index)}
            >
              <div className="gallery-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <div className="item-type">{item.type}</div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="item-tags">
                      {item.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                    <button className="view-btn">
                      <i className="fas fa-expand"></i>
                      View Full
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className={`gallery-stats ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-camera"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">500+</span>
                <span className="stat-label">Photos </span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-video"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">50+</span>
                <span className="stat-label">Stories</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">100+</span>
                <span className="stat-label">Achievements</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Memories</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fas fa-times"></i>
            </button>

            <button className="lightbox-nav prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>

            <button className="lightbox-nav next" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="lightbox-image">
              <img src={selectedImage.image} alt={selectedImage.title} />
            </div>

            <div className="lightbox-info">
              <div className="info-header">
                <span className="info-type">{selectedImage.type}</span>
                <h3>{selectedImage.title}</h3>
              </div>
              <p>{selectedImage.description}</p>
              <div className="info-tags">
                {selectedImage.tags.map((tag, index) => (
                  <span key={index} className="info-tag">{tag}</span>
                ))}
              </div>
              <div className="lightbox-counter">
                {currentImageIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background Elements */}
      <div className="gallery-bg-elements">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
};

export default Gallery;