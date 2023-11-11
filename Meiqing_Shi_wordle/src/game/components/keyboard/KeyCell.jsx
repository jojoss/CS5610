import React from 'react';

const KeyCell = ({ letter, onKeyClick, onEnter, onDelete }) => {
  // 确保你有一个条件来检查是否是ENTER键被点击
  const handleClick = () => {
    if (letter === 'ENTER') {
      onEnter && onEnter();
    } else if (letter === 'DELETE') {
      onDelete && onDelete();
    } else {
      onKeyClick && onKeyClick(letter);
    }
  };


  return (
    <button onClick={handleClick}>
      {letter}
    </button>
  );
};

export default KeyCell;