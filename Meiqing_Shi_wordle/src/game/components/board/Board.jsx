import React from 'react';
import Row from './Row';
import { useGame } from '../../GameContext';
import './board.css';

const Board = ({ difficulty }) => {  
  const numRows = difficulty === 'hard' ? 5 : 6;
  const numCols = difficulty === 'hard' ? 7 : 6;

  const { currentGuess } = useGame();
  const currentRow = currentGuess.split('').concat(Array(numCols - currentGuess.length).fill(''));

  // Here, we create the boardState with the current guess and fill the rest with empty strings
  const boardState = [
    currentRow,
    ...Array(numRows - 1).fill().map(() => Array(numCols).fill(''))
  ];

  return (
    <div className="board">
      {boardState.map((letters, index) => (
        <Row key={index} letters={letters} />
      ))}
    </div>
  );
};

export default Board;
