import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Recipe } from "../Core/Types/Recipe.type";
interface RecipeState {
  recipes: Recipe[];
  filteredRecipes: Recipe[];
}
const initialState: RecipeState = {
  recipes: [],
  filteredRecipes: [],
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
    findRecipe: (state, action: PayloadAction<{ searchTerm: string }>) => {
      const searchTerm = action.payload.searchTerm.toLowerCase();
      const recipeList = state.recipes;
      const filteredRecipe = recipeList.filter((recipe) => {
        if (recipe.title.toLowerCase().includes(searchTerm) && recipe.title.length > 0) {
          return recipe;
        }
      });
      state.filteredRecipes = filteredRecipe;
    },
  },
});

export const { addRecipe, saveEditedRecipe, deleteRecipe, findRecipe } = RecipeSlice.actions;
export default RecipeSlice.reducer;
