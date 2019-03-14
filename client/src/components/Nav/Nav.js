import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => (
  <nav className="navbar navbar-dark" style={{ position: 'fixed', zIndex: 100, width: '100%' }}>
    <Link className="navbar-brand" to="/">
      NYT Best Seller Search
    </Link>
    <ul className="navbar-nav" style={{ float: 'right' }}>
      <li className="nav-item">
        <Link to="/">
          <button type="button" id="btn1" className="btn">
            Home
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/savedArticles">
          <button type="button" id="btn2" className="btn">
            Saved Articles
          </button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
