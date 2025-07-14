import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...formData,
      }).toString(),
    });
    navigate('/thank-you');
  };

  return (
    <div className="contact-overlay">
      <div className="contact-modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Contact Me</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" rows="4" required onChange={handleChange} />
          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;