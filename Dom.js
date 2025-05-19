import { DomElementsById, DomElementsByClasses } from "./configs/dom-config.js";

class Dom {
  constructor() {
    Object.assign(this, this.getDomElementsById(DomElementsById));
    Object.assign(this, this.getElementsBySelector(DomElementsByClasses));
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
}

export const DomElements = new Dom();
