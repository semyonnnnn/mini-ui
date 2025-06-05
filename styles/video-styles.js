export const pause = {
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
  gap: ".5rem",
  width: "3rem",
  height: "2.5rem",
  bottom: "0",
};
const pauseStick = {
  display: "block",
  position: "relative",
  backgroundColor: "rgba(250,250,250,.5)",
  width: "1rem",
};
export const pauseStickOne = { ...pauseStick };
export const pauseStickTwo = { ...pauseStick };

export const play = {
  cursor: "pointer",
  display: "block",
  bottom: "0",
  //   width: "0",
  //   height: "0",
  //   borderLeft: "25px solid rgb(200, 200, 200)",
  //   borderRight: "0 solid transparent",
  //   borderTop: "20px solid transparent",
  //   borderBottom: "20px solid transparent",
};

export const videosPlayer = {
  self: {
    backgroundColor: "rgba(255,0,0,.2)",
    height: "fit-content",
    width: "100%",
    position: "relative",
  },
};

export const video = {
  width: "100%",
  height: "auto",
  display: "none",
};
export const canvas = {
  display: "block",
  width: "100%",
  height: "100%",
  position: "relative",
};

export const progress = {
  height: ".3rem",

  display: "block",
  backgroundColor: "rgb(162, 1, 255)",
};

export const length = {
  zIndex: "3",
  position: "absolute",
  display: "block",
  height: ".3rem",
  width: "100%",
  bottom: "2.5rem",
  left: "0",
  backgroundColor: "rgba(200,200,200,.8)",
};
export const controlsBlockWrapper = {
  position: "absolute",
  zIndex: "2",
  bottom: "0",
  left: "0",
  width: "100%",
};
export const controlsBlock = {
  paddingLeft: "2rem",
  paddingRight: "2rem",
  boxSizing: "border-box",
  display: "block",
  zIndex: "2",
  bottom: "0",
  left: "0",
  width: "100%",
  zIndex: "2",
  position: "relative",
  backgroundColor: "rgba(0,0,255,.3)",
};
export const canvasCover = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "transparent",
  zIndex: "1",
};
