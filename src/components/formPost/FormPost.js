import React from "react";
import MyBtn from "../buttons/MyBtn";
import { FaRegTrashAlt } from "../../../node_modules/react-icons/fa";

const FormPost = (props) => {
  return (
    //an article to that we add the post in. We give it a key
    <article style={styles.article} key={props.id}>
      <img style={styles.img} src={props.value.avatar} alt={props.value.alt} />
      <h4>{props.value.title}</h4>
      <p>{props.value.description}</p>
      <p>{props.value.myPost}</p>
      <button style={styles.button} onClick={props.deletePost}>
        <FaRegTrashAlt style={styles.deleteIcon} />
        Delete Post
      </button>
      {/* <FaRegTrashAlt color="red" size="1.5rem" />
      <MyBtn click={props.deletePost} btnText="Delete Post" /> */}
      <MyBtn primary={true} onClick={props.EditPost} btnText="Edit Post" />
    </article>
  );
};

export default FormPost;

const styles = {
  article: {
    border: ".1rem solid #0a2463",
    backgroundColor: "#bbcde5",
    padding: "1rem",
    width: "90%",
    marginLeft: "5rem",
    marginTop: "1rem",
  },

  img: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  },
  button: {
    width: "100%",
    padding: ".5rem 0",
    backgroundColor: "#e63946",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    outline: "none",
    cursor: "pointer",
  },
  deleteIcon: {
    paddingRight: ".5rem",
  },
};
