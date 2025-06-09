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
