import React from 'react'

import ListofCard from "../Components/ListofCard";
import SongList from "../Components/SongList";
import {
  Container,
  Stack
} from '@chakra-ui/react';
import BookList from '../Components/BookList';
import Instruction from './Instruction';

const Home = ({isCheck,movieList,setMovieList,songList,setSongList,bookData,setBookdata}) => {
  // const [movieList,setMovieList] = useState([]);
  
  return (
    <div>
      {/* <Searchbar setMovieList={setMovieList}/> */}
      {
        (!isCheck[0])?
        (<div><Instruction/></div>):(<div></div>)
      }
      <br/>
      {
        (isCheck[0]==='2' ||isCheck[1]==='2' ||isCheck[2]==='2' )?
        (
          <Container as={Stack} maxW={'8xl'}>
          {
            movieList ? (
              <ListofCard movieList={movieList} />
            ):(<div><h1>NO MOVIES FOUND!!! SEARCH</h1></div>)
          }
          <br/>
          </Container>
        ):(<></>)
      }
      {
        (isCheck[0]==='3' ||isCheck[1]==='3' ||isCheck[2]==='3' )?
        (
          <Container as={Stack} maxW={'8xl'}>
          {
            songList ? (
              <SongList songList={songList} />
            ):(<div><h1>NO SONGS FOUND!!! SEARCH</h1></div>)
          }
          <br/>
          </Container>
        ):(<div></div>)
      }
          {
        (isCheck[0]==='1' ||isCheck[1]==='1' ||isCheck[2]==='1' )?
        (
          <Container as={Stack} maxW={'8xl'}>
          {
            bookData ? (
              <BookList bookData={bookData} />
            ):(<div><h1>NO SONGS FOUND!!! SEARCH</h1></div>)
          }
          <br/>
          </Container>
        ):(<div></div>)
          }
    </div>
  )
}

export default Home