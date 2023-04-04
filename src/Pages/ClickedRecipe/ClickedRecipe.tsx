import { Recipe } from "../../Core/Types/Recipe.type";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { recipeList } from "../../Core/Constants/recipeContent";
import s from "./ClickedRecipe.module.css";
import { useSelector } from "react-redux";
import { StoreType } from "../../redux/store";

type ComponentPrps = {
  recipe: Recipe;
};

const ClickedRecipe = () => {
  const stateReciperyList = useSelector((state: StoreType) => state.recipe.recipes);
  const { id } = useParams();
  const returnedRecipe = stateReciperyList.find((recipe) => {
    return recipe.id === id;
  });
  console.log(returnedRecipe);
  const ingredientsArray = returnedRecipe?.ingredients.split(",");
  // setClickedRecipeId(id);
  return (
    <div className={s.main}>
      <div className={s.details}>
        <div className={s.title}>{returnedRecipe?.title}</div>

        <div>
          Ingredients:
          <ul>
            {ingredientsArray?.map((ingred) => {
              return <li>{ingred}</li>;
            })}
          </ul>
        </div>
        <div className={s.prep}> Prep time: {returnedRecipe?.prepTime}</div>
        <div>Preparation: {returnedRecipe?.description}</div>
      </div>
      <div>
        <div>
          <img className={s.image} src={returnedRecipe?.image} alt={returnedRecipe?.title} />
        </div>
      </div>
    </div>
  );
};
export default ClickedRecipe;
