import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartArr: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartArr = [...state.cartArr, action.payload];
    },
    rmvCart: (state, action) => {
      state.cartArr = action.payload;
    },
  },
});

export const { addToCart, rmvCart } = cartSlice.actions;

export default cartSlice.reducer;
