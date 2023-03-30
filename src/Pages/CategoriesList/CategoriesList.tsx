import s from "./CategoriesList.module.css";
import FoodCategory from "../FoodCategory/FoodCategory";
import { list } from "../../Core/Constants/content";

const CategoriesList = () => {
  return (
    <div className={s.container}>
      {list.map((cat) => {
        return (
          <div key={cat.id}>
            <FoodCategory image={cat.image} category={cat.category} id={cat.id} name={cat.name} />{" "}
          </div>
        );
      })}
    </div>
  );
};
export default CategoriesList;
