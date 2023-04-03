import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Recipe } from "../Core/Types/Recipe.type";
interface RecipeState {
  recipes: Recipe[];
}
const initialState: RecipeState = {
  recipes: [],
};

export const RecipeSlice = createSlice({
  name: "addRecipe",
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      state.recipes.push(action.payload);
    },
  },
});

export const { addRecipe } = RecipeSlice.actions;
export default RecipeSlice.reducer;
