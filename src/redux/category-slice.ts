import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Category } from "../Core/Types/Category.type";

interface CategoryState {
  categories: Category[];
}
const initialState: CategoryState = {
  categories: [],
};
export const CategorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories.push(action.payload);
    },
  },
});

export const { addCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
