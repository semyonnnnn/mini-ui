import { Renderer } from "./Renderer.js";
import { config } from "./configs/modal-dom-config.js";
import { Menu } from "./Menu.js";
import { AppController } from "./AppController.js";
import { animations } from "./styles/helpers/style-functions.js";

(function runAfterEverything() {
  function waitForStableEnvironment(callback, tries = 50, interval = 100) {
    const isStable = () => {
      // Check if jQuery is present and DOM is fully ready
      const domReady = document.readyState === "complete";
      const jQueryFinished =
        typeof window.jQuery === "undefined" ||
        (typeof window.jQuery === "function" && window.jQuery.active === 0);
      return domReady && jQueryFinished;
    };

    const check = () => {
      if (isStable()) {
        setTimeout(callback, 0); // execute after stack clears
      } else if (tries > 0) {
        setTimeout(
          () => waitForStableEnvironment(callback, tries - 1, interval),
          interval
        );
      } else {
        console.warn(
          "Still initializing app, but environment may be unstable."
        );
        callback();
      }
    };

    check();
  }

  waitForStableEnvironment(() => {
    new Renderer(config, "toggle-card__main");
    new Menu();
    new AppController();
    animations();
  });
})();
