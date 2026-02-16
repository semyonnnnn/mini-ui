import { getSignature_config } from "./configs.js";

export const config = {
  modal: {
    html: "div",
    children: {
      menuWrapper: {
        html: "div",
        children: {
          navMenu: {
            html: "nav",
            children: {
              mainNavMenu: {
                html: "ul",
                children: {
                  trigger_menu_report: {
                    html: "li",
                    textContent: "Предоставление отчётности",
                  },
                  trigger_menu_moreInfo: {
                    html: "li",
                    textContent: "Дополнительная информация",
                  },
                },
              },
              secondaryMenu: {
                html: "ul",
                children: {
                  menu_report: {
                    html: "div",
                    children: {
                      trigger_menu_signActions: {
                        html: "li",
                        textContent:
                          "Действия с квалифицированной электронной подписью (ЭП)",
                      },
                      inner_workspaceSetup: {
                        html: "li",
                        textContent: "Настройка рабочего места",
                      },
                      trigger_menu_sysProfile: {
                        html: "li",
                        textContent: " Личный кабинет системы сбора отчётности",
                      },
                      inner_govkeyApp: {
                        html: "li",
                        children: {
                          inner_govkeyApp_link: {
                            html: "a",
                            textContent:
                              "Предоставление отчётности с использованием приложения Госключ [PDF]",
                            href: "https://66.rosstat.gov.ru/storage/mediabank/Инструкция_предоставления_отчета_с_использованием_Госключа.pdf",
                          },
                        },
                      },
                      inner_specialProvider: {
                        html: "li",
                        children: {
                          inner_specialProvider_link: {
                            html: "a",
                            textContent:
                              "Специализированные операторы связи [PDF]",
                            href: "https://66.rosstat.gov.ru/storage/mediabank/Специализированный.pdf",
                          },
                        },
                      },
                    },
                  },
                  menu_signActions: {
                    html: "div",
                    children: {
                      inner_getSignature: {
                        html: "li",
                        textContent:
                          "Получение квалифицированной электронной подписи (ЭП)",
                      },
                      inner_replaceSignature: {
                        html: "li",
                        textContent:
                          "Действия в случае замены электронной подписи (ЭП)",
                      },
                    },
                  },
                  menu_sysProfile: {
                    html: "div",
                    children: {
                      outer_rosstatRegister: {
                        html: "li",
                        textContent: "",
                        children: {
                          outer_rosstatRegister_link: {
                            html: "a",
                            textContent: "Регистрация через портал Росстата ⇗",
                            href: "https://websbor.rosstat.gov.ru/online/respondent-registration-request/",
                          },
                        },
                      },
                      inner_supportRegister: {
                        html: "li",
                        textContent:
                          "Регистрация через службу технической поддержки",
                      },
                      outer_onlineReport: {
                        html: "li",
                        children: {
                          outer_onlineReport_link: {
                            html: "a",
                            textContent: "Предоставить отчёт ONLINE ⇗",
                            href: "https://websbor.rosstat.gov.ru/online/",
                          },
                        },
                      },
                      inner_offlineReport: {
                        html: "li",
                        textContent: "Предоставить отчёт OFFLINE",
                      },

                      inner_reportDigital: {
                        html: "li",
                        textContent:
                          "Предоставить отчёт на электронном носителе",
                      },
                    },
                  },
                  menu_moreInfo: {
                    html: "div",
                    children: {
                      outer_getDataForms: {
                        html: "li",
                        children: {
                          outer_getDataForms_link: {
                            html: "a",
                            textContent: "Получить данные о кодах и формах ⇗",
                            href: "https://websbor.rosstat.gov.ru/online/info",
                          },
                        },
                      },
                      inner_getUserDocs: {
                        html: "li",
                        textContent: "Пользовательская документация",
                      },
                      outer_FAQ: {
                        html: "li",
                        children: {
                          outer_FAQ_link: {
                            html: "a",
                            textContent: "Часто задаваемые вопросы ⇗",
                            href: "https://websbor.rosstat.gov.ru/online/faq-respondent",
                          },
                        },
                      },
                      inner_tutorialVideos: {
                        html: "li",
                        textContent: "Обучающие ролики по работе с веб-сбором",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      mainContent: {
        html: "div",
        children: getSignature_config,
        textContent: "",
      },
      imgBox: {
        html: "div",
        children: {
          // outer_tg: {
          //   html: "div",
          //   children: {
          //     outer_tg_link: {
          //       html: "a",
          //       href: "https://t.me/rosstat66bot",
          //       children: {
          //         tgImg: {
          //           html: "img",
          //           src: "https://66.rosstat.gov.ru/storage/mediabank/tg.png",
          //         },
          //         tgText: {
          //           html: "p",
          //           textContent: `Телеграм \n СтатБот`,
          //         },
          //       },
          //     },
          //   },
          // },
          outer_contacts: {
            html: "div",
            children: {
              outer_contacts_link: {
                html: "a",
                href: "https://66.rosstat.gov.ru/contacts",
                children: {
                  contactsImg: {
                    html: "img",
                    src: "https://66.rosstat.gov.ru/storage/mediabank/phone.png",
                  },
                  contactsText: {
                    html: "p",
                    textContent: `Контакты \n Специалистов`,
                  },
                },
              },
            },
          },
          outer_questions: {
            html: "div",
            href: "https://forms.yandex.ru/u/6554aee084227c368115f396/",
            children: {
              outer_questions_link: {
                html: "a",
                href: "https://forms.yandex.ru/u/6554aee084227c368115f396/",
                children: {
                  contactsImg: {
                    html: "img",
                    src: "https://66.rosstat.gov.ru/storage/mediabank/questionMark.png",
                  },
                  contactsText: {
                    html: "p",
                    textContent: `Остались \n вопросы?`,
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
