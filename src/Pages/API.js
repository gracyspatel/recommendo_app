import React from 'react'
import {
  Container,
  Heading,
  Stack,
  Text
} from '@chakra-ui/react';


const API = () => {
  return (
    <Container as={Stack} maxW={'8xl'}>
    <div>
    <Heading
            fontWeight={900}
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            lineHeight={'110%'}>
            Developer's Section<br />
            <Text fontWeight={300}  fontSize={{ base: 'lg', sm: 'lg', md: 'xl' }} as={'span'} color={'green.700'}>
              Develop your own applications and add more features by using owr APIs for the recommendations.
            </Text>
          </Heading>
    </div>
    </Container>
  )
}

export default API