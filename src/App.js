import React, { Component } from "react";
import Routes from "./components/routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "./components/store/Store";

class App extends Component {
  //create state for binding
  render() {
    return (
      <Store>
        <Router>
          <Routes />
        </Router>
      </Store>
    );
  }
}

export default App;
