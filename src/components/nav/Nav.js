import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/Newsfeed">Newsfeed</NavLink>
      <NavLink to="/Messages">Messages</NavLink>
      <NavLink to="/Watch">Watch</NavLink>
      <NavLink to="/Profile">Profile</NavLink>
    </nav>
  );
};

export default Nav;
