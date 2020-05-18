import React from "react";
import MyBtn from "../buttons/MyBtn";
import { FaEdit } from "../../../node_modules/react-icons/fa";
import { FaRegTrashAlt } from "../../../node_modules/react-icons/fa";

const FormPost = (props) => {
  return (
    //an article to that we add the post in. We give it a key
    <article style={styles.article} key={props.id}>
      <img style={styles.img} src={props.value.avatar} alt={props.value.alt} />
      <h4>{props.value.title}</h4>
      <p>{props.value.description}</p>
      <p>{props.value.myPost}</p>
      <button onClick={props.deletePost}>Delete Post</button>
      <FaRegTrashAlt color="red" size="1.5rem" />
      <MyBtn click={props.deletePost} btnText="Delete Post" />
      <FaEdit />
      <MyBtn click={props.editPost} btnText="Edit Post" />
    </article>
  );
};

export default FormPost;

const styles = {
  article: {
    border: ".2rem solid #0a2463",
    backgroundColor: "#ccc",
    padding: "1rem",
    width: "80%",
    marginLeft: "3rem",
    marginTop: "1rem",
  },

  img: {
    width: "20px",
  },
};
