import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./Compare.css";
import { PRODUCTS } from "../../Products";
import Hero from "../Hero/Hero";
import Guarantee from "../Gurantee/gurantee";

const Compare = () => {
  const { comparisonItems, addToComparison, removeFromComparison } = useContext(ShopContext);

  return (
    <div className="compare-container">
      <Hero />
      <div className="comparison-table">
        <table>
          <thead>
            <tr>
              <th>
                <div className="to-shop">
                  <h3>
                    Go to Product <br /> page for more <br /> Products
                  </h3>
                  <button onClick={() => (window.location.href = "/shop")}>
                    View More
                  </button>
                </div>
              </th>
              {comparisonItems.map((item) => (
                <th key={item.id}>
                  <div className="compare-item">
                    <img src={item.productImage} alt={item.productName} />
                    <h3>{item.productName}</h3>
                    <button onClick={() => removeFromComparison(item.id)}>
                      X
                    </button>
                  </div>
                </th>
              ))}
              <th>
                <div className="add-product">
                  <h2>Add More Products</h2>
                  <select onChange={(e) => addToComparison(e.target.value)}>
                    <option value="">Select a product</option>
                    {PRODUCTS.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.productName}
                      </option>
                    ))}
                  </select>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Price</td>
              {comparisonItems.map((item) => (
                <td key={item.id}>{item.price}</td>
              ))}
            </tr>
            <tr>
              <td>Color</td>
              {comparisonItems.map((item) => (
                <td key={item.id}>{item.color}</td>
              ))}
            </tr>
            <tr>
              <td>Material</td>
              {comparisonItems.map((item) => (
                <td key={item.id}>{item.material}</td>
              ))}
            </tr>
            <tr>
              <td>Dimensions</td>
              {comparisonItems.map((item) => (
                <td key={item.id}>{item.dimensions}</td>
              ))}
            </tr>
            <tr>
              <td>Weight</td>
              {comparisonItems.map((item) => (
                <td key={item.id}>{item.weight}</td>
              ))}
            </tr>
            <tr>
              <td>Description</td>
              {comparisonItems.map((item) => (
                <td key={item.id}>{item.description}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <Guarantee />
    </div>
  );
};

export default Compare;
