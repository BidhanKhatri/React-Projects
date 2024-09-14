import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const {id} = useParams();
    const resultData = albumsData[id];

    const {playWithId} = useContext(PlayerContext);

  return (
    <>
    <Navbar /> 
    <div className='flex gap-8 my-5 '>
        <img className='max-w-[150px] rounded' src={resultData.image} alt=''/>
        <div className='flex flex-col justify-end gap-2'>
            <p className='text-6xl font-bold'>{resultData.name}</p>
            <p className='font-bold'>{resultData.desc}</p>
            <div className='flex gap-2 items-center'>
                <img className='h-6' src={assets.spotify_logo} alt='' />
                <span className='font-bold'>BidhansPlay</span>
            </div>
        </div>
    </div>
    <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 items-center md:my-4'>
        <div><b className='mr-4 pl-2'>#</b>Title</div>
        <div>Album</div>
        <div>Date Added</div>
        <div><img className='w-6 hidden md:block' src={assets.clock_icon} alt='' /></div>
    </div>
    <hr />
  
    {songsData.map((items,index)=>(
        <div onClick={()=>playWithId(items.id)} key={index} className='grid grid-cols-3 md:grid-cols-4 my-2 rounded cursor-pointer hover:bg-[#ffffff2f]'>
            <div className='flex my-2 pl-2 items-center'>
                <p className='mr-4'>{index+1}</p>
                <img className='w-10 mr-5' src={items.image} alt='' />
                <p className='mr-2'>{items.name}</p>
            </div>
            <div className='flex items-center ml-2'>
                <p>{resultData.name}</p>
            </div>
            <div className='flex items-center ml-5'>
                <p>7 days ago</p>
            </div>
            <div className='flex items-center ml-5'>
                <p>{items.duration}</p>
            </div>
            
        </div>
    ))}
   
    </>
  )
}

export default DisplayAlbum
