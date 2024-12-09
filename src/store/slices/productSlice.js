import { createSlice } from "@reduxjs/toolkit";
// import BandStarbucks from "../../assets/brand-starbucks.jpg";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { productsData } from "../data/productsData";

const initialState = {
  products: productsData,
  searchTerm: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setProductSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
  setProducts,
  setProductSearchTerm,
} = productSlice.actions;
export default productSlice.reducer;
