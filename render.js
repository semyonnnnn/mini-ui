import { config } from "./configs/modal-dom-config.js";

export function buildModal() {
  const modal = document.querySelector("#modal");
  if (!modal) {
    console.error("No #modal found in the DOM.");
    return;
  }

  function buildThings(config, parent) {
    for (const key in config) {
      if (!config.hasOwnProperty(key)) continue;

      const item = config[key];

      const el = document.createElement(item.type);
      el.id = key;

      for (const property in item) {
        if (property !== "children") {
          el[property] = item[property];
        }
      }

      parent.appendChild(el);

      if (item.children) {
        buildThings(item.children, el);
      }
    }
  }

  buildThings(config, modal);
}
