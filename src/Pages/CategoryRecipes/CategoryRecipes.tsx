import { Recipe } from "../../Core/Types/Recipe.type";
import { recipeList } from "../../Core/Constants/recipeContent";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import s from "./CategoryRecipes.module.css";
import { useState } from "react";

const CategoryRecipes = () => {
  const [categoryRecipes, setCategoryRecipes] = useState();

  return (
    <div className={s.container}>
      {recipeList.map((recipe) => {
        return <CategoryCard key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};
export default CategoryRecipes;
