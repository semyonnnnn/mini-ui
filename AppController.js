import { DomMap } from "./DomMap.js";
import { Renderer } from "./Renderer.js";
import { Video } from "./UI/Video.js";
import * as configs from "./configs/configs.js";
import * as styles from "./styles/styles.js";

export class AppController {
  constructor() {
    this.DomElements = new DomMap();
    this.navMenuMap = {};
    this.bindEvents();
    this.generateNavMenuMap();

    this.setupNatives();
  }

  setupNatives() {
    const { toggleCardHeaderLink } = this.DomElements;
    toggleCardHeaderLink.innerHTML = "";
    toggleCardHeaderLink.classList = "btn btn-primary btn-lg btn-block";
    toggleCardHeaderLink.textContent =
      "НАВИГАТОР ПО СДАЧЕ ОТЧЕТНОСТИ В ЭЛЕКТРОННОМ ВИДЕ";
  }

  bindEvents() {
    const {
      navMenu,
      menu_report,
      menu_moreInfo,
      trigger_menu_report,
      trigger_menu_moreInfo,
      secondaryMenu,
    } = this.DomElements;

    for (const key in this.DomElements) {
      if (key.startsWith("inner_")) {
        const element = this.DomElements[key];
        const configKey = key.replace("inner_", "") + "_config";
        element.addEventListener("click", () => {
          if (key !== "inner_tutorialVideos") {
            new Renderer(configs[configKey], "mainContent");
          } else {
            new Renderer(configs[configKey], "mainContent");
            //TODO: insert Video.js's instance here
            new Video();
          }
        });
      }
    }

    navMenu.addEventListener("mouseleave", () => {
      secondaryMenu.style.display = "none";
    });

    trigger_menu_report.addEventListener("mouseenter", () => {
      menu_report.style.display = styles.navMenu.li;
      secondaryMenu.style.display = "block";
    });

    trigger_menu_moreInfo.addEventListener("mouseenter", () => {
      menu_moreInfo.style.display = styles.navMenu.li;
      secondaryMenu.style.display = "block";
    });

    window.addEventListener("resize", this.updateOverflow.bind(this));
  }

  updateOverflow() {
    const { mainContent } = this.DomElements;
    mainContent.style.overflowY =
      mainContent.scrollHeight > mainContent.clientHeight ? "auto" : "hidden";
  }

  generateNavMenuMap() {
    this.DomElements.navMenu
      .querySelectorAll('[id^="menu"]')
      .forEach((item) => {
        this.navMenuMap[item.id] = [item.id.replace("trigger_", "")];
      });
  }
}
