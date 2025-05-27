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
      tutorialVideos_renew: {
        html: "p",
        textContent: "Обновление сертификата открытого ключа",
      },
    },
  },
  videosPlayer: {
    html: "div",
    children: {
      videos_export: {
        html: "video",
        width: "320",
        height: "240",
        controls: "controls",
        children: {
          videos_export_source: {
            html: "source",
            src: "https://66.rosstat.gov.ru/storage/mediabank/%D0%AD%D0%BA%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%B0%20%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%BB%D1%8E%D1%87%D0%B0-c_313846-c.mp4",
            type: "video/mp4",
          },
        },
      },
      videos_renew: {
        html: "video",
        width: "320",
        height: "240",
        controls: "controls",
        children: {
          videos_renew_source: {
            html: "source",
            src: "https://66.rosstat.gov.ru/storage/mediabank/%D0%9E%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%B0%20%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%BB%D1%8E%D1%87%D0%B0-c_313845-c.mp4",
            type: "video/mp4",
          },
        },
      },
    },
  },
};
