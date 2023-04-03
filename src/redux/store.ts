import { configureStore } from "@reduxjs/toolkit";
import addRecipeReducer from "./recipe-slice";
import addCategoryReducer from "./category-slice";
const store = configureStore({
  reducer: {
    recipe: addRecipeReducer,
    category: addCategoryReducer,
  },
});
export default store;

export type StoreType = ReturnType<typeof store.getState>;
