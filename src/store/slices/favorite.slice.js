import { createSlice } from "@reduxjs/toolkit";
import { addFavorite, fetchFavorites, removeFavorite } from "../actions";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.favorites = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (itemId) => itemId !== action.payload
        );
      });
  },
});

export default favoritesSlice.reducer;