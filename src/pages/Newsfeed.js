import React, { Component } from "react";
// import "./App.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import MyBtn from "./components/buttons/MyBtn";
import Myform from "../components/myForm/Myform";
import Nav from "../components/nav/Nav";
import RightNav from "../components/nav/RightNav";
import FormPost from "../components/formPost/FormPost";
// import { FaEdit } from "../node_modules/react-icons/fa";

class App extends Component {
  //create state for binding
  state = {
    // myInput: "",
    // postTitle: "",
    postItem: [
      {
        // avatar: require("../src/image/person.jpg"),
        // alt: "person head",
        title: "Video Call",
        description: "Call my friend in the evening.",
        myPost: "",
      },
    ],
    // itemAds: [
    //   {
    //     title: "New Camera",
    //     // addOne: require("../src/image/camera1.jpg"),
    //     // alt: "person head",
    //   },
    //   {
    //     title: "Camera Two",
    //     // addTwo: require("../src/image/camera1.jpg"),
    //     // alt: "person head",
    //   },
    // ],
  };

  //onchange on the inputs
  //Try to make this more dynamic by adding the name attribute
  getPost = (e) => {
    //Binding - You are getting the value from the form input
    this.setState({ postTitle: e.target.value });

    //getting the input values chnage this to get all the inputs
    this.setState({ postDescription: e.target.value });
    // this.props.onChange({ [e.target.name]: e.target.value });
    // this.setState({ [e.target.name]: e.target.value });
  };

  //addPost
  addPost = (e) => {
    //prevent Default
    e.preventDefault();
    console.log("I am working!!!");
    //Add validation here for the inputs.
    // if....doesnt = "" or empty array.
    //We are updating the state
    //This the inform we want to add to the post
    this.setState({
      //name of the postItem array . Fix this for week 3
      postItem: [
        { myPost: this.state.postTitle },
        { myPost: this.state.postDescription },
        ...this.state.postItem,
      ],
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
    let newAdd = this.state.itemAds.map((element, i) => {
      return <RightNav key={i} value={element} />;
    });
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
        <Header />
        <Nav />
        <main style={styles.main}>
          {/* <MyBtn /> */}
          <Myform addPost={this.addPost} getPost={this.getPost} />
          {items}
        </main>
        {newAdd}
        <RightNav />
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
