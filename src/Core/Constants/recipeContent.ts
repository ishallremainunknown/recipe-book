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
    prepTime: "40 min",
    ingredients: "meat, cheddar, pasta",
    description:
      "lore dcidcdk dcfjkdv jndj ndl in o noiavjide ne nwaiv nwi jvwoidvdsodijwion idvowivj oidjoidcjoisd jid woicjewoijcoi joi joidjdoi c nw eoiw jdwo cwoie joic wdi joi ec oiedfvjwrfu u hn bbiwubv wdbcbwic ihnib beicv iuheidbdc vub c ibc vib ewid vn cwidsiowjnd buijcn widcn ecwd sicn cvdscdiuwsdcn ijnd c jn dcv b sdcjmdc jnc jn hc nc jnc jmc cjnc sj jdchidvdvnj  jj njvjv jvk j vbjdvjn v vj vdioc b k v",

    id: uuid(),
    categoryId: "id",
  },
  {
    title: "creamy smth",
    image: img,
    prepTime: "40 min",
    ingredients: "cdscuhi, cvov, hdx",
    description:
      "loremisdcnsdkvnfd awsod v;ndfkn kdoinwe o;nfes vnes  l;nkvs osn voenfosin oefin ofjffo i;wenv en ioenvwo nvoevinro oienv eofn",
    id: uuid(),
    categoryId: "id1",
  },
  {
    title: "healthy",
    image: healthy,
    prepTime: "40 min",
    ingredients: "cdscuhi, cvov, hdx",
    description:
      "loremisd cnsd kvnfd awso dv;nd fkn kdoinw o;nfesvn esl;nkvs osn voenfosin oefin  ofjff oi;we nven ioenv wonvoev inro oienv eofn",
    id: uuid(),
    categoryId: "id",
  },
];
