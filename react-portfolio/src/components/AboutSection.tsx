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
            "Change is life." - That's why I always welcome change and growth.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text animate-slideInLeft">
            <p>
              Passionate, determined, and self-motivated software engineer with 8 years of experience 
              in web and desktop applications. I thrive on creating innovative solutions and staying 
              ahead of technology trends.
            </p>
            
            <h3>Technical Expertise:</h3>
            <div className="tech-skills">
              <div className="skill-category">
                <h4>Backend Development</h4>
                <p>Python Django, Ruby on Rails, Core PHP, Laravel, Node.js</p>
              </div>
              <div className="skill-category">
                <h4>Frontend Development</h4>
                <p>React.js, GraphQL, Apollo Client, Angular.js, Vue.js, HTML5, CSS3, Bootstrap</p>
              </div>
              <div className="skill-category">
                <h4>Emerging Technologies</h4>
                <p>React Native, Java Dropwizard, Maven, Android Development</p>
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
