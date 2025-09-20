import React, { useState } from 'react';
import { StyledInstructions, StyledInstructionsButton, StyledInstructionsModal, StyledInstructionsContent, StyledCloseButton } from './styles/StyledGameInstructions';

const GameInstructions = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInstructions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledInstructionsButton onClick={toggleInstructions}>
        <i className="fas fa-question-circle"></i>
        Help
      </StyledInstructionsButton>

      {isOpen && (
        <StyledInstructionsModal onClick={toggleInstructions}>
          <StyledInstructionsContent onClick={(e) => e.stopPropagation()}>
            <StyledCloseButton onClick={toggleInstructions}>
              <i className="fas fa-times"></i>
            </StyledCloseButton>
            
            <StyledInstructions>
              <h2>How to Play Tetris</h2>
              
              <div className="section">
                <h3>Objective</h3>
                <p>Fill complete horizontal lines with falling tetromino pieces to clear them and score points.</p>
              </div>

              <div className="section">
                <h3>Controls</h3>
                <div className="controls-grid">
                  <div className="control-item">
                    <kbd>←</kbd> <span>Move Left</span>
                  </div>
                  <div className="control-item">
                    <kbd>→</kbd> <span>Move Right</span>
                  </div>
                  <div className="control-item">
                    <kbd>↓</kbd> <span>Soft Drop</span>
                  </div>
                  <div className="control-item">
                    <kbd>↑</kbd> <span>Rotate</span>
                  </div>
                  <div className="control-item">
                    <kbd>Space</kbd> <span>Hard Drop</span>
                  </div>
                  <div className="control-item">
                    <kbd>C</kbd> <span>Hold Piece</span>
                  </div>
                  <div className="control-item">
                    <kbd>P</kbd> <span>Pause/Resume</span>
                  </div>
                </div>
              </div>

              <div className="section">
                <h3>Scoring</h3>
                <ul>
                  <li>1 line: 40 × (level + 1)</li>
                  <li>2 lines: 100 × (level + 1)</li>
                  <li>3 lines: 300 × (level + 1)</li>
                  <li>4 lines (Tetris): 1200 × (level + 1)</li>
                </ul>
              </div>

              <div className="section">
                <h3>Tips</h3>
                <ul>
                  <li>Use the hold feature to save pieces for later</li>
                  <li>Try to clear multiple lines at once for higher scores</li>
                  <li>Keep the playing field as flat as possible</li>
                  <li>Plan ahead using the next piece preview</li>
                </ul>
              </div>
            </StyledInstructions>
          </StyledInstructionsContent>
        </StyledInstructionsModal>
      )}
    </>
  );
};

export default GameInstructions;
