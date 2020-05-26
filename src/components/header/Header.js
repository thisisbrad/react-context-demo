import React from "react";
import Search from "../search/Search";
import { FaRegSun } from "../../../node_modules/react-icons/fa";
import instagram from "../../image/person.jpg";
import logo from "../../image/logo1.png";

const Header = (props) => {
  return (
    <header style={styles.header}>
      <img src={logo} alt="logo" style={styles.logo} />
      {/* <h1 style={styles.h1}>{props.pgTitle}</h1> */}
      <Search />
      <div style={styles.div}>
        <img src={instagram} alt="instagram" style={styles.avatar} />
        <p>John</p>
        <FaRegSun style={styles.setting} />
      </div>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    paddingLeft: "2rem",
    position: "fixed",
    display: "flex",
    flextDirection: "row",
    backgroundColor: "#1c5d99",
    justifyContent: "space-between",
    width: "100%",
    height: "5rem",
    alignItems: "center",
  },
  div: {
    paddingRight: "4rem",
    display: "flex",
    flextDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    paddingRight: ".4rem",
  },
  setting: {
    color: "#fff",
    paddingLeft: ".5rem",
  },
  logo: {
    width: "3.5rem",
    alignItems: "center",
  },
};
