import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, updateUserProfile } from "../actions";
import { json } from "react-router-dom";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("authToken"))?.user || null,
    token: JSON.parse(localStorage.getItem("authToken"))?.token || null,
    isLoggedIn: !!localStorage.getItem("authToken"),
    status: "idle",
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.isLoggedIn = true;
        localStorage.setItem(
          "authToken",
          JSON.stringify({
            token: action.payload.access,
            user: action.payload.user,
          })
        );
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.access;
        state.isLoggedIn = true;
        localStorage.setItem(
          "authToken",
          JSON.stringify({
            token: action.payload.access,
            user: action.payload.user,
          })
        );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        const token = state.token;
        localStorage.setItem(
          "authToken",
          JSON.stringify({
            token: token,
            user: action.payload,
          })
        );
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
