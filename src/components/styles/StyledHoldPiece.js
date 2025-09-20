import styled from 'styled-components';

export const StyledHoldPiece = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: #fff;
    font-family: 'Pixel', Arial, Helvetica, sans-serif;
    font-size: 0.9rem;
    margin: 0 0 10px 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 850px) {
    padding: 12px;
    margin-bottom: 15px;
    
    h3 {
      font-size: 0.8rem;
    }
  }

  @media (max-height: 700px) {
    padding: 10px;
    margin-bottom: 12px;
    
    h3 {
      font-size: 0.75rem;
      margin-bottom: 8px;
    }
  }
`;

export const StyledHoldPieceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 1px;
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 4px;
  opacity: ${props => props.canHold ? 1 : 0.5};
  transition: opacity 0.3s ease;

  @media (max-width: 850px) {
    width: 70px;
    height: 70px;
  }

  @media (max-height: 700px) {
    width: 60px;
    height: 60px;
  }
`;
