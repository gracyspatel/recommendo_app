import React from 'react'
const Login = () => {
    const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=2f829542ff1f4e84b19fbeed1564040e&response_type=code&redirect_uri=http://localhost:3000&show_dialog=true&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

    return (
        <Flex justifyContent={'center'} alignItems={'center'} style={{minHeight: '100vh'}}>
      <a href={AUTH_URL}>
        Login With Spotify
      </a>
    </Flex>
    )
}

export default Login