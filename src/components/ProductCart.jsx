import "../styles/ProductCart.css";

import { useNavigate } from "react-router-dom";

const ProductCart = ({ Product }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={Product.thumbnail} alt="product" className="card-image" />

      <div className="card-content">
        <h3 className="title">{Product.title}</h3>

        <p className="category">{Product.category}</p>

        <p className="price">${Product.price}</p>

        <button
          className="btn"
          onClick={() => navigate(`/product/${Product.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
