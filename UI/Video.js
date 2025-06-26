import { DomMap } from "../DomMap.js";
import { hide, show } from "../styles/helpers/style-functions.js";
import * as styles from "../styles/video-styles.js";
import { videoSources } from "../media/videoSources.js";
import { assign } from "../styles/helpers/style-functions.js";

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
      controlsWrapper,
      lengthWrapper,
      videosPlayer,
      soundTrack,
      soundProgress,
      sound,
      halfSound,
      mute,
    } = this.dom;
    this.sound = sound;
    this.halfSound = halfSound;
    this.mute = mute;
    this.soundTrack = soundTrack;
    this.lengthWrapper = lengthWrapper;
    this.controlsWrapper = controlsWrapper;
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
    this.isSeekingSound = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.videosPlayer = videosPlayer;
    this.inside;
    this.wasPaused;
    this.soundProgress = soundProgress;

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

  playVideo = () => {
    this.wasPaused = false;
    this.video.play();
    this.drawFrame();
    hide(this.play, this.replay);
    show(this.pause);
  };

  blackRectangle = () => {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  bindEvents() {
    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      const rect1 = this.canvas.getBoundingClientRect();
      const rect2 = this.controlsWrapper.getBoundingClientRect();
      const rect3 = this.lengthWrapper.getBoundingClientRect();

      // Union box
      const top = Math.min(rect1.top, rect2.top, rect3.top);
      const left = Math.min(rect1.left, rect2.left, rect3.left);
      const bottom = Math.max(rect1.bottom, rect2.bottom, rect3.bottom);
      const right = Math.max(rect1.right, rect2.right, rect3.right);

      this.inside =
        e.clientX >= left &&
        e.clientX <= right &&
        e.clientY >= top &&
        e.clientY <= bottom;

      if (!this.inside && !this.video.paused && !this.video.ended) {
        assign(this.controlsWrapper, { opacity: "0" });
        assign(this.lengthWrapper, { opacity: "0" });
      } else {
        assign(this.controlsWrapper, { opacity: "100%" });
        assign(this.lengthWrapper, { opacity: "100%" });
      }

      if (this.isSeeking) {
        const rect = this.length.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const clampedX = Math.max(0, Math.min(x, this.length.offsetWidth));
        const percent = clampedX / this.length.offsetWidth;
        this.video.currentTime = percent * this.video.duration;
      }

      if (this.isSeekingSound) {
        const soundRect = this.soundTrack.getBoundingClientRect();
        const soundX = e.clientX - soundRect.left;
        const clampedSoundX = Math.max(
          0,
          Math.min(soundX, this.soundTrack.offsetWidth)
        );
        const soundPercent = (this.video.volume =
          clampedSoundX / this.soundTrack.offsetWidth);
        this.updateSound(soundPercent);
      }
    });

    this.length.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.isSeeking = true;
      this.video.currentTime =
        (this.video.duration * e.offsetX) / this.length.offsetWidth;
      this.video.pause();
      this.shouldPlay = false;
    });

    this.soundTrack.addEventListener("mousedown", (e) => {
      e.preventDefault();
      this.isSeekingSound = true;
      this.video.volume = e.offsetX / this.soundTrack.offsetWidth;
      this.updateSound(this.video.volume);
    });

    window.addEventListener("mouseup", (e) => {
      this.drawFrame();
      if (this.isSeeking) {
        if (!this.wasPaused) {
          this.playVideo();
        }

        this.isSeeking = false;

        assign(this.length, { height: ".18rem" });
        assign(this.progress, { height: ".18rem" });
      }

      if (this.isSeekingSound) {
        this.isSeekingSound = false;
      }
    });

    this.mouseCatcher.addEventListener("mouseenter", () => {
      if (this.mouseCatcher.matches(":hover")) {
        assign(this.length, { height: ".5rem" });
        assign(this.progress, { height: ".5rem" });
      }
    });

    this.mouseCatcher.addEventListener("mouseleave", () => {
      if (!this.mouseCatcher.matches(":hover") && !this.isSeeking) {
        assign(this.length, { height: ".18rem" });
        assign(this.progress, { height: ".18rem" });
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

    this.video.addEventListener("volumechange", () => {
      // console.log(this.video.volume);
      if (this.video.volume === 0) {
        assign(this.mute, { display: "flex" });
        assign(this.sound, { display: "none" });
        assign(this.halfSound, { display: "none" });
      } else if (this.video.volume > 0 && this.video.volume < 0.5) {
        assign(this.mute, { display: "none" });
        assign(this.sound, { display: "none" });
        assign(this.halfSound, { display: "flex" });
      } else {
        assign(this.mute, { display: "none" });
        assign(this.sound, { display: "flex" });
        assign(this.halfSound, { display: "none" });
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
        e.preventDefault();
        this.video.pause();
        this.wasPaused = true;
        hide(this.pause, this.replay);
        show(this.play);
      } else if (this.video.paused && e.key === " ") {
        e.preventDefault();
        this.playVideo();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (this.wasPaused) {
          this.video.currentTime -= 5;
          this.video.pause();
        } else {
          this.video.currentTime -= 5;
        }
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();

        if (this.wasPaused) {
          this.video.currentTime += 5;
          this.video.pause();
        } else {
          this.video.currentTime += 5;
        }
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (this.video.volume <= 0.8) {
          this.video.volume += 0.2;
          this.updateSound(this.video.volume);
        } else {
          this.video.volume = 1;
          this.updateSound(this.video.volume);
        }
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (this.video.volume >= 0.2) {
          this.video.volume -= 0.2;
          this.updateSound(this.video.volume);
        } else {
          this.video.volume = 0;
          this.updateSound(0);
        }
      }
    });

    this.video.addEventListener("loadedmetadata", () =>
      this.onLoadedMetadata()
    );

    this.canvasCover.addEventListener("dblclick", () => this.maxVideo());
    this.maximize.addEventListener("click", () => this.maxVideo());
  }

  onVideoPaused = () => {
    assign(this.controlsWrapper, { opacity: "100%" });
    assign(this.lengthWrapper, { opacity: "100%" });
    hide(this.pause);
    show(this.play);

    this.wasPaused = true;
    this.video.pause();
  };

  onVideoEnded() {
    assign(this.controlsWrapper, { opacity: "100%" });
    assign(this.lengthWrapper, { opacity: "100%" });
    hide(this.pause, this.play);
    show(this.replay);
  }

  updateProgress = () => {
    const percent = (this.video.currentTime / this.video.duration) * 100;
    this.progress.style.width = percent + "%";
    this.manageTime(this.currentTime, this.video.currentTime);
    requestAnimationFrame(this.updateProgress);
  };

  updateSound = (percent) => {
    this.soundProgress.style.width = percent * 100 + "%";
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

      this.wasPaused = true;
      this.video.pause();
    }
  }

  drawFrame = () => {
    this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
    this.standardFrameRequest = requestAnimationFrame(this.drawFrame);
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
