export const workspaceSetup_config = {
  workspaceSetup_header: {
    html: "h2",
    textContent: "Условия для подключения к системе Веб-сбора",
  },
  workspaceSetup_main: {
    html: "nav",
    children: {
      workspaceSetup_requirements: {
        html: "p",
        textContent:
          "Для подготовки и отправки статистического отчета через систему веб-сбора необходимо иметь:",
      },
      workspaceSetup_list: {
        html: "ul",
        children: {
          internet_access: {
            html: "li",
            textContent: "доступ в Интернет;",
          },
          email_access: {
            html: "li",
            textContent: "электронную почту (e-mail);",
          },
          signature: {
            html: "li",
            textContent: "Квалифицированную электронную подпись",
          },
          crypto: {
            html: "li",
            textContent:
              "программное обеспечение для криптографической защиты информации (далее - СКЗИ - можно установить по ссылке - ",
            children: {
              crypto_link: {
                html: "a",
                textContent: "КриптоПро CSP",
                href: "https://www.cryptopro.ru/products/csp",
              },
            },
          },
        },
      },
      workspaceSetup_other: {
        html: "p",
        children: {
          signatureText: {
            html: "span",
            textContent:
              "для корректной работы в системе веб-сбора необходимо скачать и установить ",
          },
          signaturePlugin: {
            html: "a",
            textContent: "плагин подписи.",
            href: "https://websbor.gks.ru/webstat/Downloads/CrocXmlSigner/CrocXmlSigner.rar",
          },
        },
      },
    },
  },
};
