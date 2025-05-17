import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterContent = styled.div`
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

export const FooterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 850px) {
    gap: 12px;
  }

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  margin: 0;

  @media (max-width: 850px) {
    font-size: 0.85rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const FooterLinks = styled.div`
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

export const FooterLink = styled.a`
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

export const TechStack = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 850px) {
    gap: 8px;
  }

  @media (max-width: 600px) {
    gap: 6px;
  }
`;

export const TechIcon = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    color: #fff;
    transform: translateY(-1px);
  }

  @media (max-width: 850px) {
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`; 