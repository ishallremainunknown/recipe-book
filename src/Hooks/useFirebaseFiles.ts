import { current } from "@reduxjs/toolkit";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const useFirebaseFiles = () => {
  const storage = getStorage();

  const uploadRecipeImage = async (file: File) => {
    const current = new Date();
    console.log(current.toISOString());

    const recipeImagesRef = ref(storage, "recipe/" + current.toISOString());
    const result = await uploadBytes(recipeImagesRef, file);
    const url = await getDownloadURL(result.ref);
    return url;
  };
  const uploadCategoryImage = async (file: File) => {
    const current = new Date();
    const categoryImage = ref(storage, "category/" + current.toString());
    const result = await uploadBytes(categoryImage, file);
    const url = await getDownloadURL(result.ref);
    return url;
  };

  return { uploadRecipeImage, uploadCategoryImage };
};
export default useFirebaseFiles;
