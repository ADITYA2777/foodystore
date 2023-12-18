// import React, { useState } from "react";
// import { LOGO_URL } from "../utils/constant";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import { FiShoppingCart } from "react-icons/fi";
// import { useSelector } from "react-redux";

// const Header = () => {
//   const [letBtn, setLetBtn] = useState("Login");
//   const onlineStatus = useOnlineStatus();

//   const cartItems = useSelector((store) => store.cart.items);
//   console.log(cartItems);
//   return (
//     <div className="header">
//       <div className=" flex  justify-between  bg-gradient-to-tr from-pink-800 to-orange-500 text-white w-full h-full  m-4 shadow-md rounded-md">
//         <div className="flex items-center p-4">
//           <Link to="/">
//             <img className="logo w-20 md:w-24" src={LOGO_URL} alt="LogoUrl" />
//           </Link>
//         </div>
//         <div className=" flex  items-center p-4 ">
//           <ul className="flex text-sm md:text-base sm:text-sm   ">
//             <li className="hidden md:block">
//               onlineStatus :{onlineStatus ? "🍏" : "🍎"}
//             </li>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/grocery">Grocery</Link>
//             </li>
//             <li className="text-xl">
//               <Link to="/cart" className="flex items-center">
//                 <FiShoppingCart className="mr-1" />({cartItems.length}items)
//               </Link>
//             </li>
//             <button
//               onClick={() => {
//                 letBtn === "Login" ? setLetBtn("Logout") : setLetBtn("Login");
//               }}
//               className="login-Btn ml-2 md:ml-4"
//             >
//               {letBtn}
//             </button>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const [letBtn, setLetBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="flex md:flex-row justify-between bg-gradient-to-tr from-pink-800 to-orange-500 text-white w-full  shadow-md rounded-md">
        <div className="flex items-center p-4">
          <Link to="/">
            <img className="logo w-20 md:w-24" src={LOGO_URL} alt="LogoUrl" />
          </Link>
        </div>
        <div className="flex items-center p-2 m-10">
          <ul className="flex text-sm md:text-xl sm:text-lg gap-10">
            <li className="hidden md:block">
              Online Status: {onlineStatus ? "🍏" : "🍎"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="text-xl">
              <Link to="/cart" className="flex items-center">
                <FiShoppingCart className="mr-1" />
                Cart-({cartItems.length} items)
              </Link>
            </li>
            <button
              onClick={() => {
                setLetBtn((prevBtn) =>
                  prevBtn === "Login" ? "Logout" : "Login"
                );
              }}
              className="login-Btn hidden md:block md:mr-4"
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

