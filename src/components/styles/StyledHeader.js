import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 850px) {
    padding: 0 15px;
    gap: 15px;
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    gap: 10px;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 850px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 850px) {
    gap: 12px;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 4px 10px;
  border-radius: 6px;
  transition: all 0.2s ease;
  border: 1px solid transparent;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
  }

  @media (max-width: 850px) {
    font-size: 0.85rem;
    padding: 3px 8px;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 2px 6px;
  }
`;

export const GameInfo = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 850px) {
    gap: 12px;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const InfoItem = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.2s ease;
  
  span {
    color: #fff;
    font-weight: 600;
  }

  @media (max-width: 850px) {
    font-size: 0.85rem;
    padding: 3px 8px;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 2px 6px;
  }
`; 