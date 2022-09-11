import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
color: #27569C;
text-align: center;
font-size: 24px;
margin: 0 0 30px;


@media ${props => props.theme.media.phone} {
    margin: 0 0 15px;
}
`

const Title = (props) => {
    return (
        <StyledTitle {...props} />
    )
}

export default Title;