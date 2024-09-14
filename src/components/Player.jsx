import React, { useContext } from 'react';
import {songsData,assets} from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

function Player() {

    const{track, seekBg, seekBar, playState, play, pause, time, prev, next} = useContext(PlayerContext);

  return (
    <div className='h-[10%] px-2 flex justify-between w-full text-white items-center'>
        <div className='flex space-x-4'>
            <img src={track.image} alt='' className='w-12' />
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,25)}...</p>
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=''/>
                <img onClick={prev} className='w-4 cursor-pointer' src={assets.prev_icon} alt=''/>

                {playState ? <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt=''/> : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt=''/>}
                
                <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt=''/>
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=''/>
            </div>
            <div className='flex items-center gap-4'>
                <p>{(time.currentTime.minute < 10) ? "0" + time.currentTime.minute : time.currentTime.minute} : {(time.currentTime.second < 10 ? "0" + time.currentTime.second : time.currentTime.second)}</p>
                <div ref={seekBg} className='w-[60vh] max-w-[500px] bg-gray-500 rounded'>
                    <hr ref={seekBar} className='h-1 bg-green-500 border-none w-0 rounded' />
                </div>
                <p>{(time.totalTime.minute < 10) ? "0" + time.totalTime.minute : time.totalTime.minute} : {(time.totalTime.second < 10 ? "0" + time.totalTime.second : time.totalTime.second)}</p>
            </div>
        </div>
        <div className='flex gap-4 items-center'>
            <img className='h-4 cursor-pointer' src={assets.mini_player_icon} alt='' />
            <img className='h-4 cursor-pointer' src={assets.mic_icon} alt='' />
            <img className='h-4 cursor-pointer' src={assets.like_icon} alt='' />
        </div>
        
    </div>
  )
}

export default Player
