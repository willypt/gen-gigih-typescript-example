import {createContext, useState} from 'react';

export interface IGameScore {
  playerName: string;
  score: number;
  setScore: (value: number) => void;
  winningBoard: boolean[];
  // winningBoard: [number, boolean];
}

export const GameContext = createContext<IGameScore | null>(null)

export const GameProvider = ({children} : {children: JSX.Element}) => {
  const [score, setScore] = useState(10);
  return <GameContext.Provider value={{
    playerName: 'Willy',
    score,
    setScore,
    winningBoard: [true, false, true]
  }}>
    {children}
  </GameContext.Provider>
}