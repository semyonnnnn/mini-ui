import * as styles from "./styles/styles.js";

export class Renderer {
  constructor(config, key) {
    this.buildThings(config, key);
    this.doOtherThings();
  }

  buildThings(config, key) {
    const parent =
      typeof key === "string"
        ? document.getElementById(key) ?? document.querySelector("." + key)
        : key;

    if (!parent) {
      console.error(`No parent with id/class of [${key}] found in the DOM.`);
      return;
    }

    !parent.classList.contains("btn-in-row") && (parent.innerHTML = "");

    for (const key in config) {
      if (!config.hasOwnProperty(key)) continue;

      const item = config[key];
      const el = document.createElement(item.html);
      el.id = key;

      if (styles[key]) {
        const style = styles[key].self ?? styles[key];
        Object.assign(el.style, style);
      }

      for (const property in item) {
        if (property !== "children" && property !== "html") {
          if (property in el) {
            el[property] = item[property];
          } else {
            el.setAttribute(property, item[property]);
          }
        }
      }

      parent.appendChild(el);

      if (item.children) {
        this.buildThings(item.children, el);
      }
    }
  }

  doOtherThings() {
    const applyStylesQSA = (parent, selector, styles) => {
      if (parent && selector && styles) {
        parent.querySelectorAll(selector).forEach((element) => {
          Object.assign(element.style, styles);
        });
      }
    };

    applyStylesQSA(document, "li", styles.document.li);
    applyStylesQSA(document, "a", styles.document.a);

    const imgBox =
      document.getElementById("imgBox") || document.querySelector(".imgBox");
    if (imgBox) {
      applyStylesQSA(imgBox, "div", styles.imgBox.div);
      applyStylesQSA(imgBox, "img", styles.imgBox.img);
      applyStylesQSA(imgBox, "p", styles.imgBox.p);
    }

    // Handle mainContent overflow
    const mainContent =
      document.getElementById("mainContent") ||
      document.querySelector(".mainContent");
    if (mainContent) {
      mainContent.style.overflowY =
        mainContent.scrollHeight > mainContent.clientHeight ? "auto" : "hidden";
    }
  }
}
