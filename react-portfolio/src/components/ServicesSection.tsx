
import React from 'react';
import styles from './ServicesSection.module.css';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: 'flaticon-app-development',
      title: 'Web Application',
      description: 'Saas Web application are the future of businesses'
    },
    {
      icon: 'flaticon-web-programming',
      title: 'Web Development',
      description: 'With latest industry trends and techniques'
    },
    {
      icon: 'flaticon-branding',
      title: 'Web Design',
      description: 'A small river named Duden flows by their place and supplies.'
    },
    {
      icon: 'flaticon-3d-design',
      title: 'Devops',
      description: 'Integrate the CI/CD and focus on development rather deployment'
    },
    {
      icon: 'flaticon-computer',
      title: 'Branding',
      description: 'Your Idea, My knowledge and Experience together can make a good brand reputation'
    },
    {
      icon: 'flaticon-vector',
      title: 'Web Architect',
      description: 'System design and architecture consulting'
    }
  ];

  return (
    <section className="ftco-section p-4" id="services-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading" style={{ letterSpacing: 2, color: '#12b0e9', fontWeight: 600 }}>I AM GREAT AT</span>
            <h2 className="mb-4" style={{ fontWeight: 800, fontSize: '2.5rem', color: '#333' }}>My proud services</h2>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Your success is my success!</p>
          </div>
        </div>
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4 d-flex align-items-stretch">
              <div className={styles['services-card']}>
                <div className={styles['services-icon']}>
                  <span className={service.icon}></span>
                </div>
                <div>
                  <h3 className={styles['services-title']}>{service.title}</h3>
                  <p className={styles['services-desc']}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
