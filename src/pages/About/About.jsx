import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Hero from "../../components/Hero/Hero";
import Guarantee from "../../components/Gurantee/gurantee";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <Hero />
      </div>

      <div className="content-section">
        <div className="about-section">
          <div className="inner-container">
            <h1>About Us</h1>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              velit ducimus, enim inventore earum, eligendi nostrum pariatur
              necessitatibus eius dicta a voluptates sit deleniti autem error eos
              totam nisi neque voluptates sit deleniti autem error eos totam nisi
              neque.
            </p>
          </div>
        </div>
        <LazyLoadImage
          alt="Background"
          src="https://res.cloudinary.com/duicyr28v/image/upload/v1718276283/Who_wants_a_shell_inspired_chaise_in_their_home__If_so_we_can_make_it_%EF%B8%8F_d38zev.jpg"
          effect="blur"
          className="background-image"
        />
      </div>

      <div className="guarantee-section">
        <Guarantee />
      </div>
    </div>
  );
};

export default About;
