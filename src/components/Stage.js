import React from 'react';

import Cell from './Cell';
import { StyledStage } from './styles/StyledStage';

const Stage = ({ stage }) => {
    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {stage.map((row, y) => 
                row.map((cell, x) => (
                    <Cell 
                        key={`${y}-${x}`}
                        type={cell[0]}
                        index={`${y}-${x}`}
                    />
                ))
            )}
        </StyledStage>
    );
};

export default React.memo(Stage);