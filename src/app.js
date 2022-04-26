import "regenerator-runtime/runtime";
import "./styles/main.scss";
// Pages
import { Home, Login } from "./js/pages";

window.addEventListener("load", () => {
  Home();
  Login();
});
