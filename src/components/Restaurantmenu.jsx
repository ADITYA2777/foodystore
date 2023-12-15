import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";

const Restaurantmenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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

  return (
    <div className="text-center">
      <h1 className=" font-bold text-2xl my-6 ">{name}</h1>
      <p className=" font-bold text-lg ">
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      <div>
        {categories.map((category) => (
          <RestaurantsCategory
            key={category?.card?.card.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurantmenu;
