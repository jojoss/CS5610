import React from 'react';

const Cell = ({ letter, color }) => {
  const style = {
    backgroundColor: color,
  };

  return (
    <div className="cell" style={style}>
      {letter.toUpperCase()}
    </div>
  );
};

export default Cell;