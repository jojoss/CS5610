// src/pages/WelcomePage.jsx
import React from 'react';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Wordle!</h1>
      <p>This is a simple word guessing game.</p>
      <div>
        <a href="/game">Start Game</a>
        <a href="/rules">How to Play</a>
      </div>
    </div>
  );
};

export default WelcomePage;
