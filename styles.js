import * as styles from "./styles/styles.js";
import { DomMap } from "./DomMap.js";

export const doStyles = () => {
  const DomElements = new DomMap();

  console.log(DomElements);

  const applyStyles = (element, styles) => {
    if (element && styles) {
      Object.assign(element.style, styles);
    }
    return;
  };

  for (const key in DomElements) {
    if (styles[key]) {
      const style = styles[key].self ?? styles[key];
      applyStyles(DomElements[key], style);
    }
  }

  const applyStylesQSA = (parent, element, styles) => {
    if ((parent, element && styles)) {
      parent.querySelectorAll(element).forEach((element) => {
        applyStyles(element, styles);
      });
    }
    return;
  };

  applyStylesQSA(document, "li", styles.document.li);
  applyStylesQSA(document, "a", styles.document.a);
  applyStylesQSA(imgBox, "div", styles.imgBox.div);
  applyStylesQSA(imgBox, "img", styles.imgBox.img);
  applyStylesQSA(imgBox, "p", styles.imgBox.p);

  setTimeout(() => {
    mainContent.style.overflowY =
      mainContent.scrollHeight > mainContent.clientHeight ? "auto" : "hidden";
  }, 0);
};
