import { Route, Routes, useNavigate } from "react-router-dom";
import s from "../src/App.module.css";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import RecipeLanding from "./Pages/RecipePage/RecipeLandingPage";
import CategoryRecipes from "./Pages/CategoryRecipes/CategoryRecipes";
import CategoriesList from "./Pages/CategoriesList/CategoriesList";
import ClickedRecipe from "./Pages/ClickedRecipe/ClickedRecipe";
import AddCategory from "./Pages/AddCategory/AddCategory";
import AddCategoryMain from "./Pages/AddCategory/AddCategoryMain";

function App() {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/addRecipe");
  };
  const back = () => {
    navigate("/");
  };
  const addCategory = () => {
    navigate("/addCategory");
  };
  return (
    <div>
      <div className={s.header}>
        <button onClick={back} className={s.mainPage}>
          Main page
        </button>
        <button onClick={redirect} className={s.addButton}>
          Add recipe
        </button>

        <button onClick={addCategory} className={s.addCategory}>
          Add category
        </button>
        <span className={s.head}>Recipe Book</span>
      </div>
      <div>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<CategoriesList />} />
          <Route path="/category" element={<CategoryRecipes />} />
          <Route path="/recipe" element={<RecipeLanding />} />
          <Route path="/recipe/:id" element={<ClickedRecipe />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/addCategory" element={<AddCategoryMain />} />
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
