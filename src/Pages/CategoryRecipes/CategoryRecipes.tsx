import { Recipe } from "../../Core/Types/Recipe.type";
import { recipeList } from "../../Core/Constants/recipeContent";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import s from "./CategoryRecipes.module.css";

const CategoryRecipes = () => {
  return (
    <div className={s.container}>
      {recipeList.map((recipe) => {
        return (
          <CategoryCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            description={recipe.description}
            id={recipe.id}
            categoryId={recipe.categoryId}
          />
        );
      })}
    </div>
  );
};
export default CategoryRecipes;
