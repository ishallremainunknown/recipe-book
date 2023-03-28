import s from "../src/App.module.css";
import FoodCard from "./Components/FoodCard";

function App() {
  return (
    <div className={s.cardContainer}>
      <FoodCard />
      <FoodCard />
    </div>
  );
}

export default App;
