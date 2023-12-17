import React from "react";
import { CARD_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlices";

const MenuItemLists = ({ items }) => {
const dispatch = useDispatch()
  const handlerAdditems = (item) => {
    dispatch(addItems(item))
  }

//   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="m-2 p-2 border-gray-400 border-b-4 text-left flex flex-col  md:flex-row justify-between  items-center"
        >
          <div className="  mb-2 py-6 w-full md:w-9/12 md:flex md:flex-col ">
            <span className="font-bold text-xl py-2 px-2 ">
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
          <div className="w-full md:w-3/12 p-4">
            <div className=" flex flex-col justify-center md:flex-row md:items-start md:justify-center">
              <button
                onClick={() => handlerAdditems(item)}
                className="p-2 mb-2 md:mb-0 bg-green-500 shadow-md rounded-md text-white text-center hover:bg-black hover:scale-105 "
              >
                Add +
              </button>
            </div>
            <img
              src={CARD_URL + item.card.info.imageId}
              alt="card-img"
              className="mx-auto md:mx-0"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItemLists;
