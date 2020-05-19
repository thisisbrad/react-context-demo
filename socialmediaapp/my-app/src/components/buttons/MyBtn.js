import React from "react";
import { MdAdd } from "../../../node_modules/react-icons/md";

const MyBtn = (props) => {
  return (
    <button style={styles.myBtn}>
      <MdAdd style={styles.addIcon} />
      {props.btnText}
    </button>
  );
};

export default MyBtn;

const styles = {
  myBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: ".7rem 3.5rem",
    backgroundColor: "#1c5d99",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    outline: "none",
    cursor: "pointer",
    width: "100%",
  },
  addIcon: {
    fontSize: "1.5rem",
  },
};
