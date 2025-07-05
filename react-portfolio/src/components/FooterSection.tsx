import React from 'react';

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: '📱', url: 'https://github.com/iozeey' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/zeeshan-ahmad' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/iozeey' },
    { name: 'Email', icon: '✉️', url: 'mailto:asif.zshan@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Let's Work Together!</h3>
            <p>Building the future, one line of code at a time.</p>
            <a href="mailto:asif.zshan@gmail.com" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">AI/ML Solutions</a></li>
                <li><a href="#services">Consulting</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-text">
            © {currentYear} Zeeshan Ahmad. Made with ❤️ for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
