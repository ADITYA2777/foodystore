
import React, { useState } from 'react'
import MenuItemLists from './MenuItemLists';

const RestaurantsCategory = ({data}) => {
    // console.log(data);
    const [showItem,setShowItem ]= useState(false)
    const handlerClick = () => {
        console.log("clicked");
        setShowItem(!showItem);
    }
    return (
      <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-md p-4 rounded-md items-center">
          <div className="flex justify-between cursor-pointer "onClick={handlerClick}>
            <span className="font-bold text-lg">
              {data.title} ({data.itemCards.length})
            </span>
            <span>🔽</span>
          </div>
         {showItem && <MenuItemLists items={data.itemCards} />}
        </div>
      </div>
    );
}

export default RestaurantsCategory