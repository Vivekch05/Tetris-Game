import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type, index }) => {
  return (
    <StyledCell 
      type={type} 
      color={TETROMINOS[type].color}
      data-testid="cell"
      key={`cell-${index}`}
    />
  );
};

export default React.memo(Cell, (prevProps, nextProps) => {
  return prevProps.type === nextProps.type;
});