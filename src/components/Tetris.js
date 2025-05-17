import React, { useState, useCallback, useEffect } from 'react';

import { createStage, checkCollision } from '../gameHelper';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Footer from './Footer';
import Header from './Header';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('tetrisHighScore');
    return saved ? parseInt(saved) : 0;
  });

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  // Save high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('tetrisHighScore', score.toString());
    }
  }, [score, highScore]);

  const movePlayer = useCallback(dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }, [player, stage, updatePlayerPos]);

  const keyUp = useCallback(({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  }, [gameOver, level]);

  const startGame = useCallback(() => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
    setIsPaused(false);
  }, [resetPlayer, setScore, setLevel, setRows, setStage]);

  const drop = useCallback(() => {
    if (isPaused) return;

    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }, [isPaused, level, player, rows, setLevel, setStage, stage, updatePlayerPos]);

  const dropPlayer = useCallback(() => {
    setDropTime(null);
    drop();
  }, [drop]);

  useInterval(() => {
    drop();
  }, dropTime);

  const move = useCallback(({ keyCode }) => {
    if (!gameOver && !isPaused) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      } else if (keyCode === 80) { // 'P' key for pause
        setIsPaused(prev => !prev);
      }
    }
  }, [gameOver, isPaused, movePlayer, dropPlayer, playerRotate, stage]);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={move}
      onKeyUp={keyUp}
    >
      <Header />  
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`High Score: ${highScore}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
              {isPaused && <Display text="Paused" />}
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
      <Footer />
    </StyledTetrisWrapper>
  );
};

export default React.memo(Tetris);