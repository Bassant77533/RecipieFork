import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetRecipies = createAsyncThunk(
  "recipies/actGetRecipies",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("https://fd4b7c78-2e0b-4c7a-8cb0-f1b4aea716c4-00-3sb37sgcas9gj.spock.replit.dev/");
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
