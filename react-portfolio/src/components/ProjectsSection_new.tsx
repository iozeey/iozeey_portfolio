import React from 'react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Student Information System',
      subtitle: 'Full-Stack Web Application',
      description: 'Comprehensive student management system with course enrollment, payment processing, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '🎓',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Fly Travel Platform',
      subtitle: 'Travel Booking System',
      description: 'Modern flight booking platform with search, filtering, seat selection, and payment integration.',
      tech: ['Vue.js', 'Express.js', 'MongoDB', 'Payment Gateway'],
      image: '✈️',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Gradingly Assessment Tool',
      subtitle: 'Educational Platform',
      description: 'AI-powered student assessment platform with automated grading and performance analytics.',
      tech: ['React', 'Python Django', 'ML/AI', 'Chart.js'],
      image: '📊',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Humanly Learning Portal',
      subtitle: 'Educational Platform',
      description: 'Interactive learning management system with virtual classrooms and progress tracking.',
      tech: ['React', 'WebRTC', 'Socket.io', 'AWS'],
      image: '📚',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'DigiArt NFT Marketplace',
      subtitle: 'Blockchain Application',
      description: 'Decentralized marketplace for digital art with smart contracts and crypto payments.',
      tech: ['Next.js', 'Web3.js', 'Solidity', 'IPFS'],
      image: '🎨',
      demoLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Alprints E-commerce',
      subtitle: 'E-commerce Platform',
      description: 'Custom printing e-commerce store with product customization and order management.',
      tech: ['React', 'Ruby on Rails', 'PostgreSQL', 'Stripe'],
      image: '🛒',
      demoLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Dream. Develop. Deploy. - Showcasing my latest work and achievements.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card animate-fadeInUp">
              <div className="project-image">
                {project.image}
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
                  <a href={project.demoLink} className="btn btn-primary btn-sm">
                    View Demo
                  </a>
                  <a href={project.githubLink} className="btn btn-secondary btn-sm">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a href="/blog/project-case-studies" className="btn btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
