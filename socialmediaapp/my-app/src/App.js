import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MyBtn from "./components/buttons/MyBtn";
import Myform from "./components/myForm/Myform";
import Nav from "./components/nav/Nav";
// import RightNav from "./components/nav/RightNav";
import FormPost from "./components/formPost/FormPost";
import { FaEdit } from "../node_modules/react-icons/fa";

class App extends Component {
  //create state for binding
  state = {
    postValue: "",
    postItem: [
      {
        avatar: require("../src/image/instagram.png"),
        alt: "Flying high",
        title: "John",
        description: "I am coming home",
        newPost: "",
      },
    ],
  };

  //onChange value
  //Method to takecare of the databinding
  getPost = (e) => {
    //getting the input values
    this.setState({ postValue: e.target.value });
  };

  //addPost
  addPost = (e) => {
    //prevent Default
    e.preventDefault();
    //adding post
    this.setState({
      //name of the postItem array
      postItem: [{ newPost: this.state.postValue }, ...this.state.postItem],
    });
  };

  //deletePost
  deletePost = (i) => {
    //delete
    console.log("Delete Post!!!");
  };

  //edit post
  editPost = (i) => {
    //edit post
    console.log("Edit Post");
  };

  render() {
    //map through the postItems
    let items = this.state.postItem.map((el, i) => {
      return (
        <FormPost
          key={i}
          title={el.title}
          description={el.description}
          deletePost={() => this.deletePost(i)}
          editPost={() => this.editPost(i)}
          newPost={el.newPost}
          avatar={el.avatar}
          val={el}
        />
      );
    });
    return (
      <div style={styles.container}>
        <Header pgTitle="John's App" />
        <Nav />
        <main style={styles.main}>
          {/* <MyBtn /> */}
          <Myform
            getPost={this.getPost}
            myInput={this.state.myInput}
            addPost={this.addPost}
          />
          <FaEdit color="red" size="2rem" />
          {items}
          <FormPost />
        </main>
        {/* <RightNav /> */}
        <Footer footerText="copyright &copy; 2020 by john" />
      </div>
    );
  }
}

export default App;

const styles = {
  main: {
    // display: "flex",
    // flexDirection: "row",
    border: "5px solid red",
    // height: "100vh",
    justifyContent: "space-between",
    backgroundGround: "#ccc",
    marginLeft: "10rem",
    marginRight: "10rem",
  },
};
