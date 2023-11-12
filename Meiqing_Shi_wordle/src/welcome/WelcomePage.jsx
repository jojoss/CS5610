// WelcomePage.js
import React from 'react';
import './welcome.css'; // 确保你的样式文件被正确导入

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>🟨 ⬜️ 🟩</h1>
      <div className="link-container">
        <a href="/game" className="welcome-link">Start</a>
        <a href="/rules" className="welcome-link">Rules</a>
      </div>
    </div>
  );
};

export default WelcomePage;

