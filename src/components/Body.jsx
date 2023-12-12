// import React, { useEffect, useState } from "react";
// import Restaurant from "./Restaurant";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [listRestaurant, setListRestaurant] = useState([]);
//   const [searchText, SetSearchText] = useState("");
//   const [filterdataRestaurants, SetFilterDataRestaurants] = useState({});

//   const HandlerButton = () => {
//     const filterData = listRestaurant.filter((res) => res.info.avgRating > 4.5);
//     setListRestaurant(filterData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     console.log(json);
//     setListRestaurant(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     SetFilterDataRestaurants(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   return listRestaurant.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter">
//         <div className="search">
//           <input
//             type="text"
//             name="Search"
//             value={searchText}
//             onChange={(e) => {
//               SetSearchText(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               console.log(searchText);
//               const filterDataRestaurants = listRestaurant.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );

//               SetFilterDataRestaurants(filterDataRestaurants);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <button className="filter-btn" onClick={() => HandlerButton()}>
//           Top rated Restaurants
//         </button>
//       </div>
//       <div key="id" className="res-container">
//         {filterdataRestaurants.map((resLists) => (
//           <Restaurant key={resLists.info.id} resData={resLists} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;



import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterDataRestaurants, setFilterDataRestaurants] = useState([]);

  const handleTopRated = () => {
    const filteredData = listRestaurant.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilterDataRestaurants(filteredData);
  };

  const handleSearch = () => {
    const filteredData = listRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterDataRestaurants(filteredData);
  };

  const handleReset = () => {
    setFilterDataRestaurants(listRestaurant);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListRestaurant(restaurants);
      setFilterDataRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleTopRated}>
          Top rated Restaurants
        </button>
        <button className="filter-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div key="id" className="res-container">
        {filterDataRestaurants.map((resLists) => (
          <Restaurant key={resLists.info.id} resData={resLists} />
        ))}
      </div>
    </div>
  );
};

export default Body;

