import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI Product Strategy',
      description: 'Translate business goals into practical AI use cases, delivery plans, and product roadmaps.',
      features: ['Use-case Discovery', 'Roadmapping', 'Value Mapping']
    },
    {
      icon: '⚡',
      title: 'Automation Systems',
      description: 'Replace repetitive manual work with smart workflows, integrations, and reliable automations.',
      features: ['Workflow Design', 'Integrations', 'Process Optimization']
    },
    {
      icon: '🧠',
      title: 'AI Assistants',
      description: 'Build conversational assistants for support, sales, operations, and internal knowledge access.',
      features: ['Chat UX', 'Context Retrieval', 'Prompt Design']
    },
    {
      icon: '🛰️',
      title: 'MVP Delivery',
      description: 'Ship polished prototypes and production-ready products with a fast, iterative build process.',
      features: ['Rapid Prototyping', 'Web Apps', 'Iterative Delivery']
    },
    {
      icon: '📊',
      title: 'Data Intelligence',
      description: 'Turn operational data into clear dashboards, signals, and decision support for your team.',
      features: ['Dashboards', 'Reporting', 'Decision Support']
    },
    {
      icon: '🏗️',
      title: 'Architecture & Scale',
      description: 'Design the backend, APIs, and deployment foundation needed for products that can grow.',
      features: ['APIs', 'Cloud Architecture', 'Reliable Scaling']
    }
  ];

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">AI Solutions</h2>
          <p className="section-subtitle">
            Practical systems for teams that want to ship AI value, automate work, and launch stronger digital products.
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
