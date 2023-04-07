import { Route, Routes, useNavigate } from "react-router-dom";
import s from "../src/App.module.css";
import AddRecipe from "./Pages/AddRecipe/AddRecipe";
import RecipeLanding from "./Pages/RecipePage/RecipeLandingPage";
import CategoryRecipes from "./Pages/CategoryRecipes/CategoryRecipes";
import CategoriesList from "./Pages/CategoriesList/CategoriesList";
import ClickedRecipe from "./Pages/ClickedRecipe/ClickedRecipe";
import AddCategory from "./Pages/AddCategory/AddCategory";
import AddCategoryMain from "./Pages/AddCategory/AddCategoryMain";
import MainPage from "./Pages/Main Page/MainPage";
import AllRecipes from "./Pages/All Recipes/AllRecipes";

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
  const toCategoryList = () => {
    navigate("/categoryList");
  };
  const toAllRecipes = () => {
    navigate("/allRecipes");
  };
  return (
    <div>
      <div className={s.header}>
        <div className={s.buttonContainer}>
          <button onClick={toCategoryList} className={s.mainPage}>
            Categories
          </button>
          <button onClick={toAllRecipes} className={s.allRecipes}>
            All recipes
          </button>
          <button onClick={redirect} className={s.addButton}>
            Add recipe
          </button>

          <button onClick={addCategory} className={s.addCategory}>
            Add category
          </button>
        </div>
        <span onClick={back} className={s.head}>
          Recipe Book
        </span>
      </div>
      <div>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/allRecipes" element={<AllRecipes />} />
          <Route path="/categoryList" element={<CategoriesList />} />
          <Route path="/category/:id" element={<CategoryRecipes />} />
          <Route path="/recipe" element={<RecipeLanding />} />
          <Route path="/recipe/:id" element={<ClickedRecipe />} />
          <Route path="/addRecipe" element={<AddRecipe />} />
          <Route path="/addRecipe/:id" element={<AddRecipe />} />
          <Route path="/addCategory" element={<AddCategoryMain />} />
          <Route path="*" element={<div>NOT FOUND</div>} />
        </Routes>
        {/* </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
