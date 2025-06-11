import { DomMap } from "../DomMap.js";
import { hide, show } from "../styles/helpers/style-functions.js";
import * as styles from "../styles/video-styles.js";
import { videoSources } from "../media/videoSources.js";
import { assign } from "../styles/helpers/style-functions.js";

const progressBarHover = {
  height: ".5rem",
  cursor: "pointer",
  transition: "height 0.2s ease",
};

const progressBarNormal = {
  height: "0.18rem",
  transition: "height 0.2s ease",
};

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
      loading,
      allTime,
      currentTime,
      length,
      mouseCatcher,
    } = this.dom;

    this.mouseCatcher = mouseCatcher;
    this.length = length;
    this.allTime = allTime;
    this.currentTime = currentTime;
    this.loading = loading;
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
    this.shouldPlay = true;
    this.isSeeking = false;
    this.mouseX = 0;
    this.mouseY = 0;

    this.hoverRadius = 100000;

    this.handleVariables();

    this.ctx = this.canvas.getContext("2d");

    this.bindEvents();
    this.video.play();
  }

  handleVariables = () => {
    this.maxCanvas = document.createElement("canvas");
    this.maxCanvas.id = "maxCanvas";
    this.maxCtx = this.maxCanvas.getContext("2d");
    this.standardFrameRequest = null;
    this.fullscreenFrameRequest = null;
  };

  checkMouseProximity = (e) => {
    const rect = this.length.getBoundingClientRect();
    // Define how close mouse needs to be to trigger hover (in pixels)
    const hoverThreshold = 30;

    // Check if mouse is within threshold distance of progress bar
    const isNearProgressBar =
      e.clientX >= rect.left - hoverThreshold &&
      e.clientX <= rect.right + hoverThreshold &&
      e.clientY >= rect.top - hoverThreshold &&
      e.clientY <= rect.bottom + hoverThreshold;

    if (isNearProgressBar) {
      if (!this.progressBarHovered) {
        this.progressBarHovered = true;
        assign(this.length, progressBarHover);
        assign(this.progress, progressBarHover);
      }
    } else {
      if (this.progressBarHovered) {
        this.progressBarHovered = false;
        assign(this.length, progressBarNormal);
        assign(this.progress, progressBarNormal);
      }
    }
  };

  playVideo = () => {
    this.video.play();
    this.drawFrame();
    hide(this.play, this.replay);
    show(this.pause);
  };

  blackRectangle = () => {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  bindEvents() {
    // With this:
    window.addEventListener("mousemove", (e) => {
      this.checkMouseProximity(e);
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      // Keep your existing seeking logic
      if (this.isSeeking) {
        const rect = this.length.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clampedX = Math.max(0, Math.min(x, this.length.offsetWidth));
        const percent = clampedX / this.length.offsetWidth;
        this.video.currentTime = percent * this.video.duration;
      }
    });

    this.length.addEventListener("mouseleave", () => {
      assign(this.length, progressBarNormal);
      assign(this.progress, progressBarNormal);
    });

    this.length.addEventListener("mousedown", (e) => {
      this.isSeeking = true;
      this.video.currentTime =
        (this.video.duration * e.offsetX) / this.length.offsetWidth;
      this.video.pause();
      this.shouldPlay = false;
    });

    document.addEventListener("mouseup", (e) => {
      if (this.isSeeking) {
        this.playVideo();
        this.isSeeking = false;
      }
    });

    window.addEventListener("mousemove", (e) => {
      if (this.isSeeking) {
        const rect = this.length.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clampedX = Math.max(0, Math.min(x, this.length.offsetWidth));
        const percent = clampedX / this.length.offsetWidth;
        this.video.currentTime = percent * this.video.duration;
      }
    });

    const buttons = (active, inactive) => {
      assign(active, styles.activeButton);
      assign(inactive, styles.inactiveButton);
      this.video.src = videoSources[active.id];
      this.playVideo();
    };

    this.video.addEventListener("playing", () => {
      assign(this.loading, styles.loadingDone);
    });

    this.video.addEventListener("canplay", () => {
      !this.video.ended && this.shouldPlay && this.playVideo();
    });

    this.tutorialVideos_export.addEventListener("click", () => {
      this.blackRectangle();
      buttons(this.tutorialVideos_export, this.tutorialVideos_update);
    });

    this.tutorialVideos_update.addEventListener("click", () => {
      this.blackRectangle();
      buttons(this.tutorialVideos_update, this.tutorialVideos_export);
    });

    this.video.addEventListener("waiting", () => {
      if (this.shouldPlay) {
        this.progress.style.width = "0%";
        this.onVideoPaused();
        assign(this.loading, styles.loadingActive);
      }
    });

    this.video.addEventListener("ended", () => this.onVideoEnded());

    window.addEventListener("keydown", (e) => {
      if (!document.body.contains(this.maxCanvas)) {
        e.key === "f" && this.maxVideo();
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
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        this.video.currentTime -= 5;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        this.video.currentTime += 5;
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
    this.manageTime(this.currentTime, this.video.currentTime);
    requestAnimationFrame(this.updateProgress);
  };

  manageTime = (target, time) => {
    const rawTime = Math.floor(time);
    const rawMinutes = Math.floor(rawTime / 60);
    const minutes =
      rawMinutes.toString().length === 1 ? "0" + rawMinutes : rawMinutes;
    const rawSeconds = rawTime % 60;
    const seconds =
      rawSeconds.toString().length === 1 ? "0" + rawSeconds : rawSeconds;
    target.textContent = minutes + ":" + seconds;
  };

  onLoadedMetadata() {
    this.manageTime(this.allTime, this.video.duration);

    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;
    assign(this.loading, styles.loadingDone);
    this.playVideo();

    this.updateProgress();

    if (!this._eventsBound) {
      [this.pause, this.play, this.replay, this.canvasCover].forEach(
        (element) => {
          element.addEventListener("click", () => this.togglePlayPause());
        }
      );

      this.replay.addEventListener("click", () => this.playVideo());

      this._eventsBound = true;
    }

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

  drawFrame = () => {
    if (!this.video.paused && !this.video.ended) {
      this.ctx.drawImage(
        this.video,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.standardFrameRequest = requestAnimationFrame(this.drawFrame);
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

    if (this.fullscreenFrameRequest) {
      cancelAnimationFrame(this.fullscreenFrameRequest);
      this.fullscreenFrameRequest = null;
    }

    if (!this.video.paused && !this.video.ended) {
      this.drawFrame();
    }
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
    this.fullscreenFrameRequest = requestAnimationFrame(this.drawFullScreen);
  };

  maxVideo() {
    if (this.standardFrameRequest) {
      cancelAnimationFrame(this.standardFrameRequest);
      this.standardFrameRequest = null;
    }

    assign(this.maxCanvas, styles.maxCanvas);

    this.resizeCanvas();
    document.body.appendChild(this.maxCanvas);
    document.body.style.overflow = "hidden";

    this.drawFullScreen();

    window.addEventListener("resize", this.resizeCanvas);

    window.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Escape") {
          this.returnStandardSize();
        }
      },
      { once: true }
    );

    this.maxCanvas.addEventListener(
      "dblclick",
      () => {
        this.returnStandardSize();
      },
      { once: true }
    );
  }
}

export { Video };
