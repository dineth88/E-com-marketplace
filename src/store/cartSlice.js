import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //action creator add, delete, edit....
    add(state, action) {
      //Action include payload data about how to update state
      state.push(action.payload)
    },
    remove(state, action){
        return state.filter(item=>item.id!==action.payload)
    }
  }
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;