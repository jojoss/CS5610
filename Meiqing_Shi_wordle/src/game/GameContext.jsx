import React, { createContext, useState, useContext, useEffect } from 'react';

const GameContext = createContext({ 
  difficulty: 'normal', 
  changeDifficulty: () => {},

  currentGuess: '',
  guesses: [],
  addLetter: () => {},
  delLetter: () => {},
  submitGuess: () => {},
});

const loadWordList = async (difficulty) => {
  const url = difficulty === 'hard' ? '/hard.json' : '/normal.json'; // 修正URL逻辑
  try {
    const response = await fetch(url);
    const words = await response.json();
    return words;
  } catch (error) {
    console.error('Failed to load word list:', error);
    return [];
  }
};

export const useGame = () => useContext(GameContext);

export const GameProvider = ({ children }) => {
  const [difficulty, setDifficulty] = useState('normal');
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuess] = useState([]);
  const [validWords, setValidWords] = useState([]);
  const [answerWord, setAnswerWord] = useState('');


  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setCurrentGuess('');
    setGuess([]);
  };

  const maxGuessLength = difficulty === 'hard' ? 7 : 6;

  useEffect(() => {
    loadWordList(difficulty).then(setValidWords);
  }, [difficulty]);

  useEffect(() => {
    if (validWords.length > 0) {
      const randomIndex = Math.floor(Math.random() * validWords.length);
      setAnswerWord(validWords[randomIndex]);
    }
  }, [validWords]);

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
    // TODO: check validity
    if (currentGuess.length !== maxGuessLength) {
      console.log('Word length is invalid.');
      return;
    }
  

    if (!validWords.includes(currentGuess.toLowerCase())) {
      console.log('Word is invalid.');
      return;
    }  
  
    setGuess([...guesses, currentGuess]);
    setCurrentGuess('');

    console.log("Enter was pressed, currentGuess:", currentGuess);
    console.log("The answer word is:", answerWord);
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