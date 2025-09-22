import React, { useState, useEffect } from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text, animated = true, icon = null }) => {
    // Split the text into label and value
    const [label, value] = text.split(':').map(str => str.trim());
    const [displayValue, setDisplayValue] = useState(value || text);
    const [isAnimating, setIsAnimating] = useState(false);

    // Animate number changes
    useEffect(() => {
        if (animated && value && !isNaN(parseInt(value))) {
            const numericValue = parseInt(value);
            const currentValue = parseInt(displayValue) || 0;
            
            if (numericValue !== currentValue) {
                setIsAnimating(true);
                
                const duration = 500; // Animation duration in ms
                const steps = 20;
                const stepDuration = duration / steps;
                const increment = (numericValue - currentValue) / steps;
                
                let step = 0;
                const timer = setInterval(() => {
                    step++;
                    const newValue = Math.round(currentValue + (increment * step));
                    setDisplayValue(newValue.toString());
                    
                    if (step >= steps) {
                        setDisplayValue(numericValue.toString());
                        setIsAnimating(false);
                        clearInterval(timer);
                    }
                }, stepDuration);
                
                return () => clearInterval(timer);
            }
        } else {
            setDisplayValue(value || text);
        }
    }, [value, animated, displayValue, text]);

    // Get icon based on label type
    const getIcon = () => {
        if (icon) return icon;
        
        const labelLower = label.toLowerCase();
        if (labelLower.includes('score')) return 'fas fa-star';
        if (labelLower.includes('high')) return 'fas fa-trophy';
        if (labelLower.includes('row')) return 'fas fa-minus';
        if (labelLower.includes('level')) return 'fas fa-layer-group';
        if (labelLower.includes('game over')) return 'fas fa-skull';
        if (labelLower.includes('paused')) return 'fas fa-pause';
        return 'fas fa-info-circle';
    };

    // Get color theme based on label
    const getColorTheme = () => {
        const labelLower = label.toLowerCase();
        if (labelLower.includes('score')) return 'score';
        if (labelLower.includes('high')) return 'high-score';
        if (labelLower.includes('row')) return 'rows';
        if (labelLower.includes('level')) return 'level';
        if (labelLower.includes('game over')) return 'game-over';
        if (labelLower.includes('paused')) return 'paused';
        return 'default';
    };

    return (
        <StyledDisplay 
            gameOver={gameOver} 
            colorTheme={getColorTheme()}
            isAnimating={isAnimating}
            role="status"
            aria-label={`${label}: ${displayValue}`}
            aria-live={animated ? "polite" : "off"}
        >
            <div className="display-content">
                <div className="icon-container">
                    <i className={getIcon()}></i>
                </div>
                <div className="text-container">
                    <span className="label">{label}</span>
                    <span className="value">{displayValue}</span>
                </div>
            </div>
            {isAnimating && <div className="animation-overlay"></div>}
        </StyledDisplay>
    );
};

export default React.memo(Display);