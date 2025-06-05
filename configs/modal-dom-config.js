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
                            href: "https://66.rosstat.gov.ru/storage/mediabank/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BE%D1%82%D1%87%D0%B5%D1%82%D0%B0%20%D1%81%20%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC%20%D0%93%D0%BE%D1%81%D0%BA%D0%BB%D1%8E%D1%87%D0%B0_2024.pdf",
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
                            href: "https://66.rosstat.gov.ru/storage/mediabank/%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9.pdf",
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
          outer_tg: {
            html: "div",
            children: {
              outer_tg_link: {
                html: "a",
                href: "https://t.me/rosstat66bot",
                children: {
                  tgImg: {
                    html: "img",
                    src: "https://66.rosstat.gov.ru/storage/mediabank/tg.png",
                  },
                  tgText: {
                    html: "p",
                    textContent: `Телеграм \n СтатБот`,
                  },
                },
              },
            },
          },
          outer_contacts: {
            html: "div",
            children: {
              outer_contacts_link: {
                html: "a",
                href: "https://66.rosstat.gov.ru/folder/52210",
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
          play: {
            html: "svg",
            fill: "#ffffff",
            viewBox: "-5.44 -5.44 42.88 42.88",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            stroke: "#ffffff",
            transform: "matrix(1, 0, 0, 1, 0, 0)",
            stroke$width: "0.00032",
            children: {
              SVGRepo_bgCarrier: {
                html: "g",
                id: "SVGRepo_bgCarrier",
                stroke$width: "0",
                transform: "translate(0,0), scale(1)",
                children: {
                  path: {
                    html: "path",
                    transform: "translate(-5.44, -5.44), scale(1.34)",
                    d: "M16,27.992168812767453C17.89933950657614,27.518615881326074,18.30770773572769,24.48317972519721,20.20993392941569,24.02135892860521C23.064602552490733,23.328304999535543,26.40673057567576,26.498248655459957,28.852939427119473,24.871743521349863C30.897249597046926,23.512464249206737,29.624875296038432,20.12206462960074,29.760854649306783,17.670870262352096C29.889041901659667,15.360138056556224,31.045783039229942,12.662271404954403,29.63189563638133,10.830103915166951C28.11232605119666,8.860989552286348,24.966961533295304,9.419355351829484,22.665400207202033,8.476318469967083C21.158870200531474,7.859036043548187,19.84941932870454,6.987742940838153,18.407801061248847,6.231167084824731C16.539445986708316,5.250635433854258,14.984590885329979,3.192692910763525,12.879767578950638,3.3407194355439724C10.827585438814213,3.48504384961721,9.623312909678965,5.706997782821594,7.994373115880357,6.9635152801020155C6.249170618091998,8.309714496989514,3.9225895856271067,9.078448460690218,2.9060845051679607,11.034132870618361C1.8720720112611107,13.023500314892358,1.8820249478414308,15.475224054443657,2.441806988890896,17.646262684319048C2.977887294723092,19.725377352762415,4.518261377216818,21.341567100802852,5.971334337975142,22.922288097547867C7.287589648583682,24.354172430093854,8.78664327387911,25.559215443441207,10.522394533063649,26.436705244370618C12.241273709990846,27.30566555121329,14.131168423435174,28.458115352808537,16,27.992168812767453",
                    fill: "#7876d0",
                    stroke$width: "0",
                  },
                },
              },
              SVGRepo_tracerCarrier: {
                html: "g",
                id: "SVGRepo_tracerCarrier",
                stroke$linecap: "round",
                stroke$linejoin: "round",
                stroke: "#CCCCCC",
                stroke$width: "2.24",
                children: {
                  title: {
                    html: "title",
                    textContent: "play",
                  },
                  path: {
                    html: "path",
                    d: "M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z",
                  },
                },
              },
              SVGRepo_iconCarrier: {
                html: "g",
                id: "SVGRepo_iconCarrier",
                children: {
                  title: {
                    html: "title",
                    textContent: "play",
                  },
                  path: {
                    html: "path",
                    d: "M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z",
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
