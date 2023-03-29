import s from "./CategoryPage.module.css";
import { useNavigate } from "react-router";
import img from "../../assets/pictures/local-food-singapore-dishes-on-a-table.webp";
const FirstCategory = () => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/recipe");
  };
  return (
    <div onClick={redirect}>
      <div className={s.container}>
        <div className={s.foodCard}>
          <div className={s.card}>
            <img className={s.image} src={img} alt="food" />
            <div className="header">Title</div>
            <div>Prep time: 45min</div>
            <div>Description</div>
          </div>
        </div>
        <div>
          <div className={s.card}>
            <img className={s.image} src={img} alt="food" />
            <div className="header">Title</div>
            <div>Prep time: 45min</div>
            <div>Description</div>
          </div>
        </div>
        <div>
          <div className={s.card}>
            <img className={s.image} src={img} alt="food" />
            <div className="header">Title</div>
            <div>Prep time: 45min</div>
            <div>Description</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstCategory;
