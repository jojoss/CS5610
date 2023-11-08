// src/pages/GamePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // 导入useNavigate钩子

const GamePage = () => {
  const navigate = useNavigate(); // 获取navigate函数

  // 一个函数，用户点击难度按钮时调用
  const selectDifficulty = (difficulty) => {
    // 导航到相应难度的游戏页面
    navigate(`/game/${difficulty}`);
  };

  return (
    <div>
      <h1>Wordle Game</h1>
      <p>Select your difficulty:</p>
      <button onClick={() => selectDifficulty('normal')}>Normal</button>
      <button onClick={() => selectDifficulty('hard')}>Hard</button>
    </div>
  );
};

export default GamePage;

