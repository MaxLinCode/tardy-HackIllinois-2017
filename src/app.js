import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';
import * as firebase from "firebase";
import { logout } from './Auth'
import { firebaseAuth } from './config/fireConstants'

import Home from './Home'
import NotFound from './NotFound'
import About from './About'
import Login from './Login'
import Schedule from './Schedule'
import SignIn from './SignIn'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"authed": "false"};
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentWillMount() {
    this.removeListener = firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      this.setState({ authed: "true" });
    }
    else {
      this.setState({ authed: "false" });
    }
    }.bind(this));
  }

  componentDidMount() {
    this.removeListener();
  }

  requireAuth(nextState, replace) {
    var user = firebase.auth().currentUser;
    if (!user) {
      replace({
        pathname: '/login'
      })
    }
}

  handleLogout() {
    logout();
    this.setState({authed: false});
  }
  
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Home} >
            <IndexRoute component={Login} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/schedule" component={Schedule} onEnter={this.requireAuth}/>
          </Route>
          <Route path="*" component={NotFound}/>
        </Router>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));

/*
 <button onClick={() => {
          this.setState({authed: 'true'})
          logout()
        }}>Logout</button>
*/
