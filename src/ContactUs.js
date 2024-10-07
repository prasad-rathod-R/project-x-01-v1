import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css'; // Ensure you import your custom CSS

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
