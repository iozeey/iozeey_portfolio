import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container-fluid px-md-0">
            <div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
              <div className="one-third order-md-last img bg-light">
                <div className="overlay"></div>
                <div className="overlay-1"></div>
              </div>
              <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <div className="text text-center">
                  <h1 className={styles.heroText}>
                    Hi, I am <span>Zeeshan Ahmad</span>.<br />
                    A Full Stack <span>Web</span> Developer.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container-fluid px-md-0">
            <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
              <div className="one-third order-md-last img bg-light">
                <div className="overlay"></div>
                <div className="overlay-1"></div>
              </div>
              <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                <div className="text text-center">
                  <h1 className={styles.heroText}>
                    Future <span>AI/ML</span> Engineer
                  </h1>
                  <span className={styles.heroSubheading}>
                    Doing MSc Artificial Intelligence and Robotics from Hertfordshire University, UK
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
