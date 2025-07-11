import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actSearchRecipes = createAsyncThunk(
  "recipies/actSearchRecipes",
  async (query, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get(`https://fd4b7c78-2e0b-4c7a-8cb0-f1b4aea716c4-00-3sb37sgcas9gj.spock.replit.dev/recipes/search?q=${query}`);
      return res.data;
    } catch (error) {
      return rejectWithValue("Search failed");
    }
  }
);

export default actSearchRecipes;
