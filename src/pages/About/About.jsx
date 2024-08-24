import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Hero from '../../components/Hero/Hero';
import Guarantee from '../../components/Gurantee/gurantee'; // Ensure the path is correct
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <Hero />
      </div>

      <div className="content-section">
        
        <div className="about-section">
          <div className='abt'>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque.
          </p>
          </div>
        </div>
       
      </div>

      <div className="guarantee-section">
        <Guarantee />
      </div>
    </div>
  );
};

export default About;
