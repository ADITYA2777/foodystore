import React from "react";
import { CARD_URL } from "../utils/constant";

const Restaurant = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
    locality,
    costForTwo,
  } = resData?.info;
  return (
    <div className=" m-4 md:m-2 p-4 w-full md:w-[350px] lg:w-[250px] xl:w-[270px] rounded-lg mx-auto md:mx-0 bg-gray-100 hover:shadow-md transition duration-300 ease-in-out ">
      <img
        className="card-img rounded-lg cursor-pointer w-full "
        src={CARD_URL + cloudinaryImageId}
        alt="logo-card"
      />
      <h2 className="font-bold text-lg py-2">{name}</h2>
      <h3 className="font-medium text-gray-500 text-sm ">
        {cuisines?.join(" ,")}
      </h3>

      <div className="flex items-center justify-between mt-2 ">
        <div className="flex items-center ">
          <span className="text-yellow-500 text-lg">{avgRatingString}</span>
          <span className="text-gray-500 text-sm ml-1">⭐stars</span>
        </div>
        <button className="bg-green-500 text-white text-center px-4 py-2 rounded">
          {costForTwo}
        </button>
      </div>
      <div className="flex justify-between items-center mt-3 ">
        <div className="flex  items-cente">
          <h4 className="text-gray-500 text-sm mt-2">{locality}</h4>
        </div>
        <button
          className="bg-blue-500 text-white mt-3 py-1 px-3
           rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default Restaurant;

