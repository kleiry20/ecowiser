import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./slices/brandSlice";

export const store = configureStore({
  reducer: {
    brand: brandReducer,
  },
});
