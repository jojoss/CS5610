import React from 'react';

const KeyCell = ({ letter, onKeyClick }) => {
  return (
    <button onClick={() => onKeyClick(letter)}>
      {letter}
    </button>
  );
};

export default KeyCell;