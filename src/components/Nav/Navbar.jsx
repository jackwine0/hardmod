import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SidebarCart from '../../pages/SIdebarCart/SidebarCart'; // Adjust the import path as needed
import './Navbar.css';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIconOpen, setIsIconOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleIcon = () => {
    setIsIconOpen(!isIconOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <a href="/" className="navbar-logo-link">
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/duicyr28v/image/upload/v1601234567/Meubel_House_Logos-05_rfwvsf.png"
                width="50"
                alt="Logo"
              />
              <strong>Funiro</strong>
            </a>
          </div>

          <div className={`navbar-links ${isMobileMenuOpen ? 'responsive' : ''}`}>
            <a href="/" >Home</a>
            <a href="/shop">Shop</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
          </div>

          <div className="navbar-icons">
            <div className={`icon-links ${isIconOpen ? 'responsive' : ''}`}>
              <a href="#user"><i className="fas fa-user"></i></a>
              <a href="#favorites"><i className="fas fa-heart"></i></a>
              <a href="#search"><i className="fas fa-search"></i></a>
            </div>
            <button className="cart-icon" onClick={toggleCart}>
              <i className="fas fa-shopping-cart"></i>
            </button>
          </div>

          <div className="icon" onClick={toggleMobileMenu}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </nav>
      <SidebarCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
    </>
  );
};

export default Navbar;