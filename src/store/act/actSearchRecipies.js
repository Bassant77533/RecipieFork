import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actSearchRecipes = createAsyncThunk(
  "recipies/actSearchRecipes",
  async (query, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`http://localhost:5005/recipes/search?q=${query}`);
      return res.data;
    } catch (error) {
      return rejectWithValue("Search failed");
    }
  }
);

export default actSearchRecipes;
