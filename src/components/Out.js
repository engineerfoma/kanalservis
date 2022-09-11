import React from 'react';
import styled from 'styled-components';
import OutImg from '../images/out.svg';

const StyledOut = styled.div`
width: 65px;
height: 56px;
background-image: url(${OutImg});
background-size: 100% 100%;
background-position: 50% 50%;
margin-left: auto;
`

const Out = () => {
  return (
    <StyledOut />
  )
}

export default Out