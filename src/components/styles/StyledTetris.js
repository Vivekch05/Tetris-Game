import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0 20px 0;
  box-sizing: border-box;
  position: relative;
  transition: padding 0.3s ease;
  outline: none;
  
  &:focus {
    outline: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 142, 142, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 850px) {
    padding: 70px 0 15px 0;
  }

  @media (max-width: 600px) {
    padding: 60px 0 10px 0;
  }

  @media (max-height: 700px) {
    padding: 60px 0 15px 0;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin: 0 auto;
  width: 90%;
  max-width: 900px;
  min-height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    inset 0 0 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  overflow: hidden;
  position: relative;
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

  .game-area {
    display: flex;
    width: 100%;
    height: 100%;
    gap: 20px;
    align-items: flex-start;
  }

  .left-panel, .right-panel {
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 120px;
  }

  .center-panel {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .game-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 850px) {
    width: 95%;
    padding: 15px;
    min-height: calc(100vh - 120px);
    max-height: calc(100vh - 120px);
    
    .game-area {
      gap: 15px;
    }
    
    .left-panel, .right-panel {
      min-width: 100px;
      gap: 12px;
    }
  }

  @media (max-width: 600px) {
    padding: 12px;
    min-height: calc(100vh - 100px);
    max-height: calc(100vh - 100px);
    
    .game-area {
      gap: 12px;
    }
    
    .left-panel, .right-panel {
      min-width: 80px;
      gap: 10px;
    }
  }

  @media (max-height: 700px) {
    min-height: calc(100vh - 100px);
    max-height: calc(100vh - 100px);
    padding: 10px;
    
    .game-area {
      gap: 10px;
    }
    
    .left-panel, .right-panel {
      gap: 8px;
    }
  }

  /* Game board container */
  .stage {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* Hover effect */
  &:hover {
    box-shadow: 
      0 12px 40px 0 rgba(31, 38, 135, 0.45),
      inset 0 0 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }
`;
