import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { GameProvider } from './GameContext';
import Keyboard from './components/keyboard/Keyboard';
import Board from './components/board/Board';
import './game.css';

const GamePage = () => {
  const navigate = useNavigate(); // 获取navigate函数

  // 一个函数，用户点击难度按钮时调用
  const selectDifficulty = (difficulty) => {
    // 导航到相应难度的游戏页面
    navigate(`/game/${difficulty}`);
  };

  return (
    <GameProvider> {/* 使用GameProvider包裹游戏相关组件 */}
      <div>
        <h1>Wordle Game</h1>
        <p>Select your difficulty:</p>
        <button onClick={() => selectDifficulty('normal')}>Normal</button>
        <button onClick={() => selectDifficulty('hard')}>Hard</button>

        <Board difficulty="hard" />

        <Keyboard />

      </div>
    </GameProvider>
  );
};

export default GamePage;