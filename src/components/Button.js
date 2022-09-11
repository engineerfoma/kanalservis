import React from 'react';
import styled from 'styled-components';

const StyledBtutton = styled.button`
width: 213px;
height: 43px;
background-color: #E4B062;
font-size: 24px;
line-height: 1.21;
border-radius: 10px;
border: none;
margin: 15px auto 0;

@media ${props => props.theme.media.phone} {
margin: ${props => props.margin || "0"};
}
`

const Button = (props) => {
  return (
    <StyledBtutton {...props} />
  )
}

export default Button