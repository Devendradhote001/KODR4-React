import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

let counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count === 0) return;
      state.count--;
    },
    incrementByValue: (state, action) => {
      console.log(action);
      state.count += Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
