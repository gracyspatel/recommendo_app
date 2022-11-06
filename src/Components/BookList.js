import {
    Stack,
    SimpleGrid,
  } from '@chakra-ui/react';
  
import BookCard from './BookCard';
  export default function BookList({bookData}) {
    return (
      <div>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 ,lg:4}} spacing={6}>
            {
              bookData.length > 0 ? (
                bookData.slice(0, 8).map((book,index)=>{
                  // alert(toString(index))
                  // console.log(song.name)
                  return (
                    <Stack key={index} align={'flex-start'}>
                      <BookCard book={book}/>
                      </Stack>
                  )
                })
              ) :(
                "No Books Found"
              )
            }
            
          </SimpleGrid>
        </div>
    );
  }