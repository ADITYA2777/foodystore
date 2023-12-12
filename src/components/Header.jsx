import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [letBtn, setLetBtn] = useState("Login")
  
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="LogoUrl" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about" AboutUs></Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
          <li><Link to="/cart">Cart</Link></li>
          <button
            onClick={() => {
              letBtn === "Login" ? setLetBtn("Logout") : setLetBtn("Login");
            }}
            className="login-Btn"
          >
            {letBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
