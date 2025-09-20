import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 46, 0.9) 100%);
  backdrop-filter: blur(20px);
  padding: 12px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 2px 10px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      rgba(255, 107, 107, 0.1) 0%, 
      transparent 50%, 
      rgba(255, 142, 142, 0.1) 100%);
    pointer-events: none;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 1;

  @media (max-width: 1200px) {
    max-width: 100%;
    padding: 0 15px;
  }

  @media (max-width: 850px) {
    gap: 15px;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    gap: 10px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;

  i {
    font-size: 1.2rem;
    color: #fff;
  }

  &:hover {
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
    transform: rotate(5deg);
  }

  @media (max-width: 600px) {
    width: 35px;
    height: 35px;
    
    i {
      font-size: 1rem;
    }
  }
`;

export const LogoText = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  font-family: 'Pixel', Arial, Helvetica, sans-serif;

  span {
    background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 900;
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: 850px) {
    order: 3;
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    gap: 6px;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    &::before {
      left: 100%;
    }
  }

  i {
    font-size: 0.8rem;
  }

  @media (max-width: 850px) {
    font-size: 0.85rem;
    padding: 6px 12px;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 5px 10px;
    
    span {
      display: none;
    }
  }
`;

export const GameInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 850px) {
    gap: 8px;
  }

  @media (max-width: 600px) {
    gap: 6px;
  }
`;

export const InfoItem = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }
  
  i {
    color: #ff6b6b;
    font-size: 0.8rem;
  }

  span {
    color: #fff;
    font-weight: 600;
    font-family: 'Pixel', monospace;
  }

  @media (max-width: 850px) {
    font-size: 0.8rem;
    padding: 5px 10px;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
    padding: 4px 8px;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 850px) {
    gap: 6px;
  }
`;

export const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: ${props => 
    props.isPaused ? 'rgba(255, 193, 7, 0.2)' :
    props.isPlaying ? 'rgba(40, 167, 69, 0.2)' : 
    'rgba(108, 117, 125, 0.2)'};
  border: 1px solid ${props => 
    props.isPaused ? 'rgba(255, 193, 7, 0.3)' :
    props.isPlaying ? 'rgba(40, 167, 69, 0.3)' : 
    'rgba(108, 117, 125, 0.3)'};
  border-radius: 8px;
  color: ${props => 
    props.isPaused ? '#ffc107' :
    props.isPlaying ? '#28a745' : 
    '#6c757d'};
  font-size: 0.8rem;
  font-weight: 500;
  transition: all 0.3s ease;

  i {
    font-size: 0.7rem;
  }

  @media (max-width: 600px) {
    padding: 4px 8px;
    font-size: 0.75rem;
    
    span {
      display: none;
    }
  }
`;

export const SoundToggle = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: ${props => props.isActive ? 'rgba(40, 167, 69, 0.2)' : 'rgba(255, 255, 255, 0.08)'};
  color: ${props => props.isActive ? '#28a745' : 'rgba(255, 255, 255, 0.7)'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${props => props.isActive ? 'rgba(40, 167, 69, 0.3)' : 'rgba(255, 255, 255, 0.15)'};
    border-color: ${props => props.isActive ? 'rgba(40, 167, 69, 0.4)' : 'rgba(255, 255, 255, 0.3)'};
    transform: scale(1.1);
  }

  i {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
    
    i {
      font-size: 0.8rem;
    }
  }
`;

export const ThemeToggle = styled.button`
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: ${props => props.isActive ? 'rgba(255, 193, 7, 0.2)' : 'rgba(255, 255, 255, 0.08)'};
  color: ${props => props.isActive ? '#ffc107' : 'rgba(255, 255, 255, 0.7)'};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${props => props.isActive ? 'rgba(255, 193, 7, 0.3)' : 'rgba(255, 255, 255, 0.15)'};
    border-color: ${props => props.isActive ? 'rgba(255, 193, 7, 0.4)' : 'rgba(255, 255, 255, 0.3)'};
    transform: scale(1.1) rotate(15deg);
  }

  i {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
    
    i {
      font-size: 0.8rem;
    }
  }
`; 