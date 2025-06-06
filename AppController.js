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
            const DomElements = new DomMap();
            const {
              tutorialVideos_update,
              tutorialVideos_export,
              video,
              canvas,
              pause,
              play,
              replay,
              progress,
              canvasCover,
            } = DomElements;

            const ctx = canvas.getContext("2d");

            video.addEventListener("ended", () => {
              pause.style.display = "none";
              play.style.display = "none";
              replay.style.display = "flex";
              progress.style.width = "100%";
            });

            function updateProgress() {
              if (!video.paused && !video.ended) {
                const percent = (video.currentTime / video.duration) * 100;
                progress.style.width = percent + "%";
                requestAnimationFrame(updateProgress);
              }
            }
            video.addEventListener("play", () => {
              // console.log("this video has been unpaused");
            });

            video.addEventListener("loadedmetadata", () => {
              // progress.style.width = "0";
              canvas.width = video.videoWidth;
              canvas.height = video.videoHeight;

              updateProgress();

              if (video.paused) {
                console.log("this video has been paused");
              }

              if (video.currentTime === video.duration) {
                console.log("video ended");
                pause.style.display = "none";
                play.style.display = "flex";
              }

              [pause, play, replay, canvasCover].forEach((element) => {
                element.addEventListener("click", () => {
                  if (video.paused || video.ended) {
                    pause.style.display = "flex";
                    play.style.display = "none";
                    replay.style.display = "none";

                    video.play();
                    requestAnimationFrame(updateProgress);
                    drawFrame();
                  } else {
                    pause.style.display = "none";
                    play.style.display = "flex";
                    video.pause();
                  }
                });
              });

              replay.addEventListener("click", () => {
                pause.style.display = "flex";
                [play, replay].forEach((el) => (el.style.display = "none"));
                drawFrame();
              });

              function drawFrame() {
                if (!video.paused && !video.ended) {
                  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

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
