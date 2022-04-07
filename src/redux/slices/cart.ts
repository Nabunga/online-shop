import { createSlice } from "@reduxjs/toolkit";
import { TProducts } from "./products";

export interface cartState {
  cart: Array<{}>;
  totalPrice: number | null;
}

const initialState: cartState = {
  cart: [],
  totalPrice: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const findProduct: TProducts = state.cart.find((product: TProducts) => product.id === action.payload.id);
      const findProductIndex = state.cart.findIndex((product: TProducts) => product.id === action.payload.id);
    
      if (!findProduct) {
        // first match product in cart
        state.cart.push({
          ...action.payload,
          quantity: 1
        })
      } else {
        // if product exist, increase qty
        state.cart[findProductIndex] = {
          ...action.payload,
          quantity: findProduct.quantity + 1,
        }
      }  
    },
    descreaseProductQty: (state, action) => {
      const findProduct: TProducts = state.cart.find((product: TProducts) => product.id === action.payload.id);
      const findProductIndex = state.cart.findIndex((product: TProducts) => product.id === action.payload.id);
      if (findProduct.quantity === 1) {
        state.cart.splice(findProductIndex, 1);
      } else {
        state.cart[findProductIndex] = {
          ...state.cart[findProductIndex],
          quantity: findProduct.quantity - 1
        }
      }
    },
    increaseProductQty: (state, action) => {
      const findProduct: TProducts = state.cart.find((product: TProducts) => product.id === action.payload.id);
      const findProductIndex = state.cart.findIndex((product: TProducts) => product.id === action.payload.id);
      state.cart[findProductIndex] = {
        ...state.cart[findProductIndex],
        quantity: findProduct.quantity + 1
      }
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload
    }
  }
})

export const { addProductToCart, descreaseProductQty, increaseProductQty, setTotalPrice } = cartSlice.actions;
export default cartSlice.reducer;