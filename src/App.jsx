import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const{ audioRef,track } = useContext(PlayerContext);

  return (
 
    <div className='h-screen bg-black p-2'>
      <div className='h-[90%] flex'>
         <Sidebar />
         <Display />
      </div>
        <Player />
        <audio preload='auto' ref={audioRef} src={track.file}></audio>
    </div>
  
  )
}

export default App
