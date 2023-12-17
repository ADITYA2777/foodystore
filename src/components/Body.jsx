// import React, { useEffect, useState } from "react";
// import Restaurant from "./Restaurant";
// // import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import ShimmerUi from "./ShimmerUi";

// const Body = () => {
//   const [listRestaurant, setListRestaurant] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [filterDataRestaurants, setFilterDataRestaurants] = useState([]);

//   const handleTopRated = () => {
//     const filteredData = listRestaurant.filter(
//       (res) => res.info.avgRating > 4.3
//     );
//     setFilterDataRestaurants(filteredData);
//   };

//   const handleSearch = () => {
//     const filteredData = listRestaurant.filter((res) =>
//       res.info.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilterDataRestaurants(filteredData);
//   };

//   const handleReset = () => {
//     setFilterDataRestaurants(listRestaurant);
//   };


//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const data = await fetch(
//         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       );
//       const json = await data.json();
//       const restaurants =
//         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
//           ?.restaurants || [];
//       setListRestaurant(restaurants);
//       setFilterDataRestaurants(restaurants);
//       // console.log(restaurants);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const onlineStatus = useOnlineStatus();
//   if (!onlineStatus) {
//     return (
//       <h1>
//         Oops! It seems like you're offline. Please check your internet
//         connection.
//       </h1>
//     );
//   }

//   return listRestaurant.length === 0 ? (
//     <ShimmerUi />
//   ) : (
   

//       <div className="body mx-4 md:mx-10 lg:mx-20 xl:mx-32 ">
//         <div className="filter flex flex-row items-center md:space-x-4 ml- md:ml-0 sm-ml-0">
//           <div className="search m-2  p-4 w-full md:w-64 flex">
//             <input
//               type="text"
//               name="Search"
//               className="border border-orange-500 shadow-md py-3 rounded-md px-4 w-32  md:w-full sm:w-full "
//               value={searchText}
//               placeholder="Search your food "
//               onChange={(e) => setSearchText(e.target.value)}
//             />
//             <button
//               onClick={handleSearch}
//               className="text-white px-4 py-3 items-center rounded-md bg-gradient-to-r from-cyan-800 to-orange-600 cursor-pointer ml-2 "
//             >
//               Search
//             </button>
//           </div>
//           <button
//             className="filter-btn bg-gradient-to-r from-orange-800 to-orange-600 cursor-pointer text-white p-2 mr-3 rounded-md w-full md:w-52   items-center  md:ml-2"
//             onClick={handleTopRated}
//           >
//             Top Restaurants
//           </button>
//           <button
//             className=" bg-gradient-to-r from-orange-800 to-orange-600 text-white p-2 w-full md:w-52 rounded-md py-4 md:p-2  px-3 items-center  md:ml-2  cursor-pointer "
//             onClick={handleReset}
//           >
//             Reset
//           </button>
//         </div>
        
//         <div
//           key="id"
//           className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  "
//         >
//           {filterDataRestaurants.map((resLists) => (
//             <Link
//               key={resLists.info.id}
//               to={"/restaurants/" + resLists.info.id}
//             >
//               <Restaurant resData={resLists} />
//             </Link>
//           ))}
//         </div>
//       </div>
//   );
// };

// export default Body;


import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterDataRestaurants, setFilterDataRestaurants] = useState([]);
  const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);

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
    setShowNoResultsMessage(filteredData.length === 0);
  };

  const handleReset = () => {
    setFilterDataRestaurants(listRestaurant);
    setShowNoResultsMessage(false);
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
      // console.log(restaurants);
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
    <ShimmerUi />
  ) : (
    <div className="body mx-4 md:mx-10 lg:mx-20 xl:mx-32">
      <div className="filter flex flex-row items-center md:space-x-4 ml-2 md:ml-0 sm-ml-0">
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
          className="filter-btn bg-gradient-to-r from-orange-800 to-orange-600 cursor-pointer text-white p-2 mr-3 rounded-md w-full md:w-52 items-center md:ml-2"
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

      {showNoResultsMessage && (
        <div className=" flex flex-col m-4 items-center ">
          <p className=" text-xl font-bold  text-red-500 m-2 ">
            No restaurants found. Please try a different search term.
          </p>
          <img className="my-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3m6Hk3oMwJy_Xxtd7zfMccAtXIhASHVPG2g&usqp=CAU"
            alt="non restaurants"
          />
        </div>
      )}

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

export default Body;




