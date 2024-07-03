import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext";
import "./index.css"; // Ensure you have a global CSS file if needed

// Import components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Compare from "./components/Compare"; // Import Compare component

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/cart/cart";
import Shop from "./pages/shop/shop";
import ProductDetail from "./pages/shop/Productdetail";
import Inspiration from "./components/Inspiration";
import IdeaShare from "./components/IdeaShare";
import Checkout from "./pages/cart/Checkout"; // Import Checkout page component
import SidebarCart from "./pages/cart/SidebarCart";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <ShopContextProvider>
      <Router>
        <div className="App">
          <Navbar toggleCart={toggleCart} />
          <SidebarCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="/ideashare" element={<IdeaShare />} />
              <Route path="/compare" element={<Compare />} /> {/* Added route for Compare */}
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
