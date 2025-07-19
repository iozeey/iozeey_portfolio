import React from 'react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '⚛️',
      skills: ['React.js', 'Vue.js', 'Angular', 'TypeScript', 'HTML5/CSS3'],
      level: 90
    },
    {
      title: 'Backend Development',
      icon: '🔧',
      skills: ['Python Django', 'Ruby on Rails', 'Node.js', 'PHP Laravel'],
      level: 85
    },
    {
      title: 'Database & Cloud',
      icon: '💾',
      skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Redis'],
      level: 80
    },
    {
      title: 'AI/ML & Data Science',
      icon: '🤖',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Data Analysis'],
      level: 75
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: ['React Native', 'PWA', 'Mobile UI/UX', 'App Store Deployment'],
      level: 70
    },
    {
      title: 'DevOps & Tools',
      icon: '⚙️',
      skills: ['Git', 'CI/CD', 'Linux', 'Nginx', 'Testing'],
      level: 85
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Continuously learning and growing to provide the best service possible
          </p>
        </div>

        <div className="skills-grid grid grid-3">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-item card animate-fadeInUp">
              <div className="skill-icon">
                {category.icon}
              </div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${category.level}%` }}
                  ></div>
                </div>
                <span className="progress-text">{category.level}%</span>
              </div>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
