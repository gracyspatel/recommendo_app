import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
    Modal,
    ModalBody,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect,useState } from 'react';

export default function Card({movie}) {
  const [mdata,setData] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
    const [movieDatas,setMovieDatas] =  useState({})
    const [loading,setloading] = useState(true);

    const bookReco = async(moviename) => {
      setloading(true);
      setMovieDatas({});
      onOpen();
      const movieget = { movie: moviename };
      axios.post('http://127.0.0.1:5000/movie2', movieget)
        .then(response => {
          console.log(response.data.prediction);
          setMovieDatas(response.data.prediction);
          // console.log(response.data[1].recommendation)
          setloading(false);
        });
    }
  const datafetch = async(ids) => {
    const moviedata = await axios.get(`https://www.omdbapi.com/?i=${ids}&apikey=bf24e608`);
    if(moviedata.data!="undefined" || moviedata.data!="" )
    {
      setData(moviedata.data);
      // console.log(moviedata.data)
    }
  }
  useEffect (() => {
    datafetch(movie.imdbID);
  },[]
  )
  return (
    <Center>
      <Box
        minW={'100px'}
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
            {movie.Type}
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'1xl'}
            fontFamily={'body'}>
            {movie.Title}
          </Heading>
          <Stack mt={6} direction={'row'} spacing={1} flex align={'center'} justify={'center'}>
          <img src={movie.Poster} width="300px" style={{height:"170px",width:"220px"}}/>
        </Stack>
          <Text color={'gray.500'}>
            {
              (mdata.Plot)? (<div>{mdata.Plot.slice(0,100)}</div>):(<></>)
            }
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          {/* <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          /> */}
          <Stack direction={'column'} spacing={0} fontSize={'sm'} flex justify={'flex-end'}>
            <Text as="b" color={'gray.500'}>{mdata.Genre} . {movie.Year}</Text>
          </Stack>
        </Stack>
        <br/>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} flex justify={'flex-end'}>
          <Button colorScheme='teal' onClick={()=>{bookReco("Twilight")}}>Recommend</Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Recommended Movie</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              <Text>{movie.Title}</Text>
                <br/>
                {
                  loading ? (<>Loading...</>) :(
                  <div>
                {
                  movieDatas.map((moviee,index) => {
                    return (
                      <Text key={index}>{index+1} . &nbsp; {moviee}</Text>
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

