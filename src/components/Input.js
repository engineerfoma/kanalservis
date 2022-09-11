import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
width: 295px;
height: 45px;
border-radius: 10px;
border: 4px solid #27569C;
background-color: #d9d9d9;
font-size: 18px;
line-height: 1.2;
padding: 5px;

@media ${props => props.theme.media.phone} {
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin}; 
}

`

const Input = (props) => {
  return (
    <StyledInput {...props} />
  )
}

export default Input