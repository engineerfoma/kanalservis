import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import SubTitle from './SubTitle';
import Button from './Button';
import Input from './Input';
import Flex from './Flex';
import FlexMedia from './FlexMedia'

const StyledAuth = styled.div`
width: 480px;
height: 330px;
border: 5px solid #27569C;
background-color: #FFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
padding: 40px 17px 22px 15px;

@media ${props => props.theme.media.phone} {
  width: 290px;
  height: 333px;  
  padding: 12px 43px 27px 30px;
  margin: 22px auto 0;
}
`

const Authorization = () => {
  return (
    <StyledAuth>
      <Flex
        direction="column"
      >
        <Title>Autorization</Title>
        <FlexMedia
          direction="row"
          align="center"
          justify="center"
          height="74px"
        >
          <SubTitle
           margin="10px auto 0 0"
          >login</SubTitle>
          <Input
            width="212px"
            height="39px"
            margin="15px 0 0 0"
          />
        </FlexMedia>
        <FlexMedia
          direction="row"
          align="center"
          justify="center"
          height="65px"
        >
          <SubTitle
          margin="80px auto 10px 0"
          >password</SubTitle>
          <Input
            width="212.15px"
            height="33.48px"
          />
        </FlexMedia>
        <Button
          margin="60px 0 0 0"
        >
          Submit</Button>
      </Flex>
    </StyledAuth>
  )
}

export default Authorization;