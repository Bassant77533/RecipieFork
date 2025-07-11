import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetRecipies = createAsyncThunk(
  "recipies/actGetRecipies",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("http://localhost:5005/recipes");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data?.message || "Server error");
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);

export default actGetRecipies;
