import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Funiro</h4>
          <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div className="footer-col">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a href="/payment-options">Payment Options</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/privacy-policies">Privacy Policies</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter</p>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Funiro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
