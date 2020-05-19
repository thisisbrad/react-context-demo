import React from "react";

const RightNav = () => {
  return <nav style={styles.container}></nav>;
};

export default RightNav;

const styles = {
  container: {
    position: "fixed",
    width: "15rem",
    backgroundColor: "#1c5d99",
    top: "5rem",
    right: "0",
    bottom: "0",
  },
  ul: {
    listStyle: "none",
    padding: "0",
    margin: "2rem",
  },
  li: {
    marginBottom: "1rem",
  },
  a: {
    textDecoration: "none",
    color: "#fff",
  },
};
