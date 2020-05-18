import React from "react";

const RightNav = () => {
  return (
    <div>
      <article style={styles.article}>
        <p>I am right Nave</p>
      </article>
    </div>
  );
};

export default RightNav;

const styles = {
  article: {
    backgroundColor: "#ccc",
    padding: "3rem",
    position: "fixed",
    width: "5rem",
    top: "4rem",
    right: "0",
  },
};
