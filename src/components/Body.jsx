import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Oops! It seems like you're offline. Please check your internet
        connection.
      </h1>
    );
  }

  return listRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-4 md:mx-10 lg:mx-20 xl:mx-32 ">
      <div className="filter flex flex-row items-center md:space-x-4 ml- md:ml-0 sm-ml-0">
        <div className="search m-2  p-4 w-full md:w-64 flex">
          <input
            type="text"
            name="Search"
            className="border border-orange-500 shadow-md py-3 rounded-md px-4 w-32  md:w-full sm:w-full "
            value={searchText}
            placeholder="Search your food "
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="text-white px-4 py-3 items-center rounded-md bg-gradient-to-r from-cyan-800 to-orange-600 cursor-pointer ml-2 "
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-gradient-to-r from-orange-800 to-orange-600 cursor-pointer text-white p-2 mr-3 rounded-md w-full md:w-52   items-center  md:ml-2"
          onClick={handleTopRated}
        >
          Top Restaurants
        </button>
        <button
          className=" bg-gradient-to-r from-orange-800 to-orange-600 text-white p-2 w-full md:w-52 rounded-md py-4 md:p-2  px-3 items-center  md:ml-2  cursor-pointer "
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div
        key="id"
        className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  "
      >
        {filterDataRestaurants.map((resLists) => (
          <Link key={resLists.info.id} to={"/restaurants/" + resLists.info.id}>
            <Restaurant resData={resLists} />
          </Link>
        ))}
      </div>
    </div>
  );
};



//     <div className="body ">
//       <div className="filter flex flex-col md:flex-row items-center md:space-x-4">
//         <div className="search p-4 w-full md:w-64 flex">
//           <input
//             type="text"
//             name="Search"
//             className="border border-orange-500 shadow-md py-3 px-4 w-full rounded-md"
//             value={searchText}
//             placeholder="Search your food"
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button
//             onClick={handleSearch}
//             className="text-white px-4 py-3 ml-2 items-center rounded-md bg-gradient-to-r from-cyan-800 to-orange-600 cursor-pointer"
//           >
//             Search
//           </button>
//         </div>
//         <button
//           className="filter-btn font-medium p-2 w-full md:w-auto bg-gradient-to-r from-cyan-800 to-orange-600 cursor-pointer text-white rounded-md mt-2 md:mt-0 md:ml-2"
//           onClick={handleTopRated}
//         >
//           Top Restaurants
//         </button>
//         <button
//           className="bg-orange-500 p-2 w-full md:w-auto rounded-md cursor-pointer mt-2 md:mt-0 md:ml-2"
//           onClick={handleReset}
//         >
//           Reset
//         </button>
//       </div>
//       <div
//         key="id"
//         className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
//       >
//         {filterDataRestaurants.map((resLists) => (
//           <Link key={resLists.info.id} to={"/restaurants/" + resLists.info.id}>
//             <Restaurant resData={resLists} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Body;



