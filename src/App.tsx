import s from "../src/App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowCategories from "./Pages/CategoryPage/ShowCategories/ShowCategories";
import FirstCategory from "./Pages/CategoryPage/CategoryPage";
import RecipeLanding from "./Pages/RecipePage/RecipeLandingPage";

function App() {
  return (
    <div>
      <div className={s.header}>
        <span className={s.head}>Header</span>
      </div>
      <div className={s.cardContainer}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowCategories />} />
            <Route path="/category" element={<FirstCategory />} />
            <Route path="/recipe" element={<RecipeLanding />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
