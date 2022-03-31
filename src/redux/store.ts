import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";
import cart from "./slices/cart";

export const store = configureStore({
  reducer: {
    products,
    cart,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch