import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from './GameContext';
import Board from './components/board/Board';
import Keyboard from './components/keyboard/Keyboard';
import Navbar from '../publicComponent/navbar';
import Prompt from './components/prompt/Prompt';
import ResetGame from './components/reset/Reset';

import './game.css';

const GamePage = () => {
  const navigate = useNavigate();
  const { difficulty, changeDifficulty } = useGame();

  const selectDifficulty = (newDifficulty) => {
    changeDifficulty(newDifficulty);
    navigate(`/game/${newDifficulty}`);
  };

  return (
    <div>
      <Navbar showGameLink={false} showRulesLink={true} />
      <Prompt /> {/* 添加Prompt组件 */}
      <ResetGame /> {/* 添加重置游戏的按钮 */}

      <div className="game-page">
        <h1>Wordle Game</h1>
        <button onClick={() => selectDifficulty('normal')}>Normal</button>
        <button onClick={() => selectDifficulty('hard')}>Hard</button>

        <Board difficulty={difficulty} />
        <Keyboard />
      </div>
    </div>
  );
};


export default GamePage;