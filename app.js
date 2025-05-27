import { config } from "./configs/configs.js";

import { Renderer } from "./Renderer.js";
import { Menu } from "./Menu.js";
import { AppController } from "./AppController.js";

new Renderer(config, "btn-in-row");
new Menu();
new AppController();
