import img from "../../assets/pictures/lentil.jpg";
import { Category } from "../Types/Category.type";
import { v4 as uuid } from "uuid";

export const list: Category[] = [
  { category: "Sweets", image: "assets/pictures/lentil.jpg", name: "cdvcdfv", id: uuid() },
  { category: "Snacks", image: img, name: "cdvcdfv", id: uuid() },
  { category: "Healthy", image: "dvfdcds", name: "cdvcdfv", id: uuid() },
  { category: "Chinese", image: "dvfdcds", name: "cdvcdfv", id: uuid() },
  { category: "Indian", image: "dvfdcds", name: "cdvcdfv", id: uuid() },
  { category: "Korean BBQ", image: "dvfdcds", name: "cdvcdfv", id: uuid() },
  { category: "Fast food", image: "dvfdcds", name: "cdvcdfv", id: uuid() },
];
