import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useLocation } from "react-router-dom";
import "../../css/checkout.css";
import { PRODUCTS } from "../../Products";
import Hero from "../../components/Hero";
import Guarantee from "../../components/gurantee";

const Checkout = () => {
  const { checkout } = useContext(ShopContext);
  const location = useLocation();
  const cartItems = location.state?.cartItems;

  if (!cartItems) {
    return <div>Cart items not found</div>;
  }

  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");

  const orderSummary = [];
  Object.keys(cartItems).forEach((itemId) => {
    const quantity = cartItems[itemId];
    if (quantity > 0) {
      const product = PRODUCTS.find((product) => product.id === parseInt(itemId));
      if (product) {
        orderSummary.push({
          productName: product.productName, // Changed to productName
          quantity,
          subtotal: product.price * quantity,
        });
      }
    }
  });

  const total = orderSummary.reduce((acc, item) => acc + item.subtotal, 0);

  const handleBillingDetailsChange = (event) => {
    setBillingDetails({ ...billingDetails, [event.target.name]: event.target.value });
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    // Call the checkout function with the billing details and payment method
    checkout(billingDetails, paymentMethod);
    navigate("/confirmation");
  };

  return (
    <div className="checkout">
      <div className="hero-checkout">
        <Hero />
      </div>
      <div className="checkout-content">
        <div className="billing-details">
          <h2>Billing Details</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={billingDetails.name}
                onChange={handleBillingDetailsChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={billingDetails.email}
                onChange={handleBillingDetailsChange}
              />
            </label>
            <br />
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={billingDetails.address}
                onChange={handleBillingDetailsChange}
              />
            </label>
            <br />
            <label>
              City:
              <input
                type="text"
                name="city"
                value={billingDetails.city}
                onChange={handleBillingDetailsChange}
              />
            </label>
            <br />
            <label>
              State:
              <input
                type="text"
                name="state"
                value={billingDetails.state}
                onChange={handleBillingDetailsChange}
              />
            </label>
            <br />
            <label>
              Zip:
              <input
                type="text"
                name="zip"
                value={billingDetails.zip}
                onChange={handleBillingDetailsChange}
              />
            </label>
            <br />
            <label>
              Payment Method:
              <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="card">Card</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
            </label>
          </form>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Units</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {orderSummary.map((item, index) => (
                <tr key={index}>
                  <td>{item.productName}</td> {/* Changed to productName */}
                  <td>{item.quantity}</td>
                  <td>${item.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>Total:</td>
                <td>${total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
      <div className="checkout-guarantee">
        <Guarantee />
      </div>
    </div>
  );
};

export default Checkout;
