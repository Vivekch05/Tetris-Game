import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollision } from '../gameHelper';

export const usePlayerEnhanced = () => {
  const [nextPiece, setNextPiece] = useState(() => randomTetromino());
  const [holdPiece, setHoldPiece] = useState(null);
  const [canHold, setCanHold] = useState(true);
  
  const [player, setPlayer] = useState(() => {
    const initialPiece = randomTetromino();
    return {
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: initialPiece.shape,
      collided: false,
    };
  });

  function rotate(matrix, dir) {
    // Make the rows to become cols (transpose)
    const mtrx = matrix.map((_, index) => matrix.map(column => column[index]));
    // Reverse each row to get a rotated matrix
    if (dir > 0) return mtrx.map(row => row.reverse());
    return mtrx.reverse();
  }

  function playerRotate(stage, dir) {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayer(clonedPlayer);
  }

  const updatePlayerPos = ({ x, y, collided }) => {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: nextPiece.shape,
      collided: false,
    });
    setNextPiece(randomTetromino());
    setCanHold(true);
  }, [nextPiece]);

  const holdCurrentPiece = useCallback(() => {
    if (!canHold) return;

    if (holdPiece) {
      // Swap current piece with held piece
      setPlayer(prev => ({
        ...prev,
        tetromino: holdPiece.shape,
        pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      }));
      setHoldPiece({ shape: player.tetromino, color: getCurrentPieceColor() });
    } else {
      // Hold current piece and get next piece
      setHoldPiece({ shape: player.tetromino, color: getCurrentPieceColor() });
      setPlayer(prev => ({
        ...prev,
        tetromino: nextPiece.shape,
        pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      }));
      setNextPiece(randomTetromino());
    }
    setCanHold(false);
  }, [canHold, holdPiece, player.tetromino, nextPiece, getCurrentPieceColor]);

  const getCurrentPieceColor = () => {
    // Find the color of the current piece
    for (const [, tetromino] of Object.entries(TETROMINOS)) {
      if (JSON.stringify(tetromino.shape) === JSON.stringify(player.tetromino)) {
        return tetromino.color;
      }
    }
    return '255,255,255'; // Default color
  };

  const resetHold = useCallback(() => {
    setCanHold(true);
  }, []);

  return [
    player, 
    updatePlayerPos, 
    resetPlayer, 
    playerRotate, 
    nextPiece, 
    holdPiece, 
    canHold, 
    holdCurrentPiece, 
    resetHold
  ];
};
