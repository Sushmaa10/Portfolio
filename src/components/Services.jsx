import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>What I Offer</h2>
      <div className="services-grid">
        <div className="service-card">Responsive Website Design</div>
        <div className="service-card">React Web Development</div>
        <div className="service-card">Spring Boot APIs</div>
        <div className="service-card">Bug Fixing & Optimization</div>
        <div className="service-card">Hosting on AWS / Render</div>
        <div className="service-card">Freelance Projects & Collaboration</div>
      </div>
    </section>
  );
};

export default Services;
