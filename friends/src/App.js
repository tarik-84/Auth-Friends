import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './components/LogIn';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList'
import lambda from './lambda.png'


function App() {
  return (
    <Router>
      <div className="App">
        <div className='App-header'>
          <div className='header'>
            <img className='logo' src={lambda} alt=''/>
          </div>
          <div className='header'>  
            <Link to="/login">Login</Link>
            <Link to="/protected">Protected Page</Link>
          </div>
        </div>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
