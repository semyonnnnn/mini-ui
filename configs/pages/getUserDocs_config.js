export const getUserDocs_config = {
  getUserDocs_header: {
    html: "h2",
    textContent: "Пользовательская документация",
  },
  getUserDocs_docs: {
    html: "div",
    children: {
      getUserDocs_onlineManual: {
        html: "a",
        style: "display: block;",
        textContent:
          "Руководство пользователя личного кабинета (режим Online) [PDF]",
        href: "https://66.rosstat.gov.ru/storage/mediabank/Пользовательская_документация.pdf",
      },
      getUserDocs_offlineManual: {
        html: "a",
        style: "display: block;",
        textContent:
          "Руководство пользователя на OFF-line модуль подготовки отчетов-ЭВФ [DOC]",
        href: "https://66.rosstat.gov.ru/storage/mediabank/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%20%D0%BD%D0%B0%20OFF-line%20%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D1%8C(1).doc",
      },
    },
  },
  getUserDocs_exportHeader: {
    html: "p",
    textContent: "Инструкция по экспорту сертификата открытого ключа:",
  },
  getUserDocs_exportPDF: {
    html: "a",
    style: "display: block;",
    textContent: "• В PDF [PDF]",
    href: "https://66.rosstat.gov.ru/storage/mediabank/Как_извлечь_сертификат_открытого_ключа.pdf",
  },
  getUserDocs_exportWEB: {
    html: "a",
    style: "display: block;",
    textContent: "• В WEB [PDF]",
    href: "https://66.rosstat.gov.ru/storage/mediabank/Как_извлечь_сертификат_открытого_ключа.pdf",
  },
  getUserDocs_consulting: {
    html: "a",
    style: "display: block;",
    textContent: "Консультации по вопросам заполнения форм статотчетности",
    href: "https://66.rosstat.gov.ru/contacts",
  },
};
