import React, { useContext } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";
import RightNav from "../components/nav/RightNav";
//import youtube
import Youtube from "react-youtube";
//import video
import Video from "../components/video/Video";

function Watch() {
  //Add state
  const opts = {
    height: "390",
    width: "940",
  };
  return (
    <div style={styles.container}>
      <Header />
      <Nav />
      <main style={styles.main}>
        <h1 style={h1}>Your Favorite Watch</h1>
        <Youtube videoId="GtHiv9obO9w" opts={opts} />
        <Video />
      </main>
      <RightNav />
      <Footer footerText="copyright &copy; 2020 by john" />
    </div>
  );
}

export default Watch;

const styles = {
  main: {
    border: "5px solid #fff",
    justifyContent: "space-between",
    backgroundGround: "#ccc",
    marginLeft: "10rem",
    marginRight: "20rem",
    marginTop: "13rem",
  },
};

const h1 = {
  textAlign: "center",
  color: "#1c5d99",
  marginTop: "7rem",
};
