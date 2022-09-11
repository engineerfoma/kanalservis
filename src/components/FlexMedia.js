import React from 'react';
import styled from 'styled-components';
import { StyledFlex } from './Flex';

const StyledFlexMedia = styled(StyledFlex)`
// height: 45px;
// margin: 35px 0 0;

@media ${props => props.theme.media.phone} {
    flex-direction: column;
    align-items: ${props => props.align || 'stretch'};
    justify-content: ${props => props.justify || 'stretch'};
    margin: ${({margin}) => margin || '0'};
    height: ${({height}) => height || '0'};
}
`
const FlexMedia = (props) => {
    return (
        <StyledFlexMedia {...props} />
    )
}

export default FlexMedia;