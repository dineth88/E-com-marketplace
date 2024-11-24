import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import StatusCode from '../utils/StatusCode';

const initialState = {
    data:[],
    status:StatusCode.IDLE
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    //fetchProducts(state, action){
    //    state.data = action.payload;
    //}
  },
  extraReducers: (builder)=>{
    //handling promises--> fulfilled, pending, rejected
    //during fulfilled promise
    builder
    .addCase(getProducts.pending, (state, action)=>{
        state.status = StatusCode.LOADING
    })
    .addCase(getProducts.rejected, (state, action)=>{
        state.status = StatusCode.ERROR
    })
    .addCase(getProducts.fulfilled, (state, action)=>{
        state.data = action.payload;
        state.status = StatusCode.IDLE
    })
  }
});

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

//API call
export const getProducts = createAsyncThunk('products/get', async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const result = await response.json(); // Await the JSON conversion
    return result;
})


/**
 
export function getProducts() {
    return async function getProductsThunk(dispatch, getState) {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json(); // Await the JSON conversion
        dispatch(fetchProducts(result)); // Dispatch the actual data, not the promise
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  }
  
 */