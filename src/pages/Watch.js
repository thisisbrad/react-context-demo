import React, { Component } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import RightNav from "../components/nav/RightNav";

class Watch extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header />
        <Nav />
        <main style={styles.main}>
          <h1 style={h1}>Your Favorite Watch</h1>
        </main>
        {/* {newAdd} */}
        <RightNav />
        <Footer footerText="copyright &copy; 2020 by john" />
      </div>
    );
  }
}

export default Watch;

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
