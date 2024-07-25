import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://designhub-akrq.onrender.com";

// export const updateProfile = createAsyncThunk(
//   "profile/updateProfile",
//   async (profileData, thunkAPI) => {
//     try {
//       const response = await axios.put(`${API}/profile/`, profileData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: {
      name: "",
      email: "",
      description: "",
      photo: "",
    },
  },
});

// const profileSlice = createSlice({
//   name: "profile",
//   initialState: {
//     user: {
//       name: "",
//       email: "",
//       description: "",
//       photoUrl: "",
//     },
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     setUser(state, action) {
//       state.user = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(updateProfile.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(updateProfile.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.status = "succeeded";
//       })
//       .addCase(updateProfile.rejected, (state, action) => {
//         state.error = action.payload;
//         state.status = "failed";
//       });
//   },
// });

// export const { setUser } = profileSlice.actions;
// export default profileSlice.reducer;
