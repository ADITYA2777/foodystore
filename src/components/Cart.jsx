import React from "react";
import MenuItemLists from "./MenuItemLists";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItem, removeItem } from "../redux/cartSlices";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handlerClearCart = () => {
    dispatch(clearCartItem());
  };

  const handlerRemoveCart = () => {
    if (cartItems.length > 0) {
      // Assuming you're removing the last item in this example
      const removedItem = cartItems[cartItems.length - 1];
      dispatch(removeItem());

      // Show toast notification
      toast.info(`Removed ${removedItem.card.info.name} from your cart.`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "orangered",
          background: "black",
        },
      });
    }
  };

  return (
    <div className="text-center m-4 p-4 bg-gradient-to-b from-orange-500 to-orange-700 font-medium">
      <h1 className="text-3xl font-bold "> SHOPPING CART</h1>
      <div className="w-6/12 mx-auto">
        <div className="flex justify-between">
          <button
            onClick={handlerClearCart}
            className="p-2 m-2 bg-black text-white rounded-md  hover:bg-red-500 hover:scale-105"
          >
            ClearCart
          </button>
          <button
            onClick={handlerRemoveCart}
            className="p-2 m-2 bg-black text-white rounded-md  hover:bg-red-500 hover:scale-105 "
          >
            RemoveCart
          </button>
        </div>
        {cartItems.length === 0 && (
          <div className=" flex flex-col items-center m-10 justify-center">
            <h1 className=" text-sm font-bold text-center md:text-3xl md:font-medium text-white ">
              Opps!! your cart is empty just go order Bucket It 🛒
            </h1>
            <Link to="/">
              <img
                className=" m-1 md:m-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WDN0-RfdoAJbK9ZaAe34TfB4-yHnSuU6bQ&usqp=CAU"
                alt="empty-img"
              />
            </Link>
          </div>
        )}
        <MenuItemLists items={cartItems} />
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
