export const supportRegister_config = {
  supportRegister_header: {
    html: "h2",
    textContent: "Регистрация через техническую поддержку",
  },
  supportRegister_steps: {
    html: "div",
    children: {
      supportRegister_step1: {
        html: "p",
        textContent: "1. Скачать и заполнить ",
        children: {
          supportRegister_step1_link: {
            html: "a",
            textContent: "заявление на подключение к системе Web-сбора.",
            href: "https://66.rosstat.gov.ru/storage/mediabank/%D0%97%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_2022.docx",
          },
        },
      },
      supportRegister_step2: {
        html: "p",
        textContent:
          "2. Выполнить экспорт сертификата ключа электронной подписи, согласно ",
        children: {
          supportRegister_step2_link: {
            html: "a",
            textContent: "инструкции по экспорту сертификата.",
            href: "https://66.rosstat.gov.ru/storage/mediabank/RjQZLg3N/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D1%8D%D0%BA%D1%81%D0%BF%D0%BE%D1%80%D1%82%20%D1%81%D0%B5%D1%80%D1%82%D1%84%D0%B8%D0%BA%D0%B0%D1%82%D0%B0.docx",
          },
        },
      },

      supportRegister_step3: {
        html: "p",
        textContent:
          "3. Отправить заполненное заявление и экспортировать сертификат (в формате .cer) на электронный адрес:",
      },
      supportRegister_emailList: {
        html: "ul",
        children: {
          supportRegister_email1: {
            html: "li",
            textContent:
              "66.websbor@rosstat.gov.ru - для респондентов Свердловской области,",
          },
          supportRegister_email2: {
            html: "li",
            textContent:
              "66.45websbor@rosstat.gov.ru - для респондентов Курганской области.",
          },
        },
      },
      supportRegister_step4: {
        html: "p",
        textContent:
          "4. Дождаться ответного письма от Свердловскстата с данными учетной записи.",
      },
    },
  },
};
