import s from "./AddCategory.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Category } from "../../Core/Types/Category.type";
import { addCategory } from "../../redux/category-slice";
import { ChangeEvent } from "react";
import AppInput from "../../Components/Input/Input";
import { v4 as uuid } from "uuid";
import useFireBaseCategories from "../../Hooks/useFirebaseCategories";
import { useNavigate, useParams } from "react-router-dom";
import useFirebaseFiles from "../../Hooks/useFirebaseFiles";

const AddCategory = () => {
  const { id } = useParams<string>();
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState("");
  const [currentlyEditedCategoryId, setCurrentlyEditedCategoryId] = useState("");
  const [image, setImage] = useState<File>();

  const dispatch = useDispatch();

  const { addCategory } = useFireBaseCategories();
  const { getCategoryById } = useFireBaseCategories();
  const { editCategory } = useFireBaseCategories();
  const { uploadCategoryImage } = useFirebaseFiles();

  const [isEditing, setIsEditing] = useState<Boolean>(false);

  useEffect(() => {
    setCurrentlyEditedCategoryId(id as string);
    editCurrentCategory();
  }, [id]);

  const addNewCategory = async () => {
    let imageURL: string | null = null;
    if (image) {
      imageURL = await uploadCategoryImage(image);
    }
    if (!categoryName) {
      alert("please fill in the field!");
      return;
    }
    const newCategory: Category = {
      image: imageURL,
      category: categoryName,
    };
    console.log(newCategory);
    await addCategory(newCategory);
    //dispatch(addCategory(newCategory));
  };

  const editCurrentCategory = async () => {
    let imageURL: string | null = null;
    if (image) {
      imageURL = await uploadCategoryImage(image);
    }
    const foundCategory = await getCategoryById(id as string);
    if (foundCategory) {
      setCategoryName(foundCategory.category);
      setIsEditing(true);
      setImage(image);
    }
    editCategory(foundCategory);
  };
  const handleReset = () => {
    setCategoryName("");
    setImage(undefined);
  };
  const saveChanges = async () => {
    let imageURL: string | null = null;
    if (image) {
      imageURL = await uploadCategoryImage(image);
    }

    if (currentlyEditedCategoryId) {
      const editedCategory: Category = {
        category: categoryName,
        image: imageURL,
        id: id,
      };

      editCategory(editedCategory);
      setTimeout(() => handleReset());
      setIsEditing(false);
    }
  };

  const convertPic = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      const link = await uploadCategoryImage(uploadedFile);
      console.log(link);
      setImage(uploadedFile);
    }

    // const data = new FileReader();
    // data.addEventListener("load", () => {
    //   if (data.result as ArrayBuffer) {
    //     setImage(data.result);
    //   }
    // });
    // if (e.target.files) {
    //   data.readAsDataURL(e.target.files[0]);
    // }
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
        {!isEditing && (
          <button
            onClick={() => {
              addNewCategory();

              handleReset();
              navigate("/categoryList");
            }}
            className={s.button}
          >
            Add category
          </button>
        )}
        {isEditing === true && (
          <button
            onClick={() => {
              saveChanges();
              handleReset();
              navigate("/categoryList");
            }}
          >
            Save changes
          </button>
        )}
      </div>
    </div>
  );
};
export default AddCategory;
