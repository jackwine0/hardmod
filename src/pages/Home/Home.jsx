import React, { useContext, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Home.css";
import { ShopContext } from "../../context/ShopContext";
import { PRODUCTS } from "../../Products";
import IdeaShare from "../../components/Ideashare/IdeaShare";
import Inspiration from "../../components/Inspo/Inspiration";
import Product from "../shop/Product"; // Import Product component

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(ShopContext);
  const [products, setProducts] = useState(PRODUCTS.slice(0, 8)); // show only 8 products initially

  const categories = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/duicyr28v/image/upload/v1718156043/Image-living_room_covrvb.png",
      title: "Dining",
      link: "/shop/dining",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/duicyr28v/image/upload/v1601234567/Mask_Group_hwfbcn.jpg",
      title: "Living Room",
      link: "/shop/living-room",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/duicyr28v/image/upload/v1601234567/Mask_Group_2_qmwync.jpg",
      title: "Bedroom",
      link: "/shop/bedroom",
    },
  ];

  const handleShowMore = () => {
    navigate("/shop");
  };

  return (
    <div className="home">
      <div className="hero-container">
       
        <div className="hero-content-container">
          <div className="hero-text-box">
            <strong>
              <p>New Arrival</p>
            </strong>
            <h1 className="hero-title">Discover Our <br />New Collection</h1>
            <p className="hero-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              cumque possimus maiores unde repudiandae exercitationem veniam.
              Quisquam aut suscipit nemo!
            </p>
            <button>
              <a className="buy-button" href="/shop">
                Buy Now
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="categories-section">
        <div className="categories-text">
          <h2 className="categories-heading">Browse The Range</h2>
          <p className="categories-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            error.
          </p>
        </div>
        <div className="categories-container">
          {categories.map((category) => (
            <div key={category.id} className="category-container">
              <a href={category.link}>
                <LazyLoadImage
                  effect="blur"
                  src={category.image}
                  alt={category.title}
                  className="category-image"
                />
                <p className="category-title">{category.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      <section className="products-section">
        <h2>Our Products</h2>
        <div className="products-grid-container">
          {products.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
        <div className="show-more-container">
          <button onClick={handleShowMore} className="show-more-button">
            Show More
          </button>
        </div>
      </section>

      <div className="inspiration-section">
        <Inspiration /> {/* Render the Inspiration component */}
      </div>
      <div className="idea-share-section">
        <IdeaShare />
      </div>
    </div>
  );
};

export default Home;
