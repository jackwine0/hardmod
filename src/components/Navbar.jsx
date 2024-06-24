import React from "react";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/" className="navbar-logo-link">
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1601234567/Meubel_House_Logos-05_rfwvsf.png"
            width="50"
            alt="Logo"
          />
          <strong><span className="sr-only">Funiro</span></strong>
        </NavLink>
      </div>

      <nav className="navbar-nav">
        <NavLink to="/" className="navbar-nav-link">
          Home
        </NavLink>
        <NavLink to="/shop" className="navbar-nav-link">
          Shop
        </NavLink>
        <NavLink to="/about" className="navbar-nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="navbar-nav-link">
          Contact
        </NavLink>
      </nav>

      <div className="navbar-actions">
        <NavLink to="#" className="navbar-action-link">
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1718905931/user_sbbtxd.png"
            width="20"
            alt="User Icon"
          />
          <span className="link-text">User</span>
        </NavLink>
        <NavLink to="#" className="navbar-action-link">
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1718905932/likes_jnntoc.svg"
            width="20"
            alt="Wishlist Icon"
          />
          <span className="link-text">Wishlist</span>
        </NavLink>
        <NavLink to="#" className="navbar-action-link">
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1718905931/search_p4oqlo.svg"
            width="20"
            alt="Search Icon"
          />
          <span className="link-text">Search</span>
        </NavLink>
        <NavLink to="/cart" className="navbar-action-link">
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1718905932/cart_pca8k7.svg"
            width="20"
            alt="Cart Icon"
          />
          <span className="link-text">Cart</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
