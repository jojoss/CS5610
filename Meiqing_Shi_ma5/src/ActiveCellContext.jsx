import { createContext } from 'react';

const ActiveCellContext = createContext({
  activeCells: [],
  toggleCellState: () => {},
});

export default ActiveCellContext;
