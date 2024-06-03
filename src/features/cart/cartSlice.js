import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id != action.payload.id
      );
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
