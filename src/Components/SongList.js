import {
    Stack,
    SimpleGrid,
  } from '@chakra-ui/react';
  import SongCard from './SongCard';
  
  export default function SongList({songList}) {
    return (
      <div>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 ,lg:4}} spacing={6}>
            {
              songList.length > 0 ? (
                songList.map((song,index)=>{
                  // alert(toString(index))
                  // console.log(song.name)
                  return (
                    <Stack key={index} align={'flex-start'}>
                      <SongCard song={song}/>
                      </Stack>
                  )
                })
              ) :(
                "No Songs Found"
              )
            }
            
          </SimpleGrid>
        </div>
    );
  }