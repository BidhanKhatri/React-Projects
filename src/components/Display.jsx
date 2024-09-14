import React, { useEffect, useRef } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets';

function Display() {

    const displayRef = useRef(); 
    const location = useLocation(); //getting location of album
    const isAlbum = location.pathname.includes("album"); //checking if that path or url contain album or not
    const albumId = isAlbum ? location.pathname.slice(-1) : ""; // extracting the id from pathname
    const gotColor = albumsData[Number(albumId)].bgColor; //converting string to integer
    console.log(gotColor)
   
    useEffect(()=>{
        if(isAlbum){
            displayRef.current.style.background = `linear-gradient(${gotColor},#121212)`
        }
        else{
            displayRef.current.style.background = "#242424"
        }
    })

  return (
    <div ref={displayRef} className='bg-[#242424] ml-4 px-6 py-4 rounded w-[100%] text-white overflow-auto'>
      <Routes>
        <Route path='/' element={<DisplayHome />}></Route>
        <Route path='/album/:id' element={<DisplayAlbum />}></Route>
      </Routes>
    </div>
  )
}

export default Display 
