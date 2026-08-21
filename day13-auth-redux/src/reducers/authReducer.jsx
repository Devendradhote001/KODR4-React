import { createSlice } from "@reduxjs/toolkit";

let a = (state, action) => {
  state.user = action.payload;
  state.isAuthenticated = true;
};

let authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    addUser: a,
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
