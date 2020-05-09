import styled from 'styled-components';

import bgImage from '../../img/bg.gif';

export const StyledTetrisWrapper = styled.div`
width:100vw;
height:auto;
background:url(${bgImage}) #000;
background-size:auto;
overflow:hidden;
`

export const StyledTetris =styled.div`
display:flex;
align-items:flex-start;
padding:30px;
margin:0 auto;
max-width:900px;

aside{
    width:100%;
    max-width:200px;
    display:block;
    padding:0 20px;
}
`