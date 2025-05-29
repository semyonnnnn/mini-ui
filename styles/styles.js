export const document = {
  a: {
    display: "inline-block",
  },
};

export const menuWrapper = {
  display: "flex",
  justifyContent: "space-between",
};

export const modal = {
  width: "100%",
  height: "100vh",
  visibility: "hidden",
  position: "absolute",
  marginLeft: "1rem",
  padding: "1rem",
  inset: "0",
  zIndex: "1",
  backgroundColor: "white",
  color: "black",
  border: "2px solid rgb(120,121,126)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const closeButton = {
  position: "relative",
  float: "right",
  width: "50px",
  height: "50px",
  zIndex: "1",
  cursor: "pointer",
};

const crossLineStyles = {
  position: "absolute",
  top: "50%",
  width: "100%",
  height: "3px",
  backgroundColor: "black",
};

export const before = {
  ...crossLineStyles,
  transform: "rotate(45deg)",
};
export const after = {
  ...crossLineStyles,
  transform: "rotate(-45deg)",
};

export const navMenu = {
  self: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
  },
  li: {
    listStyleType: "none",
    fontWeight: "700",
    borderBottom: "1px solid black",
    margin: "2px",
    cursor: "pointer",
    userSelect: "none",
  },
};

export const mainNavMenu = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0",
  gap: "50px",
};

export const mainContent = {
  marginTop: "3vw",
  height: "100%",
};

export const imgBox = {
  self: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "1rem",
  },
  div: {
    display: "flex",
    width: "fit-content",
    alignItems: "center",
    gap: "1rem",
  },
  img: {
    width: "3rem",
    height: "3rem",
  },
  p: {
    margin: "0",
  },
  a: {
    color: "black",
    textDecoration: "none",
    display: "inline-block",
    alignItems: "center",
    gap: "1rem",
  },
};

export const secondaryMenu = {
  self: {
    position: "absolute",
    top: "2rem",
    backgroundColor: "white",
    padding: "1rem 0",
    boxShadow: "2px 2px 12px black",
    width: "100%",
  },
  a: {
    color: "black",
    textDecoration: "none",
    display: "inline-block",
    alignItems: "center",
    gap: "1rem",
  },
};

export const videosPlayer = {
  self: {
    backgroundColor: "red",
    width: "100%",
    // height: "100%",
  },
};

const videos_style = {
  width: "100%",
  height: "auto",
};
export const videos_export = {
  self: {
    ...videos_style,
    display: "block",
  },
};

export const videos_renew = {
  self: {
    ...videos_style,
    display: "none",
  },
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

export const tutorialVideos_renew = {
  self: {
    ...button,
    ...inactiveButton,
  },
};

export const videosMenu_header = {
  fontSize: "1.1vw",
  padding: "1rem 3rem",
  boxShadow: "inset 0 0 3px black",
};
