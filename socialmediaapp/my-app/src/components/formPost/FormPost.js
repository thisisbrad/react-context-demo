import React from "react";
import MyBtn from "../buttons/MyBtn";
import { FaEdit } from "../../../node_modules/react-icons/fa";
import { FaRegTrashAlt } from "../../../node_modules/react-icons/fa";

const FormPost = (props) => {
  return (
    <article style={styles.article} key={props.id}>
      <img style={styles.img} src={props.avatar} alt={props.alt} />
      <h4>
        {"Title: "}
        {props.title}
      </h4>
      <p>
        {"Description: "}
        {props.description}
      </p>
      <p>{props.newPost}</p>
      {/* <button onClick={props.deletePost}>Delete Post</button> */}
      <FaRegTrashAlt color="red" size="1.5rem" />
      <MyBtn FaRegTrashAlt onClick={props.deletePost} btnText="Delete Post" />
      <FaEdit />
      <MyBtn onClick={props.editPost} btnText="Edit Post" />
    </article>
  );
};

export default FormPost;

const styles = {
  article: {
    border: ".2rem solid #0a2463",
    backgroundColor: "#ccc",
    padding: "1rem",
    width: "70%",
    marginLeft: "8rem",

    marginTop: "1rem",
  },

  img: {
    width: "20px",
  },
};
