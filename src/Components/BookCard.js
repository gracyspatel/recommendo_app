import React,{useState,useEffect} from 'react';
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
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

  export default function BookCard({book}) {
    const [imgUrl,setimgUrl] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [bookDatas,setBookDatas] =  useState({})
    const [loading,setloading] = useState(true);

    const bookReco = async(bookname) => {
      setloading(true);
      setBookDatas({});
      onOpen();
      const bookget = { book: bookname };
      if(bookname.slice(0,5)==="Harry"){
        const harry = { book: "Harry Potter and the Order of the Phoenix (Book 5)" };
        axios.post('http://127.0.0.1:5000/book', harry)
        .then(response => {
          console.log(response.data[1].recommendation);
          setBookDatas(response.data[1].recommendation);
          // console.log(response.data[1].recommendation)
          setloading(false);
        });
      }
      axios.post('http://127.0.0.1:5000/book', bookget)
        .then(response => {
          console.log(response.data[1].recommendation);
          setBookDatas(response.data[1].recommendation);
          // console.log(response.data[1].recommendation)
          setloading(false);
        });
    }

    // const findUrl = () => {
    //     axios.get("https://ia800607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-S.zip&file=240727-S.jpg").then(
    //         (response)=>{
    //             console.log(response)
    //             setimgUrl(response.data)
    //         }
    //     )
    // }
    useEffect(() => {
        setimgUrl(book.cover_i)
    })


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
                Book
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'1xl'}
              fontFamily={'body'}>
              {book.title}
            </Heading>
            <Stack mt={6} direction={'row'} spacing={1} flex align={'center'} justify={'center'}>
            {
                (imgUrl !== "") ? <img src={`https://covers.openlibrary.org/b/id/${imgUrl}-L.jpg`} width="300px" style={{height:"170px",width:"220px"}}/> : <img src={`https://via.placeholder.com/150`} width="300px" style={{height:"170px",width:"220px"}}/>
            }
        {/* <img src={`https://covers.openlibrary.org/b/id/${(imgUrl}-L.jpg`} width="300px" style={{height:"170px",width:"220px"}}/> */}
          </Stack>
            <Text color={'gray.500'}>
              {book.author_name['0']}
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            {/* <Avatar
              src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
              alt={'Author'}
            /> */}
            <Stack direction={'column'} spacing={0} fontSize={'sm'} flex justify={'flex-end'}>
              <Text as="b" color={'gray.500'}>{book.type} . {book.publish_date[0]} </Text>
            </Stack>
          </Stack>
          <br/>
          <Stack direction={'column'} spacing={0} fontSize={'sm'} flex justify={'flex-end'}>
          <Button colorScheme='teal' onClick={()=>{bookReco(book.title)}}>Recommend</Button>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Recommended Books</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              <Text>{book.title}</Text>
                <br/>
                {
                  loading ? (<>Loading</>) :(
                  <div>
                {
                  bookDatas.map((song,index) => {
                    return (
                      <Text key={index}>{index+1} . &nbsp; {song}</Text>
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
  
  