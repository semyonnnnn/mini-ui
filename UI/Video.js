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
      allControlsWrapper,
    } = this.dom;

    this.allControlsWrapper = allControlsWrapper;
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
    this.soundProgress = soundProgress;
    this.hasEnteredOrTimedOut = false;
    this.timeoutId;
    this.timeoutTime = 3300;
    this.arrayOfSoundControls = [this.mute, this.sound, this.halfSound];
    this.arrayOfPlayButtons = [this.play, this.pause, this.replay];

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

  // =====================
  // EVENT HANDLERS
  // =====================

  handleMouseMove = (e) => {
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

    if (this.hasEnteredOrTimedOut && !this.isSeeking && !this.isSeekingSound) {
      if (!this.inside && !this.video.paused && !this.video.ended) {
        this.hideControls();
      } else {
        this.showControls();
      }
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
  };

  handleLengthMouseDown = (e) => {
    e.preventDefault();
    this.isSeeking = true;
    this.wasPaused = this.video.paused;
    this.video.currentTime =
      (this.video.duration * e.offsetX) / this.length.offsetWidth;
    this.video.pause();
    this.shouldPlay = false;
  };

  handleSoundTrackMouseDown = (e) => {
    e.preventDefault();
    this.isSeekingSound = true;
    this.video.volume = e.offsetX / this.soundTrack.offsetWidth;
    this.updateSound(this.video.volume);
  };

  handleWindowMouseUp = (e) => {
    this.drawFrame();
    if (this.isSeeking) {
      if (!this.wasPaused) {
        this.playVideo();
      }

      this.isSeeking = false;
      this.progressHeight(".18rem");
    }

    if (this.isSeekingSound) {
      this.isSeekingSound = false;
    }
  };

  handleMouseCatcherMouseEnter = () => {
    if (this.mouseCatcher.matches(":hover")) {
      this.progressHeight(".5rem");
    }
  };

  handleMouseCatcherMouseLeave = () => {
    if (!this.mouseCatcher.matches(":hover") && !this.isSeeking) {
      this.progressHeight(".18rem");
    }
  };

  handleKeyDown = (e) => {
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
      this.flexThisHideAll(this.arrayOfPlayButtons, this.play);
    } else if (this.video.paused && e.key === " ") {
      e.preventDefault();
      this.playVideo();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      this.showControlsTemporarily();

      if (this.replay.style.display == "flex") {
        this.flexThisHideAll(this.arrayOfPlayButtons, this.play);
      }
      if (this.wasPaused) {
        this.video.currentTime -= 5;
        this.video.pause();
      } else {
        this.video.currentTime -= 5;
      }
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      this.showControlsTemporarily();

      const wasEnded = this.video.ended;

      this.video.currentTime += 5;

      if (this.wasPaused) {
        this.video.pause();
      }

      if (
        wasEnded ||
        Math.floor(this.video.currentTime) >= Math.floor(this.video.duration)
      ) {
        this.shouldPlay = false;
        this.flexThisHideAll(this.arrayOfPlayButtons, this.replay);
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      this.showControlsTemporarily();

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
      this.showControlsTemporarily();

      if (this.video.volume >= 0.2) {
        this.video.volume -= 0.2;
        this.updateSound(this.video.volume);
      } else {
        this.video.volume = 0;
        this.updateSound(0);
      }
    }
  };

  // =====================
  // BIND/UNBIND METHODS
  // =====================

  bindMouseEvents = () => {
    window.addEventListener("mousemove", this.handleMouseMove);
    this.length.addEventListener("mousedown", this.handleLengthMouseDown);
    this.soundTrack.addEventListener(
      "mousedown",
      this.handleSoundTrackMouseDown
    );
    window.addEventListener("mouseup", this.handleWindowMouseUp);
    this.mouseCatcher.addEventListener(
      "mouseenter",
      this.handleMouseCatcherMouseEnter
    );
    this.mouseCatcher.addEventListener(
      "mouseleave",
      this.handleMouseCatcherMouseLeave
    );
  };

  unbindMouseEvents = () => {
    window.removeEventListener("mousemove", this.handleMouseMove);
    this.length.removeEventListener("mousedown", this.handleLengthMouseDown);
    this.soundTrack.removeEventListener(
      "mousedown",
      this.handleSoundTrackMouseDown
    );
    window.removeEventListener("mouseup", this.handleWindowMouseUp);
    this.mouseCatcher.removeEventListener(
      "mouseenter",
      this.handleMouseCatcherMouseEnter
    );
    this.mouseCatcher.removeEventListener(
      "mouseleave",
      this.handleMouseCatcherMouseLeave
    );
  };

  bindKeyboardEvents = () => {
    window.addEventListener("keydown", this.handleKeyDown);
  };

  unbindKeyboardEvents = () => {
    window.removeEventListener("keydown", this.handleKeyDown);
  };

  bindEvents = () => {
    this.bindMouseEvents();
    this.bindKeyboardEvents();

    setTimeout(() => {
      this.hasEnteredOrTimedOut = true;
      this.hideControls();
    }, this.timeoutTime);

    this.video.addEventListener("volumechange", () => {
      if (this.video.volume === 0) {
        this.flexThisHideAll(this.arrayOfSoundControls, this.mute);
      } else if (this.video.volume > 0 && this.video.volume < 0.5) {
        this.flexThisHideAll(this.arrayOfSoundControls, this.halfSound);
      } else {
        this.flexThisHideAll(this.arrayOfSoundControls, this.sound);
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

    this.video.addEventListener("loadedmetadata", () =>
      this.onLoadedMetadata()
    );

    this.canvasCover.addEventListener("dblclick", () => this.maxVideo());
  };

  // =====================
  // OTHER METHODS (unchanged)
  // =====================

  playVideo = () => {
    this.wasPaused = false;
    this.video.play();
    this.drawFrame();
    this.flexThisHideAll(this.arrayOfPlayButtons, this.pause);
  };

  blackRectangle = () => {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  manageControls = (percent) => {
    [this.controlsWrapper, this.lengthWrapper].forEach((el) => {
      assign(el, { opacity: percent + "%" });
    });
  };

  showControls = () => {
    this.manageControls(100);
  };

  hideControls = () => {
    this.manageControls(0);
  };

  doDynamicStyles = (array, target, styles) => {
    array.forEach((el) => {
      const styleSet =
        target == null
          ? styles.all
          : el === target
          ? styles.target
          : styles.others;
      assign(el, styleSet);
    });
  };

  flexThisHideAll = (array, element) => {
    this.doDynamicStyles(array, element, {
      target: { display: "flex" },
      others: { display: "none" },
    });
  };

  progressHeight = (style) => {
    this.doDynamicStyles([this.length, this.progress], null, {
      all: { height: style },
    });
  };

  showControlsTemporarily = () => {
    this.hasEnteredOrTimedOut = false;
    this.showControls();
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.hasEnteredOrTimedOut = true;
      this.hideControls();
    }, this.timeoutTime);
  };

  onVideoPaused = () => {
    this.showControls();
    if (!this.video.ended) {
      this.flexThisHideAll(this.arrayOfPlayButtons, this.play);
    }

    this.wasPaused = true;
    this.video.pause();
  };

  onVideoEnded() {
    this.showControls();
    this.flexThisHideAll(this.arrayOfPlayButtons, this.replay);
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
      this.flexThisHideAll(this.arrayOfPlayButtons, this.pause);
      this.video.play();
      this.drawFrame();
    } else {
      this.flexThisHideAll(this.arrayOfPlayButtons, this.play);

      this.wasPaused = true;
      this.video.pause();
      this.onVideoPaused();
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

    this.videosPlayer.appendChild(this.overlayControls);
    this.videosPlayer.appendChild(this.overlayCanvasCover);

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

    this.overlayCanvasCover = this.canvasCover;
    this.overlayControls = this.allControlsWrapper;

    this.overlayCanvasCover.style.zIndex = 100000;
    this.overlayControls.style.zIndex = 100001;

    document.body.appendChild(this.overlayCanvasCover);
    document.body.appendChild(this.overlayControls);

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

    this.canvasCover.addEventListener("dblclick", () => {
      if (!document.body.contains(this.maxCanvas)) {
        this.maxVideo();
      } else {
        this.returnStandardSize();
      }
    });

    this.maximize.addEventListener("click", () => {
      if (!document.body.contains(this.maxCanvas)) {
        this.maxVideo();
      } else {
        this.returnStandardSize();
      }
    });
  }
}

export { Video };
