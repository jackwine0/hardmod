import React from 'react';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../css/Hero.css"

const Hero = () => {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  const pageSubtitle = getPageSubtitle(location.pathname);

  return (
    <div className="hero">
      <LazyLoadImage
        src="https://res.cloudinary.com/duicyr28v/image/upload/v1719025337/Rectangle_1_j8lh3g.jpg"
        alt={pageTitle}
        className="hero-image"
      />
      <div className="hero-content">
        <img src="https://res.cloudinary.com/duicyr28v/image/upload/v1718149698/Meubel_House_Logos-05_rfwvsf.png" alt="Logo" className="logo" style={{ width: 50, height: 50 }} />
        <h1>{pageTitle}</h1>
        <p className="subtitle" dangerouslySetInnerHTML={{ __html: pageSubtitle }} />
      </div>
    </div>
  );
};

const getPageTitle = (pathname) => {
  switch (pathname) {
    case '/shop':
      return 'Shop';
    case '/about':
      return 'About';
    case '/contact':
      return 'Contact';
    case '/checkout':
      return 'Checkout';
    case '/cart':
      return 'Cart';
    case '/blog':
      return 'Blog';
    default:
      return 'Home';
  }
};

const getPageSubtitle = (pathname) => {
  switch (pathname) {
    case '/shop':
      return '<b>Home</b>>shop';
    case '/about':
      return '<b>Home</b>>about';
    case '/contact':
      return '<b>Home</b>>contact';
    case '/checkout':
      return '<b>Home</b>>checkout';
    case '/cart':
      return '<b>Home</b>>cart';
    case '/blog':
      return '<b>Home</b>>blog';
    default:
      return 'Welcome to our website';
  }
};

export default Hero;