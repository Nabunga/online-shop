import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts, fetchProductsByAscend, fetchProductsByDescend, fetchAllCategories } from "./productsAsyncActions";

export type TProducts = {
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate: number;
    count: number;
  }
  quantity?: number;
}

export interface productsState {
  products: Array<TProducts> | [];
  categories: Array<string> | [];
  selectedCategory: string;
  isFetching: string;
}

const initialState: productsState = {
  products: [],
  categories: [],
  selectedCategory: "",
  isFetching: 'idle'
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload
    }),
    builder.addCase(fetchProductsByAscend.fulfilled, (state, action) => {
      state.products = action.payload
    }),
    builder.addCase(fetchProductsByDescend.fulfilled, (state, action) => {
      state.products = action.payload
    }),
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isFetching = 'loading'
    }),
    builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  }
})

export const { setSelectedCategory } = productsSlice.actions;
export default productsSlice.reducer;