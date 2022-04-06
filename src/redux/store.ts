import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products";
import cart from "./slices/cart";
import order from "./slices/order";

export const store = configureStore({
  reducer: {
    products,
    cart,
    order
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch