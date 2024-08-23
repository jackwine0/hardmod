import React, { useState } from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
import "./Shop.css";
import Hero from "../../components/Hero/Hero";
import Guarantee from "../../components/Gurantee/gurantee";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // Assuming products per page remains constant

  // Calculate index of the last and first product for current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = PRODUCTS.slice(indexOfFirstProduct, indexOfLastProduct);

  // Function to handle pagination button click
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <Hero />
      </div>

      <div className="products">
        {currentProducts.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      <div className="pagination">
        {[...Array(Math.ceil(PRODUCTS.length / productsPerPage))].map((_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>

      <div className="guarantee-section">
        <Guarantee />
      </div>
    </div>
  );
};

export default Shop;
