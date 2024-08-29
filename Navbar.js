// src/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">KIU AppearanceReg</div>
      <ul className="navbar-nav">
        <li className="nav-item">Notice Board</li>
        <li className="nav-item">My Activity</li>
        <li className="nav-item">Complaints & Suggestions</li>
      </ul>
    </nav>
  );
};

export default Navbar;
