import { buildModal } from "./render.js";
import { Menu } from "./Menu.js";
import { doStyles } from "./styles.js";
import { doFunctions } from "./functions.js";

buildModal();
new Menu();

setTimeout(() => {
  doFunctions();
  doStyles();
});
