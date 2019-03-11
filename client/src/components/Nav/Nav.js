import React, { Component } from 'react';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

class Nav extends Component {
  chooseNav = () => {
    if (this.isLoggedIn()) {
      return <LoggedIn />;
    }
    return <LoggedOut />;
  };

  isLoggedIn = () => {
    return localStorage.getItem('jwtToken');
  };

  render() {
    return this.chooseNav();
  }
}

export default Nav;
