import s from "./CategoriesList.module.css";
import FoodCategory from "../FoodCategory/FoodCategory";
import { list } from "../../Core/Constants/content";
import { StoreType } from "../../redux/store";
import { useSelector } from "react-redux";

const CategoriesList = () => {
  const setCategoryList = useSelector((state: StoreType) => state.category.categories);
  return (
    <div className={s.container}>
      {setCategoryList.map((cat) => {
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
