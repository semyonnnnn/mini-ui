import { config } from "./configs/configs.js";

import { render } from "./renderer.js";
import { Menu } from "./Menu.js";
import { doStyles } from "./styles.js";
import { doFunctions } from "./functions.js";

render("btn-in-row", config);
new Menu();

setTimeout(() => {
  doStyles();
  doFunctions();
});
