import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { PRODUCTS } from '../../Products';
import '../../css/sidecart.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const SidebarCart = ({ isCartOpen, toggleCart }) => {
  const { cartItems, removeFromCart, addToCart } = useContext(ShopContext);

  const cartItemKeys = Object.keys(cartItems);
  const cartItemsList = cartItemKeys.map((itemId) => {
    const product = PRODUCTS.find((product) => product.id === parseInt(itemId));
    if (cartItems[itemId] > 0 && product) {
      return (
        <li key={itemId} className="productxx">
          <div className="product-linkx">
            <div className="product-imagex">
              <LazyLoadImage
                effect="blur"
                src={product.productImage}
                alt={product.productName}
              />
            </div>
            <div className="product-details">
              <h3>{product.productName}</h3>
              <div className="qty-price">
                <div className="qty">
                  <button className="minus-button" onClick={() => removeFromCart(product.id)}>-</button>
                  <input type="number" className="qty-input" value={cartItems[itemId]} readOnly />
                  <button className="plus-button" onClick={() => addToCart(product.id)}>+</button>
                </div>
                <div className="price">${(cartItems[itemId] * product.price).toFixed(2)}</div>
              </div>
            </div>
          </div>
          <button className="remove-button" onClick={() => removeFromCart(product.id)}>X</button>
        </li>
      );
    }
    return null;
  });

  const getTotalAmount = () => {
    return cartItemKeys.reduce((total, key) => {
      const product = PRODUCTS.find((product) => product.id === parseInt(key));
      return total + (cartItems[key] * product.price);
    }, 0).toFixed(2);
  };

  return (
    <aside id="sidebar-cart" className={`sidebar-cart ${isCartOpen ? 'open' : ''}`}>
      <main>
        <button onClick={toggleCart} className="close-button">
          <LazyLoadImage
            effect="blur"
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1719791014/Group_ofijbl.svg"
            width="20"
            alt=""
          />
          <span className="close-icon"></span>
        </button>
        <h2>Shopping Cart <span className="count">{cartItemKeys.reduce((acc, key) => acc + cartItems[key], 0)}</span></h2>
        <ul className="productsX">
          {cartItemsList.length > 0 ? cartItemsList : <li>No items in cart</li>}
        </ul>
        <div className="totals">
          <div className="subtotal">
            <span className="label">Subtotal:</span> <span className="amount">${getTotalAmount()}</span>
          </div>
        </div>
        <div className="action-buttonsx">
          <NavLink to="/cart" className="view-cart-button" onClick={toggleCart}>Cart</NavLink>
          <NavLink to="/checkout" className="checkout-button" onClick={toggleCart}>Checkout</NavLink>
        </div>
      </main>
    </aside>
  );
};

export default SidebarCart;
