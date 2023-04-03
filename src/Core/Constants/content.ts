import img from "../../assets/pictures/lentil.jpg";
import { Category } from "../Types/Category.type";
import { v4 as uuid } from "uuid";

export const list: Category[] = [
  { category: "Sweets", image: "assets/pictures/lentil.jpg", id: uuid() },
  { category: "Snacks", image: img, id: uuid() },
  { category: "Healthy", image: "dvfdcds", id: uuid() },
  { category: "Chinese", image: "dvfdcds", id: uuid() },
  { category: "Indian", image: "dvfdcds", id: uuid() },
  { category: "Korean BBQ", image: "dvfdcds", id: uuid() },
  { category: "Fast food", image: "dvfdcds", id: uuid() },
];
