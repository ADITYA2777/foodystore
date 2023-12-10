import React, { useState } from 'react'
import Restaurant from './Restaurant'
import { resLists } from '../utils/constant';

const Body = () => {
  const [listRestaurant,setListRestaurant] = useState(resLists)
  const HandlerButton = () => {
    const filterData = listRestaurant.filter((res) => res.info.avgRating > 4.3);
    setListRestaurant(filterData);
  }
  return (
    <div>
      <div className="filter">
        <button className='filter-btn' onClick={()=>HandlerButton()}>
         Top rated Restaurants
        </button>
      </div>
      <div key="id" className="res-container">
        {listRestaurant.map((resLists) => (
          <Restaurant key={resLists.info.id} resData={resLists} />
        ))}
      </div>
    </div>
  );
}

export default Body


// data.cards[2].card.card.gridElements.infoWithStyle.restaurants[0].info;