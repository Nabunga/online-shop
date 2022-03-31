import { createSlice } from "@reduxjs/toolkit";

export interface cartState {
  cart: Array<{}>;
}

const initialState: cartState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.cart.push(action.payload)
    }
  }
})

export const { addProductToCart } = cartSlice.actions;
export default cartSlice.reducer;