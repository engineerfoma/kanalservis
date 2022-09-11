import React from 'react'
import Flex from '../components/Flex';
import Authorization from '../components/Authorization';

const AuthPage = () => {
  return (
    <Flex
        direction="column"
        align="center"
        justify="center"
        height="calc(100vh - 235px)"
      >
        <Authorization />
      </Flex>
  )
}

export default AuthPage