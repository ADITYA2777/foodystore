import { createSlice } from "@reduxjs/toolkit";


const cartSlices = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, actions) => {
            state.items.push(actions.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCartItem: (state) => {
            state.items.length = 0;
        },
    }
});

export const { addItems, removeItem, clearCartItem } = cartSlices.actions;
export default cartSlices.reducer;