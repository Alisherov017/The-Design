import { createAsyncThunk } from "@reduxjs/toolkit";
import { $axios } from "./axios";
import axios from "axios";

const API = "https://designhub-akrq.onrender.com";

// Async thunk для получения комментариев
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (designId, thunkAPI) => {
    try {
      const response = await axios.get(`${API}/designs/${designId}/reviews/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk для добавления комментария
export const addComment = createAsyncThunk(
  "comments/addComment",
  async ({ designId, content }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"))?.token;
      const response = await axios.post(
        `${API}/designs/${designId}/reviews/`,
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
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk для удаления комментария (если нужно)
export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async ({ designId, commentId }, thunkAPI) => {
    try {
      const token = JSON.parse(localStorage.getItem("authToken"))?.token;
      await axios.delete(`${API}/designs/${designId}/reviews/${commentId}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return commentId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
