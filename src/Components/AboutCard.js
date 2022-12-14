import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function AboutCard({name}) {
  return (
    <Center py={6}>
      <Box
        maxW={'500px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={4}
        overflow={'hidden'}>
        
          <img 
            src={
              'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
          <br/>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Developer
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            fontWeight={900}
            >
            {name}
          </Heading>
          <Stack direction={'row'} spacing={0} align={'center'}>
          {/* <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          /> */}
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text color={'gray.500'}>Computer Science & Engineering</Text>
          </Stack>
        </Stack>
          <Text color={'gray.500'}>
           <span as="b">Website : </span> &nbsp; <a href="gracy.me" target="_blank" rel="noopener">gracy.me</a>
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}