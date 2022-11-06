import React, {useState} from 'react'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Modal,
    ModalBody,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    useColorModeValue,
    useDisclosure,
    Button,
  } from '@chakra-ui/react';

import axios from 'axios'
  export default function SongCard({song}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [songDatas,setSongDatas] =  useState({})
    const [loading,setloading] = useState(true);

    const songReco = async(songname) => {
      onOpen();
      
      const songget = { song: songname };
      axios.post('http://127.0.0.1:5000/songs', songget)
        .then(response => {
          console.log(response.data[1].prediction);
          setSongDatas(response.data[1].prediction);
          console.log(response.data[1].prediction)
          setloading(false);
        });
    }
    // console.log(song)
    return (
      <Center>
        <Box
          minW={'280px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          {/* <Box
            h={'100px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              src={
                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              }
              layout={'fill'}
            />
          </Box> */}
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              SONGS
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'1xl'}
              fontFamily={'body'}>
              {song.name}
            </Heading>
            <Stack mt={6} direction={'row'} spacing={1} flex align={'center'} justify={'center'}>
            <img src={song.images[0].url} width="300px" style={{height:"170px",width:"220px"}}/>
          </Stack>
            <Text color={'gray.500'}>
              {song.artists[0].name}
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            {/* <Avatar
              src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
              alt={'Author'}
            /> */}
            <Stack direction={'column'} spacing={0} fontSize={'sm'} flex justify={'flex-end'}>
              <Text as="b" color={'gray.500'}>{song.type} . {song.release_date} </Text>
            </Stack>
          </Stack>
          <br/>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} flex justify={'flex-end'}>
              <Button colorScheme='teal' onClick={()=>{songReco(song.name)}}>Recommend</Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Recommended Songs</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>{song.name}</Text>
                <br/>
                {
                  loading ? (<>Loading</>) :(
                  <div>
                {
                  songDatas.map((song,index) => {
                    return (
                      <>
                      <Text key={index}>{index+1} . &nbsp; {song.name}</Text>
                      </>
                    )
                  })
                }
                  </div>)
                }
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
            </Stack>
        </Box>

      </Center>
    );
  }
  
  