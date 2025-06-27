import { videoSources } from "../../media/videoSources.js";

export const tutorialVideos_config = {
  videosMenu: {
    html: "div",
    children: {
      videosMenu_header: {
        html: "h2",
        innerHTML:
          "Короткометражные обучающие видеоролики <br/> по работе в системе веб-сбора",
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
      allControlsWrapper: {
        html: "div",
        children: {
          lengthWrapper: {
            html: "div",
            children: {
              length: {
                html: "div",
                children: {
                  mouseCatcher: {
                    html: "div",
                  },
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
                  soundWrapper: {
                    html: "div",
                    children: {
                      sound: {
                        html: "div",
                        style: "height: 1.6rem; width: 1.6rem;",
                        innerHTML: `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"  style="width: 1.6rem; height: 1.6rem; z-index: 3;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>sound-loud-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#ffffff" transform="translate(42.666667, 85.333333)"> <path d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z" id="Shape"> </path> </g> </g> </g></svg>`,
                      },
                      halfSound: {
                        html: "div",
                        style: "height: 1.6rem; width: 1.6rem; display: none;",
                        innerHTML: `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" style="width: 1.6rem; height: 1.6rem; z-index: 3;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>sound-quiet-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#ffffff" transform="translate(42.666667, 85.333333)"> <path d="M276.914133,274.101547 L243.589973,247.442773 C283.38304,204.875093 283.38432,138.998827 243.588693,96.4311467 L276.912853,69.77216 C329.118507,127.992107 329.118507,215.880107 276.914133,274.101547 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z" id="Shape"> </path> </g> </g> </g></svg>`,
                      },
                      mute: {
                        html: "div",
                        style: "height: 1.6rem; width: 1.6rem; display: none;",
                        innerHTML: `<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" style="width: 1.6rem; height: 1.6rem; z-index: 3;"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>sound-off-filled</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#ffffff" transform="translate(42.666667, 59.581722)"> <path d="M47.0849493,-1.42108547e-14 L298.668,251.583611 L304.101001,257.015597 L304.101,257.016 L353.573532,306.488791 C353.573732,306.488458 353.573933,306.488124 353.574133,306.48779 L384.435257,337.348961 L384.434,337.349 L409.751616,362.666662 L379.581717,392.836561 L191.749,205.003 L191.749973,369.105851 L81.0208,283.647505 L7.10542736e-15,283.647505 L7.10542736e-15,112.980838 L80.8957867,112.980838 L91.433,104.688 L16.9150553,30.169894 L47.0849493,-1.42108547e-14 Z M361.298133,28.0146513 C429.037729,103.653701 443.797162,209.394226 405.578884,298.151284 L372.628394,265.201173 C396.498256,194.197542 381.626623,113.228555 328.013013,54.642278 L361.298133,28.0146513 Z M276.912853,95.5237713 C305.539387,127.448193 318.4688,168.293162 315.701304,208.275874 L266.464558,159.040303 C261.641821,146.125608 254.316511,133.919279 244.488548,123.156461 L243.588693,122.182545 L276.912853,95.5237713 Z M191.749973,25.7516113 L191.749,84.3256113 L158.969,51.5456113 L191.749973,25.7516113 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>`,
                      },
                      soundTrack: {
                        html: "div",
                        children: {
                          soundMouseCatcher: {
                            html: "div",
                          },
                          soundProgress: {
                            html: "div",
                            children: {
                              soundDotHandle: {
                                html: "div",
                              },
                            },
                          },
                        },
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
    },
  },
};
