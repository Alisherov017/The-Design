import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/Auth.slice";
import DesigneSlice from "./slices/Designe.slice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    designe: DesigneSlice,
  },
});

export default store;
