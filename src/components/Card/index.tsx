import {useContext} from 'react';
import {GameContext, IGameScore} from '../../context/game';

interface Props {
  name?: string;
  occupation:  'Engineer' | 'Pilot' | 'Astronaut';
  age: number;

}
const Card = ({name, occupation, age} : Props) => {
  const {playerName, score, setScore} = useContext(GameContext) as IGameScore;
  return  <>
    <div>
      name: {name}<br/>
      occupation: {occupation}<br/>
      age: {age + 1}<br/>
    </div>
    <div>
      Name: {playerName.split(' ')[0]}<br/>
      Score: {score}<br/>
      <button onClick={() =>{
        setScore(score + 1);
      }}>Click me</button><br/>
    </div>
  </>
}

export default Card