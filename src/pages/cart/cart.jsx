import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "../../css/cart.css";
import { PRODUCTS } from "../../Products";
import Hero from "../../components/Hero";
import Guarantee from "../../components/gurantee";

const Cart = () => {
  const { cartItems, checkout, addToCart, removeFromCart } = useContext(
    ShopContext
  );
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    for (const productId in cartItems) {
      if (cartItems[productId] > 0) {
        const product = PRODUCTS.find((prod) => prod.id === parseInt(productId));
        if (product) {
          total += cartItems[productId] * product.price;
        }
      }
    }
    setTotalAmount(total.toFixed(2));
  }, [cartItems]);

  return (
    <div className="cart">
      <Hero />
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-header">
            <div className="cart-column">Product</div>
            <div className="cart-column">Name</div>
            <div className="cart-column">Price</div>
            <div className="cart-column">Quantity</div>
          </div>
          {Object.keys(cartItems).map((productId) => {
            const quantity = cartItems[productId];
            if (quantity > 0) {
              const product = PRODUCTS.find(
                (prod) => prod.id === parseInt(productId)
              );
              if (product) {
                return (
                  <div className="cart-row" key={productId}>
                    <div className="cart-column">
                      <img src={product.productImage} alt={product.productName} />
                    </div>
                    <div className="cart-column">{product.productName}</div>
                    <div className="cart-column">${product.price}</div>
                    <div className="cart-column">
                      <button
                        className="increment-decrement-button"
                        onClick={() => removeFromCart(product.id)}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button
                        className="increment-decrement-button"
                        onClick={() => addToCart(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              }
            }
            return null;
          })}
        </div>
        <div className="cart-summary">
          {Object.keys(cartItems).some((key) => cartItems[key] > 0) ? (
            <div className="checkout">
              <h2>Cart Totals</h2>
              <div className="total-container">
                <p>
                  <span>Subtotal:</span>
                  <span>${totalAmount}</span>
                </p>
                <p>
                  <span>Total:</span>
                  <span>${totalAmount}</span>
                </p>
              </div>
              <button
                onClick={() => {
                  checkout();
                  navigate("/checkout", { state: { cartItems } });
                }}
              >
                Checkout
              </button>
            </div>
          ) : (
            <h1>Your Shopping Cart is Empty</h1>
          )}
        </div>
      </div>
      <Guarantee />
    </div>
  );
};

export default Cart;
