import React from "react";

const Nav = () => {
  return (
    <nav style={styles.container}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <a style={styles.a} href="News Feed">
            News Feed
          </a>
        </li>
        <li style={styles.li}>
          <a style={styles.a} href="Messages">
            Messages
          </a>
        </li>
        <li style={styles.li}>
          <a style={styles.a} href="Watch">
            Watch
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

const styles = {
  container: {
    position: "fixed",
    width: "10rem",
    backgroundColor: "#ccc",
    top: "4rem",
    left: "0",
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
    color: "#000000",
  },
};
