import React from 'react';

const AboutSection: React.FC = () => {
  const personalInfo = [
    { label: 'Name', value: 'Zeeshan Ahmad' },
    { label: 'Email', value: 'asif.zshan@gmail.com' },
    { label: 'Phone', value: '+44 7774 261608' },
    { label: 'Location', value: 'Hertfordshire, UK' },
  ];

  const interests = [
    { icon: '🤖', label: 'Machine Learning' },
    { icon: '🧠', label: 'Artificial Intelligence' },
    { icon: '⚙️', label: 'DevOps' },
    { icon: '🌐', label: 'Networking' },
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            "Change is life." - I build with that mindset, combining product thinking, AI, and engineering discipline.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text animate-slideInLeft">
            <p>
              I’m a software engineer focused on AI-driven products, automation, and full-stack delivery. I help teams shape ideas into practical solutions that are usable, maintainable, and ready for real users.
            </p>
            
            <h3>Technical Expertise:</h3>
            <div className="tech-skills">
              <div className="skill-category">
                <h4>AI Product Development</h4>
                <p>LLM integrations, AI assistants, workflow automation, product design</p>
              </div>
              <div className="skill-category">
                <h4>Full-Stack Engineering</h4>
                <p>React.js, Node.js, Django, Ruby on Rails, APIs, scalable delivery</p>
              </div>
              <div className="skill-category">
                <h4>Delivery & Automation</h4>
                <p>Cloud deployment, CI/CD, analytics, observability, process improvement</p>
              </div>
            </div>

            <div className="personal-info">
              <h3>Contact Information</h3>
              <div className="info-grid">
                {personalInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <span className="info-label">{info.label}:</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="interests">
              <h3>Interests</h3>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-item">
                    <span className="interest-icon">{interest.icon}</span>
                    <span className="interest-label">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
