import { Recipe } from "../../Core/Types/Recipe.type";
import { recipeList } from "../../Core/Constants/recipeContent";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import s from "./CategoryRecipes.module.css";
import { useEffect, useState } from "react";
import { StoreType } from "../../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFireBaseCategories from "../../Hooks/useFirebaseCategories";
import useFireBaseRecipes from "../../Hooks/useFirebaseRecipes";
import { useNavigate } from "react-router-dom";
import { Category } from "../../Core/Types/Category.type";

const CategoryRecipes = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getRecipesByCategoryId } = useFireBaseRecipes();
  const { editCategory } = useFireBaseCategories();
  const { deleteCategoryById } = useFireBaseCategories();
  const { getCategoryById } = useFireBaseCategories();
  const [categoryRecipes, setCategoryRecipes] = useState<Recipe[]>([]);
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    const allCategoryRecipes = async () => {
      if (id) {
        const allCategoryRecipe = await getRecipesByCategoryId(id);
        setCategoryRecipes(allCategoryRecipe);
      }
    };
    const getCurrentCategory = async () => {
      const categoryById = await getCategoryById(id as string);
      setCategory(categoryById);
    };
    getCurrentCategory();
    allCategoryRecipes();
  }, []);
  const editCurrentCategory = (category: Category) => {
    editCategory(category);
  };
  const deleteCurrentCategory = async (category: Category) => {
    if (id) {
      await deleteCategoryById(id);
    }
  };
  return (
    <div>
      <div className={s.buttons}>
        <button
          onClick={() => {
            if (category) {
              editCurrentCategory(category);
            }
            navigate(`/addCategory/${id}`);
          }}
          className={s.button}
        >
          Edit category
        </button>
        <button
          onClick={() => {
            if (category) {
              deleteCurrentCategory(category);
            }
            navigate("/categoryList");
          }}
          className={s.button}
        >
          Delete category
        </button>
      </div>
      <div className={s.container}>
        {categoryRecipes.map((recipe: Recipe) => {
          if (recipe.categoryId === id) {
            return <CategoryCard key={recipe.id} recipe={recipe} />;
          }
        })}
      </div>
    </div>
  );
};
export default CategoryRecipes;
