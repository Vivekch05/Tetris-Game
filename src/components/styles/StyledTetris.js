import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 0 50px 0;
  box-sizing: border-box;
  position: relative;

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
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin: 0 auto;
  width: 90%;
  max-width: 900px;
  height: calc(100vh - 140px);
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

  aside {
    width: 100%;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    height: 100%;
    gap: 15px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (max-width: 850px) {
    width: 95%;
    padding: 15px;
    height: calc(100vh - 160px);
    
    aside {
      max-width: 150px;
      padding: 0 15px;
      gap: 12px;
    }
  }

  @media (max-width: 600px) {
    padding: 12px;
    height: calc(100vh - 150px);
    
    aside {
      max-width: 120px;
      padding: 0 10px;
      gap: 10px;
    }
  }

  @media (max-height: 700px) {
    height: calc(100vh - 120px);
    padding: 10px;
    
    aside {
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
