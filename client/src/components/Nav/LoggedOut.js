import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoggedOut extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark bg-primary"
        style={{ position: 'fixed', zIndex: 100, width: '100%' }}
      >
        <Link className="navbar-brand" to="/">
          NYT Article Search
        </Link>
      </nav>
    );
  }
}

export default LoggedOut;
