import { Route, Routes, useNavigate } from "react-router-dom";
import s from "../src/App.module.css";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import RecipeLanding from "./Pages/RecipePage/RecipeLandingPage";
import CategoryRecipes from "./Pages/CategoryRecipes/CategoryRecipes";
import CategoriesList from "./Pages/CategoriesList/CategoriesList";

function App() {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/addRecipe");
  };
  const back = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={s.header}>
        <button onClick={redirect} className={s.addButton}>
          Add recipe
        </button>
        <button onClick={back} className={s.mainPage}>
          Main page
        </button>
        <span className={s.head}>Recipe Book</span>
      </div>
      <div>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<CategoriesList />} />
          <Route path="/category" element={<CategoryRecipes />} />
          <Route path="/recipe" element={<RecipeLanding />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
