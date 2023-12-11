import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [letBtn, setLetBtn] = useState("Login")
  
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="LogoUrl" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
          <li>Cart</li>

          <button onClick={() => {
           letBtn === "Login" ? setLetBtn("Logout") : setLetBtn("Login");
          }} className="login-Btn">
            {letBtn}
            </button>
        </ul>
      </div>
     
    </div>
  );
};

export default Header;
