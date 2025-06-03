import { DomMap } from "./DomMap.js";
import { Renderer } from "./Renderer.js";
import * as configs from "./configs/configs.js";
import * as styles from "./styles/styles.js";

export class AppController {
  constructor() {
    this.DomElements = new DomMap();
    this.navMenuMap = {};
    this.bindEvents();
    this.generateNavMenuMap();
  }

  bindEvents() {
    const {
      inner_workspaceSetup,
      inner_tutorialVideos,
      inner_getSignature,
      inner_replaceSignature,
      inner_supportRegister,
      inner_offlineReport,
      inner_reportDigital,
      inner_getUserDocs,
      navMenu,
      secondaryMenu,
      modal,
      mainContent,
    } = this.DomElements;

    inner_workspaceSetup.addEventListener("click", () => {
      new Renderer(configs.workspaceSetup_config, "mainContent");
    });

    inner_getSignature.addEventListener("click", () => {
      new Renderer(configs.getSignature_config, "mainContent");
    });

    inner_replaceSignature.addEventListener("click", () => {
      new Renderer(configs.replaceSignature_config, "mainContent");
    });
    inner_supportRegister.addEventListener("click", () => {
      new Renderer(configs.supportRegister_config, "mainContent");
    });

    inner_offlineReport.addEventListener("click", () => {
      new Renderer(configs.offlineReport_config, "mainContent");
    });
    inner_reportDigital.addEventListener("click", () => {
      new Renderer(configs.reportDigital_config, "mainContent");
    });
    inner_getUserDocs.addEventListener("click", () => {
      new Renderer(configs.getUserDocs_config, "mainContent");
    });

    inner_tutorialVideos.addEventListener("click", () => {
      new Renderer(configs.tutorialVideos_config, "mainContent");
      const DomElements = new DomMap();
      const {
        tutorialVideos_renew,
        tutorialVideos_export,
        videos_export,
        videos_renew,
      } = DomElements;
      tutorialVideos_export.addEventListener("click", () => {
        console.log(videos_export);
        videos_export.style.display = "block";
        videos_renew.style.display = "none";
        Object.assign(tutorialVideos_export.style, styles.activeButton);
        Object.assign(tutorialVideos_renew.style, styles.inactiveButton);
        videos_renew.pause();
      });
      tutorialVideos_renew.addEventListener("click", () => {
        console.log(videos_export);
        videos_renew.style.display = "block";
        videos_export.style.display = "none";
        Object.assign(tutorialVideos_renew.style, styles.activeButton);
        Object.assign(tutorialVideos_export.style, styles.inactiveButton);
        videos_export.pause();
      });
    });

    navMenu.addEventListener("mouseleave", () => {
      secondaryMenu.style.display = "none";
    });

    navMenu.addEventListener("mouseenter", () => {
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
