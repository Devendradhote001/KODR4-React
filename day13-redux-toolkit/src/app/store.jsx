import { configureStore } from "@reduxjs/toolkit";
import chacha from "../reducers/counterReducer";

export const store = configureStore({
  reducer: {
    counter: chacha,
  },
});
