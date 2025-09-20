import styled, { keyframes, css } from 'styled-components';

// Animation keyframes
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.4); }
  100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;


const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-3px); }
  60% { transform: translateY(-2px); }
`;

// Status-based styling
const getStatusStyles = (status) => {
  switch (status) {
    case 'loading':
      return css`
        background: linear-gradient(135deg, #666 0%, #444 100%);
        border-color: rgba(255, 255, 255, 0.2);
        cursor: not-allowed;
        animation: ${pulse} 1s ease-in-out infinite;
      `;
    case 'game-over':
      return css`
        background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
        border-color: rgba(255, 107, 107, 0.4);
        animation: ${pulse} 2s ease-in-out infinite;
      `;
    case 'paused':
      return css`
        background: linear-gradient(135deg, #ffb74d 0%, #ff9800 100%);
        border-color: rgba(255, 183, 77, 0.4);
        animation: ${glow} 2s ease-in-out infinite;
      `;
    case 'playing':
      return css`
        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
        border-color: rgba(76, 175, 80, 0.4);
        animation: ${bounce} 2s ease-in-out infinite;
      `;
    default:
      return css`
        background: linear-gradient(135deg, #0f3460 0%, #16213e 100%);
        border-color: rgba(255, 255, 255, 0.1);
        animation: none;
      `;
  }
};

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 16px 24px;
  min-height: 60px;
  width: 100%;
  border-radius: 16px;
  color: #fff;
  font-family: 'Pixel', Arial, Helvetica, sans-serif;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  
  ${props => getStatusStyles(props.status)}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 100%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    pointer-events: none;
  }

  .button-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
    z-index: 2;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;

    i {
      font-size: 1rem;
      transition: all 0.3s ease;
    }
  }

  .button-text {
    font-weight: bold;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  .loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    backdrop-filter: blur(4px);
  }

  .loading-spinner {
    width: 24px;
    height: 24px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid #fff;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }

  &:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.4),
      0 0 0 1px rgba(255, 255, 255, 0.2);
    
    &::after {
      transform: translateX(100%);
    }

    .icon-container {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }

    .button-text {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px) scale(1.01);
    box-shadow: 
      0 4px 15px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  @media (max-width: 850px) {
    padding: 14px 20px;
    min-height: 55px;
    font-size: 1rem;

    .icon-container {
      width: 22px;
      height: 22px;
      
      i {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 12px 16px;
    min-height: 50px;
    font-size: 0.9rem;

    .icon-container {
      width: 20px;
      height: 20px;
      
      i {
        font-size: 0.8rem;
      }
    }

    .button-content {
      gap: 8px;
    }
  }

  @media (max-height: 700px) {
    padding: 10px 16px;
    min-height: 45px;
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
`;