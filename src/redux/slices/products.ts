import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/api";

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await axiosInstance.get('/products')
    return response.data
  }
)

export type TProducts = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}

export interface productsState {
  products: Array<TProducts> | [];
  isFetching: string
}

const initialState: productsState = {
  products: [],
  isFetching: 'idle'
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload
    }),
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isFetching = 'loading'
    })
  }
})

export const {  } = productsSlice.actions;
export default productsSlice.reducer;