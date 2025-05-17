import React from 'react';
import {
  StyledHeader,
  HeaderContent,
  Logo,
  GameInfo,
  InfoItem
} from './styles/StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <Logo>
          TETRIS<span> GAME</span>
        </Logo>
        <GameInfo>
          <InfoItem>
            Level: <span>1</span>
          </InfoItem>
          <InfoItem>
            Score: <span>0</span>
          </InfoItem>
          <InfoItem>
            Lines: <span>0</span>
          </InfoItem>
        </GameInfo>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;