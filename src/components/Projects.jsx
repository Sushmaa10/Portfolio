import React from 'react';
import './Projects.css';
import chatbotImg from '../assets/ai-chatbot.png';
import weatherImg from '../assets/weather.png';
import springImg from '../assets/springboot.png';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src={chatbotImg} alt="AI Chatbot" />
          <h3>AI Wrapper Tool</h3>
          <a href="https://github.com/Sushmaa10/ai-wrapper-tool" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="project-card">
          <img src={weatherImg} alt="Weather App" />
          <h3>Weather App</h3>
          <a href="https://github.com/Sushmaa10/weather-app" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="project-card">
          <img src={springImg} alt="Spring Boot API" />
          <h3>Spring Boot Blog API</h3>
          <a href="https://github.com/Sushmaa10/springboot-blog-api" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
