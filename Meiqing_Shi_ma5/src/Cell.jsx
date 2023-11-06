// import React, { useState } from "react";

// function Cell({ isActive, onClick }) {
//     const style = {
//       width: '100px',
//       height: '100px',
//       border: '1px solid grey',
//       backgroundColor: isActive ? 'black' : 'white',
//     };
  
//     return <div style={style} onClick={onClick}></div>;
//   }
  
// export default Cell;


import React, { useContext } from "react";
import ActiveCellContext from "./ActiveCellContext";

function Cell({ index }) {
  const { activeCells, toggleCellState } = useContext(ActiveCellContext);
  const isActive = activeCells[index];

  const style = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: isActive ? 'black' : 'white',
  };

  return <div style={style} onClick={() => toggleCellState(index)}>
         </div>;
}

export default Cell;
