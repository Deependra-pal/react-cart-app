import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { cart, setCart } = useContext(CartContext);

  const { id } = useParams();

  const [product, setProduct] = useState(null);

  async function fetchSingleProduct() {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    setProduct(response.data);
  }

  function addToCart() {

  const existingProduct =
    cart.find((item) => {

      return item.id === product.id;
    });

  if (existingProduct) {

    const updatedCart =
      cart.map((item) => {

        if (item.id === product.id) {

          return {

            ...item,

            quantity:
              item.quantity + 1
          };
        }

        return item;
      });

    setCart(updatedCart);

  } else {

    setCart([

      ...cart,

      {
        ...product,

        quantity: 1
      }

    ]);
  }
  }

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <div className="left-section">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="details-image"
          />

          <div className="button-group">
            <button className="cart-btn" onClick={addToCart}>
              Add To Cart
            </button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

        <div className="right-section">
          <h1 className="product-title">{product.title}</h1>
          <p className="brand">
            Brand:
            <span> {product.brand}</span>
          </p>
          <div className="rating-box">⭐ {product.rating}</div>
          <h2 className="price">${product.price}</h2>
          <p className="discount">{product.discountPercentage}% OFF</p>
          <p className="stock">{product.availabilityStatus}</p>

          <div className="description-box">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h4>Category</h4>
              <p>{product.category}</p>
            </div>
            <div className="info-card">
              <h4>Stock</h4>
              <p>{product.stock}</p>
            </div>
            <div className="info-card">
              <h4>Warranty</h4>
              <p>{product.warrantyInformation}</p>
            </div>
            <div className="info-card">
              <h4>Shipping</h4>
              <p>{product.shippingInformation}</p>
            </div>
            <div className="info-card">
              <h4>Return Policy</h4>
              <p>{product.returnPolicy}</p>
            </div>
            <div className="info-card">
              <h4>SKU</h4>
              <p>{product.sku}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
