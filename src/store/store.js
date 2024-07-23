import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/Auth.slice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
  },
});

export default store;
