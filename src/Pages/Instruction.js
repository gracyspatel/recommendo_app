import React from 'react'

import {
  Container,
  Stack
} from '@chakra-ui/react';
import TopPage from './TopPage';


const Instruction = () => {
  return (
    
    <Container as={Stack} maxW={'8xl'}>
      <TopPage/>
    </Container>
  )
}

export default Instruction