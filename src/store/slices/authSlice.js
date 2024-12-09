import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null, // To store user data after signup or login
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Save user data
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    signup: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload; // Save new user data
    },
  },
});

export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;
