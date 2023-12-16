import React from 'react'
import { CARD_URL } from '../utils/constant';

const Restaurant = (props) => {

  const { resData } = props
  const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
    locality,
    costForTwo,
  } = resData?.info;
  return (
    <div className=" m-10 p-4 w-[350px] md:w-[250px] sm:w-[270px] rounded-lg mx-auto md:mx-0  " style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="card-img rounded-lg cursor-pointer "
        src={CARD_URL + cloudinaryImageId}
        alt="logo-card"
      />
      <h3 className='font-bold text-lg py-2'>{name}</h3>
      <h4 className='font-medium text- text-gray-500 '>{cuisines?.join(" ,")}</h4>
      <h4>{avgRatingString} ⭐stars</h4>
      <h4 className="bg-green-500 text-white text-center px-4 py-2 mt-2 rounded">{costForTwo}</h4>
      <h5 className="text-gray-500 text-sm mt-2">{locality}</h5>
    </div>
  );
}

export default Restaurant



