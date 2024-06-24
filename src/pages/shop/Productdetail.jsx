import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { Heart, Share2, ExternalLink } from 'react-feather';
import '../../css/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams(); // Retrieve the id parameter from the URL
  const { getProductById, addToCart, cartItems } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(parseInt(id, 10)); // Convert id to integer
      setProduct(productData);
      setCartItemCount(cartItems[productData.id] || 0); // Set initial cart item count
    };

    fetchProduct();
  }, [id, getProductById, cartItems]);

  const handleAddToCart = () => {
    addToCart(product.id);
    setCartItemCount(cartItemCount + 1);
  };

  const handleLike = () => {
    console.log(`Liked ${product.productName}`);
  };

  const handleCompare = () => {
    console.log(`Compare ${product.productName}`);
  };

  const handleShare = () => {
    console.log(`Share ${product.productName}`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <div className="image-container position-relative">
        <img
          src={product.productImage}
          alt={product.productName}
          className="product-image"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
      </div>
      <div className="details">
        <h2>{product.productName}</h2>
        <p>${product.price}</p>
        <p>{product.description}</p>
        <button className="addToCartBtn" onClick={handleAddToCart}>
          Add To Cart ({cartItemCount})
        </button>
        <button className="compareBtn" onClick={handleCompare}>
          Compare
        </button>
        <div className="social-icons">
          <span onClick={handleShare}>
            <Share2 size={24} />
          </span>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
