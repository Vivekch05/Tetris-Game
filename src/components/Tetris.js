import React, { useState, useCallback, useEffect, useRef } from 'react';

import { createStage, checkCollision } from '../gameHelper';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayerEnhanced } from '../hooks/usePlayerEnhanced';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Header from './Header';
import NextPiece from './NextPiece';
import HoldPiece from './HoldPiece';
import GameInstructions from './GameInstructions';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('tetrisHighScore');
    return saved ? parseInt(saved) : 0;
  });
  const [announcement, setAnnouncement] = useState('');
  const gameAreaRef = useRef(null);

  const [
    player, 
    updatePlayerPos, 
    resetPlayer, 
    playerRotate, 
    nextPiece, 
    holdPiece, 
    canHold, 
    holdCurrentPiece, 
    resetHold
  ] = usePlayerEnhanced();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  // Save high score and announce changes
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('tetrisHighScore', score.toString());
      setAnnouncement(`New high score: ${score}`);
    }
  }, [score, highScore]);

  // Announce game state changes
  useEffect(() => {
    if (gameOver) {
      setAnnouncement('Game Over');
    } else if (isPaused) {
      setAnnouncement('Game Paused');
    } else if (rowsCleared > 0) {
      setAnnouncement(`${rowsCleared} line${rowsCleared > 1 ? 's' : ''} cleared!`);
    }
  }, [gameOver, isPaused, rowsCleared]);

  const movePlayer = useCallback(dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }, [player, stage, updatePlayerPos]);

  const keyUp = useCallback((event) => {
    const { keyCode } = event;
    
    // Prevent default browser behavior for game keys
    const gameKeys = [37, 38, 39, 40, 32, 67, 80]; // Arrow keys, Space, C, P
    if (gameKeys.includes(keyCode)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, []);

  const startGame = useCallback(() => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
    setIsPaused(false);
    resetHold();
    
    // Focus the game area for keyboard input
    setTimeout(() => {
      if (gameAreaRef.current) {
        gameAreaRef.current.focus();
      }
    }, 100);
  }, [resetPlayer, setScore, setLevel, setRows, resetHold, setStage]);

  // Focus game area on mount
  useEffect(() => {
    if (gameAreaRef.current) {
      gameAreaRef.current.focus();
    }
  }, []);

  // Handle click to refocus game area
  const handleGameAreaClick = useCallback(() => {
    if (gameAreaRef.current) {
      gameAreaRef.current.focus();
    }
  }, []);

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
  }, [isPaused, level, player, rows, setLevel, stage, updatePlayerPos]);

  const dropPlayer = useCallback(() => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }, [player, stage, updatePlayerPos]);

  useInterval(() => {
    drop();
  }, dropTime);

  const move = useCallback((event) => {
    const { keyCode, key } = event;
    
    // Prevent default browser behavior for game keys
    const gameKeys = [37, 38, 39, 40, 32, 67, 80]; // Arrow keys, Space, C, P
    if (gameKeys.includes(keyCode)) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (!gameOver && !isPaused) {
      if (keyCode === 37 || key === 'ArrowLeft') {
        movePlayer(-1);
      } else if (keyCode === 39 || key === 'ArrowRight') {
        movePlayer(1);
      } else if (keyCode === 40 || key === 'ArrowDown') {
        dropPlayer();
      } else if (keyCode === 38 || key === 'ArrowUp') {
        playerRotate(stage, 1);
      } else if (keyCode === 80 || key.toLowerCase() === 'p') { // 'P' key for pause
        setIsPaused(prev => !prev);
      } else if (keyCode === 67 || key.toLowerCase() === 'c') { // 'C' key for hold
        holdCurrentPiece();
      } else if (keyCode === 32 || key === ' ') { // Space key for hard drop
        while (!checkCollision(player, stage, { x: 0, y: 1 })) {
          updatePlayerPos({ x: 0, y: 1, collided: false });
        }
      }
    } else if (keyCode === 80 || key.toLowerCase() === 'p') { // 'P' key for pause (works even when game over)
      setIsPaused(prev => !prev);
    }
  }, [gameOver, isPaused, movePlayer, dropPlayer, playerRotate, stage, holdCurrentPiece, player, updatePlayerPos]);

  return (
    <StyledTetrisWrapper
      ref={gameAreaRef}
      role="application"
      tabIndex="0"
      onKeyDown={move}
      onKeyUp={keyUp}
      onClick={handleGameAreaClick}
      aria-label="Tetris Game"
      aria-live="polite"
      aria-describedby="game-instructions"
    >
      {/* Screen reader announcements */}
      <div 
        id="announcements" 
        aria-live="polite" 
        aria-atomic="true"
        style={{ 
          position: 'absolute', 
          left: '-10000px', 
          width: '1px', 
          height: '1px', 
          overflow: 'hidden' 
        }}
      >
        {announcement}
      </div>
      <Header 
        gameStats={{ score, level, lines: rows }}
        isPlaying={!gameOver && dropTime !== null}
        isPaused={isPaused}
      />  
      <StyledTetris>
        <div className="game-area">
          <div className="left-panel">
            <HoldPiece holdPiece={holdPiece} canHold={canHold} />
            <GameInstructions />
          </div>
          
          <div className="center-panel">
            <Stage 
              stage={stage} 
              gameOver={gameOver}
              isPaused={isPaused}
              level={level}
            />
          </div>
          
          <div className="right-panel">
            <NextPiece nextPiece={nextPiece} />
            <div className="game-info">
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
            </div>
            <StartButton 
              callback={startGame}
              gameOver={gameOver}
              isPlaying={!gameOver && dropTime !== null}
              isPaused={isPaused}
            />
          </div>
        </div>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default React.memo(Tetris);