export type Recipe = {
  title: string;
  image: File | undefined | string;
  prepTime: string;
  ingredients: string;
  description: string;
  id: string;
  categoryId: string;
};
