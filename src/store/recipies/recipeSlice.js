import { createSlice } from "@reduxjs/toolkit";
import actGetRecipies from "../act/actGetRecipies";
import actSearchRecipes from "../act/actSearchRecipies";
const initialState = {
  recipies: [],
  loading: "idle",
  error: null,
};

const recipeSlice = createSlice({
  name: "recipie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetRecipies.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetRecipies.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.recipies = action.payload;  
      console.log(action.payload);
    });
    builder.addCase(actGetRecipies.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
    builder.addCase(actSearchRecipes.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    })
    builder.addCase(actSearchRecipes.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.recipies = action.payload;
    })
    builder.addCase(actSearchRecipes.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default recipeSlice.reducer;
