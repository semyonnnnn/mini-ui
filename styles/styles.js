export const listItems = {
  listStyleType: "none",
  fontWeight: "700",
  borderBottom: "1px solid black",
  margin: "2px",
  cursor: "pointer",
  userSelect: "none",
};

export const menuWrapper = {
  display: "flex",
  justifyContent: "space-between",
};

export const wrapper = {
  position: "absolute",
  width: "100%",
  height: "100vh",
  backgroundColor: "rgb(120,120,120)",
  zIndex: "1",
  backdropFilter: `blur(10px)`,
};

export const modal = {
  width: "100%",
  height: "100%",
  visibility: "hidden",
  position: "absolute",
  margin: "auto",
  padding: "1rem",
  inset: "0",
  zIndex: "1",
  backgroundColor: "white",
  color: "black",
  border: "2px solid rgb(120,121,126)",
  display: "flex",
  flexDirection: "column",
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
  display: "flex",
  flexDirection: "column",
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
  display: "flex",
  justifyContent: "space-around",
  marginTop: "1rem",
};

export const secondaryMenu_li = {
  padding: "0 16px",
  marginBottom: "10px",
};

export const imgBox_div = {
  display: "flex",
  width: "fit-content",
  alignItems: "center",
  gap: "1rem",
};

export const imgBox_img = {
  width: "3rem",
  height: "3rem",
};

export const imgBox_p = {
  margin: "0",
};
