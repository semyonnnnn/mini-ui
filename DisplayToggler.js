class DisplayToggler {
  hide(element) {
    if (element) {
      element.style.display = "none";
    }
  }
  show(element) {
    if (element) {
      Object.assign(element.style, {
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        padding: "0 10px",
      });
    }
  }
}

export { DisplayToggler };
