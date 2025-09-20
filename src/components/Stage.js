import React, { useState, useEffect } from 'react';

import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';

const Stage = ({ stage, gameOver = false, isPaused = false, level = 1 }) => {
  const [clearingRows, setClearingRows] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Detect and animate row clearing
  useEffect(() => {
    const fullRows = [];
    stage.forEach((row, y) => {
      if (row.every(cell => cell[0] !== 0)) {
        fullRows.push(y);
      }
    });

    if (fullRows.length > 0) {
      setClearingRows(fullRows);
      setIsAnimating(true);
      
      setTimeout(() => {
        setClearingRows([]);
        setIsAnimating(false);
      }, 500);
    }
  }, [stage]);

  // Get stage status for visual feedback
  const getStageStatus = () => {
    if (gameOver) return 'game-over';
    if (isPaused) return 'paused';
    if (isAnimating) return 'clearing';
    return 'normal';
  };

  // Count filled cells for progress indication
  const filledCells = stage.reduce((count, row) => 
    count + row.filter(cell => cell[0] !== 0).length, 0
  );
  const totalCells = stage.length * stage[0].length;
  const fillPercentage = (filledCells / totalCells) * 100;

  return (
    <StyledStage 
      width={stage[0].length} 
      height={stage.length}
      status={getStageStatus()}
      fillPercentage={fillPercentage}
      level={level}
      role="grid"
      aria-label={`Tetris game board - Level ${level}, ${filledCells} of ${totalCells} cells filled`}
      aria-rowcount={stage.length}
      aria-colcount={stage[0].length}
      aria-live="polite"
    >
      {/* Stage overlay for status indicators */}
      <div className="stage-overlay">
        {gameOver && (
          <div className="status-indicator game-over">
            <i className="fas fa-skull"></i>
            <span>Game Over</span>
          </div>
        )}
        {isPaused && !gameOver && (
          <div className="status-indicator paused">
            <i className="fas fa-pause"></i>
            <span>Paused</span>
          </div>
        )}
        {isAnimating && (
          <div className="status-indicator clearing">
            <i className="fas fa-magic"></i>
            <span>Line Clear!</span>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${fillPercentage}%` }}
          />
        </div>
        <span className="progress-text">
          {Math.round(fillPercentage)}% Full
        </span>
      </div>

      {/* Grid cells */}
      <div className="grid-container">
        {stage.map((row, y) => 
          row.map((cell, x) => (
            <Cell 
              key={`${y}-${x}`}
              type={cell[0]}
              index={`${y}-${x}`}
              row={y}
              col={x}
              isClearing={clearingRows.includes(y)}
              gameOver={gameOver}
              isPaused={isPaused}
            />
          ))
        )}
      </div>

      {/* Level indicator */}
      <div className="level-indicator">
        <i className="fas fa-layer-group"></i>
        <span>Level {level}</span>
      </div>
    </StyledStage>
  );
};

export default React.memo(Stage);