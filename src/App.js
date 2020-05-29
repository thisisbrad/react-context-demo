import React, { Component } from 'react';
import Routes from './components/routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { VideoProvider } from './context/VideoContext';

class App extends Component {
  //create state for binding
  render() {
    return (
      <VideoProvider>
        <Router>
          <Routes />
        </Router>
      </VideoProvider>
    );
  }
}

export default App;
