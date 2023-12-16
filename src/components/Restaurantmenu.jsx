import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import { useState } from "react";

const Restaurantmenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowIndex] = useState(0)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  // console.log(resInfo);

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  const handleAccordionToggle = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-center">
      <h1 className=" font-bold text-2xl my-6 ">{name}</h1>
      <p className=" font-bold text-lg ">
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      <div>
        {categories.map((category,index) => (
          <RestaurantsCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
            showItem={index === showIndex }
            setShowIndex={()=>{handleAccordionToggle(index)}}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurantmenu;
