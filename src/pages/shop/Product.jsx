import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import "../../css/Product.css";

const cloudName = "duicyr28v"; // Replace with your actual Cloudinary cloud name

const Product = ({ data }) => {
  const { id, productName, price, productImage, description } = data;
  const { addToCart, addToComparison, cartItems } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);
  const cartItemCount = cartItems[id];
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(id);
  };

  const handleAddToComparison = () => {
    addToComparison(data);
    navigate("/compare"); // Navigate to the compare page
  };

  return (
    <div
      className="product"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${id}`} className="image-container">
        <img
          src={productImage}
          alt={productName}
          className="product-image"
        />
        {isHovered && (
          <div className="icon-grid">
            <div className="icon-item">
              <img
                src={`https://res.cloudinary.com/${cloudName}/image/upload/v1719132005/gridicons_share_ndo42d.svg`}
                alt="Share"
              />
              <p className="icon-text">Share</p>
            </div>
            <div className="icon-item" onClick={handleAddToComparison}>
              <img
                src={`https://res.cloudinary.com/${cloudName}/image/upload/v1719132005/compare-svgrepo-com_1_r3v9df.svg`}
                alt="Compare"
              />
              <p className="icon-text">Compare</p>
            </div>
            <div className="icon-item">
              <img
                src={`https://res.cloudinary.com/${cloudName}/image/upload/v1719132005/Heart_y3aubs.svg`}
                alt="Like"
              />
              <p className="icon-text">Like</p>
            </div>
          </div>
        )}
      </Link>
      <div className="description">
        <p><b>{productName}</b></p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      {isHovered && (
        <button className="addToCartBttn" onClick={handleAddToCart}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      )}
    </div>
  );
};

export default Product;
