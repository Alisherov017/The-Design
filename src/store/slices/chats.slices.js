import { createSlice } from "@reduxjs/toolkit";
import { fetchChats, sendMessage } from "../actions";

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    chatsList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
        state.loading = false;
        state.chatsList = action.payload;
      })
      .addCase(fetchChats.rejected, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        const { chat, ...newMessage } = action.payload;
        const chatIndex = state.chatsList.findIndex((item) => item.id === chat);
        if (chatIndex !== -1) {
          state.chatsList[chatIndex].messages.push(newMessage);
        }
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chatsSlice.reducer;
