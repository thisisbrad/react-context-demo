import React from "react";
import Search from "../search/Search";

const Header = (props) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>{props.pgTitle}</h1>
      <Search />
    </header>
  );
};

export default Header;

const styles = {
  header: {
    position: "fixed",
    display: "flex",
    flextDirection: "row",
    backgroundColor: "#0a2463",
    justifyContent: "space-between",
    width: "100%",
    height: "4rem",
  },
  h1: {
    fontSize: "1.5rem",
    color: "#ffffff",
    marginLeft: "1rem",
  },
};
