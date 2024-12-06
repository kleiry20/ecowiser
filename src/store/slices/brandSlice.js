import { createSlice } from "@reduxjs/toolkit";
import BandStarbucks from "../../assets/brand-starbucks.jpg";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { brandsData } from "../data/brandsData";

const initialState = {
  brands: brandsData,
  searchTerm: "",
};

// sending image to backend
export const uploadImage = createAsyncThunk(
  "brand/uploadImage",
  async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch("http://127.0.0.1:8000/upload/", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data.path;
  }
);

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addBrand: (state, action) => {
      state.brands.push(action.payload);
    },
    updateBrand: (state, action) => {
      const index = state.brands.findIndex(
        (brand) => brand.id === action.payload.id
      );
      if (index !== -1) {
        state.brands[index] = action.payload;
      }
    },
    deleteBrand: (state, action) => {
      state.brands = state.brands.filter(
        (brand) => brand.id !== action.payload
      );
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    setBrandSearchTerm: (state, action) => {
      state.searchTerm = action.payload; // Update local search term
    },
  },
});

export const {
  addBrand,
  updateBrand,
  deleteBrand,
  setBrands,
  setBrandSearchTerm,
} = brandSlice.actions;
export default brandSlice.reducer;
