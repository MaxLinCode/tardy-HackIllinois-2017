import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory, browserHistory } from 'react-router';
import * as firebase from "firebase";
import { logout } from './Auth'
import { firebaseAuth } from './config/fireConstants'

import Home from './Home'
import NotFound from './NotFound'
import About from './About'
import Login from './Login'
import Schedule from './Schedule'
import SignUp from './SignUp'
import Dashboard from './Dashboard'
import Friend from './Friend'
import Network from './Network'
import MeetupDetails from './MeetupDetails'
import AddEvent from './AddEvent'


export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {"authed": "false"};
    this.handleLogout = this.handleLogout.bind(this)
    this.requireAuth = this.requireAuth.bind(this)
  }

  componentDidMount () {
    this.unsubscribe = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true
        })
      }
    });
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  requireAuth(nextState, replace) {
    var user = firebase.auth().currentUser;
    console.log('userId = ' + user);

    //FIX AUTHORIZATION
    if (this.state.authed == 'true') {
      replace({ pathname: '/' })
      console.log('Not authorized')
    } else {
      console.log('authorized')
    }
}

  handleLogout() {
    logout();
    this.setState({authed: false});
    browserHistory.push('/login')
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={Home} >
            <IndexRoute component={Login} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/schedule" component={Schedule} onEnter={this.requireAuth} />
            <Route path="/add-event" component={AddEvent} onEnter={this.requireAuth} />
            <Route path="/dashboard" component={Dashboard} onEnter={this.requireAuth} />
            <Route path="/friend" component={Friend} onEnter={this.requireAuth} />
            <Route path="/network" component={Network} onEnter={this.requireAuth} />
            <Route path="/meetup-details" component={MeetupDetails} onEnter={this.requireAuth} />
          </Route>
          <Route path="*" component={NotFound}/>
        </Router>
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
