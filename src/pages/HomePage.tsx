import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import CounterSection from '../components/CounterSection';
import HireMeSection from '../components/HireMeSection';
import FooterSection from '../components/FooterSection';

const HomePage: React.FC = () => {
  return (
    <div className="modern-portfolio">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <CounterSection />
        <HireMeSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default HomePage;
