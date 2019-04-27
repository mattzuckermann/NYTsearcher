import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './nav.css';
import siteLogo from '../../images/favicon.png';

class LoggedOut extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-primary">
        <Navbar.Brand className="navbar-brand titleSite" href="/">
          NYT Articles and Book Searcher
        </Navbar.Brand>
        <Navbar.Brand className="navbar-brand logoSite" href="/">
          <img
            src={siteLogo}
            style={{ width: 75, height: 'auto', backgroundColor: 'white', borderRadius: 4 }}
            alt="site logo"
          />
          <div style={{ fontFamily: 'gothic script', fontSize: '60px', padding: '0px 25px' }}>
            NYT
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    );
  }
}

export default LoggedOut;
