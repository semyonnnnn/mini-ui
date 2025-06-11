import { videoSources } from "../../media/videoSources.js";

export const tutorialVideos_config = {
  videosMenu: {
    html: "div",
    children: {
      videosMenu_header: {
        html: "h2",
        textContent:
          "Короткометражные обучающие видеоролики по работе в системе веб-сбора",
      },
      tutorialVideos_export: {
        html: "p",
        textContent: "Экспорт сертификата открытого ключа",
      },
      tutorialVideos_update: {
        html: "p",
        textContent: "Обновление сертификата открытого ключа",
      },
    },
  },
  videosPlayer: {
    html: "div",
    height: "100%",
    children: {
      video: {
        html: "video",
        controls: "controls",
        src: videoSources.tutorialVideos_export,
      },
      canvas: {
        html: "canvas",
      },
      canvasCover: {
        html: "div",
        children: {
          loading: {
            html: "div",
            innerHTML: `<svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-1.32 -1.32 28.99 28.99" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <circle cx="13.792" cy="3.082" r="3.082"></circle> <circle cx="13.792" cy="24.501" r="1.849"></circle> <circle cx="6.219" cy="6.218" r="2.774"></circle> <circle cx="21.365" cy="21.363" r="1.541"></circle> <circle cx="3.082" cy="13.792" r="2.465"></circle> <circle cx="24.501" cy="13.791" r="1.232"></circle> <path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05 C6.902,18.996,5.537,18.988,4.694,19.84z"></path> <circle cx="21.364" cy="6.218" r="0.924"></circle> </g> </g> </g></svg>`,
          },
        },
      },
      lengthWrapper: {
        html: "div",
        children: {
          length: {
            html: "div",
            children: {
              progress: {
                html: "div",
                children: {
                  dotHandle: {
                    html: "div",
                  },
                },
              },
            },
          },
        },
      },
      controlsWrapper: {
        html: "div",
        children: {
          leftSideControls: {
            html: "div",
            children: {
              stopPlayWrapper: {
                html: "div",
                children: {
                  pause: {
                    html: "div",
                    innerHTML: `<svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#ffffff" style="width: 1.6rem; height: 1.6rem; z-index: 3;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><style type="text/css">.sharpcorners_een{fill:#ffffff;} .st0{fill:#ffffff;}</style><path class="sharpcorners_een" d="M8,7h6v18H8V7z M18,7v18h6V7H18z"></path></g></svg>`,
                  },
                  play: {
                    html: "div",
                    innerHTML: `<svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#ffffff" stroke="#ffffff" style="width: 1.4rem; height: 1.4rem; z-index: 3;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><style type="text/css">.sharpcorners_een{fill:#ffffff;} .st0{fill:#ffffff;}</style><path class="sharpcorners_een" d="M23,16L9,26V6L23,16z"></path></g></svg>`,
                  },
                  replay: {
                    html: "div",
                    innerHTML: `<svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" fill="#ffffff" stroke="#ffffff" stroke-width="0.00032" style="width: 1.3rem; height: 1.3rem; z-index: 3;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><style type="text/css">.sharpcorners_een{fill:#ffffff;} .st0{fill:#ffffff;}</style><path class="sharpcorners_een" d="M26,18c0,6.065-4.935,11-11,11S4,24.065,4,18c0-2.938,1.145-5.701,3.222-7.778l2.828,2.828C8.728,14.372,8,16.13,8,18c0,3.859,3.141,7,7,7s7-3.141,7-7c0-1.869-0.729-3.628-2.051-4.95c-1.109-1.11-2.526-1.794-4.058-1.987l2.523,2.523l-2.828,2.828L8.172,9l7.414-7.414l2.828,2.828L15.79,7.038c2.64,0.187,5.099,1.294,6.989,3.183C24.856,12.301,26,15.062,26,18z"></path></g></svg>`,
                  },
                },
              },
              timeline: {
                html: "div",
                children: {
                  currentTime: {
                    html: "div",
                    textContent: "00:00",
                  },
                  divider: {
                    html: "div",
                    textContent: "/",
                  },
                  allTime: {
                    html: "div",
                    textContent: "00:00",
                  },
                },
              },
            },
          },
          maxMinWrapper: {
            html: "div",
            children: {
              maximize: {
                html: "div",
                innerHTML: `<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff" style="width: 1rem; height: 1rem; z-index: 3;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>full_screen [#ffffff]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -4199.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M262.4445,4039 L256.0005,4039 L256.0005,4041 L262.0005,4041 L262.0005,4047 L264.0005,4047 L264.0005,4039.955 L264.0005,4039 L262.4445,4039 Z M262.0005,4057 L256.0005,4057 L256.0005,4059 L262.4445,4059 L264.0005,4059 L264.0005,4055.955 L264.0005,4051 L262.0005,4051 L262.0005,4057 Z M246.0005,4051 L244.0005,4051 L244.0005,4055.955 L244.0005,4059 L246.4445,4059 L252.0005,4059 L252.0005,4057 L246.0005,4057 L246.0005,4051 Z M246.0005,4047 L244.0005,4047 L244.0005,4039.955 L244.0005,4039 L246.4445,4039 L252.0005,4039 L252.0005,4041 L246.0005,4041 L246.0005,4047 Z" id="full_screen-[#ffffff]"> </path> </g> </g> </g> </g></svg>`,
              },
              minimize: {
                html: "div",
                innerHTML: ``,
              },
            },
          },
        },
      },
    },
  },
};
