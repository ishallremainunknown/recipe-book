import s from "./FoodCard.module.css";
import img from "./pictures/local-food-singapore-dishes-on-a-table.webp";

const FoodCard = () => {
  return (
    <div className={s.main}>
      <div className={s.cardTitle}>Title</div>
      <div className={s.card}>
        <img className={s.image} src={img} alt="food" />
        <div>Title</div>
        <div>Description</div>
      </div>
    </div>
  );
};

export default FoodCard;
