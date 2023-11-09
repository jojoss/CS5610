import React from 'react';
import KeyCell from './KeyCell';

const Keyboard = () => {
  const keysRow1 = 'QWERTYUIOP'.split('');
  const keysRow2 = 'ASDFGHJKL'.split('');
  const keysRow3 = 'ZXCVBNM'.split('');

  return (
    <div>
      <div className="keyboard-row">
        {keysRow1.map((letter) => <KeyCell key={letter} letter={letter} />)}
      </div>
      <div className="keyboard-row">
        {keysRow2.map((letter) => <KeyCell key={letter} letter={letter} />)}
      </div>
      <div className="keyboard-row">
        {keysRow3.map((letter) => <KeyCell key={letter} letter={letter} />)}
        <KeyCell key="ENTER" letter="ENTER" />
        <KeyCell key="DELETE" letter="DELETE" />
      </div>
    </div>
  );
};

export default Keyboard;