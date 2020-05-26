import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/routes/Routes";

class App extends Component {
  //create state for binding
  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default App;
