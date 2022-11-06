import React,{useEffect,useState} from 'react';
import {
  Box,
  Stack,
  HStack,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function TopPage() {

    const [topmovie,setTopmovie] = useState([]);
    const [topbooks,setTopbooks] = useState([]);
    const [topmusic,setTopmusic] = useState([]);

    const movieFun = async () => {
        await fetch('http://localhost:5000/topmovies')
        .then(res => res.json())
        .then(data =>{
            // console.log(data.data);
            setTopmovie(data.data)
        }
        )
    }

    const booksFun = async () => {
        await fetch('http://localhost:5000/topbook')
        .then(res => res.json())
        .then(
            data =>{
                // console.log(data.data);
                setTopbooks(data.data)
            }
        )
    }

    useEffect(() => {
        movieFun();
        booksFun();
        setTopmusic([{
          "id": 1,
          "name": "The Beatles",
      },
      {
          "id": 2,
          "name": "The Rolling Stones",
      },
      {
          "id": 3,
          "name": "Elvis Presley",
      },
      {
          "id": 4,
          "name": "Michael Jackson",
      },
      {
          "id": 5,
          "name": "Led Zeppelin",
      },
      {
          "id": 6,
          "name": "Pink Floyd",
      },
      {
          "id": 7,
          "name": "The Who",
      },
      {
          "id": 8,
          "name": "Queen",
      },
      {
          "id": 9,
          "name": "Bob Dylan",
      },
      {
          "id": 10,
          "name": "The Beach",
      },
      {
          "id": 11,
          "name": "The Doors",
      },
      {
          "id": 12,
          "name": "The Kinks",
      }])
    }, [])
  return (
    <Box py={0}>
      <VStack spacing={1} textAlign="center">
                <Text fontSize="3xl" fontWeight="900">
                  Top Ten Items
                </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>

        <PriceWrapper>
          <Box position="relative" style={{maxWidth:"300px"}}>
            <Box py={4} px={0}>
              <HStack justifyContent="center">
                <Text fontSize="4xl" fontWeight="900">
                  Movies
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                {
                    topmovie.map((item,index)=>{
                        return(
                            <ListItem key={index}>
                            {index+1} . &nbsp;
                            {item.title}
                          </ListItem>
                        )
                    })
                }
              </List>
            </VStack>
          </Box>
        </PriceWrapper>  

        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
              <HStack justifyContent="center">
                <Text fontSize="4xl" fontWeight="900">
                  Books
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                {
                    topbooks.slice(0,12).map((item,index)=>{
                        return(
                            <ListItem key={index}>
                            {index+1} . &nbsp;
                            {item['Book-Title']}
                          </ListItem>
                        )
                    })
                }
              </List>
            </VStack>
          </Box>
        </PriceWrapper>  

        <PriceWrapper>
          <Box position="relative">
            <Box py={4} px={12}>
              <HStack justifyContent="center">
                <Text fontSize="4xl" fontWeight="900">
                  Songs
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                {
                    topmusic.map((item,index)=>{
                        return(
                            <ListItem key={index}>
                            {index+1} . &nbsp;
                            {item.name}
                          </ListItem>
                        )
                    })
                }
              </List>
            </VStack>
          </Box>
        </PriceWrapper>     
       </Stack>
    </Box>
  );
}