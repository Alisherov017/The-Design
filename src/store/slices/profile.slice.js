import { createSlice } from "@reduxjs/toolkit";
import { fetchUserProfiles } from "../actions";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    profiles: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfiles.pending, (state) => {
        state.status = "loading";                  
      })
      .addCase(fetchUserProfiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profiles = action.payload;
      })
      .addCase(fetchUserProfiles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
