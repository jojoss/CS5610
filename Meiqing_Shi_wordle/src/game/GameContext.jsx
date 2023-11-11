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
  const url = difficulty === 'hard' ? '/hard.json' : '/normal.json';
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
  const [guessesWithClues, setGuessesWithClues] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [guessesLeft, setGuessesLeft] = useState(difficulty === 'hard' ? 5 : 6);


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

  useEffect(() => {
    // 一旦guesses更新，更新带有线索的猜测
    const newGuessesWithClues = guesses.map((guess) => {
      return guess === answerWord
        ? { guess, clues: Array(guess.length).fill({ letter: guess, color: 'green' }) }
        : { guess, clues: checkGuess(guess, answerWord) };
    });
    setGuessesWithClues(newGuessesWithClues);
  }, [guesses, answerWord]);

  

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
    if (gameOver) {
      console.log('Game is over.');
      return; // 如果游戏结束，阻止进一步猜测
    }

    if (currentGuess.length !== maxGuessLength) {
      console.log('Word length is invalid.');
      return;
    }

    if (!validWords.includes(currentGuess.toLowerCase())) {
      console.log('Word is invalid.');
      return;
    }  

    if (currentGuess.toLowerCase() === answerWord) {
      console.log('Congratulations!');
      setGameOver(true);
      return;
    } else {
      setGuessesLeft(guessesLeft - 1);
    }

    if (guessesLeft <= 1) {
      setGameOver(true);
      console.log('Game over.');
      return;
    }
  
    setGuess([...guesses, currentGuess]);
    setCurrentGuess('');

    console.log("Enter was pressed, currentGuess:", currentGuess);
    console.log("The answer word is:", answerWord);
  };


  const checkGuess = (guess, answer) => {
    const result = [];
  
    const letterCount = {};
  
    for (let letter of answer) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  
    // 检查每个字母是否在正确的位置
    for (let i = 0; i < guess.length; i++) {
      const letter = guess[i];
      if (answer[i] === letter) {
        result.push({ letter, color: 'green' });
        letterCount[letter]--;
      } else if (answer.includes(letter) && letterCount[letter] > 0) {
        result.push({ letter, color: 'yellow' });
        letterCount[letter]--;
      } else {
        result.push({ letter, color: 'grey' });
      }
    }
  
    return result;
  };
  
  return (
    <GameContext.Provider value={{ 
      difficulty, 
      changeDifficulty,
      currentGuess,
      guesses,
      addLetter,
      delLetter,
      submitGuess,
      guessesWithClues,
      checkGuess
    }}>
      {children}
    </GameContext.Provider>
  );
};