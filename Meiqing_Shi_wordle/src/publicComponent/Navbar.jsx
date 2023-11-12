import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ showGameLink, showRulesLink }) => {
  return (
    <nav>
      <Link to="/">Welcome</Link>
      {showGameLink && <Link to="/game">Play</Link>}
      {showRulesLink && <Link to="/rules">Rules</Link>}
    </nav>
  );
};

export default Navbar;
