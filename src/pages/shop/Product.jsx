import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { Heart, Share2, ExternalLink } from "react-feather";
import "../../css/Shop.css";

const cloudName = 'duicyr28v'; // Replace with your actual Cloudinary cloud name

const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);
  const cartItemCount = cartItems[id];

  const handleAddToCart = () => {
    addToCart(id);
  };

  const handleLike = () => {
    console.log(`Liked ${productName}`);
  };

  const handleCompare = () => {
    console.log(`Compare ${productName}`);
  };

  const handleShare = () => {
    console.log(`Share ${productName}`);
  };

  return (
    <div className="product" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link to={`/products/${id}`} className="image-container">
        <img
          src={productImage} // Assuming productImage is correctly imported and points to the image path
          alt={productName}
          className="product-image"
        />
        {isHovered && (
          <div className="hover-actions">
            <span className="action" onClick={handleLike}>
              <Heart size={24} />
            </span>
            <span className="action" onClick={handleCompare}>
              <ExternalLink size={24} />
            </span>
            <span className="action" onClick={handleShare}>
              <Share2 size={24} />
            </span>
          </div>
        )}
      </Link>
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={handleAddToCart}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export default Product;
