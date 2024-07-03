import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../Products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [comparisonItems, setComparisonItems] = useState([]); // Added state for comparison items
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });
  const [modeOfPayment, setModeOfPayment] = useState("card");

  const getProductById = async (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = PRODUCTS.find((product) => product.id === id);
        if (product) {
          resolve(product);
        } else {
          reject(new Error('Product not found'));
        }
      }, 1000); // Simulate a delay
    });
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 0) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return prev;
    });
  };

  const addToComparison = (product) => {
    setComparisonItems((prev) => [...prev, product]);
  };

  const checkout = (billingDetails, paymentMethod) => {
    console.log("Placing order with details: ", billingDetails, paymentMethod);
    // Implement your checkout logic here
  };

  const removeFromComparison = (itemId) => {
    setComparisonItems((prev) => prev.filter((item) => item.id!== itemId));
  };

  const contextValue = {
    cartItems,
    comparisonItems,
    billingDetails,
    setBillingDetails,
    modeOfPayment,
    setModeOfPayment,
    getProductById,
    addToCart,
    removeFromCart,
    addToComparison,
    removeFromComparison, // Add this to the context value
    checkout,
    placeOrder: () => {
      // Logic for placing order
      console.log("Order placed successfully");
    }
  };

  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};