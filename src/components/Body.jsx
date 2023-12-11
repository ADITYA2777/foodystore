import React, { useEffect, useState } from 'react'
import Restaurant from './Restaurant'
import Shimmer from './Shimmer'

const Body = () => {
  const [listRestaurant, setListRestaurant] = useState([])
  const [searchText, SetSearchText] = useState("")
  const [filterdataRestaurants, SetFilterDataRestaurants] = useState({});
  const HandlerButton = () => {
    const filterData = listRestaurant.filter((res) => res.info.avgRating > 4.3);
    setListRestaurant(filterData);
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async() => {
     const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json()
    console.log(json);
    setListRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    );
    SetFilterDataRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    );
  }

  return listRestaurant.length === 0 ? (<Shimmer/>) : (
    <div className='body'>
      <div className="filter">
        <div className='search'>
          <input type="text" name="Search" value={searchText} onChange={(e)=>{SetSearchText(e.target.value)}}  />
          <button onClick={() => {
            console.log(searchText);
       const filterDataRestaurants = listRestaurant.filter((res) =>
         res.info.name.toLowerCase().includes(searchText.toLowerCase())
       );
            
            SetFilterDataRestaurants(filterDataRestaurants)

            }}>Search</button>
        </div>
         <button className='filter-btn'onClick={()=>HandlerButton()}>
         Top rated Restaurants
        </button>
      </div>
      <div key="id" className="res-container">
        {filterdataRestaurants.map((resLists) => (
          <Restaurant key={resLists.info.id} resData={resLists} />
        ))}
      </div>
    </div>
  );
}

export default Body

