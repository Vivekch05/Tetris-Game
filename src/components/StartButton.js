import React, { useState, useRef, useEffect } from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback, gameOver = false, isPlaying = false, isPaused = false }) => {
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    
    // Add a small delay for visual feedback
    timeoutRef.current = setTimeout(() => {
      callback();
      setIsLoading(false);
    }, 300);
  };

  const getButtonText = () => {
    if (isLoading) return 'Starting...';
    if (gameOver) return 'Play Again';
    if (isPaused) return 'Resume';
    if (isPlaying) return 'Restart';
    return 'Start Game';
  };

  const getButtonIcon = () => {
    if (isLoading) return 'fas fa-spinner fa-spin';
    if (gameOver) return 'fas fa-redo';
    if (isPaused) return 'fas fa-play';
    if (isPlaying) return 'fas fa-refresh';
    return 'fas fa-play';
  };

  const getButtonStatus = () => {
    if (isLoading) return 'loading';
    if (gameOver) return 'game-over';
    if (isPaused) return 'paused';
    if (isPlaying) return 'playing';
    return 'ready';
  };

  return (
    <StyledStartButton 
      onClick={handleClick}
      status={getButtonStatus()}
      disabled={isLoading}
      aria-label={getButtonText()}
      role="button"
      tabIndex="0"
    >
      <div className="button-content">
        <div className="icon-container">
          <i className={getButtonIcon()}></i>
        </div>
        <span className="button-text">{getButtonText()}</span>
      </div>
      
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
    </StyledStartButton>
  );
};

export default StartButton;