import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 15px 0;
  padding: 12px 20px;
  min-height: 40px;
  width: 100%;
  border-radius: 10px;
  color: ${props => (props.gameOver ? '#ff6b6b' : '#fff')};
  background: rgba(0, 0, 0, 0.4);
  font-family: 'Pixel', Arial, Helvetica, sans-serif;
  font-size: 0.9rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);

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

  .label {
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.85rem;
    padding-right: 10px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 70%;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  .value {
    font-weight: bold;
    color: ${props => (props.gameOver ? '#ff6b6b' : '#fff')};
    text-shadow: 0 0 10px ${props => (props.gameOver ? 'rgba(255, 107, 107, 0.5)' : 'rgba(255, 255, 255, 0.3)')};
    font-size: 1rem;
    padding-left: 10px;
    min-width: 60px;
    text-align: right;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 850px) {
    padding: 10px 15px;
    min-height: 35px;
    font-size: 0.8rem;
    
    .label {
      font-size: 0.75rem;
    }
    
    .value {
      font-size: 0.9rem;
    }
  }

  @media (max-height: 700px) {
    padding: 8px 12px;
    min-height: 30px;
    margin-bottom: 10px;
    
    .label {
      font-size: 0.7rem;
    }
    
    .value {
      font-size: 0.85rem;
    }
  }
`;