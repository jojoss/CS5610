import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ showGameLink, showRulesLink }) => {
  return (
    <nav className="navbar"> {/* 添加了 className */}
      <Link to="/">Welcome</Link>
      {showGameLink && <Link to="/game">Play</Link>}
      {showRulesLink && <Link to="/rules">Rules</Link>}
    </nav>
  );
};

export default Navbar;
