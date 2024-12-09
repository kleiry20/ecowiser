import { configureStore } from "@reduxjs/toolkit";
import brandReducer from "./slices/brandSlice";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    brand: brandReducer,
    product: productReducer,
    auth: authReducer,
  },
});
