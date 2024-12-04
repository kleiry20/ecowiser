// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"; // Example slice
import brandReducer from "./slices/brandSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your slices here
    brand: brandReducer,
  },
});
