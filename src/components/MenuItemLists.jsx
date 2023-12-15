import React from "react";
import { CARD_URL } from "../utils/constant";

const MenuItemLists = ({ items }) => {
//   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-400 border-b-4 text-left flex justify-between "
        >
          <div className=" flex flex-col mb-2 py-6 w-9/12 ">
            <span className="font-bold text-xl py-2 ">
              {item.card.info.name}
            </span>
            <span>
              ₹ {"Rs"}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs mt-3">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute ">
              <button className="p-2 mx-20 mt-2 bg-green-500 shadow-md rounded-md text-white text-center ">
                Add +
              </button>
            </div>
            <img src={CARD_URL + item.card.info.imageId} alt="card-img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemLists;
