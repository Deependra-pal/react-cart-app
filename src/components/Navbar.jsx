import Home from "../pages/Home";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "../styles/Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();

  const homeFunction = () => {
    navigate("/");
  };

  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="logo" onClick={homeFunction}>
        MyTask
      </div>

      <ul className="nav-links">
        <Link className="list" to="/">
          Home
        </Link>
        <Link className="list" to="/about">
          About
        </Link>
        <Link className="list" to="/services">
          Services
        </Link>
        <Link className="list" to="/products">
          Products
        </Link>
        <Link to="/cart" className="cart-link list">
          <i className="ri-shopping-cart-2-line"></i>{" "}
          <span className="cart-count">{cart.length}</span>{" "}
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
