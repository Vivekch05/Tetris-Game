import { useState, useEffect } from 'react';
import { createStage } from '../gameHelper';

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);
    
    // Safety check for player and tetromino
    if (!player || !player.tetromino || !Array.isArray(player.tetromino)) {
      return;
    }
    
    const sweepRows = newStage =>
      newStage.reduce((ack, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateStage = prevStage => {
      // Safety check for prevStage
      if (!prevStage || !Array.isArray(prevStage)) {
        return createStage();
      }
      
      // First flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        if (Array.isArray(row)) {
          row.forEach((value, x) => {
            if (value !== 0) {
              const newY = y + player.pos.y;
              const newX = x + player.pos.x;
              
              // Check bounds before setting
              if (newY >= 0 && newY < newStage.length && 
                  newX >= 0 && newX < newStage[newY].length) {
                newStage[newY][newX] = [
                  value,
                  `${player.collided ? 'merged' : 'clear'}`,
                ];
              }
            }
          });
        }
      });
      
      // Then check if we got some score if collided
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    // Here are the updates
    setStage(prev => updateStage(prev));
  }, [
    player,
    resetPlayer,
  ]);

  return [stage, setStage, rowsCleared];
};