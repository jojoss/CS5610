import React from 'react';
import Navbar from '../publicComponent/navbar';

const RulesPage = () => {
  return (
    <div>
      <Navbar showGameLink={false} showRulesLink={false} />
      <h1>Game Rules</h1>
      <p>Here are the rules of the game...</p>
    </div>
  );
};

export default RulesPage;
