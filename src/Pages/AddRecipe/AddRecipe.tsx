import s from "./AddRecipe.module.css";
import { list } from "../../Core/Constants/content";
import { ChangeEvent, useEffect, useState } from "react";
import AppInput from "../../Components/Input/Input";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, saveEditedRecipe } from "../../redux/recipe-slice";
import type { Recipe } from "../../Core/Types/Recipe.type";
import { StoreType } from "../../redux/store";
import { useParams } from "react-router-dom";

const AddRecipe = () => {
  const { id } = useParams<string>();

  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const [currentlyEditedRecipeId, setCurrentlyEditedRecipeId] = useState("");

  const dispatch = useDispatch();

  const [ingredients, setIngredients] = useState("");
  const [title, setTitle] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [preparation, setPreparation] = useState("");

  const [categoryId, setCategoryId] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const stateRecipeList = useSelector((state: StoreType) => state.recipe.recipes);
  const stateCategoryList = useSelector((state: StoreType) => state.category.categories);
  const [image, setImage] = useState("");

  useEffect(() => {
    setCurrentlyEditedRecipeId(id as string);
    const foundRecipe = stateRecipeList.find((recipe) => {
      return recipe.id === id;
    });
    if (foundRecipe) {
      setTitle(foundRecipe.title);
      setPrepTime(foundRecipe.prepTime);
      setPreparation(foundRecipe.description);
      setImage(foundRecipe.image);
      setIngredients(foundRecipe.ingredients);
      setIsEditing(true);
      setCategoryId(foundRecipe.categoryId);
    }
    //console.log(foundRecipe, "recipe found");
  }, [id, stateRecipeList]);

  const editingRecipe = () => {
    const foundRecipe = stateRecipeList.find((recipe) => {
      return recipe.id === id;
    });
    if (foundRecipe) {
      const editedRecipe: Recipe = {
        title: title,
        prepTime: prepTime,
        description: preparation,
        image: image,
        categoryId: categoryId,
        ingredients: ingredients,
        id: id as string,
      };

      // setTitle(foundRecipe.title);
      // setPrepTime(foundRecipe.prepTime);
      // setPreparation(foundRecipe.description);
      // setPic(foundRecipe.image);
      // setIngredients(foundRecipe.ingredients);

      dispatch(saveEditedRecipe(editedRecipe));
    }
  };
  const saveChanges = () => {
    if (currentlyEditedRecipeId) {
      const editedRecipe: Recipe = {
        title: title,
        prepTime: prepTime,
        description: preparation,
        image: image,
        categoryId: categoryId,
        ingredients: ingredients,
        id: id as string,
      };
      dispatch(saveEditedRecipe(editedRecipe));
      setTimeout(() => {
        handleReset();
      });
      setIsEditing(false);
    }
  };
  const saveRecipe = () => {
    //here we chek if the form is valid
    if (!title || !prepTime || !preparation || !categoryId) {
      alert("Please fill in all the fileds!");
      return;
    }

    const newRecipe: Recipe = {
      ingredients: "",
      id: uuid(),
      title: title,
      prepTime: prepTime,
      description: preparation,
      image: image,
      categoryId: categoryId,
    };

    dispatch(addRecipe(newRecipe));
    handleReset();
  };
  const handleReset = () => {
    setTitle("");
    setPrepTime("");
    setPreparation("");
    setIngredients("");
    setImage("");
    setCategoryId("");
  };
  const addCategoryId = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("works");
    return setCategoryId(event.target.value);
  };

  const convertPic = (e: ChangeEvent<HTMLInputElement>) => {
    const data = new FileReader();
    data.addEventListener("load", () => {
      if (data.result) {
        setImage(data.result as string);
      }
    });
    if (e.target.files) {
      data.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className={s.main}>
      <div className={s.card}>
        <AppInput placeholder="Title" value={title} setValue={setTitle} inputName="Title" />
        <AppInput placeholder="Prep time" value={prepTime} setValue={setPrepTime} inputName="Preparation time" />
        <AppInput placeholder="Preparation" value={preparation} setValue={setPreparation} inputName="Preparation " />
        <AppInput placeholder="Ingredients" value={ingredients} setValue={setIngredients} inputName="Ingredients " />

        <label>Select category</label>
        <select
          value={categoryId}
          id="category-select"
          onChange={(event) => {
            addCategoryId(event);
          }}
          className={s.selectInput}
        >
          <option className={s.defaultOption} defaultChecked value={""}>
            select category
          </option>
          {stateCategoryList.map((cat) => {
            const category = cat.category;

            return (
              <option id="categories" value={cat.id}>
                {category}
              </option>
            );
          })}
        </select>
        <label className={s.inputStyle}>Upload picture:</label>
        <input
          id="upload"
          className={s.upload}
          type="file"
          name="food picture"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            convertPic(e);
          }}
        />
        {image && <img className={s.uploadPic} src={image} alt="Uploaded recipe" />}
        {!isEditing && (
          <button
            onClick={() => {
              saveRecipe();
            }}
            className={s.button}
          >
            Add recipe
          </button>
        )}
        {isEditing === true && (
          <button
            onClick={() => {
              saveChanges();
              editingRecipe();
            }}
            className={s.button}
            style={{ display: isEditing ? "block" : "none" }}
          >
            Save changes
          </button>
        )}
      </div>
    </div>
  );
};
export default AddRecipe;
