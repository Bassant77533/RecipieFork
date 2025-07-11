import { configureStore } from "@reduxjs/toolkit";
import recipes from './recipies/recipeSlice'

export const store = configureStore({
    reducer:{recipes}, 
}); 
