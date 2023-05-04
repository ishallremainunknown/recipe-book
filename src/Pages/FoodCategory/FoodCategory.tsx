import s from "./FoodCategory.module.css";
import img from "../../assets/pictures/local-food-singapore-dishes-on-a-table.webp";
import { useNavigate } from "react-router";
import { Category } from "../../Core/Types/Category.type";

const FoodCategory = (props: Category) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/category/${props.id}`);
  };

  return (
    <div className={s.main}>
      <div onClick={redirect} className={s.card}>
        <img className={s.image} src={props.image} alt="food" />
        <div className="header"> {props.category}</div>
        <div> </div>
      </div>
    </div>
  );
};

export default FoodCategory;
