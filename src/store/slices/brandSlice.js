import { createSlice } from "@reduxjs/toolkit";
import BandStarbucks from "../../assets/brand-starbucks.jpg";
import { brandsData } from "../data/brandsData";

const initialState = {
  brands: brandsData,
};

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addBrand: (state, action) => {
      state.brands.push(action.payload); // Add a new brand
    },
    updateBrand: (state, action) => {
      const index = state.brands.findIndex(
        (brand) => brand.id === action.payload.id
      );
      if (index !== -1) {
        state.brands[index] = action.payload; // Update the brand
      }
    },
    deleteBrand: (state, action) => {
      state.brands = state.brands.filter(
        (brand) => brand.id !== action.payload
      ); // Remove brand
    },
  },
});

export const { addBrand, updateBrand, deleteBrand } = brandSlice.actions;
export default brandSlice.reducer;
