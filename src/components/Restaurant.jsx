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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="card-img"
        src={CARD_URL + cloudinaryImageId}
        alt="logo-card"
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(" ,")}</h4>
      <h4>{avgRatingString}stars</h4>
      <h4>{costForTwo}</h4>
      <h5>{locality}</h5>
    </div>
  );
}

export default Restaurant