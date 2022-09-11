import React from 'react';
import styled from 'styled-components';
import LogoDesc from '../images/logo_desctop.svg';
import LogoMob from '../images/logo_mobile.svg';

const StyledLogo = styled.div`
width: 273px;
height: 63px;
background-image: url(${LogoDesc});
background-size: 100% 100%;
background-position: 50% 50%;
@media ${props => props.theme.media.phone} {
    background-image: url(${LogoMob});
    width: 70px;
}
`

const Logo = () => {
  return (
    <StyledLogo />
  )
}

export default Logo