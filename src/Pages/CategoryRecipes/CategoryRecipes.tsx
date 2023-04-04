import { Recipe } from "../../Core/Types/Recipe.type";
import { recipeList } from "../../Core/Constants/recipeContent";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import s from "./CategoryRecipes.module.css";
import { useState } from "react";
import { StoreType } from "../../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryRecipes = () => {
  const { id } = useParams();
  const stateRecipeList = useSelector((state: StoreType) => state.recipe.recipes);
  console.log(id);
  console.log(stateRecipeList);
  return (
    <div className={s.container}>
      {stateRecipeList.map((recipe) => {
        if (recipe.categoryId === id) {
          return <CategoryCard key={recipe.id} recipe={recipe} />;
        }
      })}
    </div>
  );
};
export default CategoryRecipes;
