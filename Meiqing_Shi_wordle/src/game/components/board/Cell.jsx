import React from 'react';

const Cell = ({ letter }) => {
  return (
    <div className="cell">
      {letter}
    </div>
  );
};

export default Cell;