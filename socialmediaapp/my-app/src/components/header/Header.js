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
    backgroundColor: "#ccc",
    justifyContent: "space-between",
    width: "100%",
    height: "5rem",
  },
  h1: {
    fontSize: "1.5rem",
    color: "#000000",
    marginLeft: "1rem",
  },
};
