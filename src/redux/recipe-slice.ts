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
    saveEditedRecipe: (state, action: PayloadAction<Recipe>) => {
      const editedRecipe = action.payload;
      const searchedId = action.payload.id;
      const currentlyEdited = state.recipes.find((recipe) => recipe.id === searchedId);
      if (currentlyEdited !== undefined) {
        const index = state.recipes.indexOf(currentlyEdited);
        state.recipes.splice(index, 1, editedRecipe);
      }
      console.log(currentlyEdited); //undefined
    },
    deleteRecipe: (state, action: PayloadAction<Recipe>) => {
      const deletetheRecipe = action.payload;
      const index = state.recipes.findIndex((recipe) => {
        recipe.id === deletetheRecipe.id;
      });
      state.recipes.splice(index, 1);
    },
  },
});

export const { addRecipe, saveEditedRecipe, deleteRecipe } = RecipeSlice.actions;
export default RecipeSlice.reducer;
