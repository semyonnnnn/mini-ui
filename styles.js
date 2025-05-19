import * as styles from "./styles/styles.js";
import { DomElements } from "./Dom.js";
const keysToStyle = [
  "wrapper",
  "modal",
  "closeButton",
  "before",
  "after",
  "navMenu",
  "menuWrapper",
  "mainNavMenu",
  "secondaryMenu",
  "mainContent",
  "imgBox",
];

const applyStyles = (element, styles) => {
  if (element && styles) {
    Object.assign(element.style, styles);
  }
  return;
};

keysToStyle.forEach((key) => {
  applyStyles(DomElements[key], styles[key]);
});

const applyStylesQSA = (parent, element, styles) => {
  if ((parent, element && styles)) {
    parent.querySelectorAll(element).forEach((element) => {
      applyStyles(element, styles);
    });
  }
  return;
};

applyStylesQSA(document, "li", styles.listItems);
applyStylesQSA(secondaryMenu, "li", styles.secondaryMenu_li);
applyStylesQSA(imgBox, "div", styles.imgBox_div);
applyStylesQSA(imgBox, "img", styles.imgBox_img);
applyStylesQSA(imgBox, "p", styles.imgBox_p);

setTimeout(() => {
  mainContent.style.overflowY =
    mainContent.scrollHeight > mainContent.clientHeight ? "auto" : "hidden";
}, 0);
