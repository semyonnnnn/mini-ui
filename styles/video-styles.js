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
  position: "relative",
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

export const loadingDone = {
  display: "none",
};

export const loadingActive = {
  display: "block",
  animation: "spinJS 1s linear infinite",
  position: "absolute",
  width: "50px",
  height: "50px",
  inset: "0",
  margin: "auto",
  zIndex: "99",
};
export const videosPlayer = {
  backgroundColor: "black",
  width: "auto",
  position: "relative",
};
export const maxCanvas = {
  zIndex: "9999",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  backgroundColor: "black",
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

const progressColor = {
  backgroundColor: "#1657b8",
};

export const lengthWrapper = {
  paddingLeft: "1em",
  paddingRight: "1rem",
  boxSizing: "border-box",
  zIndex: "4",
  position: "absolute",
  display: "block",
  width: "100%",
  bottom: "2.5rem",
  left: "0",
};
export const mouseCatcher = {
  position: "absolute",
  width: "100%",
  height: "3rem",
  left: "0",
  bottom: "-1.5rem",
  zIndex: "3",
  backgroundColor: "transparent",
};
export const length = {
  height: ".18rem",
  position: "relative",
  backgroundColor: "rgba(200,200,200,.8)",
  cursor: "pointer",
};
export const progress = {
  height: ".18rem",
  boxSizing: "border-box",
  inset: "0px",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  position: "absolute",
  ...progressColor,
};
export const dotHandle = {
  ...progressColor,
  width: ".8rem",
  height: ".8rem",
  position: "absolute",
  transform: "translateX(50%)",

  borderRadius: "100px",
};
export const timeline = {
  display: "flex",
  gap: ".3rem",
  color: "white",
  fontSize: "1rem",
};
export const stopPlayWrapper = {
  position: "relative",
  width: "3rem",
  height: "2.5rem",
  zIndex: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const leftSideControls = {
  position: "relative",
  height: "2.5rem",
  zIndex: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const controlsWrapper = {
  userSelect: "none",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  boxSizing: "border-box",
  // backgroundColor: "rgba(0,0,255,.3)",
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

export const activeButton = {
  backgroundColor: "#1757b8",
  color: "white",
  border: "none",
};

export const inactiveButton = {
  backgroundColor: "white",
  color: "black",
  border: "1px solid black",
};

const button = {
  userSelect: "none",
  cursor: "pointer",
  padding: "1rem 5rem",
  fontWeight: "900",
  fontSize: "20px",
  textAlign: "center",
};

export const tutorialVideos_export = {
  self: {
    ...button,
    ...activeButton,
  },
};

export const tutorialVideos_update = {
  self: {
    ...button,
    ...inactiveButton,
  },
};
