import * as styles from "./styles/styles.js";
import { elements } from "./configs/specialStyles/specialStyles_config.js";
import { nativeByClasses } from "./configs/native-elements.js";

export class Renderer {
  constructor(config, key) {
    this.buildThings(elements, config, key);
    document.addEventListener("DOMContentLoaded", () => {
      this.applyExistingElementStyles();
    });
  }

  buildThings(elements, config, key, isRecursive = false) {
    const parent = this.getParentElement(key);
    if (!parent) {
      console.error(`No parent with id/class of [${key}] found in the DOM.`);
      return;
    }

    if (!isRecursive && !parent.classList.contains("btn-in-row")) {
      parent.innerHTML = "";
    }

    this.processConfig(config, parent, isRecursive);
    this.applySpecialStyles(elements);
  }

  getParentElement(key) {
    return typeof key === "string"
      ? document.getElementById(key) ?? document.querySelector("." + key)
      : key;
  }

  applyExistingElementStyles() {
    for (const key in nativeByClasses) {
      const style = styles[key]?.self ?? styles[key];
      if (!style) continue;

      const el = document.querySelector(nativeByClasses[key]);
      if (!el) {
        console.warn(`No element found for selector '${nativeByClasses[key]}'`);
        continue;
      }

      this.safeStyleAssign(el.style, style);
    }
  }

  processConfig(config, parent, isRecursive) {
    for (const key in config) {
      if (!config.hasOwnProperty(key)) continue;

      const item = config[key];
      const el = document.createElement(item.html);
      el.id = key;

      this.applyElementStyles(el, key);
      this.setElementProperties(el, item);

      parent.appendChild(el);

      if (item.children) {
        this.buildThings(elements, item.children, el, true);
      }
    }
  }

  applyElementStyles(element, styleKey) {
    if (styles[styleKey]) {
      const style = styles[styleKey].self ?? styles[styleKey];
      this.safeStyleAssign(element.style, style);
    }
  }

  setElementProperties(element, item) {
    for (const property in item) {
      if (property === "children" || property === "html") continue;

      if (property in element) {
        element[property] = item[property];
      } else {
        element.setAttribute(property, item[property]);
      }
    }
  }

  applySpecialStyles(elements) {
    for (const [key, selectors] of Object.entries(elements)) {
      const parent =
        key !== "document" ? document.getElementById(key) : document;
      if (!parent) continue;

      selectors.forEach((selector) => {
        parent.querySelectorAll(selector).forEach((element) => {
          if (styles[key]?.[selector]) {
            this.safeStyleAssign(element.style, styles[key][selector]);
          }
        });
      });
    }
  }

  safeStyleAssign(targetStyle, sourceStyles) {
    if (!sourceStyles || typeof sourceStyles !== "object") return;

    // Only assign non-empty style properties
    for (const [prop, value] of Object.entries(sourceStyles)) {
      if (value !== undefined && value !== null && value !== "") {
        targetStyle[prop] = value;
      }
    }
  }

  doOtherThings() {
    const mainContent = document.getElementById("mainContent");
    if (mainContent) {
      mainContent.style.overflowY =
        mainContent.scrollHeight > mainContent.clientHeight ? "auto" : "hidden";
    }
  }
}
