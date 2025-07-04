import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Iozeey<span>.</span></a>
        <button 
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" 
          type="button" 
          data-toggle="collapse"
          data-target="#ftco-nav" 
          aria-controls="ftco-nav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
            <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
            <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
            <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
            <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
            <li className="nav-item"><a href="/blog" className="nav-link"><span>Blog</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
