import React from "react";
import MyBtn from "../buttons/MyBtn";

const Myform = (props) => {
  return (
    //Creating form and passing in the onSubmit function
    <form style={styles.myForm} onSubmit={props.addPost}>
      <label style={styles.label}>Title</label>
      <input
        type="text"
        style={styles.input}
        placeholder="Your Post Title"
        title="postValue"
        value={props.postValue}
        onChange={props.getPost}
      />
      <label style={styles.label}>Description</label>
      <input
        type="text"
        style={styles.input}
        placeholder="Your Description"
        description="postValue"
        value={props.postValue}
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
    backgroundColor: "#ccc",
    padding: "30px 40px",
    width: "85%",
    maxWidth: "100%",
    marginLeft: "3rem",
    marginTop: "13%",
    boxSizing: "border-box",
  },
  input: {
    width: "100%",
    padding: ".7rem",
    marginBottom: ".3rem",
    marginTop: ".3rem",
    outline: "none",
  },
};
