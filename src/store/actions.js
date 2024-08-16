import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { formToJSON } from "axios";

const API = "https://designhub-akrq.onrender.com";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/register/`, userData);
      console.log(response, "response registerUser  ");
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
      // localStorage.setItem("authToken", JSON.stringify(response.data));
      console.log(response.data, "response.data login action");

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
        `${API}/user-profile/${userId}/`,
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
      console.error("updateUserProfile error:", error);
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
    const token = JSON.parse(localStorage.getItem("authToken"))?.token;
    if (!token) {
      console.log("Token is missing");
    } else {
      console.log(token, "token is here");
    }
    try {
      const responce = await axios.post(`${API}/designes/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return responce.data;
    } catch (error) {
      console.log(error, "addDesigneWork error");
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchDesigneWorks = createAsyncThunk(
  "designe/fetchDesigneWorks",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API}/designes/`);
      console.log(response.data, "response.data экшн");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserProfiles = createAsyncThunk(
  "users/fetchUserProfiles",
  async () => {
    const res = await axios.get(`${API}/user-profile/`);
    console.log(res.data, "users fetchUserProfiles");
    return res.data;
  }
);

// ! избранные

export const fetchFavorites = createAsyncThunk(
  "favorites/fetchFavorites",
  async () => {
    const response = await axios.get(`${API}/favorites/`);
    return response.data.designs; // Предположим, что сервер возвращает { designs: [...] }
  }
);

export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async (designId, thunkAPI) => {
    try {
      await axios.post(
        `${API}/favorites/add_design/`,
        { design_id: designId },
        getAuthHeaders()
      );
      return designId;
    } catch (error) {
      console.log(error, "addFavorite action erroor");
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async (designId) => {
    await axios.post(
      `${API}/favorites/remove_design/`,
      { design_id: designId },
      getAuthHeaders()
    );
    return designId;
  }
);

const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); // Или как вы храните токен
  return {
    headers: {
      Authorization: `Bearer ${token}`, // Формат может зависеть от вашего API
    },
  };
};
