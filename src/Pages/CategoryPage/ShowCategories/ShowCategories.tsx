import s from "./ShowCategories.module.css";
import FoodCategory from "../../FoodCategory/FoodCategory";

const ShowCategories = () => {
  return (
    <div className={s.container}>
      <div>
        <FoodCategory />
      </div>
      <div>
        <FoodCategory />
      </div>
      <div>
        <FoodCategory />
      </div>
      <div>
        <FoodCategory />
      </div>
    </div>
  );
};
export default ShowCategories;
