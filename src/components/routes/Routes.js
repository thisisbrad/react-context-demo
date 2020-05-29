import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Newsfeed from '../../pages/Newsfeed';
import Profile from '../../pages/Profile';
import Messages from '../../pages/Messages';
// import Watch from '../../pages/Watch';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Newsfeed} />
      <Route path="/Newsfeed" component={Newsfeed} />
      <Route path="/Messages" component={Messages} />
      {/* <Route path="/Watch" component={Watch} /> */}
      <Route path="/Profile" component={Profile} />
    </Switch>
  );
};

export default Routes;
