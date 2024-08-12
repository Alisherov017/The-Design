import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/Auth.slice";
import DesigneSlice from "./slices/Designe.slice";
import profileSlice from "./slices/profile.slice";
import chatsSlices from "./slices/chats.slices";
import favoriteSlice from "./slices/favorite.slice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    designe: DesigneSlice,
    users: profileSlice,
    chats: chatsSlices,
    favorites: favoriteSlice,
  },
});

export default store;
