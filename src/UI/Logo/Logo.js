import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../assets/logo.png';

const Logo = (props) => {
    return(
        <StyledLogo src={LogoImg} />
    )
}


const StyledLogo = styled.img`
width: 50px;
height: 50px;
`;
export default Logo;