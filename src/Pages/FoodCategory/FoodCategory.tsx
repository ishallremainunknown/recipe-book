import s from "./FoodCategory.module.css";
import img from "../../assets/pictures/local-food-singapore-dishes-on-a-table.webp";
import { useNavigate } from "react-router";
import { Category } from "../../Core/Types/Category.type";

const FoodCategory = (props: Category) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/category");
  };

  return (
    <div className={s.main}>
      <div onClick={redirect} className={s.card}>
        <img className={s.image} src={img} alt="food" />
        <div className="header"> {props.category}</div>
        <div>Description: {props.name}</div>
      </div>
    </div>
  );
};

export default FoodCategory;
