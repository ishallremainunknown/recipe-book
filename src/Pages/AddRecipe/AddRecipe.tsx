import s from "./AddRecipe.module.css";
import { list } from "../../Core/Constants/content";
import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import AppInput from "../../Components/Input/Input";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe, saveEditedRecipe } from "../../redux/recipe-slice";
import type { Recipe } from "../../Core/Types/Recipe.type";
import { StoreType } from "../../redux/store";
import { useParams } from "react-router-dom";
import useFireBaseRecipes from "../../Hooks/useFirebaseRecipes";
import { Category } from "../../Core/Types/Category.type";
import useFireBaseCategories from "../../Hooks/useFirebaseCategories";
import useFirebaseFiles from "../../Hooks/useFirebaseFiles";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const navigate = useNavigate();
  const { id } = useParams<string>();
  const { uploadRecipeImage } = useFirebaseFiles();
  const { getRecipeById } = useFireBaseRecipes();
  const { deleteRecipeById } = useFireBaseRecipes();
  const { editRecipe: editFirebaseRecipe } = useFireBaseRecipes();
  const { getCategories } = useFireBaseCategories();

  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const [currentlyEditedRecipeId, setCurrentlyEditedRecipeId] = useState("");

  const dispatch = useDispatch();

  const [ingredients, setIngredients] = useState("");
  const [title, setTitle] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [preparation, setPreparation] = useState("");

  const [categoryId, setCategoryId] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  //const stateRecipeList = useSelector((state: StoreType) => state.recipe.recipes);
  const stateCategoryList = useSelector((state: StoreType) => state.category.categories);

  const [image, setImage] = useState<File>();

  const { addRecipe: addRecipeToDb } = useFireBaseRecipes();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    setCurrentlyEditedRecipeId(id as string);
    getEditedRecipe();
    getCategory();
  }, [id]);

  const getEditedRecipe = async () => {
    if (id) {
      const foundRecipe = await getRecipeById(id as string);
      if (foundRecipe) {
        setTitle(foundRecipe.title);
        setPrepTime(foundRecipe.prepTime);
        setPreparation(foundRecipe.description);
        //setImage(foundRecipe.image ?? undefined);
        setIngredients(foundRecipe.ingredients);
        setIsEditing(true);
        setCategoryId(foundRecipe.categoryId);
      }
      console.log(foundRecipe);
    }
  };
  const getCategory = async () => {
    const allCategories = await getCategories();
    setCategories(allCategories);
  };

  const editRecipe = async () => {
    let imageURL: string | null = null;
    if (image) {
      imageURL = await uploadRecipeImage(image);
    }

    if (currentlyEditedRecipeId) {
      const editedRecipe: Recipe = {
        title: title,
        prepTime: prepTime,
        description: preparation,
        image: imageURL,
        categoryId: categoryId,
        ingredients: ingredients,
        id: id as string,
      };
      editFirebaseRecipe(editedRecipe);
      setTimeout(() => handleReset());
      setIsEditing(false);
    }
  };

  const addRecipe = async () => {
    //here we chek if the form is valid
    if (!title || !prepTime || !preparation) {
      alert("Please fill in all the fileds!");
      return;
    }
    //////////////////////////////////////////////////////
    let imageURL: string | null = null;
    if (image) {
      imageURL = await uploadRecipeImage(image);
    }

    const newRecipe: Recipe = {
      ingredients: ingredients,
      title: title,
      prepTime: prepTime,
      description: preparation,
      image: imageURL,
      categoryId: categoryId,
    };
    const result = await addRecipeToDb(newRecipe);
    console.log(result);

    handleReset();
    navigate("/allRecipes");
  };
  const handleReset = () => {
    setTitle("");
    setPrepTime("");
    setPreparation("");
    setIngredients("");
    setImage(undefined);
    setCategoryId("");
  };
  const addCategoryId = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log("works");
    return setCategoryId(event.target.value);
  };

  const convertPic = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      setImage(uploadedFile);
    }
  };

  // const uploadPicture = async () => {
  //   if (image) {
  //     const link = await uploadRecipeImage(image);
  //     console.log(link);
  //   }
  // };

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
          {categories?.map((cat: Category) => (
            <option key={cat.id} id="categories" value={cat.id}>
              {cat.category}
            </option>
          ))}
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
              addRecipe();
            }}
            className={s.button}
          >
            Add recipe
          </button>
        )}
        {isEditing === true && (
          <button
            onClick={() => {
              editRecipe();
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
