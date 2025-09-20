import React from 'react';
import { StyledNextPiece, StyledNextPieceGrid } from './styles/StyledNextPiece';

const NextPiece = ({ nextPiece }) => {
  if (!nextPiece) return null;

  return (
    <StyledNextPiece>
      <h3>Next</h3>
      <StyledNextPieceGrid aria-label="Next piece preview">
        {nextPiece.shape.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${y}-${x}`}
              style={{
                background: cell !== 0 ? `rgba(${nextPiece.color}, 0.8)` : 'transparent',
                border: cell !== 0 ? `1px solid rgba(${nextPiece.color}, 0.3)` : 'none',
                borderRadius: '2px',
                width: '100%',
                height: '100%',
                boxShadow: cell !== 0 ? 'inset 0 0 4px rgba(0, 0, 0, 0.2)' : 'none',
              }}
            />
          ))
        )}
      </StyledNextPieceGrid>
    </StyledNextPiece>
  );
};

export default React.memo(NextPiece);
