import {Page1DetailB} from "../Page1DetailB";
import {Page1} from "../Page1";
import {Page1DetailA} from "../Page1DetailA";
import {UrlParameter} from "../UrlParameter";
import {Page2} from "../Page2";

export const page2Routes = [
  {
    path: "/",
    exact: true,
    children: <Page2/>
  },
  {
    path: "/:id",
    exact:true,
    children: <UrlParameter/>
  }
];