import s from "./AddRecipe.module.css";
import { list } from "../../Core/Constants/content";
import { ChangeEvent, useState } from "react";
import AppInput from "../../Components/Input/Input";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../redux/recipe-slice";
import type { Recipe } from "../../Core/Types/Recipe.type";
import { StoreType } from "../../redux/store";

const AddRecipe = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [preparation, setPreparation] = useState("");
  const [pic, setPic] = useState<File>();
  const [categoryId, setCategoryId] = useState("");
  const stateRecipeList = useSelector((state: StoreType) => state.recipe.recipes);
  const setCategoryList = useSelector((state: StoreType) => state.category.categories);

  const saveRecipe = () => {
    if (!title || !prepTime || !preparation) {
      alert("Please fill in all the fileds!");
      return;
    }

    const newRecipe: Recipe = {
      ingredients: "",
      id: uuid(),
      title: title,
      prepTime: prepTime,
      description: preparation,
      image: pic,
      categoryId: categoryId,
    };
    dispatch(addRecipe(newRecipe));
  };
  const handleReset = () => {
    setTitle("");
    setPrepTime("");
    setPreparation("");
    setPic(undefined);
  };
  const addCategoryId = (event: ChangeEvent<HTMLSelectElement>) => {
    return setCategoryId(event.target.value);
  };
  return (
    <div className={s.main}>
      <div className={s.card}>
        <AppInput placeholder="Title" value={title} setValue={setTitle} inputName="Title" />
        <AppInput placeholder="Prep time" value={prepTime} setValue={setPrepTime} inputName="Preparation time" />
        <AppInput placeholder="Preparation" value={preparation} setValue={setPreparation} inputName="Preparation " />

        {/* <label className={s.inputStyle}>Title</label>
        <input className={s.inputStyle} placeholder="enter title"></input>
        <label className={s.inputStyle}>Prep time</label>
        <input className={s.inputStyle} placeholder="prep time"></input>
        <label className={s.inputStyle}>Preparation</label>
        <input className={s.inputStyle} placeholder="preparation steps"></input>
         */}
        <label>Select category</label>
        <select onChange={(event) => addCategoryId(event)} className={s.selectInput}>
          {list.map((cat) => {
            const category = cat.category;
            return <option value={cat.id}>{category}</option>;
          })}
        </select>
        <label className={s.inputStyle}>Upload picture:</label>
        <input className={s.upload} type="file" name="food picture" accept="image/png, image/jpeg" />

        <button
          onClick={() => {
            saveRecipe();
            handleReset();
          }}
          className={s.button}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default AddRecipe;
