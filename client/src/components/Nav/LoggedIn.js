import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoggedIn extends Component {
  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  };

  render() {
    return (
      <nav
        className="navbar navbar-dark bg-primary"
        style={{ position: 'fixed', zIndex: 100, width: '100%' }}
      >
        <Link className="navbar-brand" to="/">
          NYT Article Search
        </Link>
        <ul className="navbar-nav " style={{ float: 'right' }}>
          <li className="nav-item">
            <Link to="/recommendation">
              <button type="button" className="btn btn-info">
                Recommendation
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/">
              <button type="button" className="btn btn-info">
                Home
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/savedArticles">
              <button type="button" className="btn btn-info">
                Saved Articles
              </button>
            </Link>
          </li>

          <li className="nav-item">
            <button onClick={this.logout} type="button" className="btn btn-info">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default LoggedIn;
