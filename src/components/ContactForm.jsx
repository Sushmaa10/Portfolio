import React from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  return (
    <div className="contact-overlay">
      <div className="contact-modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>Contact Me</h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thank-you"
          >
         <input type="hidden" name="form-name" value="contact" />
         <input type="text" name="name" placeholder="Your Name" required />
         <input type="email" name="email" placeholder="Your Email" required />
         <textarea name="message" placeholder="Your Message" rows="4" required />
         <button type="submit" className="submit-btn">Send</button>
       </form>
      </div>
    </div>
  );
};

export default ContactForm;
