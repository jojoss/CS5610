import React from 'react';
import Row from './Row';
import { useGame } from '../../GameContext';
import './board.css';

const Board = ({ difficulty }) => {  
  const numRows = difficulty === 'hard' ? 5 : 6;
  const numCols = difficulty === 'hard' ? 7 : 6;

  const { currentGuess, guesses } = useGame();

  const currentRow = currentGuess.split('').concat(Array(numCols - currentGuess.length).fill(''));

  const boardState = guesses.map(g => g.split(''));
  if (guesses.length < numRows) {
    boardState.push(Array.from({ length: numCols }, (_, i) => currentGuess[i] || ''));
  }
  while (boardState.length < numRows) {
    boardState.push(Array(numCols).fill(''));
  }


  return (
    <div className="board">
      {boardState.map((letters, index) => (
        <Row key={index} letters={letters} />
      ))}
    </div>
  );
};

export default Board;