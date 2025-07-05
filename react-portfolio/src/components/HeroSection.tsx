import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content animate-fadeInUp">
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Zeeshan Ahmad</span>
            <br />
            A Full Stack <span className="text-gradient">Web</span> Developer
          </h1>
          <h2 className="hero-title">
            Future <span className="text-gradient">AI/ML</span> Engineer
          </h2>
          <p className="hero-subtitle">
            Pursuing MSc Artificial Intelligence and Robotics from Hertfordshire University, UK.
            Passionate about creating innovative web solutions and exploring the frontiers of AI technology.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a 
              href="/images/Zeeshan_Ahmad_Full_Stack_Web_Dev.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
