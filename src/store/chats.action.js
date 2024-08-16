import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://designhub-akrq.onrender.com";

export const addComment = createAsyncThunk(
  "chats/addComment",
  async ({ designId, content }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"))?.token;
      const response = await axios.post(
        `${API}/designs/${designId}/reviews`,
        { content },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error, "addComment action");

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
