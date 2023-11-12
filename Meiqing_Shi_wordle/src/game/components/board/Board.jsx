import React from 'react';
import Row from './Row';
import { useGame } from '../../GameContext';
import './board.css';

const Board = ({ difficulty }) => {  
  const numRows = difficulty === 'hard' ? 5 : 6;
  const numCols = difficulty === 'hard' ? 7 : 6;

  const { currentGuess, guesses, guessesWithClues } = useGame();

//   const currentRow = currentGuess.split('').concat(Array(numCols - currentGuess.length).fill(''));

//   const boardState = guesses.map(g => g.split(''));
//   if (guesses.length < numRows) {
//     boardState.push(Array.from({ length: numCols }, (_, i) => currentGuess[i] || ''));
//   }
//   while (boardState.length < numRows) {
//     boardState.push(Array(numCols).fill(''));
//   }


//   return (
//     <div className="board">
//       {boardState.map((letters, index) => (
//         <Row key={index} letters={letters} />
//       ))}
//     </div>
//   );
// };


  // 将当前猜测转换为数组，并用空字符串填充剩余的列
  const currentRowClues = Array(numCols).fill({ letter: '', status: 'empty' });
  currentGuess.split('').forEach((letter, index) => {
    currentRowClues[index] = { letter: letter, status: 'current' };
  });

  // 完成的猜测加上当前猜测和空白行
  const rows = guessesWithClues.map((item, index) => (
    <Row key={index} letters={item.guess.split('')} clues={item.clues} />
  ));

  // 如果已完成的猜测少于 numRows，则添加当前猜测的行
  if (guessesWithClues.length < numRows) {
    rows.push(
      <Row key={guessesWithClues.length} letters={currentRowClues.map(clue => clue.letter)} clues={currentRowClues.map(clue => clue.status)} />
    );
  }

  // 添加空白行直到达到 numRows 总行数
  while (rows.length < numRows) {
    const emptyClues = Array(numCols).fill({ letter: '', status: 'empty' });
    rows.push(
      <Row key={rows.length} letters={emptyClues.map(clue => clue.letter)} clues={emptyClues.map(clue => clue.status)} />
    );
  }

  return (
    <div className="board">
      {rows}
    </div>
  );
}

export default Board;