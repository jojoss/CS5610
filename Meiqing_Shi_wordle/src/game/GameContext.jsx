import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [inputWord, setInputWord] = useState('');

  const addLetter = (letter) => {
    setInputWord((prev) => prev + letter);
  };

  const removeLetter = () => {
    setInputWord((prev) => prev.slice(0, -1));
  };

  const submitWord = () => {
    // Here you will handle the submission logic
    
    console.log(inputWord);
    
    // Reset input word after submission
    setInputWord('');
  };

  return (
    <GameContext.Provider value={{ inputWord, addLetter, removeLetter, submitWord }}>
      {children}
    </GameContext.Provider>
  );
};
