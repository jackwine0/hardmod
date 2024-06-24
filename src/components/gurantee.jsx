import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../css/gurantee.css";

const Guarantee = () => {
  return (
    <div className="guarantee-container">
      <div className="guarantee-box">
        <div className="box-icon">
          <LazyLoadImage
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1719037104/trophy_1_jxa9vq.svg"
            alt="High Quality"
            effect="blur"
          />
        </div>
        <div className="box-title">
          <h3>High Quality</h3>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className="guarantee-box">
        <div className="box-icon">
          <LazyLoadImage
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1719037104/guarantee_kmjjp8.svg"
            alt="Warranty Protection"
            effect="blur"
          />
        </div>
        <div className="box-title">
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="guarantee-box">
        <div className="box-icon">
          <LazyLoadImage
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1719037104/shipping_bbnqiy.svg"
            alt="Free Shipping"
            effect="blur"
          />
        </div>
        <div className="box-title">
          <h3>Free Shipping</h3>
          <p>Order over 150 $</p>
        </div>
      </div>
      <div className="guarantee-box">
        <div className="box-icon">
          <LazyLoadImage
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1719037104/customer-support_okx07x.svg"
            alt="24 / 7 Support"
            effect="blur"
          />
        </div>
        <div className="box-title">
          <h3>24 / 7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;