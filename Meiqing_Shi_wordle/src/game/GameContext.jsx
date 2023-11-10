import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext({ 
  difficulty: 'normal', 
  changeDifficulty: () => {},

  currentGuess: '',
  guesses: [],
  addLetter: () => {},
  delLetter: () => {},
  submitGuess: () => {},
});

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState('normal');
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuess] = useState([]);

  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setCurrentGuess('');
    setGuess([]);
  };

  const maxGuessLength = difficulty === 'hard' ? 7 : 6;

  const addLetter = (letter) => {
    if (currentGuess.length < maxGuessLength) {
      setCurrentGuess(currentGuess + letter);
    }
  };

  const delLetter = () => {
    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
  };

  const submitGuess = () => {
    if (currentGuess.length === maxGuessLength) { 

      // TODO: check validity
      setGuess([...guesses, currentGuess]);
      setCurrentGuess('');
    }
    console.log("Enter was pressed, currentGuess:", currentGuess);
  };

  return (
    <GameContext.Provider value={{ 
      difficulty, 
      changeDifficulty,
      currentGuess,
      guesses,
      addLetter,
      delLetter,
      submitGuess
    }}>
      {children}
    </GameContext.Provider>
  );
};