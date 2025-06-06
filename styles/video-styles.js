export const pause = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "1px",
  cursor: "pointer",
};
const pauseStick = {
  display: "block",
  position: "relative",
  backgroundColor: "rgba(250,250,250,.5)",
  width: "1rem",
};
export const pauseStickOne = { ...pauseStick };
export const pauseStickTwo = { ...pauseStick };

export const maxMinWrapper = {
  position: "absolute",
  width: "3rem",
  height: "2.5rem",
  bottom: "0",
  right: "0",
  zIndex: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const maximize = {
  alignItems: "center",
  justifyContent: "center",
  height: "1px",
  cursor: "pointer",
  display: "flex",
};

export const play = {
  alignItems: "center",
  justifyContent: "center",
  height: "1px",
  cursor: "pointer",
  display: "none",
};
export const replay = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "1px",
  display: "none",
  cursor: "pointer",
};

export const videosPlayer = {
  backgroundColor: "rgba(255,0,0,.2)",
  width: "auto",
  position: "relative",
};

export const video = {
  width: "100%",
  height: "auto",
  display: "none",
};
export const canvas = {
  display: "block",
  width: "100%",
  position: "relative",
};

export const progress = {
  height: ".18rem",

  display: "block",
  backgroundColor: "#1657b8",
};
export const lengthWrapper = {
  paddingLeft: ".5em",
  paddingRight: ".5rem",
  boxSizing: "border-box",
  zIndex: "3",
  position: "absolute",
  display: "block",
  height: ".1rem",
  width: "100%",
  bottom: "2.5rem",
  left: "0",
};

export const length = {
  height: ".18rem",
  backgroundColor: "rgba(200,200,200,.8)",
};
export const controlsBlockWrapper = {
  position: "relative",
  zIndex: "2",
  bottom: "0",
  left: "0",
  width: "100%",
  boxSizing: "border-box",
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
  backgroundColor: "rgba(0,0,255,.3)",
  position: "relative",
};
export const stopPlayWrapper = {
  position: "relative",
  width: "3rem",
  height: "2.5rem",
  bottom: "0",
  left: "0",
  zIndex: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const controlsWrapper = {
  backgroundColor: "rgba(0,0,255,.3)",
  position: "absolute",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "3",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "2.5rem",
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
