import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import * as firebase from "firebase";

import Main from './Main'
import NotFound from './NotFound'
import About from './About'
import Login from './Login'
import Schedule from './Schedule'

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/schedule" component={Schedule}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
), document.getElementById('app'));

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  }
});


