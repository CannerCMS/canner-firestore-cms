import "@babel/polyfill";
import * as React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Login from 'pages/login';
import Dashboard from 'pages/dashboard';
import Validate from 'pages/validate';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Validate} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}


ReactDOM.render(<App />, document.querySelector('#root'));
