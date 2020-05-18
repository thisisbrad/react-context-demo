import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import MyBtn from "./components/buttons/MyBtn";
import Myform from "./components/myForm/Myform";
import Nav from "./components/nav/Nav";
// import RightNav from "./components/nav/RightNav";
import FormPost from "./components/formPost/FormPost";
// import { FaEdit } from "../node_modules/react-icons/fa";

class App extends Component {
  //create state for binding
  state = {
    myInput: "",
    postValue: "",
    postItem: [
      {
        avatar: require("../src/image/instagram.png"),
        alt: "Flying high",
        title: "John",
        description: "I am coming home",
        myPost: "",
      },
    ],
  };

  //onchange on the inputs
  getPost = (e) => {
    //Binding
    this.setState({ myInput: e.target.value });

    //getting the input values chnage this to get all the inputs
    this.setState({ postValue: e.target.value });
  };

  //addPost
  addPost = (e) => {
    //prevent Default
    e.preventDefault();
    console.log("I am working!!!");
    //We are updating the state
    //This the inform we want to add to the post
    this.setState({
      //name of the postItem array
      postItem: [{ myPost: this.state.postValue }, ...this.state.postItem],
    });
    e.target.reset();
  };

  //deletePost passing the i since we want to delete according to id
  deletePost = (i) => {
    //delete
    console.log("Delete Post!!!");
    //use splice to remove the selected item
    this.state.postItem.splice(i, 1);
    //we update the state
    this.setState({ postItem: [...this.state.postItem] });
  };

  //edit post
  editPost = (i) => {
    //edit post
    console.log("Edit Post");
  };

  render() {
    //map through the postItems. The i is for counting. el is for the element
    let items = this.state.postItem.map((el, i) => {
      return (
        <FormPost
          key={i}
          value={el}
          //adding both delete and edit buttons the post/article everytime it iterartes
          //Passing the i which is the key/id
          deletePost={() => this.deletePost(i)}
          editPost={() => this.editPost(i)}
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
            addPost={this.addPost}
            getPost={this.getPost}
            myInput={this.state.myInput}
          />
          {/* <FaEdit color="red" size="2rem" /> */}
          {items}
          {/* <FormPost /> */}
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
    border: "5px solid #fff",
    justifyContent: "space-between",
    backgroundGround: "#ccc",
    marginLeft: "10rem",
    marginRight: "20rem",
  },
};
