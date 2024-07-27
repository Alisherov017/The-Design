import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { formToJSON } from "axios";

const API = "https://designhub-akrq.onrender.com";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/register/`, userData);
      console.log(response, "response");
      return response.data;
    } catch (error) {
      console.log("register error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/login/`, userData);
      return response.data;
    } catch (error) {
      console.log("Login error:", error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (formData, thunkAPI) => {
    const token = JSON.parse(localStorage.getItem("authToken"))?.token;
    const userId = JSON.parse(localStorage.getItem("authToken"))?.user.id;
    console.log(userId, "userId updateUserProfile");
    try {
      const response = await axios.put(
        `${API}/user-profile/:${userId}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data,
        "updateUserProfile error"
      );
    }
  }
);

export const addDesigneWork = createAsyncThunk(
  "designe/addDesigneWork",
  async (formData, thunkAPI) => {
    try {
      const responce = await axios.post(`${API}/designes/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.responce.data);
    }
  }
);

// export const addDesigneWork = createAsyncThunk(
//   "designe/addDesigneWork",
//   async (formData, thunkAPI) => {
//     try {
//       const response = await axios.post("/designes/designes_create", formData, {
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
