import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [letBtn, setLetBtn] = useState("Login")
  const onlineStatus = useOnlineStatus()

  
  return (
    <div className="header">
      <div className=" flex justify-between  bg-gradient-to-tr from-pink-800 to-orange-500 text-white w-full h-full  m-4 shadow-md rounded-md">
        <div className="logo-container w-24">
          <Link to="/">
            <img className="logo" src={LOGO_URL} alt="LogoUrl" />
          </Link>
        </div>
        <div className="nav-items flex justify-center items-center  ">
          <ul className="flex p-4 text-sm px-10 space-x-1 md:text-base md:space-x-10 sm:text-base sm:space-x-4  ">
            <li>onlineStatus :{onlineStatus ? "🍏" : "🍎"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
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
    </div>
  );
};

export default Header;



