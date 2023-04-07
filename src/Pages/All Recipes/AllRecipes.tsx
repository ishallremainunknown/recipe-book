import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import s from "./AllRecipes.module.css";

const AllRecipes = () => {
  const stateRecipeList = useSelector((state: StoreType) => state.recipe.recipes);
  return (
    <div className={s.container}>
      {stateRecipeList.map((recipe) => {
        return (
          <CategoryCard
            recipe={{
              title: recipe.title,
              image: recipe.image,
              prepTime: recipe.prepTime,
              ingredients: recipe.ingredients,
              description: recipe.description,
              id: recipe.id,
              categoryId: recipe.categoryId,
            }}
          />
        );
      })}
    </div>
  );
};
export default AllRecipes;
