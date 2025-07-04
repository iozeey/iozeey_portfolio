import React from 'react';

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
                <div className="text">
                  <h1 className="mb-4 mt-3">Hi, I am <span>Zeeshan Ahmad</span>. A Full Stack <span>Web</span> Developer.</h1>
                  <p>
                    <a href="mailto:asif.zshan@gmail.com" className="btn btn-primary">Hire me</a>
                    <a href="/images/Zeeshan_Ahmad_Full_Stack_Web_Dev.pdf" target="_blank" download="ZeeshanAhmad[iozeey.com].pdf" className="btn btn-primary btn-outline-primary">Download CV</a>
                  </p>
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
                <div className="text">
                  <h1 className="mb-4 mt-3">Future <span>AI/ML</span> Engineer</h1>
                  <span className="subheading">Doing MSc Artificial Intelligence and Robotics from Hertfordshire University, UK</span>
                  <p>
                    <a href="mailto:asif.zshan@gmail.com" className="btn btn-primary">Hire me</a>
                    <a href="/images/Zeeshan_Ahmad_Full_Stack_Web_Dev.pdf" target="_blank" download="ZeeshanAhmad[iozeey.com].pdf" className="btn btn-primary btn-outline-primary">Download CV</a>
                  </p>
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
