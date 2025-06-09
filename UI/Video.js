import { DomMap } from "../DomMap.js";
import { hide, show } from "../styles/helpers/style-functions.js";
import * as styles from "../styles/video-styles.js";

class Video {
  constructor() {
    this.dom = new DomMap();

    const {
      tutorialVideos_update,
      tutorialVideos_export,
      video,
      canvas,
      pause,
      play,
      replay,
      maximize,
      progress,
      canvasCover,
    } = this.dom;

    this.tutorialVideos_update = tutorialVideos_update;
    this.tutorialVideos_export = tutorialVideos_export;
    this.video = video;
    this.canvas = canvas;
    this.pause = pause;
    this.play = play;
    this.replay = replay;
    this.maximize = maximize;
    this.progress = progress;
    this.canvasCover = canvasCover;

    this.handleVariables();

    this.ctx = this.canvas.getContext("2d");

    this.bindEvents();
    this.video.play();
  }

  handleVariables = () => {
    this.maxCanvas = document.createElement("canvas");
    this.maxCanvas.id = "maxCanvas";
    this.maxCtx = this.maxCanvas.getContext("2d");
  };

  playVideo = () => {
    hide(this.play, this.replay);
    show(this.pause);
    this.video.play();
    this.drawFrame();
  };

  onKeyDown = () => {};

  bindEvents() {
    this.video.addEventListener("ended", () => this.onVideoEnded());
    window.addEventListener("keydown", (e) => {
      if (!document.body.contains(this.maxCanvas)) {
        e.key === "f" && this.maxVideo();
        window.removeEventListener("keydown");
      } else {
        if (e.key === "f") {
          this.returnStandardSize();
        }
      }
      if (e.key === " " && !this.video.paused) {
        this.video.pause();
        hide(this.pause, this.replay);
        show(this.play);
      } else if (this.video.paused && e.key === " ") {
        this.playVideo();
      }
    });
    this.video.addEventListener("loadedmetadata", () =>
      this.onLoadedMetadata()
    );

    this.canvasCover.addEventListener("dblclick", () => this.maxVideo());
    this.maximize.addEventListener("click", () => this.maxVideo());
  }

  onVideoPaused = () => {
    hide(this.pause);
    show(this.play);
    this.video.pause();
  };

  onVideoEnded() {
    hide(this.pause, this.play);
    show(this.replay);
  }

  updateProgress = () => {
    const percent = (this.video.currentTime / this.video.duration) * 100;
    this.progress.style.width = percent + "%";
    requestAnimationFrame(this.updateProgress);
  };

  onLoadedMetadata() {
    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;

    this.updateProgress();

    if (this.video.paused) {
      console.log("Video paused");
    }

    if (this.video.currentTime === this.video.duration) {
      console.log("Video ended");
      hide(this.pause);
      show(this.play);
    }

    [this.pause, this.play, this.replay, this.canvasCover].forEach(
      (element) => {
        element.addEventListener("click", () => this.togglePlayPause());
      }
    );

    this.replay.addEventListener("click", () => this.onReplayClick());

    this.drawFrame();
  }

  togglePlayPause() {
    if (this.video.paused || this.video.ended) {
      show(this.pause);
      hide(this.play, this.replay);

      this.video.play();
      this.drawFrame();
    } else {
      hide(this.pause);
      show(this.play);
      this.video.pause();
    }
  }

  onReplayClick() {
    show(this.pause);
    hide(this.play, this.replay);
    this.drawFrame();
  }

  drawFrame = () => {
    if (!this.video.paused && !this.video.ended) {
      this.ctx.drawImage(
        this.video,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      requestAnimationFrame(this.drawFrame);
    }
  };

  resizeCanvas = () => {
    this.maxCanvas.width = window.innerWidth;
    this.maxCanvas.height = window.innerHeight;
  };

  returnStandardSize = () => {
    this.maxCanvas.remove();
    window.removeEventListener("resize", this.resizeCanvas);

    document.body.style.overflow = "";
  };

  drawFullScreen = () => {
    const canvasW = this.maxCanvas.width;
    const canvasH = this.maxCanvas.height;

    const videoW = this.video.videoWidth;
    const videoH = this.video.videoHeight;

    const videoAspect = videoW / videoH;
    const canvasAspect = canvasW / canvasH;

    let drawWidth, drawHeight;

    if (videoAspect > canvasAspect) {
      drawWidth = canvasW;
      drawHeight = canvasW / videoAspect;
    } else {
      drawHeight = canvasH;
      drawWidth = canvasH * videoAspect;
    }

    const x = (canvasW - drawWidth) / 2;
    const y = (canvasH - drawHeight) / 2;

    this.maxCtx.clearRect(0, 0, canvasW, canvasH);
    this.maxCtx.drawImage(this.video, x, y, drawWidth, drawHeight);
    requestAnimationFrame(this.drawFullScreen);
  };

  maxVideo() {
    Object.assign(this.maxCanvas.style, styles.maxCanvas);

    this.resizeCanvas();
    document.body.appendChild(this.maxCanvas);

    document.body.style.overflow = "hidden";

    this.drawFullScreen();

    window.addEventListener("resize", this.resizeCanvas);

    this.drawFullScreen();

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.returnStandardSize();
      }
    });

    this.maxCanvas.addEventListener("dblclick", () => {
      this.returnStandardSize();
    });
  }
}

export { Video };
