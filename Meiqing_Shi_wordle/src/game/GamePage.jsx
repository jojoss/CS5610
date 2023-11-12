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
      <Prompt />
      <ResetGame />

      <div className="game-page">
      <div className="difficulty-container">
          <button onClick={() => selectDifficulty('normal')} className="difficulty-button">Normal</button>
          <button onClick={() => selectDifficulty('hard')} className="difficulty-button">Hard</button>
        </div>

        <Board difficulty={difficulty} />
        <Keyboard />
      </div>
    </div>
  );
};


export default GamePage;