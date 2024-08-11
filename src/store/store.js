import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/Auth.slice";
import DesigneSlice from "./slices/Designe.slice";
import profileSlice from "./slices/profile.slice";
import chatsSlices from "./slices/chats.slices";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    designe: DesigneSlice,
    users: profileSlice,
    chats: chatsSlices,
  },
});

export default store;
