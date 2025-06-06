import DomMap from "./DomMap.js";

class Video {
  constructor() {
    this.dom = new DomMap();

    // Destructure elements for convenience
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

    this.ctx = this.canvas.getContext("2d");

    this.bindEvents();
    this.video.play();
  }

  bindEvents() {
    this.video.addEventListener("ended", () => this.onVideoEnded());

    this.video.addEventListener("play", () => {
      // console.log("Video started");
    });

    this.video.addEventListener("loadedmetadata", () =>
      this.onLoadedMetadata()
    );

    this.maximize.addEventListener("click", () => this.onMaximizeClick());

    this.tutorialVideos_export.addEventListener("click", () =>
      this.onExportClick()
    );
    this.tutorialVideos_update.addEventListener("click", () =>
      this.onUpdateClick()
    );
  }

  onVideoEnded() {
    this.pause.style.display = "none";
    this.play.style.display = "none";
    this.replay.style.display = "flex";
    this.progress.style.width = "100%";
  }

  updateProgress = () => {
    if (!this.video.paused && !this.video.ended) {
      const percent = (this.video.currentTime / this.video.duration) * 100;
      this.progress.style.width = percent + "%";
      requestAnimationFrame(this.updateProgress);
    }
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
      this.pause.style.display = "none";
      this.play.style.display = "flex";
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
      this.pause.style.display = "flex";
      this.play.style.display = "none";
      this.replay.style.display = "none";

      this.video.play();
      requestAnimationFrame(this.updateProgress);
      this.drawFrame();
    } else {
      this.pause.style.display = "none";
      this.play.style.display = "flex";
      this.video.pause();
    }
  }

  onReplayClick() {
    this.pause.style.display = "flex";
    [this.play, this.replay].forEach((el) => (el.style.display = "none"));
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

  onMaximizeClick() {
    const maxCanvas = document.createElement("canvas");
    const maxCtx = maxCanvas.getContext("2d");

    Object.assign(maxCanvas.style, {
      zIndex: "9999",
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
      cursor: "pointer",
    });

    const resizeCanvas = () => {
      maxCanvas.width = window.innerWidth;
      maxCanvas.height = window.innerHeight;
    };

    resizeCanvas();
    document.body.appendChild(maxCanvas);

    // Hide scrollbars & prevent scrolling
    document.body.style.overflow = "hidden";

    const drawFullScreen = () => {
      const canvasW = maxCanvas.width;
      const canvasH = maxCanvas.height;

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

      maxCtx.clearRect(0, 0, canvasW, canvasH);
      maxCtx.drawImage(this.video, x, y, drawWidth, drawHeight);
      requestAnimationFrame(drawFullScreen);
    };

    window.addEventListener("resize", resizeCanvas);

    drawFullScreen();

    maxCanvas.addEventListener("click", () => {
      maxCanvas.remove();
      window.removeEventListener("resize", resizeCanvas);

      // Restore scrollbars & scrolling
      document.body.style.overflow = "";
    });
  }

  onExportClick() {
    this.dom.videos_export.style.display = "block";
    this.dom.videos_update.style.display = "none";

    Object.assign(this.tutorialVideos_export.style, styles.activeButton);
    Object.assign(this.tutorialVideos_update.style, styles.inactiveButton);

    this.dom.videos_update.pause();
  }

  onUpdateClick() {
    this.dom.videos_update.style.display = "block";
    this.dom.videos_export.style.display = "none";

    Object.assign(this.tutorialVideos_update.style, styles.activeButton);
    Object.assign(this.tutorialVideos_export.style, styles.inactiveButton);

    this.dom.videos_export.pause();
  }
}

export { Video };
