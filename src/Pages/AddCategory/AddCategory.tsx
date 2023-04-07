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
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const addNewCategory = (event: any) => {
    const newCategory: Category = {
      image: image,
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
    <div className={s.parent}>
      <div className={s.main}>
        <AppInput inputName="Category name" placeholder="set name" value={categoryName} setValue={setCategoryName} />
        {/* <label>Add category name</label>
        <input className={s.inputs} placeholder="category name"></input> */}
        <label className={s.upload}>Upload picture:</label>
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
        {image && <img className={s.uploadedImage} src={image} alt="Uploaded recipe" />}
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
