import {
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import Card from './Card';

export default function ListofCard({movieList}) {
  return (
    <div>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 ,lg:4}} spacing={6}>
          {
            movieList.length > 0 ? (
              movieList.map((movie)=>{
                return (
                  <Stack key={movie.imdbID} align={'flex-start'}>
                    <Card movie={movie}/>
                    </Stack>
                )
              })
            ) :(
              "No Movies Found"
            )
          }  
        </SimpleGrid>
      </div>
  );
}