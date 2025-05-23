import { config } from "./configs/modal-dom-config.js";

class Dom {
  arrayOfItems = [];

  constructor() {
    this.buildArray(config);
    Object.assign(this, this.getDomElementsById(this.arrayOfItems));
    // Object.assign(this, this._getDomElementsById(config));
    Object.assign(
      this,
      this.getElementsBySelector({
        statNavButton: ".btn.btn-primary.btn-lg.btn-block",
      })
    );
  }

  getDomElementsById = (ids) => {
    return Object.fromEntries(
      ids.map((id) => [id, document.getElementById(id)])
    );
  };

  getElementsBySelector = (selectors) => {
    return Object.fromEntries(
      Object.entries(selectors).map(([key, selector]) => [
        key,
        document.querySelector(selector),
      ])
    );
  };

  buildArray(items) {
    for (const key in items) {
      this.arrayOfItems.push(key);
      if (items[key].hasOwnProperty("children")) {
        this.buildArray(items[key].children);
      }
    }
  }

  _getDomElementsById(items, object = {}) {
    for (const key in items) {
      const element = items[key];
      object[key] = document.getElementById(key);
      // if (object !== null) {
      //   console.log("object:", object);
      // }

      if (element.hasOwnProperty("children")) {
        this._getDomElementsById(element.children, object);
      }
    }
    console.log(object);

    return object;
  }
}

export { Dom };
