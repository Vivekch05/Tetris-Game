import styled from 'styled-components';

export const StyledInstructionsButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Pixel', Arial, Helvetica, sans-serif;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    transform: translateY(-1px);
  }

  i {
    font-size: 0.9rem;
  }

  @media (max-width: 850px) {
    padding: 6px 10px;
    font-size: 0.75rem;
  }
`;

export const StyledInstructionsModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const StyledInstructionsContent = styled.div`
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  border-radius: 20px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 850px) {
    padding: 20px;
    max-height: 90vh;
  }
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 107, 107, 0.2);
    color: #ff6b6b;
    transform: scale(1.1);
  }
`;

export const StyledInstructions = styled.div`
  color: #fff;
  font-family: 'Pixel', Arial, Helvetica, sans-serif;

  h2 {
    font-size: 1.5rem;
    margin: 0 0 20px 0;
    text-align: center;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .section {
    margin-bottom: 25px;

    h3 {
      font-size: 1.1rem;
      margin: 0 0 10px 0;
      color: #ff6b6b;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    p {
      margin: 0 0 10px 0;
      line-height: 1.5;
      color: rgba(255, 255, 255, 0.9);
    }

    ul {
      margin: 0;
      padding-left: 20px;
      
      li {
        margin-bottom: 5px;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.4;
      }
    }
  }

  .controls-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
    margin-top: 10px;

    .control-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.1);

      kbd {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 2px 6px;
        font-size: 0.8rem;
        font-family: 'Pixel', monospace;
        color: #fff;
        min-width: 30px;
        text-align: center;
      }

      span {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 850px) {
    h2 {
      font-size: 1.3rem;
    }

    .section h3 {
      font-size: 1rem;
    }

    .controls-grid {
      grid-template-columns: 1fr;
    }
  }
`;
