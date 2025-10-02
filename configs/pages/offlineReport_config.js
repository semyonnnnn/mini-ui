export const offlineReport_config = {
  offlineReport_header: {
    html: "h2",
    textContent: "Offline",
  },
  offlineReport_steps: {
    html: "div",
    children: {
      offlineReport_step1: {
        html: "p",
        textContent: "- Скачать и установить ",
        children: {
          offlineReport_step1_link: {
            html: "a",
            textContent: "offline модуль подготовки отчетов.",
            href: "https://websbor.rosstat.gov.ru/webstat/Downloads/OfflineApplication/OfflineApplication.zip",
          },
        },
      },

      offlineReport_step2: {
        html: "p",
        textContent: "- Настроить offline модуль подготовки отчетов, согласно ",
        children: {
          offlineReport_step2_link: {
            html: "a",
            textContent: "инструкции. [DOC]",
            href: "https://66.rosstat.gov.ru/storage/mediabank/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%20%D0%BD%D0%B0%20OFF-line%20%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8C(1).doc",
          },
        },
      },
      offlineReport_step3: {
        html: "p",
        textContent:
          "- Утилита для обновления базы данных сетевой версии offline-модуля(версии 3.0.18)",
        children: {
          inner_utilReport_link: {
            html: "a",
            textContent: "(скачать)",
            href: "https://66.rosstat.gov.ru/storage/mediabank/OfflineApplication.DbCreatorApp(11).zip",
          },
        },
      },
    },
  },
};
