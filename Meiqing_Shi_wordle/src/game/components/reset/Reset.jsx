import React from 'react';
import { useGame } from '../../GameContext';

const ResetGame = () => {
  const { resetGame } = useGame();

  return (
    <button onClick={resetGame}>Restart</button>
  );
};

export default ResetGame;
