import React from 'react';
import Hero from '../../components/Hero/Hero';
import Guarantee from '../../components/Gurantee/gurantee';
import "./Contact.css"
const Contact = () => {
  return (
    <section className="contact-section">
      <Hero/>
      <div className="container">
        <div className="contact-info">
          <p className="contact-text">
            We're here to assist you! If you have any questions or need assistance, please feel free to reach out to
            us.
            <br /><br />
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, rerum?            <a href="https://veilmail.io/e/FkKh7o" className="email-link">https://user@example.com</a>
          </p>
          <p className="contact-text">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, dolorum!          </p>
        </div>
        <div className="contact-form">
          <h1 className="contact-title">Contact Form</h1>
          <form action="send-contact.php" method="post" id="submit-contact-form">
            <div className="form-group">
              <label htmlFor="name" className="label">Your Name</label>
              <input type="text" id="name" name="name" required="" className="input-field" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label">Your Email</label>
              <input type="email" id="email" name="email" required="" className="input-field" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="label">Your Message</label>
              <textarea id="message" name="message" required="" className="input-field" />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">
                Send Message ✉
              </button>
            </div>
          </form>
        </div>
      </div>
      <Guarantee/>
    </section>
  );
};

export default Contact;