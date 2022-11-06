import React from 'react'
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    VisuallyHidden,
    chakra,
    useColorModeValue,
  } from '@chakra-ui/react';

const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'800'} fontSize={'3xl'} mb={2}>
        {children}
      </Text>
    );
  };
export default ListHeader