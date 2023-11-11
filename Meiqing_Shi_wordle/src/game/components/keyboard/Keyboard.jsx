import React from 'react';
import KeyCell from './KeyCell';
import { useGame } from '../../GameContext';

const Keyboard = () => {
  const { addLetter, delLetter, submitGuess } = useGame();
  const keysRow1 = 'QWERTYUIOP'.split('');
  const keysRow2 = 'ASDFGHJKL'.split('');
  const keysRow3 = 'ZXCVBNM'.split('');

  return (
    <div>
      <div className="keyboard-row">
        {keysRow1.map((letter) => <KeyCell key={letter} letter={letter} onKeyClick={addLetter} />)}
      </div>
      <div className="keyboard-row">
        {keysRow2.map((letter) => <KeyCell key={letter} letter={letter} onKeyClick={addLetter} />)}
      </div>
      <div className="keyboard-row">
        {keysRow3.map((letter) => <KeyCell key={letter} letter={letter} onKeyClick={addLetter} />)}
        <KeyCell key="ENTER" letter="ENTER" onEnter={submitGuess} />
        <KeyCell key="DELETE" letter="DELETE" onDelete={delLetter} />
      </div>
    </div>
  );
};

export default Keyboard;