import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import "../../css/ProductDetail.css";
import Product from "./Product";
import { PRODUCTS } from "../../Products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook
  const { getProductById, addToCart, addToComparison, cartItems } = useContext(ShopContext); // Added addToComparison
  const [product, setProduct] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [products, setProducts] = useState(PRODUCTS.slice(0, 4));

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(parseInt(id, 10));
        setProduct(productData);
        setCartItemCount(cartItems[productData.id] || 0);
      } catch (error) {
        console.error("Error fetching product:", error.message);
      }
    };

    fetchProduct();
  }, [id, getProductById, cartItems]);

  const handleAddToCart = () => {
    addToCart(product.id);
    setCartItemCount(cartItemCount + 1);
  };

  const handleAddToComparison = () => {
    addToComparison(product);
    navigate("/compare"); // Navigate to the compare page
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleSizeChange = (size) => {
    setSize(size);
    setProduct({ ...product, size });
  };

  const handleColorChange = (color) => {
    setColor(color);
    setProduct({ ...product, color });
  };

  const handleShowMore = () => {
    navigate("/shop");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li className="active">{product.productName}</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="column-50">
          <div className="product-image-container">
            <img
              src={product.productImage}
              alt={product.productName}
              className="product-image"
            />
          </div>
        </div>
        <div className="column-50">
          <div className="product-details">
            <h2>{product.productName}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <h5>Size</h5>
            <div className="size-options">
              <button
                className={`size-btn ${size === "L" ? "active" : ""}`}
                onClick={() => handleSizeChange("L")}
              >
                L
              </button>
              <button
                className={`size-btn ${size === "XL" ? "active" : ""}`}
                onClick={() => handleSizeChange("XL")}
              >
                XL
              </button>
              <button
                className={`size-btn ${size === "XS" ? "active" : ""}`}
                onClick={() => handleSizeChange("XS")}
              >
                XS
              </button>
            </div>
            <h5>Color</h5>
            <div className="color-options">
              <button
                className={`color-btn-blue ${color === "blue" ? "active" : ""}`}
                onClick={() => handleColorChange("blue")}
              ></button>
              <button
                className={`color-btn-black ${color === "black" ? "active" : ""}`}
                onClick={() => handleColorChange("black")}
              ></button>
              <button
                className={`color-btn-gold ${color === "gold" ? "active" : ""}`}
                onClick={() => handleColorChange("gold")}
              ></button>
            </div>
            <div className="product-actions">
              <button className="addToCartBtn" onClick={handleAddToCart}>
                Add To Cart ({cartItemCount})
              </button>
              <button
                className="compareBtn"
                onClick={handleAddToComparison}
              >
                Compare
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tabbar">
        <div className="tab">
          <button
            className={`tablinks ${activeTab === "description" ? "active" : ""}`}
            onClick={() => handleTabClick("description")}
          >
            Description
          </button>
          <button
            className={`tablinks ${activeTab === "additionalInfo" ? "active" : ""}`}
            onClick={() => handleTabClick("additionalInfo")}
          >
            Additional Info
          </button>
          <button
            className={`tablinks ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => handleTabClick("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className="tabcontent">
          {activeTab === "description" && (
            <div id="description" className="tabcontent active">
              <h3>Description</h3>
              <p>{product.description}</p>
              <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.</p>
              <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact, stout-hearted
                hero with a well-balanced audio which boasts a clear midrange
                and extended highs for a sound that is both articulate and
                pronounced. The analogue knobs allow you to fine tune the
                controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>
          )}
          {activeTab === "additionalInfo" && (
            <div id="additionalInfo" className="tabcontent active">
              <h3>Additional Information</h3>
              <p>Count/Units: {product.units}</p>
            </div>
          )}
          {activeTab === "reviews" && (
            <div id="reviews" className="tabcontent active">
              <h3>Reviews</h3>
              <p>No reviews yet.</p>
            </div>
          )}
        </div>
      </div>
      <section className="products-section">
        <h2>Related Products</h2>
        <div className="products-grid-container">
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
        {products.length < PRODUCTS.length && (
          <div className="show-more-container">
            <button onClick={handleShowMore} className="show-more-button">
              Show More
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDetail;
