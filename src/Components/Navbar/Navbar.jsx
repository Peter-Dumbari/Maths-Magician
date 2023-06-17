import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-logo-link">
            <h1 className="navbar-logo-link-text">Maths Magician</h1>
          </NavLink>
        </div>
        <div className="navbar-links">
          <ul className="navbar-links-list">
            <li className="navbar-links-list-item">
              <NavLink to="/" className="navbar-links-list-item-link">
                Home
              </NavLink>
            </li>
            <li className="navbar-links-list-item">
              <NavLink to="/calculator" className="navbar-links-list-item-link">
                Calculator
              </NavLink>
            </li>
            <li className="navbar-links-list-item">
              <NavLink to="/qoutes" className="navbar-links-list-item-link">
                Qoutes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
