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
      // <nav
      //   className="navbar navbar-dark bg-primary"
      //   style={{ position: 'fixed', zIndex: 100, width: '100%' }}
      // >
      //   <Link className="navbar-brand " to="/">
      //     NYT ARTICLES AND BOOKS Searcher
      //   </Link>
      // </nav>
    );
  }
}

export default LoggedOut;
