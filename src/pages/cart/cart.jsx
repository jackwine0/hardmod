import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import "../../css/cart.css";
import { PRODUCTS } from "../../Products";
import CartItem from "./CartItem";
import Hero from "../../components/Hero";
import Guarantee from "../../components/gurantee";
import Checkout from "../cart/Checkout"; // Import the Checkout component

const Cart = () => {
  const { cartItems, checkout } = useContext(ShopContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        total += cartItems[item] * itemInfo.price;
      }
    }
    setTotalAmount(total.toFixed(2));
  }, [cartItems]);

  return (
    <div className="cart">
      <Hero />
      <div className="cart-items">
        {Object.keys(cartItems).map((productId) => {
          if (cartItems[productId]!== 0) {
            const product = PRODUCTS.find(
              (product) => product.id === parseInt(productId)
            );
            return (
              <CartItem
                key={productId}
                data={product}
                quantity={cartItems[productId]}
              />
            );
          }
        })}
      </div>
      {cartItems && Object.keys(cartItems).some((key) => cartItems[key] > 0)? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout", { state: { cartItems } }); // Pass cartItems as a prop
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
      <Guarantee />
    </div>
  );
};

export default Cart;