import React from "react";
import { FaSearch } from "../../../node_modules/react-icons/fa";

const Search = () => {
  return (
    <form style={styles.search}>
      <FaSearch style={styles.searchIcon} />
      <input style={styles.input} type="text" placeholder="Search"></input>
    </form>
  );
};

export default Search;

const styles = {
  search: {
    marginTop: "1rem",
    display: "flex",
    flextDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: ".5rem ",
    paddingRight: "6rem",
    outline: "none",
    border: "none",
    backgroundColor: "#1c5d99",
    color: "#fff",
  },
  searchIcon: {
    fontSize: "2rem",
    color: "#fff",
  },
};
