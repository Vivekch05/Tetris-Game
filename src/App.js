import React from 'react';
import './App.css';
import Tetris from './components/Tetris';

const App=()=>{
  return (
    <div className="App" data-testid="tetris-game"> 
      <Tetris/>
    </div>
  );
}

export default App;
