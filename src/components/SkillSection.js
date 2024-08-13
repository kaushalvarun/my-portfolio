import React from 'react';

function SkillSection({ title, skills, description }) {
  return (
    <div className="tech">
      <h2>{title}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <i
              className={`${skill.icon} colored`}
              title={skill.name}
              style={skill.style || {}}
            ></i>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
}

export default SkillSection;
