import React from "react";

const Search = () => {
  return (
    <form style={styles.search}>
      <input style={styles.input} type="text" placeholder="Search"></input>
    </form>
  );
};

export default Search;

const styles = {
  search: {
    marginTop: "1rem",
  },
  input: {
    width: "50%",
    padding: ".5rem ",
    paddingRight: "6rem",
    outline: "none",
  },
};
