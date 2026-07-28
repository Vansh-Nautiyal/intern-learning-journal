import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    double: (state) =>{
        state.value = state.value*2
    },
    half : (state)=>{
        state.value /= 2
    },
    clear : (state)=>{
      state.value = 0
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, double, half, clear } = counterSlice.actions;

export default counterSlice.reducer;