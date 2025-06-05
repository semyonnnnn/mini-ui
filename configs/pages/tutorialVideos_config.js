export const tutorialVideos_config = {
  videosMenu: {
    html: "div",
    children: {
      videosMenu_header: {
        html: "h2",
        textContent:
          "Короткометражные обучающие видеоролики по работе в системе веб-сбора",
      },
      tutorialVideos_export: {
        html: "p",
        textContent: "Экспорт сертификата открытого ключа",
      },
      tutorialVideos_update: {
        html: "p",
        textContent: "Обновление сертификата открытого ключа",
      },
    },
  },
  videosPlayer: {
    html: "div",
    height: "100%",
    children: {
      video: {
        html: "video",
        controls: "controls",
        src: "http://localhost:5500/media/mov_bbb.mp4",
      },
      canvas: {
        html: "canvas",
      },
      canvasCover: {
        html: "div",
      },
      controlsBlock: {
        html: "div",
        children: {
          pause: {
            html: "div",
            children: {
              pauseStickOne: {
                html: "div",
              },
              pauseStickTwo: {
                html: "div",
              },
            },
          },
          play: {
            html: "div",
          },
          length: {
            html: "div",
            children: {
              progress: {
                html: "div",
              },
            },
          },
        },
      },
    },
  },
};
