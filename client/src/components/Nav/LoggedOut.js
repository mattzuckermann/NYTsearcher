import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

class LoggedOut extends Component {
  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  };

  render() {
    return (
      <nav
        className="navbar navbar-dark bg-primary"
      >
        <Link className="navbar-brand" to="/">
          NYT Best Sellers Search
        </Link>
      </nav>
    );
  }
}

export default LoggedOut;

/*
        style={{ position: 'fixed', zIndex: 100, width: '100%' }}


.navbar {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;
}

.navbar::before {
  background: #19647E;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 0;
  transition: all 0.6s ease;
  transform: translate(-50%,-50%);
  z-index: -1;
}

.navbar:hover::before{
  height: 100%;
}
*/
