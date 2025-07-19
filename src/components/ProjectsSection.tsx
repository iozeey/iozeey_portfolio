import React, { useState, useEffect, useCallback, useMemo } from "react";

const ProjectsSection: React.FC = () => {
  const [activeSlides, setActiveSlides] = useState<{ [key: number]: number }>(
    {}
  );
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    projectId: number | null;
    currentIndex: number;
  }>({
    isOpen: false,
    projectId: null,
    currentIndex: 0,
  });
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Student Information System",
      subtitle: "Full-Stack Web Application",
      description:
        "Comprehensive student management system with course enrollment, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      images: [
        "/images/portfolio/sis/1-LoginSignUp.png",
        "/images/portfolio/sis/2-SearchCourses.png",
        "/images/portfolio/sis/3-CourseDetails.png",
        "/images/portfolio/sis/5-CartDropDown.png",
        "/images/portfolio/sis/6-CartItems.png",
        "/images/portfolio/sis/7-CartPayment.png",
        "/images/portfolio/sis/8-CartCheckout.png",
        "/images/portfolio/sis/10-CartPaymentProcessing.png",
        "/images/portfolio/sis/12-SelfServiceEnrolledSection.png",
        "/images/portfolio/sis/13-SelfServiceCalendar.png"
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Fly Travel Platform",
      subtitle: "Travel Booking System",
      description:
        "Modern flight booking platform with search, filtering, seat selection, and payment integration.",
      tech: ["Vue.js", "Express.js", "MongoDB", "Payment Gateway"],
      images: [
        "/images/portfolio/fly/1-SignInAndRegister.png",
        "/images/portfolio/fly/2-Filters.png",
        "/images/portfolio/fly/3-Details.png",
        "/images/portfolio/fly/4-FlightCardf.png",
        "/images/portfolio/fly/6-Map.png",
        "/images/portfolio/fly/7-Seat-Selection.png",
        "/images/portfolio/fly/8-BookModal.png",
        "/images/portfolio/fly/9-CheckoutModal.png",
        "/images/portfolio/fly/10-Purchasepage.png"
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Gradingly Assessment Tool",
      subtitle: "Educational Platform",
      description:
        "AI-powered student assessment platform with automated grading and performance analytics.",
      tech: ["React", "Python Django", "ML/AI", "Chart.js"],
      images: [
        "/images/portfolio/gradingly_v2/1-Gradingly-Login.png",
        "/images/portfolio/gradingly_v2/2-Gradingly-Content-Home.png",
        "/images/portfolio/gradingly_v2/3-Gradingly-Exercises-page_no-1.png",
        "/images/portfolio/gradingly_v2/5-Gradingly-Manage-Students.png",
        "/images/portfolio/gradingly_v2/7-Gradingly-Content-Home-Assign-Test.png",
        "/images/portfolio/gradingly_v2/8-Gradingly-Assignments.png",
        "/images/portfolio/gradingly_v2/9-Gradingly-student-performance-2237-.png",
        "/images/portfolio/gradingly_v2/12-Gradingly-School-Teacher.png"
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Humanly Learning Portal",
      subtitle: "Educational Platform",
      description:
        "Interactive learning management system with virtual classrooms and progress tracking.",
      tech: ["React", "WebRTC", "Socket.io", "AWS"],
      images: [
        "/images/portfolio/humanly/1.png",
        "/images/portfolio/humanly/2.png",
        "/images/portfolio/humanly/3.png",
        "/images/portfolio/humanly/4.png",
        "/images/portfolio/humanly/5.png",
        "/images/portfolio/humanly/6.png",
        "/images/portfolio/humanly/7.png",
        "/images/portfolio/humanly/8.png"
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "DigiArt NFT Marketplace",
      subtitle: "Blockchain Application",
      description:
        "Decentralized marketplace for digital art with smart contracts and crypto payments.",
      tech: ["Next.js", "Web3.js", "Solidity", "IPFS"],
      images: [
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Alprints E-commerce",
      subtitle: "E-commerce Platform",
      description:
        "Custom printing e-commerce store with product customization and order management.",
      tech: ["React", "Ruby on Rails", "PostgreSQL", "Stripe"],
      images: [
        "/images/portfolio/alprints/Online_Printing_in_Pakistan_Custom_Designing_Printing_Alprints.png",
        "/images/portfolio/alprints/Product-Page.png",
        "/images/portfolio/alprints/Cart_Alprints.png",
        "/images/portfolio/alprints/Checkout_Alprints.png"
      ],
      demoLink: "#",
      githubLink: "#",
    },
  ], []);
  const nextSlide = (projectId: number, totalImages: number) => {
    setActiveSlides((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };
  const prevSlide = (projectId: number, totalImages: number) => {
    setActiveSlides((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };
  const goToSlide = (projectId: number, slideIndex: number) => {
    setActiveSlides((prev) => ({ ...prev, [projectId]: slideIndex }));
  };

  // Lightbox functions
  const openLightbox = (projectId: number, initialIndex: number = 0) => {
    setLightbox({
      isOpen: true,
      projectId,
      currentIndex: initialIndex,
    });
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      projectId: null,
      currentIndex: 0,
    });
    // Restore body scroll when lightbox is closed
    document.body.style.overflow = 'unset';
  };

  const nextLightboxImage = useCallback(() => {
    if (lightbox.projectId === null) return;
    const project = projects.find(p => p.id === lightbox.projectId);
    if (project) {
      setLightbox(prev => ({
        ...prev,
        currentIndex: (prev.currentIndex + 1) % project.images.length,
      }));
    }
  }, [lightbox.projectId, projects]);

  const prevLightboxImage = useCallback(() => {
    if (lightbox.projectId === null) return;
    const project = projects.find(p => p.id === lightbox.projectId);
    if (project) {
      setLightbox(prev => ({
        ...prev,
        currentIndex: (prev.currentIndex - 1 + project.images.length) % project.images.length,
      }));
    }
  }, [lightbox.projectId, projects]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextLightboxImage();
      } else if (e.key === 'ArrowLeft') {
        prevLightboxImage();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [lightbox.isOpen, nextLightboxImage, prevLightboxImage]);

  // Cleanup effect to restore body scroll when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const currentLightboxProject = lightbox.projectId 
    ? projects.find(p => p.id === lightbox.projectId) 
    : null;
  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Dream. Develop. Deploy. - Showcasing my latest work and
            achievements.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card animate-fadeInUp">
              <div className="project-carousel">
                <div className="carousel-container">
                  <div
                    className="carousel-track"
                    style={{
                      transform: `translateX(-${
                        (activeSlides[project.id] || 0) * 100
                      }%)`,
                    }}
                  >
                    {project.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="carousel-slide">
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${imageIndex + 1}`}
                          className="project-image"
                        />
                      </div>
                    ))}
                  </div>
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="carousel-btn carousel-btn-prev"
                        onClick={() =>
                          prevSlide(project.id, project.images.length)
                        }
                        aria-label="Previous image"
                      >
                        &#8249;
                      </button>
                      <button
                        className="carousel-btn carousel-btn-next"
                        onClick={() =>
                          nextSlide(project.id, project.images.length)
                        }
                        aria-label="Next image"
                      >
                        &#8250;
                      </button>
                      <div className="carousel-dots">
                        {project.images.map((_, dotIndex) => (
                          <button
                            key={dotIndex}
                            className={`carousel-dot ${
                              (activeSlides[project.id] || 0) === dotIndex
                                ? "active"
                                : ""
                            }`}
                            onClick={() => goToSlide(project.id, dotIndex)}
                            aria-label={`Go to image ${dotIndex + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <button 
                    onClick={() => openLightbox(project.id, activeSlides[project.id] || 0)}
                    className="btn btn-primary btn-sm"
                  >
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox Overlay */}
      {lightbox.isOpen && currentLightboxProject && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            
            <div className="lightbox-content">
              <img
                src={currentLightboxProject.images[lightbox.currentIndex]}
                alt={`${currentLightboxProject.title} screenshot ${lightbox.currentIndex + 1}`}
                className="lightbox-image"
                onError={(e) => {
                  console.error('Failed to load image:', currentLightboxProject.images[lightbox.currentIndex]);
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {currentLightboxProject.images.length > 1 && (
                <>
                  <button
                    className="lightbox-nav lightbox-prev"
                    onClick={prevLightboxImage}
                  >
                    &#8249;
                  </button>
                  <button
                    className="lightbox-nav lightbox-next"
                    onClick={nextLightboxImage}
                  >
                    &#8250;
                  </button>
                </>
              )}
            </div>
            
            <div className="lightbox-info">
              <h3>{currentLightboxProject.title}</h3>
              <p>{currentLightboxProject.subtitle}</p>
              <div className="lightbox-counter">
                {lightbox.currentIndex + 1} / {currentLightboxProject.images.length}
              </div>
            </div>
            
            {currentLightboxProject.images.length > 1 && (
              <div className="lightbox-thumbnails">
                {currentLightboxProject.images.map((image, index) => (
                  <button
                    key={index}
                    className={`lightbox-thumbnail ${index === lightbox.currentIndex ? 'active' : ''}`}
                    onClick={() => setLightbox(prev => ({ ...prev, currentIndex: index }))}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
export default ProjectsSection;
