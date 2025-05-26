export function render(key, config) {
  const parent =
    document.getElementById(key) ?? document.querySelector("." + key);
  console.log(parent);
  if (!parent) {
    console.error(`No parent with id/classes of [${key}] found in the DOM.`);
    return;
  }

  function buildThings(config, parent) {
    !parent.classList.contains("btn-in-row") && (parent.innerHTML = "");
    for (const key in config) {
      if (!config.hasOwnProperty(key)) continue;

      const item = config[key];

      const el = document.createElement(item.html);
      el.id = key;

      for (const property in item) {
        if (property !== "children") {
          el[property] = item[property];
        }
      }
      parent.appendChild(el);

      if (item.children) {
        buildThings(item.children, el);
      }
    }
  }

  buildThings(config, parent);
}
