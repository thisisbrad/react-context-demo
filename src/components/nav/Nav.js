import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={navStyle}>
      <Link style={link} to="/Newsfeed">
        Newsfeed
      </Link>
      <Link style={link} to="/Messages">
        Messages
      </Link>
      <Link style={link} to="/Watch">
        Watch
      </Link>
      <Link style={link} to="/Profile">
        Profile
      </Link>
    </nav>
  );
};

export default Nav;

const navStyle = {
  backgroundColor: "#1c5d99",
  padding: "30px",
  marginTop: "28rem",
  position: "fixed",
  width: "7rem",
  top: "-23rem",
  left: "0",
  bottom: "0",
};

const link = {
  display: "block",
  paddingTop: "1rem",
  color: "#fff",
  textDecoration: "none",
};
