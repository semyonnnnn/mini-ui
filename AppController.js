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
      inner_workspaceSetup,
      inner_tutorialVideos,
      inner_getSignature,
      inner_replaceSignature,
      inner_supportRegister,
      inner_offlineReport,
      inner_reportDigital,
      inner_getUserDocs,
      navMenu,
      menu_report,
      menu_moreInfo,
      trigger_menu_report,
      trigger_menu_moreInfo,
      secondaryMenu,
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
      const { tutorialVideos_update, tutorialVideos_export, video, canvas } =
        DomElements;

      const context = canvas.getContext("2d");

      console.log(context);

      video.addEventListener("play", () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        function drawFrame() {
          if (!video.paused && !video.ended) {
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            requestAnimationFrame(drawFrame);
          }
        }

        drawFrame();
      });

      video.play();

      tutorialVideos_export.addEventListener("click", () => {
        videos_export.style.display = "block";
        videos_update.style.display = "none";
        Object.assign(tutorialVideos_export.style, styles.activeButton);
        Object.assign(tutorialVideos_update.style, styles.inactiveButton);
        videos_update.pause();
      });

      tutorialVideos_update.addEventListener("click", () => {
        videos_update.style.display = "block";
        videos_export.style.display = "none";
        Object.assign(tutorialVideos_update.style, styles.activeButton);
        Object.assign(tutorialVideos_export.style, styles.inactiveButton);
        videos_export.pause();
      });
    });

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
