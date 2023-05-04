export type Recipe = {
  id?: string;
  title: string;
  image?: string | null;
  prepTime: string;
  ingredients: string;
  description: string;
  categoryId: string;
};
