import React, { useState  } from 'react'

//styled components
import { StyledTetrisWrapper, StyledTetris} from './styles/StyledTetris';

//Custom Hooks
import { usePlayer } from '../HOOKS/usePlayer';
import { useStage } from '../HOOKS/useStage';

//Components
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

const Tetris = () => {
  const [ dropTime, setDropTime ] = useState(null);
  const [ gameOver, setGameOver ] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player); 

  console.log("re-render")
  return(
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={stage}/>
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score"/>
              <Display text="Rows"/>
              <Display text="Level"/>
            </div>
          )}
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}
export default Tetris