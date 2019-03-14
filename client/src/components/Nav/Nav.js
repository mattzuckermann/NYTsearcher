import React, { Component } from 'react';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import { Link } from 'react-router-dom';

class Nav extends Component {
  isLoggedIn = () => {
    return localStorage.getItem('jwtToken') !== null;
  };

  render() {
    return <div>{this.isLoggedIn() ? <LoggedIn /> : <LoggedOut />}</div>;
  }
}

export default Nav;
