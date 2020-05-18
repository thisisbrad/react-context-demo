import React from "react";

const Footer = (props) => {
  return (
    <footer style={styles.footer}>
      <p style={styles.p}>{props.footerText}</p>
    </footer>
  );
};

export default Footer;

const styles = {
  footer: {
    backgroundColor: "#ccc",
    display: "flex",
    flexDirection: "row",
    fontSize: ".7rem",
    justifyContent: "center",
    bottom: "0",
    position: "fixed",
    width: "100%",
    color: "#000000",
  },
};
