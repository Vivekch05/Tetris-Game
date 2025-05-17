import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  aspect-ratio: 1;
  background: ${props => props.type === 0 ? 'rgba(0, 0, 0, 0.1)' : `rgba(${props.color}, 0.85)`};
  border: ${props => props.type === 0 ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid'};
  border-bottom-color: ${props => props.type === 0 ? 'rgba(255, 255, 255, 0.05)' : `rgba(${props.color}, 0.1)`};
  border-right-color: ${props => props.type === 0 ? 'rgba(255, 255, 255, 0.05)' : `rgba(${props.color}, 0.9)`};
  border-top-color: ${props => props.type === 0 ? 'rgba(255, 255, 255, 0.05)' : `rgba(${props.color}, 0.9)`};
  border-left-color: ${props => props.type === 0 ? 'rgba(255, 255, 255, 0.05)' : `rgba(${props.color}, 0.3)`};
  box-shadow: ${props => props.type === 0 ? 'none' : 'inset 0 0 4px rgba(0, 0, 0, 0.2)'};
  transition: all 0.15s ease;
  position: relative;
  overflow: hidden;
  margin: 0.5px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.type === 0 ? 'none' : 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 50%)'};
    pointer-events: none;
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
  }

  &:hover {
    transform: ${props => props.type === 0 ? 'none' : 'scale(1.02)'};
    z-index: 1;
  }
`;