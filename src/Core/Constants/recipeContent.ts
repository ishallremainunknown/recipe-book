import { Recipe } from "../Types/Recipe.type";
import { v4 as uuid } from "uuid";
import { list } from "./content";
import img from "../../assets/pictures/lentil.jpg";
import lasagna from "../../assets/pictures/lasagna.jpg";
import healthy from "../../assets/pictures/healthy.jpg";

export const recipeList: Recipe[] = [
  {
    title: "lasagna",
    image: lasagna,
    description:
      "loremisdcnsdkvnfd awsodv;ndfkns osnvoenfosin oefin ofjffoi;wenven ioenvwonvoevinro oienveofn dscfvgbyjht5refdcfvbgnhjmuy6t5r4e",
    id: uuid(),
    categoryId: "id",
  },
  {
    title: "food",
    image: img,
    description:
      "loremisdcnsdkvnfd awsodv;ndfkn kdoinweo;nfesvnesl;nkvs osnvoenfosin oefin ofjffoi;wenven ioenvwonvoevinro oienveofn",
    id: uuid(),
    categoryId: "id1",
  },
  {
    title: "healthy",
    image: healthy,
    description:
      "loremisdcnsdkvnfd awsodv;ndfkn kdoinweo;nfesvnesl;nkvs osnvoenfosin oefin ofjffoi;wenven ioenvwonvoevinro oienveofn",
    id: uuid(),
    categoryId: "id",
  },
];
