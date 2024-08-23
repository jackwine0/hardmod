import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import "./Inspiration.css";

const Inspiration = () => {
  const slides = [
    "https://res.cloudinary.com/duicyr28v/image/upload/v1718276283/Who_wants_an_avocado_inspired_ball_chair_and_swing_chair_in_their_home__foxv9t.jpg",
    "https://res.cloudinary.com/duicyr28v/image/upload/v1718276283/Wooden_Chair_Showing_Movement_and_Material_Conscious_Design_cvzeyu.jpg",
    "https://res.cloudinary.com/duicyr28v/image/upload/v1718276283/Oversized_Chaise_Lounge_Chairs_-_Foter_jlhdlz.jpg",
  ];

  const [curr, setCurr] = useState(0);
  const navigate = useNavigate();

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const autoSlideInterval = 3000;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const handleExploreMore = () => {
    navigate('/shop');
  };

  return (
    <div className="container">
      <div className="text-column">
        <h2>50+ Beautiful Rooms Inspiration</h2>
        <p>
          Our designers have already created a lot of beautiful prototypes of rooms that will inspire you.
        </p>
        <button className="explore-button" onClick={handleExploreMore}>Explore More</button>
      </div>
      <div className="carousel-column">
        <div className="carousel">
          <div className="carousel-body">
            <button className="carousel-button left" onClick={prev}>
              <ChevronLeft size={40} />
            </button>
            <div className="carousel-screen">
              <div className="carousel-stripe" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((slide, index) => (
                  <div className="carousel-tile" key={index}>
                    <img src={slide} alt={`Slide ${index + 1}`} className="carousel-image" />
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-button right" onClick={next}>
              <ChevronRight size={40} />
            </button>
          </div>
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`indicator ${curr === index ? 'active' : ''}`}
                onClick={() => setCurr(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
