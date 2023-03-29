import s from "./FoodCategory.module.css";
import img from "./pictures/local-food-singapore-dishes-on-a-table.webp";
import { useNavigate } from "react-router";

const FoodCategory = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/category");
  };
  return (
    <div className={s.main}>
      <div></div>
      <div onClick={redirect} className={s.card}>
        <img className={s.image} src={img} alt="food" />
        <div className="header">Category</div>
        <div>Description</div>
      </div>
    </div>
  );
};

export default FoodCategory;
