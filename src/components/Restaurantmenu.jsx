// import React, { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// const Restaurantmenu = () => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchMenuData();
//   }, []); // Added an empty dependency array to ensure useEffect runs only once

//   const fetchMenuData = async () => {
//     const data = await fetch(
//       "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.534466&lng=73.874134&restaurantId=425&submitAction=Enter"
//     );
//     const json = await data.json();
//     console.log(json);
//     setResInfo(json.data);
//   };

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[0]?.card?.card?.info;
//   return resInfo === null ? (
//     <Shimmer />
//   ) : (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>
//         {cuisines.join(", ")} -{costForTwoMessage}
//       </p>
//       <ul>
//         <li>Bryani</li>
//         <li>Burger</li>
//         <li>PannerRice</li>
//       </ul>
//     </div>
//   );
// };

// export default Restaurantmenu;


import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Restaurantmenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []); // Added an empty dependency array to ensure useEffect runs only once

  const fetchMenuData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.534466&lng=73.874134&restaurantId=425&submitAction=Enter"
      );
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  // Destructuring assignment with default values
  const {
    name,
    cuisines = [],
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.length > 0 ? cuisines.join(", ") : "No cuisines available"} -{" "}
        {costForTwoMessage}
      </p>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Panner Rice</li>
      </ul>
    </div>
  );
};

export default Restaurantmenu;

