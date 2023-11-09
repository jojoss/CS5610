import React from 'react';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>🟨 ⬜️ 🟩</h1>
      <div>
        <a href="/game">Start Game</a>
        <a href="/rules">How to Play</a>
      </div>
    </div>
  );
};

export default WelcomePage;
