import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import siteLogo from './images/favicon.png';

class LoggedIn extends Component {
  logout = async () => {
    await Promise.all([localStorage.removeItem('jwtToken'), localStorage.removeItem('user')]);
    window.location.reload();
  };

  render() {
    return (
      <Navbar className="navbar navbar-dark bg-primary" expand="xl">
        <Navbar.Brand className="navbar-brand titleSite" href="/">
          Best Seller Searcher
        </Navbar.Brand>
        <Navbar.Brand className="navbar-brand logoSite" href="/">
          <img
            src={siteLogo}
            style={{ width: 55, height: 'auto', backgroundColor: 'white', borderRadius: 4 }}
            alt="site logo"
          />
          <div
            style={{
              fontFamily: 'gothic script',
              fontSize: '60px',
              padding: '0px 3px',
              WebkitTextStroke: '2px #333333',
            }}
          >
            NYT
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ marginRight: '10px' }} className="nav-item" href="/search">
              <button type="button" className="btn btn-dark">
                Home
              </button>
            </Nav.Link>
            <Nav.Link style={{ marginRight: '10px' }} className="nav-item" href="/articles">
              <button type="button" className="btn btn-dark">
                Saved Articles
              </button>
            </Nav.Link>
            <Nav.Link style={{ marginRight: '10px' }} className="nav-item" href="/recommendation">
              <button type="button" className="btn btn-dark">
                Recommendations
              </button>
            </Nav.Link>
            <Nav.Link style={{ marginRight: '10px' }} className="nav-item">
              <button onClick={this.logout} type="button" className="btn btn-dark">
                Logout
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default LoggedIn;
