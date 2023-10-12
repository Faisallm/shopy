import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // this is the default menu active button
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      {/* navigation logo */}
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>Shopper</p>
      </div>

      {/* nav-menu */}
      <ul className="nav-menu">
        <l onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to="/">Shop</Link> {menu == "shop" ? <hr /> : ""}
        </l>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link> {menu == "mens" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link> {menu == "womens" ? <hr /> : ""}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration:'none' }} to="/kids">Kids</Link> {menu == "kids" ? <hr /> : ""}
        </li>
      </ul>

      {/* authentication */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="Cart icon" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
