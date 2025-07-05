import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Applications',
      description: 'Modern SaaS applications with scalable architecture and cutting-edge technologies.',
      features: ['React/Vue.js', 'Cloud-Native', 'Responsive Design']
    },
    {
      icon: '🚀',
      title: 'Full-Stack Development',
      description: 'End-to-end development with latest industry trends and best practices.',
      features: ['Frontend + Backend', 'API Development', 'Database Design']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Simple, intuitive, elegant, and responsive web experiences.',
      features: ['Modern Design', 'User-Centered', 'Mobile-First']
    },
    {
      icon: '⚙️',
      title: 'DevOps & Deployment',
      description: 'CI/CD integration and cloud deployment for seamless development workflow.',
      features: ['Automation', 'Cloud Hosting', 'Performance Optimization']
    },
    {
      icon: '🔍',
      title: 'SEO & Analytics',
      description: 'Boost your organic presence and track performance with data-driven insights.',
      features: ['SEO Optimization', 'Analytics Setup', 'Performance Monitoring']
    },
    {
      icon: '🏗️',
      title: 'System Architecture',
      description: 'Scalable system design and architecture consulting for complex projects.',
      features: ['Microservices', 'API Design', 'Database Architecture']
    }
  ];

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Your success is my success! Let's build something amazing together.
          </p>
        </div>

        <div className="services-grid grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="service-card card animate-fadeInUp">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <span key={featureIndex} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="service-action">
                <a href="#contact" className="btn btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
