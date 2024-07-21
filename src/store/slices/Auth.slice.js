import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("authToken") || null,
    isLoggedIn: false,
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
    // builder.addCase(re)
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

//   extraReducers: (builder) => {
//     builder
//       .addCase(register.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.user = action.payload;
//         state.isLoggedIn = true;
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       .addCase(login.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.token = action.payload.access;
//         state.isLoggedIn = true;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   }
// });

// export const { logout } = authSlice.actions;

// export default authSlice.reducer;
