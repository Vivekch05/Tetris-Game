import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type, index, row, col, isClearing = false, gameOver = false, isPaused = false }) => {
  return (
    <StyledCell 
      type={type} 
      color={TETROMINOS[type].color}
      isClearing={isClearing}
      gameOver={gameOver}
      isPaused={isPaused}
      data-testid="cell"
      key={`cell-${index}`}
      role="gridcell"
      aria-label={type === 0 ? `Empty cell at row ${row}, column ${col}` : `Tetromino piece at row ${row}, column ${col}`}
      aria-rowindex={row + 1}
      aria-colindex={col + 1}
    />
  );
};

export default React.memo(Cell, (prevProps, nextProps) => {
  return prevProps.type === nextProps.type;
});