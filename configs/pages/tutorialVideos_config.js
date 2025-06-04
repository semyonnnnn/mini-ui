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
    children: {
      video: {
        html: "video",
        width: "320",
        height: "240",
        controls: "controls",
        src: "https://66.rosstat.gov.ru/storage/mediabank/cer-export-c.mp4",
      },
      canvas: {
        html: "canvas",
      },
    },
  },
};
