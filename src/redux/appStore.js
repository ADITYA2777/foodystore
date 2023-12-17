import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlices";

const appStore = configureStore({
reducer: {
    cart:cartReducer,
}
}) 

export default appStore;