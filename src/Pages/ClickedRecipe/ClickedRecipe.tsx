import { Recipe } from "../../Core/Types/Recipe.type";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { recipeList } from "../../Core/Constants/recipeContent";
import s from "./ClickedRecipe.module.css";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { deleteRecipe } from "../../redux/recipe-slice";
import { Dispatch } from "react";
import useFireBaseRecipes from "../../Hooks/useFirebaseRecipes";

type ComponentPrps = {
  recipe: Recipe;
};

const ClickedRecipe = () => {
  const { getRecipeById } = useFireBaseRecipes();
  const { deleteRecipeById } = useFireBaseRecipes();
  const { editRecipe } = useFireBaseRecipes();
  const { getRecipes } = useFireBaseRecipes();
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState<Boolean>(false);

  const navigate = useNavigate();

  const stateReciperyList = useSelector((state: StoreType) => state.recipe.recipes);
  const { id } = useParams();

  const [recipe, setRecipe] = useState<Recipe>();
  const [recipeList, setRecipeList] = useState<ComponentPrps[]>();

  const ingredientsArray = recipe?.ingredients?.split(",");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    if (id) {
      const result = await getRecipeById(id);
      setRecipe(result);
      console.log(result);
    }
  };

  const deleteCurrentRecipe = (recipe: Recipe) => {
    if (id) {
      deleteRecipeById(id);
    }
  };
  const editCurrentRecipe = (recipe: Recipe) => {
    editRecipe(recipe);
  };

  if (!recipe) {
    return <div>Loading</div>;
  }

  return (
    <div className={s.main}>
      <div className={s.details}>
        <div className={s.title}>{recipe?.title}</div>

        <div>
          Ingredients:
          <ul>
            {ingredientsArray?.map((ingred) => {
              return <li>{ingred}</li>;
            })}
          </ul>
        </div>
        <div className={s.prep}> Prep time: {recipe?.prepTime}</div>
        <div>Preparation: {recipe?.description}</div>
        <div className={s.buttons}>
          <button
            onClick={() => {
              navigate(`/addRecipe/${id}`);
              editCurrentRecipe(recipe);
              setIsEditing(true);
            }}
            className={s.button}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteCurrentRecipe(recipe);
              navigate("/allRecipes");
            }}
            className={s.button}
          >
            Delete
          </button>
        </div>
      </div>
      <div>
        <div>
          <img className={s.image} src={recipe?.image} alt={recipe?.title} />
        </div>
      </div>
    </div>
  );
};
export default ClickedRecipe;
