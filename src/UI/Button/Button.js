import React from 'react';
import styled from 'styled-components';

const button = (props) => {
    return (
    <div>
        <StyledButton onClick={props.clicked} success={props.success}>{props.children}</StyledButton>
    </div>
    )
};

const StyledButton = styled.button`
    width : 100px;
    height : 25px;
    background-color : ${props => props.success ? 'lightgreen' : 'salmon'};
    color : white;
    
`;

export default button;
