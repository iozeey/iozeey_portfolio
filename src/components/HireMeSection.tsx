import React from 'react';

const HireMeSection: React.FC = () => {
  return (
    <section className="hire-section section">
      <div className="container">
        <div className="hire-content">
          <h2 className="hire-title">Ready to Build Your AI Solution?</h2>
          <p className="hire-description">
            Let’s collaborate on a focused roadmap, clear architecture, and a delivery plan that gets your AI product or automation initiative into production.
          </p>
          <div className="hire-process">
            <div className="process-steps">
              <div className="process-step">
                <span className="step-icon">🔍</span>
                <span className="step-text">Discover</span>
              </div>
              <div className="process-step">
                <span className="step-icon">🧩</span>
                <span className="step-text">Design</span>
              </div>
              <div className="process-step">
                <span className="step-icon">⚡</span>
                <span className="step-text">Build</span>
              </div>
              <div className="process-step">
                <span className="step-icon">🚀</span>
                <span className="step-text">Launch</span>
              </div>
            </div>
          </div>
          <div className="hire-actions">
            <a href="mailto:asif.zshan@gmail.com" className="btn btn-primary">
              Start a Conversation
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;
