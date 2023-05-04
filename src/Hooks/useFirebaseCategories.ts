import { addDoc, collection, doc, getDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { Category } from "../Core/Types/Category.type";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const useFireBaseCategories = () => {
  const storage = getStorage();
  const addCategory = async (category: Category) => {
    const categoryCollectionRef = collection(db, "categories");
    const result = await addDoc(categoryCollectionRef, category);
    return result;
  };
  const getCategories = async () => {
    const categoryCollectionRef = collection(db, "categories");
    const data = await getDocs(categoryCollectionRef);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return filteredData as Category[];
  };

  const getCategoryById = async (id: string) => {
    const docRef = doc(db, "categories", id);
    const data = await getDoc(docRef);
    console.log(data);
    return { ...data.data(), id: data.id } as Category;
  };
  const deleteCategoryById = async (id: string) => {
    const docRef = doc(db, "categories", id);
    const data = await deleteDoc(docRef);
    console.log(data);
  };

  const editCategory = async (category: Category) => {
    const docRef = doc(db, "categories", category.id as string);
    await updateDoc(docRef, category);
    return category as Category;
  };
  // const uploadCategoryImage = async (file: File) => {
  //   const categoryImage = ref(storage, "category/" + file.name);
  //   const result = await uploadBytes(categoryImage, file);
  //   const url = await getDownloadURL(result.ref);
  //   return url;
  // };
  return { addCategory, deleteCategoryById, getCategoryById, getCategories, editCategory };
};
export default useFireBaseCategories;
