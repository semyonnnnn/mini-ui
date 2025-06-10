export const hide = (...elements) => {
  elements.forEach((el) => {
    el.style.display = "none";
  });
};

export const show = (...elements) => {
  elements.forEach((el) => {
    el.style.display = "flex";
  });
};

export const assign = (element, styles) => {
  Object.assign(element.style, styles);
};

export const animations = () => {
  const style = document.createElement("style");
  style.textContent = `
  @keyframes spinJS {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`;
  document.head.appendChild(style);
};
