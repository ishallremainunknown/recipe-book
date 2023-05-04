import s from "./CategoriesList.module.css";
import FoodCategory from "../FoodCategory/FoodCategory";
import { list } from "../../Core/Constants/content";
import { StoreType } from "../../redux/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Category } from "../../Core/Types/Category.type";
import useFireBaseCategories from "../../Hooks/useFirebaseCategories";
import { useParams } from "react-router-dom";

type CategoryList = {
  category: Category;
};
const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const { getCategories } = useFireBaseCategories();

  useEffect(() => {
    const categoriesList = async () => {
      const categoryList = await getCategories();
      setCategories(categoryList);
    };
    categoriesList();
  }, []);
  // const stateCategoryList = useSelector((state: StoreType) => state.category.categories);
  return (
    <div className={s.container}>
      {categories.map((cat: Category) => {
        return (
          <div key={cat.id}>
            <FoodCategory image={cat.image} category={cat.category} id={cat.id} />{" "}
          </div>
        );
      })}
    </div>
  );
};
export default CategoriesList;
