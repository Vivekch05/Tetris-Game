import styled, { keyframes, css } from 'styled-components';

// Animation keyframes
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.4); }
  100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
`;


const progressFill = keyframes`
  0% { width: 0%; }
  100% { width: ${props => props.fillPercentage}%; }
`;

// Status-based styling
const getStatusStyles = (status) => {
  switch (status) {
    case 'game-over':
      return css`
        border-color: rgba(244, 67, 54, 0.6);
        box-shadow: 0 8px 32px 0 rgba(244, 67, 54, 0.3), inset 0 0 20px rgba(244, 67, 54, 0.1);
        animation: ${shake} 0.5s ease-in-out;
      `;
    case 'paused':
      return css`
        border-color: rgba(255, 152, 0, 0.6);
        box-shadow: 0 8px 32px 0 rgba(255, 152, 0, 0.3), inset 0 0 20px rgba(255, 152, 0, 0.1);
        animation: ${pulse} 2s ease-in-out infinite;
      `;
    case 'clearing':
      return css`
        border-color: rgba(76, 175, 80, 0.8);
        box-shadow: 0 8px 32px 0 rgba(76, 175, 80, 0.4), inset 0 0 20px rgba(76, 175, 80, 0.2);
        animation: ${glow} 0.5s ease-in-out;
      `;
    default:
      return css`
        border-color: rgba(255, 255, 255, 0.1);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 20px rgba(0, 0, 0, 0.2);
      `;
  }
};

export const StyledStage = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  width: 100%;
  max-width: 20vw;
  background: rgba(0, 0, 0, 0.4);
  padding: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(12px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${props => getStatusStyles(props.status)}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
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
    right: 0;
    bottom: 0;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    pointer-events: none;
  }

  .stage-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    pointer-events: none;
  }

  .status-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px 24px;
    border-radius: 12px;
    backdrop-filter: blur(8px);
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    animation: ${pulse} 1s ease-in-out infinite;

    i {
      font-size: 2rem;
    }

    span {
      font-size: 0.9rem;
    }

    &.game-over {
      background: rgba(244, 67, 54, 0.2);
      border: 2px solid rgba(244, 67, 54, 0.4);
      color: #ff6b6b;
      animation: ${shake} 0.5s ease-in-out infinite;
    }

    &.paused {
      background: rgba(255, 152, 0, 0.2);
      border: 2px solid rgba(255, 152, 0, 0.4);
      color: #ffb74d;
    }

    &.clearing {
      background: rgba(76, 175, 80, 0.2);
      border: 2px solid rgba(76, 175, 80, 0.4);
      color: #66bb6a;
      animation: ${glow} 0.5s ease-in-out;
    }
  }

  .progress-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    padding: 8px 12px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .progress-bar {
    flex: 1;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    position: relative;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4CAF50 0%, #66BB6A 100%);
    border-radius: 3px;
    transition: width 0.3s ease;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
      animation: ${progressFill} 1s ease-out;
    }
  }

  .progress-text {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    min-width: 60px;
    text-align: right;
  }

  .grid-container {
    display: grid;
    grid-template-rows: repeat(${props => props.height}, calc(20vw / ${props => props.width}));
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    flex: 1;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 4px;
    position: relative;

    /* Grid lines effect */
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: calc(100% / ${props => props.width}) calc(100% / ${props => props.height});
  }

  .level-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
    padding: 8px 12px;
    background: rgba(156, 39, 176, 0.2);
    border: 1px solid rgba(156, 39, 176, 0.3);
    border-radius: 8px;
    color: #ba68c8;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    i {
      font-size: 1rem;
    }
  }

  @media (max-width: 850px) {
    max-width: 30vw;
    padding: 10px;

    .status-indicator {
      padding: 12px 18px;
      
      i {
        font-size: 1.5rem;
      }
      
      span {
        font-size: 0.8rem;
      }
    }

    .progress-container {
      padding: 6px 10px;
    }

    .level-indicator {
      padding: 6px 10px;
      font-size: 0.75rem;
    }
  }

  @media (max-width: 600px) {
    max-width: 40vw;
    padding: 8px;

    .status-indicator {
      padding: 10px 16px;
      
      i {
        font-size: 1.2rem;
      }
      
      span {
        font-size: 0.7rem;
      }
    }

    .progress-container {
      padding: 5px 8px;
    }

    .level-indicator {
      padding: 5px 8px;
      font-size: 0.7rem;
    }
  }

  @media (max-height: 700px) {
    padding: 8px;

    .status-indicator {
      padding: 8px 12px;
      
      i {
        font-size: 1.2rem;
      }
      
      span {
        font-size: 0.7rem;
      }
    }
  }
`;