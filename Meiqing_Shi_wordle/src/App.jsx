import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './welcome/WelcomePage';
import RulesPage from './rules/RulesPage';
import GamePage from './game/GamePage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/rules" element={<RulesPage />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/game/:difficulty" element={<GamePage />} />
    </Routes>
  );
}

export default App;
