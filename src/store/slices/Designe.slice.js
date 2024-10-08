import { createSlice } from "@reduxjs/toolkit";
import { addDesigneWork, fetchDesigneWorks } from "../actions";

const designeSlice = createSlice({
  name: "designe",
  initialState: {
    designeWorks: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addDesigneWork.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addDesigneWork.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.designeWorks.push(action.payload);
      })
      .addCase(addDesigneWork.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchDesigneWorks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDesigneWorks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.designeWorks = action.payload;
      })
      .addCase(fetchDesigneWorks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default designeSlice.reducer;
