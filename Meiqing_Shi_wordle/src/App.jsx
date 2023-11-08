// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage'; // 导入欢迎页面组件
import RulesPage from './pages/RulesPage'; // 导入规则页面组件

import GameSelect from './pages/GameSelect';
import GameNormal from './pages/GameNormal';
import GameHard from './pages/GameHard';

import GamePage from './pages/GamePage';


import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />  
      <Route path="/rules" element={<RulesPage />} /> 

      {/* <Route path="/game" element={<GameSelect />} />
      <Route path="/game/normal" element={<GameNormal />} />
      <Route path="/game/hard" element={<GameHard />} /> */}
      
      <Route path="/game" element={<GamePage />} />
      <Route path="/game/normal" element={<GamePage difficulty="normal" />} />
      <Route path="/game/hard" element={<GamePage difficulty="hard" />} />

    </Routes>
  );
}

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App