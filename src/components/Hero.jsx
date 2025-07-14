import React, { useState } from 'react';
import './Hero.css';
import ContactForm from './ContactForm';
import coderGirl from '../assets/coder-girl.gif';

const Hero = () => {
  const [showForm, setShowForm] = useState(false); // ✅ Modal is hidden by default

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Hi, I'm Sushma</h1>
          <p>Full Stack Web Developer focused on clean & responsive design</p>
          <div className="hero-buttons">
            <a href="/SUSHMA CV.pdf" className="btn primary" download>
              📄 Resume
            </a>
            <button className="btn outline" onClick={() => setShowForm(true)}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={coderGirl} alt="Coder Girl" />
        </div>
      </div>

      {/* Show modal only when user clicks the button */}
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Hero;
