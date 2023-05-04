import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../redux/store";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import s from "./AllRecipes.module.css";
import Search from "../../Components/Search/Search";
import { useState } from "react";
import { useEffect } from "react";

import { findRecipe } from "../../redux/recipe-slice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import useFireBaseRecipes from "../../Hooks/useFirebaseRecipes";
import { Recipe } from "../../Core/Types/Recipe.type";

const AllRecipes = () => {
  //const dispatch = useDispatch();
  const filteredRecipe = useSelector((state: StoreType) => state.recipe.filteredRecipes);
  // const allRecipes = useSelector((state: StoreType) => state.recipe.recipes);
  const stateRecipeList = useSelector((state: StoreType) => state.recipe.recipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState<any[]>([]);
  //const [allSearchedRecipes, setAllSearchedRecipes] = useState<any[]>([]);
  const { getRecipes } = useFireBaseRecipes();
  const { getRecipeById } = useFireBaseRecipes();

  useEffect(() => {
    const getData = async () => {
      const result = await getRecipes();
      setRecipes(result);

      console.log(result);
    };

    getData();
  }, []);

  const findSearchedRecipe = () => {
    const filtered = recipes.filter((recipe) => {
      const filteredRecipes = recipe.title.toLowerCase().includes(searchTerm) && searchTerm.length > 0;
      return filteredRecipes;
    });
    if (searchTerm.length > 0) {
      return filtered;
    } else {
      return recipes;
    }
  };
  // useEffect(() => {

  // }, [searchTerm]);
  return (
    <div>
      <div className={s.search}>
        <Search placeholder="find recipe" value={searchTerm} setValue={setSearchTerm} inputName="" />
      </div>
      <div className={s.container}>
        {findSearchedRecipe().map((recipe: Recipe) => {
          return <CategoryCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};
export default AllRecipes;
