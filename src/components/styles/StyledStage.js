import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(20vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  width: 100%;
  max-width: 20vw;
  background: rgba(0, 0, 0, 0.3);
  padding: 8px;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    inset 0 0 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
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
    border-radius: 10px;
    pointer-events: none;
  }

  /* Grid lines effect */
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: calc(100% / ${props => props.width}) calc(100% / ${props => props.height});

  @media (max-width: 850px) {
    max-width: 30vw;
    padding: 6px;
  }

  @media (max-width: 600px) {
    max-width: 40vw;
    padding: 5px;
  }

  @media (max-height: 700px) {
    padding: 5px;
  }

  /* Animation for new pieces */
  @keyframes pieceDrop {
    0% {
      transform: translateY(-10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Animation for cleared lines */
  @keyframes lineClear {
    0% {
      background: rgba(255, 255, 255, 0.3);
    }
    50% {
      background: rgba(255, 255, 255, 0.5);
    }
    100% {
      background: transparent;
    }
  }
`;