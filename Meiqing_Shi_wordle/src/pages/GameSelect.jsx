// src/pages/GameDifficultySelect.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 导入Link组件用于内部导航

const GameDifficultySelect = () => {
  return (
    <div>
      <h1>Select Game Difficulty</h1>
      <div>
        <Link to="/game/normal">Normal</Link>
        <Link to="/game/hard">Hard</Link>
      </div>
    </div>
  );
};

export default GameDifficultySelect;