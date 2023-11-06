// import { useState } from "react";
// import Cell from "./Cell.jsx";

// function Grid()  {
//     const [activeCells, setActiveCells] = 
//         useState([false, false, false, false]);

//     const toggleCellState = (index) => {
//         const newActiveCells = [...activeCells];
//         newActiveCells[index] = !newActiveCells[index];
//         setActiveCells(newActiveCells);
//     };

//     const activeCount = activeCells.filter(isActive => isActive).length;

//     return (
//         <div>
//             <div style = {{fontFamily: 'Times New Roman', 
//                            fontSize: '40px', 
//                            fontWeight: 'bolder'}}>
//                 Count: {activeCount}
//             </div>

//             <br/> 
            
//             <div style = {{display: 'grid',
//                            gridTemplateColumns: '1fr 1fr',
//                            gap: '1px'}}>
//                 {activeCells.map((isActive, index) => 
//                     (<Cell key={index} 
//                         isActive={isActive} 
//                         onClick={() => toggleCellState(index)} />))}
//             </div>
//         </div>
//     );
// }

// export default Grid;


import React, { useState } from "react";
import Cell from "./Cell";
import ActiveCellContext from "./ActiveCellContext";

function Grid() {
  const [activeCells, setActiveCells] = 
    useState([false, false, false, false]);

  const toggleCellState = (index) => {
    const newActiveCells = [...activeCells];
    newActiveCells[index] = !newActiveCells[index];
    setActiveCells(newActiveCells);
  };

  const activeCount = activeCells.filter(isActive => isActive).length;

  return (
    <ActiveCellContext.Provider value={{ activeCells, toggleCellState }}>
      <div>
          <div style={{ fontFamily: 'Times New Roman', fontSize: '40px', fontWeight: 'bolder' }}>
              Count: {activeCount}
          </div>

          <br/> 

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px' }}>
              {activeCells.map((isActive, index) => 
                  <Cell key={index} index={index} />)}
          </div>
      </div>
    </ActiveCellContext.Provider>
  );
}

export default Grid;
