import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
  }

export const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        },
        incbyfive : (state) =>{
            state.value += 5;
        },
        decbyfive : (state) =>{
            state.value -= 5;
        },
        incByAmount : (state,actions) =>{
            state.value += actions.payload;
        }
    }
})

export const {increment,decrement,incbyfive,decbyfive,incByAmount} = counterSlice.actions

export default counterSlice.reducer