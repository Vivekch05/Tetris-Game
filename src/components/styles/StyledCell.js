import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  aspect-ratio: 1;
  background: ${props => {
    if (props.type === 0) return 'rgba(0, 0, 0, 0.1)';
    if (props.isClearing) return `rgba(${props.color}, 1)`;
    if (props.gameOver) return `rgba(${props.color}, 0.6)`;
    if (props.isPaused) return `rgba(${props.color}, 0.7)`;
    return `rgba(${props.color}, 0.85)`;
  }};
  border: ${props => props.type === 0 ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid'};
  border-bottom-color: ${props => props.type === 0 ? 'rgba(255, 255, 255, 0.05)' : `rgba(${props.color}, 0.1)`};
  border-right-color: ${props => props.type === 0 ? 'rgba(255, 255, 255, 0.05)' : `rgba(${props.color}, 0.9)`};
  border-top-color: ${props => props.type === 0 ? 'rgba(255, 255, 255, 0.05)' : `rgba(${props.color}, 0.9)`};
  border-left-color: ${props => props.type === 0 ? 'rgba(255, 255, 255, 0.05)' : `rgba(${props.color}, 0.3)`};
  box-shadow: ${props => {
    if (props.type === 0) return 'none';
    if (props.isClearing) return 'inset 0 0 8px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.3)';
    if (props.gameOver) return 'inset 0 0 4px rgba(0, 0, 0, 0.4)';
    if (props.isPaused) return 'inset 0 0 4px rgba(0, 0, 0, 0.3)';
    return 'inset 0 0 4px rgba(0, 0, 0, 0.2)';
  }};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  margin: 0.5px;
  animation: ${props => {
    if (props.type !== 0 && props.isClearing) return 'cellClear 0.5s ease-in-out';
    if (props.type !== 0) return 'cellAppear 0.3s ease-out';
    return 'none';
  }};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.type === 0 ? 'none' : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%)'};
    pointer-events: none;
    transition: all 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.type === 0 ? 'none' : 'linear-gradient(45deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%)'};
    pointer-events: none;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: ${props => props.type === 0 ? 'none' : 'scale(1.05)'};
    z-index: 1;
    box-shadow: ${props => props.type === 0 ? 'none' : 'inset 0 0 8px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)'};
  }

  @keyframes cellAppear {
    0% {
      transform: scale(0) rotate(180deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.1) rotate(90deg);
      opacity: 0.7;
    }
    100% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes cellGlow {
    0%, 100% {
      box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
    }
    50% {
      box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 255, 255, 0.3);
    }
  }

  @keyframes cellClear {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  &.glow {
    animation: cellGlow 0.5s ease-in-out;
  }
`;