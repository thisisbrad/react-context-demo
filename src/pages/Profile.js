import React, { Component } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import RightNav from "../components/nav/RightNav";

class Profile extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />
        <Nav />
        <main style={styles.main}>
          <h1 style={h1}>Your Profile</h1>
        </main>
        <RightNav />
        <Footer footerText="copyright &copy; 2020 by john" />
      </div>
    );
  }
}

export default Profile;

const styles = {
  main: {
    border: "5px solid #fff",
    justifyContent: "space-between",
    backgroundGround: "#ccc",
    marginLeft: "10rem",
    marginRight: "20rem",
  },
};

const h1 = {
  textAlign: "center",
  color: "#1c5d99",
  marginTop: "7rem",
};
