import React, { useState } from 'react';
import {
  StyledHeader,
  HeaderContent,
  Logo,
  LogoIcon,
  LogoText,
  Nav,
  NavLink,
  GameInfo,
  InfoItem,
  HeaderActions,
  ThemeToggle,
  SoundToggle,
  StatusIndicator
} from './styles/StyledHeader';

const Header = ({ gameStats, isPlaying, isPaused }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Theme toggle functionality can be implemented here
  };

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
    // Sound toggle functionality can be implemented here
  };

  return (
    <StyledHeader>
      <HeaderContent>
        <Logo>
          <LogoIcon>
            <i className="fas fa-gamepad"></i>
          </LogoIcon>
          <LogoText>
            TETRIS<span>PRO</span>
          </LogoText>
        </Logo>

        <Nav>
          <NavLink href="#game" aria-label="Game">
            <i className="fas fa-play"></i>
            <span>Play</span>
          </NavLink>
          <NavLink href="#leaderboard" aria-label="Leaderboard">
            <i className="fas fa-trophy"></i>
            <span>Leaderboard</span>
          </NavLink>
          <NavLink href="#about" aria-label="About">
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </NavLink>
        </Nav>

        <GameInfo>
          {gameStats && (
            <>
              <InfoItem>
                <i className="fas fa-layer-group"></i>
                <span>Level: {gameStats.level || 1}</span>
              </InfoItem>
              <InfoItem>
                <i className="fas fa-star"></i>
                <span>Score: {gameStats.score || 0}</span>
              </InfoItem>
              <InfoItem>
                <i className="fas fa-minus"></i>
                <span>Lines: {gameStats.lines || 0}</span>
              </InfoItem>
            </>
          )}
        </GameInfo>

        <HeaderActions>
          <StatusIndicator isPlaying={isPlaying} isPaused={isPaused}>
            <i className={`fas ${isPaused ? 'fa-pause' : isPlaying ? 'fa-play' : 'fa-stop'}`}></i>
            <span>{isPaused ? 'Paused' : isPlaying ? 'Playing' : 'Stopped'}</span>
          </StatusIndicator>
          
          <SoundToggle onClick={toggleSound} isActive={isSoundOn} aria-label="Toggle Sound">
            <i className={`fas ${isSoundOn ? 'fa-volume-up' : 'fa-volume-mute'}`}></i>
          </SoundToggle>
          
          <ThemeToggle onClick={toggleTheme} isActive={isDarkMode} aria-label="Toggle Theme">
            <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'}`}></i>
          </ThemeToggle>
        </HeaderActions>
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;