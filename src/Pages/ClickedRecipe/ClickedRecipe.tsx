import { Recipe } from "../../Core/Types/Recipe.type";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { recipeList } from "../../Core/Constants/recipeContent";
import s from "./ClickedRecipe.module.css";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { deleteRecipe } from "../../redux/recipe-slice";
import { Dispatch } from "react";

type ComponentPrps = {
  recipe: Recipe;
};

const ClickedRecipe = () => {
  const dispatch = useDispatch();
  // const [title, setTitle] = useState("");
  // const [prepTime, setPrepTime] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [description, setDescription] = useState("");
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  // const [currentlyEditedRecipeId, setCurrentlyEditedRecipeId] = useState("");
  const navigate = useNavigate();

  const stateReciperyList = useSelector((state: StoreType) => state.recipe.recipes);
  const { id } = useParams();
  const returnedRecipe = stateReciperyList.find((recipe) => {
    return recipe.id === id;
  });
  console.log(returnedRecipe);
  const ingredientsArray = returnedRecipe?.ingredients.split(",");
  // setClickedRecipeId(id);
  // const onEdit = (recipe: Recipe) => {
  //   setTitle(recipe.title);
  //   setIngredients(recipe.ingredients);
  //   setPrepTime(recipe.prepTime);
  //   setDescription(recipe.description);
  //   setIsEditing(true);
  //   setCurrentlyEditedRecipeId(recipe.id);
  // };
  const deleteCurrentRecipe = (recipe: Recipe) => {
    const deleteThisRecipe = stateReciperyList.find((recipe) => {
      return recipe.id === id;
    });
    if (deleteThisRecipe) {
      dispatch(deleteRecipe(deleteThisRecipe));
    }
  };
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
        <div className={s.buttons}>
          <button
            onClick={() => {
              navigate(`/addRecipe/${id}`);
              setIsEditing(true);
            }}
            className={s.button}
          >
            Edit
          </button>
          {stateReciperyList.map((recipe) => (
            <button
              onClick={() => {
                deleteCurrentRecipe(recipe);
              }}
              className={s.button}
            >
              Delete
            </button>
          ))}
        </div>
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
