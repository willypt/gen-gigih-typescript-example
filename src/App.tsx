import React from 'react';
import './App.css';
import Card from "./components/Card";
import {GameProvider} from './context/game';

function App() {
  return (
    <GameProvider>
      <div className="App">
        <Card name="Willy" occupation="Astronaut" age={29} />
      </div>
    </GameProvider>
  );
}

export default App;
