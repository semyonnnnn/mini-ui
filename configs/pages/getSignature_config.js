//sorry if you have to refactor this, hehehe
export const getSignature_config = {
  getSignature_header: {
    html: "h2",
    textContent: "Получить электронную подпись (далее – ЭП).",
  },
  getSignature_warning: {
    html: "div",
    children: {
      getSignature_warning_phantomBeginning: {
        html: "span",
        textContent: "В соответствии с ",
      },
      getSignature_warning_link: {
        html: "a",
        textContent: "Федеральным законом от 06.04.2011 № 63-ФЗ",
        href: "http://pravo.gov.ru/proxy/ips/?docbody=&nd=102146610",
      },
      getSignature_warning_attackOfMainContent: {
        html: "span",
        textContent:
          " «Об электронной подписи» с 01.01.2022 обязанность по выпуску квалифицированной электронной подписи возлагается на Федеральную налоговую службу (",
      },
      getSignature_warning_anotherLink: {
        html: "a",
        textContent: "пункты выдачи КЭП",
        href: "https://www.nalog.gov.ru/rn66/related_activities/ucfns/13764380/",
      },
      getSignature_warning_revengeOfThePunctuationMarks: {
        html: "span",
        textContent: ").",
      },
      getSignature_warning_finalLink: {
        html: "a",
        textContent: "Электронная подпись ",
        href: "https://www.nalog.gov.ru/rn66/related_activities/ucfns/",
      },
      getSignature_warning_sampleText: {
        html: "span",
        textContent:
          "выдается бесплатно без предварительной записи в налоговые органы.",
      },
      getSignature_paragraph_1: {
        html: "p",
        textContent: "1. Для выпуска ЭП необходимо иметь с собой:",
      },
      getSignature_listItem_1: {
        html: "li",
        textContent: "Основной документ, удостоверяющий личность (паспорт).",
      },
      getSignature_paragraph_2: {
        html: "p",
        textContent:
          "А также копии, оригиналы или сведения из следующих документов:",
      },
      getSignature_listItem_2: {
        html: "li",
        textContent: "Страховой номер индивидуального лицевого счета (СНИЛС);",
      },
      getSignature_listItem_3: {
        html: "li",
        textContent: "Идентификационный номер налогоплательщика (ИНН).",
      },
      getSignature_paragraph_3: {
        html: "p",
        textContent:
          "2. Предоставьте сотруднику ключевой носитель — на него загрузят сертификат вашей ЭП. Подойдут такие устройства как Рутокен ЭЦП 2.0, JaCarta-2 SE, ESMART Token ГОСТ или другие. На одном носителе можно хранить до 32 подписей. При этом неважно, кем они выданы.",
      },
      getSignature_paragraph_4: {
        html: "p",
        textContent:
          "3. Чтобы использовать ЭП, которую вам выдали в ФНС России, установите на компьютер ",
      },
      getSignature_link_1: {
        html: "a",
        textContent: "КриптоПроCSP",
        href: "https://www.cryptopro.ru/products/csp",
      },
      getSignature_paragraph_5: {
        html: "p",
        textContent:
          ". Вы также можете получить ЭП платно в любом из аккредитованных ",
      },
      getSignature_link_2: {
        html: "a",
        textContent: "удостоверяющих центров",
        href: "https://digital.gov.ru/ru/activity/govservices/certification_authority/",
      },
      getSignature_paragraph_6: {
        html: "span",
        textContent: ".",
      },
    },
  },
};
