import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { Recipe } from "../Core/Types/Recipe.type";
import { db } from "../firebase/firebase-config";

const useFireBaseRecipes = () => {
  const addRecipe = async (recipe: Recipe) => {
    const recipeCollectionRef = collection(db, "recipes");
    const result = await addDoc(recipeCollectionRef, recipe);
    recipe.id = result.id;
    return recipe;
  };

  /** test */ //orderby()
  const getRecipes = async () => {
    const recipeCollectionRef = collection(db, "recipes");
    const q = query(recipeCollectionRef, orderBy("title", "asc"));
    const data = await getDocs(q);

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return filteredData;
  };
  /** */
  const getRecipeById = async (id: string) => {
    const docRef = doc(db, "recipes", id);
    const data = await getDoc(docRef);
    console.log(data);
    return { ...data.data(), id: data.id } as Recipe;
  };
  const getRecipess = async () => {
    const docRef = collection(db, "recipes");
    const data = await getDocs(docRef);
    const filteredResult = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredResult as Recipe[];
  };
  const getRecipesByCategoryId = async (categoryId: string) => {
    const collectionRef = collection(db, "recipes");
    const q = query(collectionRef, where("categoryId", "==", categoryId));
    const result = await getDocs(q);
    const filteredResult = result.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredResult as Recipe[];
  };

  const deleteRecipeById = async (id: string) => {
    const docRef = doc(db, "recipes", id);
    const data = await deleteDoc(docRef);
    console.log(data);
  };
  const editRecipe = async (recipe: Recipe) => {
    const docRef = doc(db, "recipes", recipe.id as string);
    await updateDoc(docRef, recipe);
    console.log(recipe);
    return recipe;
  };

  return {
    addRecipe,
    getRecipes,
    getRecipeById,
    deleteRecipeById,
    editRecipe,
    getRecipesByCategoryId,

    getRecipess,
  };
};
export default useFireBaseRecipes;
