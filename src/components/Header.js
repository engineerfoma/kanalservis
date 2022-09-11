import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Out from './Out';
import Flex from './Flex';

const StyledHeader = styled.header`
width: 100%;
height: 118px;
background-color: #E4B062;
padding: 27px 35px 28px 41px;

@media ${props => props.theme.media.tablet} {
    padding-left: 37px;
}
@media ${props => props.theme.media.phone} {
    padding: 28px 15px 27px 15px;
}
`

const Header = () => {
  return (
    <StyledHeader>
      <Flex>
        <Logo />
        <Out />
      </Flex>
    </StyledHeader>
  )
}

export default Header