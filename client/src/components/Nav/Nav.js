import React, { Component } from 'react';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
import './nav.css';

class Nav extends Component {
  render() {
    return <div>{this.props.loggedin ? <LoggedIn /> : <LoggedOut />}</div>;
  }
}

export default Nav;
