import React from "react";

import "../styles/Cart.css";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  function removeItem(indexToRemove) {
    const updatedCart = cart.filter((item, index) => {
      return index !== indexToRemove;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,

          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,

          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  }

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-container">
        {cart.map((item, index) => (
          <div className="cart-card" key={index}>
            <img src={item.thumbnail} alt={item.title} className="cart-image" />

            <div className="cart-content">
              <h2>{item.title}</h2>

              <p className="cart-category">{item.category}</p>

              <h3 className="cart-price">
                ${(item.price * item.quantity).toFixed(2)}
              </h3>

              <div className="quantity-box">
                <button
                  className="quantity-btn"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span className="quantity-value">{item.quantity}</span>

                <button
                  className="quantity-btn"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <button className="remove-btn" onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Cart;
