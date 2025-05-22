import { config } from "./configs/modal-dom-config.js";

class Dom {
  //DELETE: not for production
  arrayOfItems = ["modal"];
  //

  constructor() {
    this._getDomElementsById(config);
    Object.assign(this, this.getDomElementsById(this.arrayOfItems));
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

  _getDomElementsById(items) {
    for (const key in items) {
      const element = items[key];
      this.arrayOfItems.push(key);
      if (element.hasOwnProperty("children")) {
        this._getDomElementsById(element.children);
      }
    }
  }
}

export { Dom };
