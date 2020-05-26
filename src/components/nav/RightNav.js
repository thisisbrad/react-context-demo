import React from "react";

const RightNav = (props) => {
  return (
    <nav style={styles.container}>
      {/* <h4>{props.value.title}</h4> */}
      <article style={styles.article} key={props.id}>
        <img style={styles.img} src={props.addOne} alt={props.alt} />
      </article>
    </nav>
  );
};

export default RightNav;

const styles = {
  container: {
    position: "fixed",
    width: "15rem",
    backgroundColor: "#1c5d99",
    top: "5rem",
    right: "0",
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
    color: "#fff",
  },
  article: {
    // backgroundColor: "red",
    width: "60%",
    marginLeft: "1rem",
    marginRight: "2rem",
    padding: "3rem 3rem 3rem 1rem",
  },
};
