import React,{useState} from 'react'
import { Routes, Route } from "react-router-dom"

import Sidebar from '../Components/Sidebar'
import Home from './Home'
import AboutUs from './AboutUs'
import API from './API'

const Dashboard = () => {
  const [movieList,setMovieList] = useState([]);
  const [songList,setSongList] = useState([]);
  const [bookData,setBookdata] = useState([]);
  const [isCheck, setIsCheck] = useState([]);
  
  return (
    <div>
      <Sidebar isCheck={isCheck} setIsCheck={setIsCheck} movieList={movieList} setMovieList={setMovieList} songList={songList} setSongList={setSongList} bookData={bookData} setBookdata={setBookdata}>  
      <br/>
      <Routes>
        <Route path="/" element={ <Home isCheck={isCheck} setIsCheck={setIsCheck} setMovieList={setMovieList} movieList={movieList} songList={songList} setSongList={setSongList} bookData={bookData} setBookdata={setBookdata}/> } />
        <Route path="/aboutus" element={ <AboutUs/> } />
        <Route path="/developerapi" element={ <API/> } />
      </Routes>
      </Sidebar>
    </div>
  )
}

export default Dashboard