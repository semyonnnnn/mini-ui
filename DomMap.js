import { config } from "./configs/configs.js";

class DomMap {
  constructor() {
    Object.assign(this, this.getDomElementsById(config));

    Object.assign(
      this,
      this.getElementsBySelector({
        statNavButton: ".btn.btn-primary.btn-lg.btn-block",
      })
    );
  }

  getElementsBySelector = (selectors) => {
    return Object.fromEntries(
      Object.entries(selectors).map(([key, selector]) => [
        key,
        document.querySelector(selector),
      ])
    );
  };

  getDomElementsById(items, object = {}) {
    for (const key in items) {
      const element = items[key];
      const el = document.getElementById(key);
      if (el) object[key] = el;
      if (element.hasOwnProperty("children")) {
        this.getDomElementsById(element.children, object);
      }
    }

    return object;
  }
}

export { DomMap };
