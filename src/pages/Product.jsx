import ProductCart from "../components/ProductCart";
import "../styles/Product.css";

import { fetchData } from "../services/api";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function Product() {
  useEffect(() => {
    async function getData() {
      const data = await fetchData();
      setItem(data);
    }

    getData();
  }, []);

  const [item, setItem] = useState([]);

  return (
    <div className="products-page">
      <h1 className="products-title">All Products</h1>

      <div className="products-container">
        {item.map((item, idx) => {
          return <ProductCart key={idx} Product={item} />;
        })}
      </div>
    </div>
  );
}

export default Product;
