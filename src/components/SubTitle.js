import React from 'react';
import styled from 'styled-components'

const StyledSubTitle = styled.h2`
color: #000;
text-align: left;
font-zise: 24px;
line-hegiht: 1.21;
margin: 0 auto 0 0;

@media ${props => props.theme.media.phone} {
    margin: ${props => props.margin || "0"}
}
`

const SubTitle = (props) => {
    return (
        <StyledSubTitle {...props}/>
    )
}

export default SubTitle