import s from "./CategoryCard.module.css";
import { useNavigate } from "react-router";
import img from "../../assets/pictures/local-food-singapore-dishes-on-a-table.webp";
import { Recipe } from "../../Core/Types/Recipe.type";

type ComponentPrps = {
  recipe: Recipe;
};

const CategoryCard = ({ recipe }: ComponentPrps) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/recipe/${recipe.id}`);
  };
  return (
    <div onClick={redirect} className={s.card}>
      <img className={s.image} src={recipe.image} alt="food" />
      <div className="header">{recipe.title}</div>
      <div className={s.preptime}>Preparation </div>
      <div className={s.description}>{recipe.description}</div>
    </div>
  );
};
export default CategoryCard;
