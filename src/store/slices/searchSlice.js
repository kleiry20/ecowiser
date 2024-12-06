import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    filteredResults: [],
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilteredResults: (state, action) => {
      state.filteredResults = action.payload;
    },
  },
});

export const { setSearchTerm, setFilteredResults } = searchSlice.actions;
export default searchSlice.reducer;
