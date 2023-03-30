import s from "./CategoryCard.module.css";
import { useNavigate } from "react-router";
import img from "../../assets/pictures/local-food-singapore-dishes-on-a-table.webp";
import { Recipe } from "../../Core/Types/Recipe.type";

const CategoryCard = (props: Recipe) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/recipe");
  };
  return (
    <div onClick={redirect} className={s.card}>
      <img className={s.image} src={props.image} alt="food" />
      <div className="header">{props.title}</div>
      <div className={s.preptime}>Prep time: 45min</div>
      <div>{props.description}</div>
    </div>
  );
};
export default CategoryCard;
