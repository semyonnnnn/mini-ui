export const replaceSignature_config = {
  replaceSignature_header: {
    html: "h2",
    textContent: "Действия в случае замены КЭП",
  },
  replaceSignature_warning: {
    html: "div",
    children: {
      replaceSignature_intro: {
        html: "p",
        textContent:
          "В случае окончания действия сертификата, смены владельца и пр. необходимо добавить новый сертификат в систему Web-сбора, для этого:",
      },
      replaceSignature_step1: {
        html: "p",
        textContent:
          "1. Выполнить экспорт сертификата ключа электронной подписи, согласно ",
        children: {
          replaceSignature_step1_link: {
            html: "a",
            textContent: "инструкции по экспорту сертификата. [PDF]",
            href: "https://66.rosstat.gov.ru/storage/mediabank/%D0%9A%D0%B0%D0%BA%20%D0%B8%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D1%8C%20%D1%81%D0%B5%D1%80%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%82%20%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%BB%D1%8E%D1%87%D0%B0_2024.pdf",
          },
          replaceSignature_video1: {
            html: "span",
            textContent: "Рекомендуем воспользоваться ",
          },
          replaceSignature_video1_link: {
            html: "a",
            textContent: "видео-инструкцией.",
            href: "https://66.rosstat.gov.ru/storage/mediabank/cer-export-c.mp4",
          },
        },
      },

      replaceSignature_step2: {
        html: "p",
        textContent:
          "2. Загрузить сертификат в личный кабинет респондента в системе Web-сбора. Рекомендуем воспользоваться ",
        children: {
          replaceSignature_video2_link: {
            html: "a",
            textContent: "видео-инструкцией.",
            href: "https://66.rosstat.gov.ru/storage/mediabank/cer-update-pls-c.mp4",
          },
        },
      },
    },
  },
};
