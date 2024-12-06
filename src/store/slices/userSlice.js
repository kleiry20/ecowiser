import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action
export const loginUser = createAsyncThunk("user/login", async (credentials) => {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  return response.json();
});

const userSlice = createSlice({
  name: "user",
  initialState: { isLoggedIn: false, userInfo: null, loading: false },
  reducers: {
    // reducers = Regular reducers for sync actions
    logout: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    // extraReducers = Handle async actions
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.userInfo = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
