import React from 'react';

const SkillsSection: React.FC = () => {
  const skills = [
    'ReactJs',
    'RubyOnRails', 
    'Python',
    'NodeJs',
    'SEO'
  ];

  const skillLevels = ['Novice', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <section className="ftco-section bg-white" id="skills-section">
      <div className="position-absolute scroll-down"></div>

      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h2 className="mb-4">My Skills</h2>
            <p>Learn & keep growing is my motive for better service</p>
          </div>
        </div>

        <section className="d-flex bg-lightwhite" id="skills">
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <div className="position-relative chart-wrapper">
              <ul className="chart-skills p-0">
                {skills.map((skill, index) => (
                  <li key={index} className="position-relative">
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <ul className="d-flex position-absolute chart-levels">
                {skillLevels.map((level, index) => (
                  <li key={index} className="flex-grow-1 position-relative">
                    <span className="position-absolute">{level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SkillsSection;
