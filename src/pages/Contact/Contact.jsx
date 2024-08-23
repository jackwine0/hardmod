import React from 'react';
import Hero from '../../components/Hero/Hero';
import './Contact.css';
import Guarantee from '../../components/Gurantee/gurantee';

const Contact = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="intro">
        <h2>Get In Touch With Us</h2>
        <p>For more information about our products & services, please feel free to drop us an email.<br /> Our staff will always be there to help you out. Do not hesitate!</p>
      </div>
      <div className="container">
        <div className="contact-info">
          <ul>
            <li>
              <label>Address:</label>
              <p>123 Main St, Anytown, USA</p>
            </li>
            <li>
              <label>Phone:</label>
              <p>555-555-5555</p>
            </li>
            <li>
              <label>Working Time:</label>
              <p>Mon-Fri, 9am-5pm</p>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form>
            <div className="input-container">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" className="input" />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" className="input" />
            </div>
            <div className="input-container">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" className="input" />
            </div>
            <div className="input-container textarea">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" className="input"></textarea>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
      <div>
        <Guarantee/>
      </div>
    </div>
  );
};

export default Contact;
