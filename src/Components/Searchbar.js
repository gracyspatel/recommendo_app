import React,{useState,useEffect} from 'react'
import {
  Container,
  Stack,
  Text,
  Button,
  Show,
  InputGroup,
  Flex,
  InputLeftElement,
  Input,
  InputRightElement
} from '@chakra-ui/react';
import { FaInstagram, FaSearch } from 'react-icons/fa';
import axios from "axios"

const clientID = "709b87a88e804902a4d6d953eedae5a0";
const clientSecret = "dffa0b71910e4c83af0c878e07522323";

const Searchbar = ({setMovieList,setSongList,songList,bookData,setBookdata}) => {
  const [searchValue,setserachValue] = useState("");
  // const [timeoutId,updateTimeoutId] = useState();
  const [accesstoken,setAccesstoken] = useState("");

  const onTextChange = (event) => {
    // clearTimeout(timeoutId);
    // console.log(event.target.value)
    setserachValue(event.target.value)
    // const timeout = setTimeout(() => {fetchData(event.target.value)}, 500);
    // updateTimeoutId(timeout);
  }

  const fetchData = async (moviename) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${moviename}&apikey=bf24e608`);
    // console.log(response.data.Search);
    if(response.data.Search!="undefined")
    {
      setMovieList(response.data.Search);
    }
  }
  const fetchBookData = async (bookname) => {
    const response = await axios.get(`https://openlibrary.org/search.json?title=${bookname}`);
    // console.log(response.data.docs);
    if(response.data.docs!="undefined")
    {
      setBookdata(response.data.docs);
    }
  }

  const fetchsongData = () => {
    var authParameters = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded',
      },
      body:'grant_type=client_credentials&client_id='+clientID+'&client_secret='+clientSecret
    }
    fetch('https://accounts.spotify.com/api/token',authParameters)
    .then(result => result.json())
    .then(data => {setAccesstoken(data.access_token)
    // console.log(data.access_token)
  })
  }

  const searchSong = async() => {
    var artist_id = await fetch(`https://api.spotify.com/v1/search?q=${searchValue}&type=artist`,{
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${accesstoken}`
      }
    })
    .then(result => result.json())
    .then(data => {return(data.artists.items[0].id)})

    var albums = await fetch(`https://api.spotify.com/v1/artists/${artist_id}/albums?include_groups=album&market=IN&limit=10`,{
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${accesstoken}`
      }
    })
    .then(result => result.json())
    .then(data => {
      setSongList(data.items);
    })
    // console.log(songList.name);
  }
  useEffect(() => {
      fetchsongData()
  }, [])
  return (
    <Container as={Stack} maxW={'8xl'}>
      <Stack spacing={4} bgColor={"#fff"} p={6} rounded={5}>
        <InputGroup rounded={5}>
          <InputLeftElement
            pointerEvents='none'
            children={<FaSearch color='gray.300' />}
          />
          <Input placeholder='Search for content..' onKeyPress={(event)=>{
            if(event.key === 'Enter'){
              fetchBookData(searchValue);
              searchSong(searchValue)
              fetchData(searchValue)
              // console.log("ON Key press",searchValue);
            }
          }}  
          onChange={(event)=>{onTextChange(event)}}
          />
          <InputRightElement w="8vw">
          <Show above='md'>
            <Button colorScheme='teal' size='md' w="100%" style={{minWidth:'120px'}} rounded={5} onClick={()=>{
              // console.log("Button Clicked",searchValue)
              
              fetchBookData(searchValue);
              fetchData(searchValue)
              searchSong(searchValue)
              }}>
              <Flex alignItems="center" justifyContent="space-between" w="100%">
    <Text>Search</Text>
                <FaSearch style={{minWidth:'15px',minHeight:'15px'}} color='green.500' />
              </Flex>
            </Button>
            </Show>
            <Show below='sm'>
            <Button colorScheme='teal' size='md' w="100%" style={{minWidth:'42px'}} rounded={5} onClick={()=>{
              // console.log("Button Clicked",searchValue)
              
              fetchBookData(searchValue);
              fetchData(searchValue);
              searchSong(searchValue)
              }}>
              <Flex alignItems="center" justifyContent="space-between" w="100%">
                <FaSearch style={{minWidth:'15px',minHeight:'15px'}} color='green.500' />
              </Flex>
            </Button>
            </Show>
          </InputRightElement>

        </InputGroup>
      </Stack>

    </Container>
  )
}

export default Searchbar