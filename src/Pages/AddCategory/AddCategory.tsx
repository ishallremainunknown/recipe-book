import s from "./AddCategory.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Category } from "../../Core/Types/Category.type";
import { addCategory } from "../../redux/category-slice";
import { ChangeEvent } from "react";
import AppInput from "../../Components/Input/Input";
import { v4 as uuid } from "uuid";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const dispatch = useDispatch();

  const addNewCategory = (event: any) => {
    const newCategory: Category = {
      image: "",
      category: categoryName,
      id: uuid(),
    };
    console.log(newCategory);

    if (!categoryName) {
      alert("please fill in the field!");
      return;
    }
    dispatch(addCategory(newCategory));
  };

  const handleReset = () => {
    setCategoryName("");
  };

  return (
    <div className={s.parent}>
      <div className={s.main}>
        <AppInput inputName="Category name" placeholder="set name" value={categoryName} setValue={setCategoryName} />
        {/* <label>Add category name</label>
        <input className={s.inputs} placeholder="category name"></input> */}
        <button
          onClick={(e) => {
            addNewCategory(e);
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
export default AddCategory;
