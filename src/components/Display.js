import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => {
    // Split the text into label and value
    const [label, value] = text.split(':').map(str => str.trim());
    
    return (
        <StyledDisplay gameOver={gameOver}>
            <span className="label">{label}</span>
            <span className="value">{value || text}</span>
        </StyledDisplay>
    );
};

export default React.memo(Display);