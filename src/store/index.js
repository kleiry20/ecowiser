import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./slices/brandSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    brand: brandReducer,
    search: searchReducer,
  },
});
