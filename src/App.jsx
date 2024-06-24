import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopContext";

// Import components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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

function App() {
  return (
    <ShopContextProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} /> {/* Adjusted route for Checkout */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/inspiration" element={<Inspiration />} />
              <Route path="/ideashare" element={<IdeaShare />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
