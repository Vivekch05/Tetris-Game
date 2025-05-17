import React from 'react';
import {
  StyledFooter,
  FooterContent,
  FooterText,
  FooterLinks,
  FooterLink,
  TechStack
} from './styles/StyledFooter';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <FooterText>
          Developed by <span>Vivek Chaurasia</span>
        </FooterText>
        
        <TechStack>
          <i className="fab fa-react" title="React"></i>
          <i className="fab fa-js" title="JavaScript"></i>
          <i className="fab fa-css3-alt" title="CSS3"></i>
          <span>React Hooks & Styled Components</span>
        </TechStack>

        <FooterLinks>
          <FooterLink href="https://github.com/Vivekch05" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            GitHub
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/vivekch123/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </FooterLink>
        </FooterLinks>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;