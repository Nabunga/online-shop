import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/api";
import { TProducts } from "./products";

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const response = await axiosInstance.get('/products.json')
    return response.data
  }
)
export const fetchProductsByAscend = createAsyncThunk(
  'products/fetchProductsByAscend',
  async () => {
    const response = await axiosInstance.get('/products.json')
    return response.data.sort((a: TProducts, b: TProducts) => a.price - b.price)
  }
)
export const fetchProductsByDescend = createAsyncThunk(
  'products/fetchProductsByDescend',
  async () => {
    const response = await axiosInstance.get('/products.json')
    return response.data.sort((a: TProducts, b: TProducts) => b.price - a.price)
  }
)

export const fetchAllCategories = createAsyncThunk(
  'products/fetchAllCategories',
  async () => {
    const response = await axiosInstance.get('/categories.json')
    return response.data
  }
)