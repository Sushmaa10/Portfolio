import React from 'react';
import './Tech.css';

const Tech = () => {
  const stack = {
    Languages: ['HTML', 'CSS', 'JavaScript', 'Java', 'Python'],
    Frameworks: ['React', 'Spring Boot'],
    Tools: ['Git', 'GitHub', 'Docker', 'VS Code'],
    Platforms: ['Render', 'AWS S3'],
  };

  return (
    <section className="tech">
      <h2>Tech Stack</h2>
      {Object.entries(stack).map(([category, items]) => (
        <div key={category} className="tech-group">
          <h3>{category}</h3>
          <ul>
            {items.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Tech;
