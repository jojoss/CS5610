import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from './GameContext';
import Board from './components/board/Board';
import Keyboard from './components/keyboard/Keyboard';
import './game.css';

const GamePage = () => {
  const navigate = useNavigate();
  const { difficulty, changeDifficulty } = useGame();

  const selectDifficulty = (newDifficulty) => {
    changeDifficulty(newDifficulty);
    navigate(`/game/${newDifficulty}`);
  };

  return (
    <div className="game-page">
      <h1>Wordle Game</h1>
      <button onClick={() => selectDifficulty('normal')}>Normal</button>
      <button onClick={() => selectDifficulty('hard')}>Hard</button>

      <Board difficulty={difficulty} />
      <Keyboard />
    </div>
  );
};

export default GamePage;