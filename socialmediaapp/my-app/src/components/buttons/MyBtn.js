import React from "react";

const MyBtn = (props) => {
  return <button style={styles.myBtn}>{props.btnText}</button>;
};

export default MyBtn;

const styles = {
  myBtn: {
    padding: ".7rem 3.5rem",
    backgroundColor: "#000000",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    outline: "none",
    cursor: "pointer",
    width: "100%",
  },
};
