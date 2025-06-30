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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const maximize = {
  width: "100%",
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
  height: "100%",
  position: "relative",
  backgroundColor: "black",
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

export const allControlsWrapper = {
  position: "absolute",
  bottom: "0",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

export const lengthWrapper = {
  paddingLeft: "1em",
  paddingRight: "1rem",
  boxSizing: "border-box",
  zIndex: "2",
  display: "block",
  width: "100%",
  bottom: "2.5rem",
  left: "0",
};
export const mouseCatcher = {
  zIndex: "3",
  position: "absolute",
  width: "100%",
  height: "1rem",
  left: "0",
  bottom: "0",
  backgroundColor: "transparent",
};
export const length = {
  transition: "height 300ms ease",
  height: ".18rem",
  position: "relative",
  backgroundColor: "rgba(200,200,200,.8)",
  cursor: "pointer",
};
export const progress = {
  transition: "height 300ms ease",
  height: ".18rem",
  boxSizing: "border-box",
  inset: "0px",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  position: "absolute",
  ...progressColor,
};

export const soundProgress = {
  transition: "height 300ms ease",
  height: ".18rem",
  boxSizing: "border-box",
  inset: "0px",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  position: "absolute",
  backgroundColor: "white",
  zIndex: "5",
};

export const dotHandle = {
  ...progressColor,
  width: ".8rem",
  height: ".8rem",
  position: "absolute",
  transform: "translateX(50%)",
  borderRadius: "100px",
  pointerEvents: "none",
};

export const soundWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "1rem",
};

export const soundTrack = {
  cursor: "pointer",
  position: "relative",
  height: ".18rem",
  width: "15vw",
  backgroundColor: "rgba(200,200,200,.8)",
  marginLeft: "1rem",
  marginRight: "3rem",
};

export const soundMouseCatcher = {
  cursor: "pointer",
  zIndex: "5",
  position: "absolute",
  width: "100%",
  height: "1rem",
  left: "0",
  bottom: "-.5rem",
  backgroundColor: "transparent",
};

export const soundDotHandle = {
  backgroundColor: "white",
  width: ".8rem",
  height: ".8rem",
  position: "absolute",
  transform: "translateX(50%)",
  borderRadius: "100px",
  pointerEvents: "none",
};

export const sound = {
  height: "1.6rem",
  cursor: "pointer",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const leftSideControls = {
  position: "relative",
  height: "2.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const controlsWrapper = {
  userSelect: "none",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  boxSizing: "border-box",
  bottom: "0",
  left: "0",
  right: "0",
  zIndex: "4",
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
