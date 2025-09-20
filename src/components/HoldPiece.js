import React from 'react';
import { StyledHoldPiece, StyledHoldPieceGrid } from './styles/StyledHoldPiece';

const HoldPiece = ({ holdPiece, canHold }) => {
  return (
    <StyledHoldPiece>
      <h3>Hold</h3>
      <StyledHoldPieceGrid canHold={canHold} aria-label="Hold piece area">
        {holdPiece ? (
          holdPiece.shape.map((row, y) =>
            row.map((cell, x) => (
              <div
                key={`${y}-${x}`}
                style={{
                  background: cell !== 0 ? `rgba(${holdPiece.color}, 0.6)` : 'transparent',
                  border: cell !== 0 ? `1px solid rgba(${holdPiece.color}, 0.3)` : 'none',
                  borderRadius: '2px',
                  width: '100%',
                  height: '100%',
                  boxShadow: cell !== 0 ? 'inset 0 0 4px rgba(0, 0, 0, 0.2)' : 'none',
                }}
              />
            ))
          )
        ) : (
          <div style={{ 
            gridColumn: '1 / -1', 
            gridRow: '1 / -1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.3)',
            fontSize: '0.7rem',
            fontFamily: 'Pixel, Arial, Helvetica, sans-serif'
          }}>
            Empty
          </div>
        )}
      </StyledHoldPieceGrid>
    </StyledHoldPiece>
  );
};

export default React.memo(HoldPiece);
