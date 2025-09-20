import styled, { keyframes } from 'styled-components';

// Animation keyframes
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.4); }
  100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.2); }
`;

const slideIn = keyframes`
  from { 
    opacity: 0;
    transform: translateX(-10px);
  }
  to { 
    opacity: 1;
    transform: translateX(0);
  }
`;

const numberChange = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

// Color themes
const getColorTheme = (colorTheme, gameOver) => {
  const themes = {
    score: {
      primary: '#4CAF50',
      secondary: '#66BB6A',
      glow: 'rgba(76, 175, 80, 0.3)'
    },
    'high-score': {
      primary: '#FFD700',
      secondary: '#FFA000',
      glow: 'rgba(255, 215, 0, 0.3)'
    },
    rows: {
      primary: '#2196F3',
      secondary: '#42A5F5',
      glow: 'rgba(33, 150, 243, 0.3)'
    },
    level: {
      primary: '#9C27B0',
      secondary: '#BA68C8',
      glow: 'rgba(156, 39, 176, 0.3)'
    },
    'game-over': {
      primary: '#F44336',
      secondary: '#EF5350',
      glow: 'rgba(244, 67, 54, 0.3)'
    },
    paused: {
      primary: '#FF9800',
      secondary: '#FFB74D',
      glow: 'rgba(255, 152, 0, 0.3)'
    },
    default: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.8)',
      glow: 'rgba(255, 255, 255, 0.2)'
    }
  };
  
  return themes[colorTheme] || themes.default;
};

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 15px 0;
  padding: 12px 20px;
  min-height: 50px;
  width: 100%;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.6);
  font-family: 'Pixel', Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  border: 2px solid ${props => getColorTheme(props.colorTheme, props.gameOver).primary}40;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.2),
    0 0 0 1px ${props => getColorTheme(props.colorTheme, props.gameOver).primary}20,
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(8px);
  animation: ${slideIn} 0.3s ease-out;

  ${props => props.isAnimating && `
    animation: ${pulse} 0.5s ease-in-out;
  `}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${props => getColorTheme(props.colorTheme, props.gameOver).primary}10 0%,
      transparent 50%,
      ${props => getColorTheme(props.colorTheme, props.gameOver).secondary}05 100%
    );
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${props => getColorTheme(props.colorTheme, props.gameOver).primary}20 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .display-content {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 12px;
    border-radius: 8px;
    background: ${props => getColorTheme(props.colorTheme, props.gameOver).primary}20;
    border: 1px solid ${props => getColorTheme(props.colorTheme, props.gameOver).primary}40;
    transition: all 0.3s ease;

    i {
      font-size: 1rem;
      color: ${props => getColorTheme(props.colorTheme, props.gameOver).primary};
      text-shadow: 0 0 8px ${props => getColorTheme(props.colorTheme, props.gameOver).glow};
    }
  }

  .text-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
  }

  .label {
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.75rem;
    margin-bottom: 2px;
    line-height: 1;
  }

  .value {
    font-weight: bold;
    color: ${props => getColorTheme(props.colorTheme, props.gameOver).primary};
    text-shadow: 0 0 10px ${props => getColorTheme(props.colorTheme, props.gameOver).glow};
    font-size: 1.1rem;
    line-height: 1;
    transition: all 0.3s ease;
    
    ${props => props.isAnimating && `
      animation: ${numberChange} 0.5s ease-in-out;
    `}
  }

  .animation-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${props => getColorTheme(props.colorTheme, props.gameOver).primary}30 50%,
      transparent 100%
    );
    animation: ${glow} 0.5s ease-in-out;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 8px 20px rgba(0, 0, 0, 0.25),
      0 0 0 1px ${props => getColorTheme(props.colorTheme, props.gameOver).primary}60,
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.7);
    border-color: ${props => getColorTheme(props.colorTheme, props.gameOver).primary}80;

    &::after {
      opacity: 1;
    }

    .icon-container {
      background: ${props => getColorTheme(props.colorTheme, props.gameOver).primary}30;
      transform: scale(1.1);
    }

    .value {
      text-shadow: 0 0 15px ${props => getColorTheme(props.colorTheme, props.gameOver).glow};
    }
  }

  &:active {
    transform: translateY(-1px) scale(1.01);
  }

  @media (max-width: 850px) {
    padding: 10px 15px;
    min-height: 45px;
    font-size: 0.8rem;
    
    .icon-container {
      width: 28px;
      height: 28px;
      margin-right: 10px;
      
      i {
        font-size: 0.9rem;
      }
    }
    
    .label {
      font-size: 0.7rem;
    }
    
    .value {
      font-size: 1rem;
    }
  }

  @media (max-height: 700px) {
    padding: 8px 12px;
    min-height: 40px;
    margin-bottom: 10px;
    
    .icon-container {
      width: 24px;
      height: 24px;
      margin-right: 8px;
      
      i {
        font-size: 0.8rem;
      }
    }
    
    .label {
      font-size: 0.65rem;
    }
    
    .value {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    .icon-container {
      width: 22px;
      height: 22px;
      margin-right: 6px;
      
      i {
        font-size: 0.7rem;
      }
    }
    
    .label {
      font-size: 0.6rem;
    }
    
    .value {
      font-size: 0.85rem;
    }
  }
`;