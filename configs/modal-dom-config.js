export const config = {
  menuWrapper: {
    type: "div",
    children: {
      navMenu: {
        type: "nav",
        children: {
          mainNavMenu: {
            type: "ul",
            children: {
              trigger_menu_report: {
                type: "li",
                textContent: "Предоставление отчётности",
              },
              trigger_menu_moreInfo: {
                type: "li",
                textContent: "Дополнительная информация",
              },
            },
          },
          secondaryMenu: {
            type: "ul",
            children: {
              menu_report: {
                type: "div",
                children: {
                  trigger_menu_signActions: {
                    type: "li",
                    textContent:
                      "Действия с квалифицированной электронной подписью (ЭП)",
                  },
                  inner_workspaceSetup: {
                    type: "li",
                    textContent: "Настройка рабочего места",
                  },
                  trigger_menu_sysProfile: {
                    type: "li",
                    textContent: " Личный кабинет системы сбора отчётности",
                  },
                  inner_govkeyApp: {
                    type: "li",
                    textContent:
                      "Предоставление отчётности с использованием приложения Госключ",
                  },
                  inner_specialProvider: {
                    type: "li",
                    textContent: "Специализированные операторы связи",
                  },
                },
              },
              menu_signActions: {
                type: "div",
                children: {
                  inner_getSignature: {
                    type: "li",
                    textContent:
                      "Получение квалифицированной электронной подписи (ЭП)",
                  },
                  inner_replaceSignature: {
                    type: "li",
                    textContent:
                      "Действия в случае замены электронной подписи (ЭП)",
                  },
                },
              },
              menu_sysProfile: {
                type: "div",
                children: {
                  outer_rosstatRegister: {
                    type: "li",
                    textContent: "Регистрация через портал Росстата",
                  },
                  inner_supportRegister: {
                    type: "li",
                    textContent:
                      "Регистрация через службу технической поддержки",
                  },
                  outer_onlineReport: {
                    type: "li",
                    textContent: "Предоставить отчёт ONLINE",
                  },
                  inner_offlineReport: {
                    type: "li",
                    textContent: "Предоставить отчёт OFFLINE",
                  },
                  inner_reportDigital: {
                    type: "li",
                    textContent: "Предоставить отчёт на электронном носителе",
                  },
                },
              },
              menu_moreInfo: {
                type: "div",
                children: {
                  outer_getDataForms: {
                    type: "li",
                    textContent: "Получить данные о кодах и формах",
                  },
                  inner_getUserDocs: {
                    type: "li",
                    textContent: "Пользовательская документация",
                  },
                  outer_FAQ: {
                    type: "li",
                    textContent: "Часто задаваемые вопросы",
                  },
                  inner_tutorialVideos: {
                    type: "li",
                    textContent: "Обучающие ролики по работе с веб-сбором",
                  },
                },
              },
            },
          },
        },
      },
      closeButton: {
        type: "div",
        children: {
          before: {
            type: "div",
          },
          after: {
            type: "div",
          },
        },
      },
    },
  },
  mainContent: {
    type: "div",
    textContent:
      "example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent example textContent ",
  },
  imgBox: {
    type: "div",
    children: {
      outer_tg: {
        type: "div",
        children: {
          tgImg: {
            type: "img",
            src: "../img/tg.png",
          },
          tgText: {
            type: "p",
            textContent: `Телеграм \n СтатБот`,
          },
        },
      },
      outer_contacts: {
        type: "div",
        children: {
          contactsImg: {
            type: "img",
            src: "../img/phone.png",
          },
          contactsText: {
            type: "p",
            textContent: `Контакты \n Специалистов`,
          },
        },
      },
      outer_questions: {
        type: "div",
        children: {
          contactsImg: {
            type: "img",
            src: "../img/questionMark.png",
          },
          contactsText: {
            type: "p",
            textContent: `Остались \n вопросы?`,
          },
        },
      },
    },
  },
};
