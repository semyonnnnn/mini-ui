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
            href: "https://66.rosstat.gov.ru/storage/mediabank/Как_извлечь_сертификат_открытого_ключа_2024.pdf",
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
