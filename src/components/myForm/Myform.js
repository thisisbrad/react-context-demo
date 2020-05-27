import React from "react";
import MyBtn from "../buttons/MyBtn";

const Myform = (props) => {
  return (
    //Creating form and passing in the onSubmit function
    <form style={styles.myForm} onSubmit={props.addPost}>
      <label style={styles.label}>Title</label>
      <input
        type="text"
        name="title"
        style={styles.input}
        placeholder="Post title"
        title="postTitle"
        value={props.postTitle}
        onChange={props.getPost}
      />
      <label style={styles.label}>Description</label>
      <input
        type="text"
        name="description"
        style={styles.input}
        placeholder="Post description"
        description="postDescription"
        value={props.postDescription}
        onChange={props.getPost}
      />
      <p>New Item: {props.myInput}</p>
      <MyBtn btnText="Add Post" />
    </form>
  );
};

export default Myform;

const styles = {
  myForm: {
    backgroundColor: "#bbcde5",
    padding: "30px 40px",
    width: "95%",
    maxWidth: "100%",
    marginLeft: "70px",
    marginTop: "13%",
    boxSizing: "border-box",
  },
  input: {
    width: "100%",
    padding: ".5rem",
    paddingRight: "0",
    marginBottom: ".3rem",
    marginTop: ".3rem",
    outline: "none",
  },
};
