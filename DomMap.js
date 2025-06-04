import {
  config,
  tutorialVideos_config,
  workspaceSetup_config,
} from "./configs/configs.js";

import { nativeByClasses } from "./configs/native-elements.js";

//TODO: merge this into 1 line via changing method, turning those into array
class DomMap {
  constructor() {
    // Apply elements from configs
    [config, tutorialVideos_config, workspaceSetup_config].forEach((conf) => {
      Object.assign(this, this.getDomElementsById(conf));
    });
    this.getNativesByClasses(nativeByClasses);
  }

  getNativesByClasses = () => {
    for (const key in nativeByClasses) {
      Object.assign(this, {
        [key]: document.querySelector(nativeByClasses[key]),
      });
    }
  };

  getDomElementsById(items, object = {}) {
    for (const key in items) {
      const element = items[key];
      const el = document.getElementById(key);
      if (el) object[key] = el;
      if (element.hasOwnProperty("children")) {
        this.getDomElementsById(element.children, object);
      }
    }

    return object;
  }
}

export { DomMap };
