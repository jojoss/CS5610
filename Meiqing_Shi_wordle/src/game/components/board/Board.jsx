import React from 'react';
import Row from './Row';
import './board.css';

const Board = ({ difficulty }) => {
  const numRows = difficulty === 'hard' ? 5 : 6;
  const numCols = difficulty === 'hard' ? 7 : 6;
  
  const emptyBoard = Array.from({ length: numRows }, () => 
    Array.from({ length: numCols }, () => '')
  );

  return (
    <div className="board">
      {emptyBoard.map((letters, index) => (
        <Row key={index} letters={letters} />
      ))}
    </div>
  );
};

export default Board;
