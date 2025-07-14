import React from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  return (
    <div className="contact-overlay">
      <div className="contact-modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Contact Me</h2>

        {/* Visible Netlify Form */}
        <form name="contact" method="POST" data-netlify="true">
          {/* Hidden form-name input required by Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          
          {/* Optional: Redirect to Thank You page */}
          <input type="hidden" name="_redirect" value="/thank-you" />

          {/* Form fields */}
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="4" placeholder="Your Message" required />

          <button type="submit" className="submit-btn">Send</button>
        </form>

        {/* Hidden version for Netlify to detect during build */}
        <form name="contact" netlify hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
