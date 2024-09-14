import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const isHome = location.pathname === "/";
    console.log(isHome);

    const[navActive,setNavActive] = useState('black')
    
    useEffect(()=>{
        if(!isHome){
            setNavActive('');
        }
        else{
            setNavActive('black')
        }
    })

  return (
    <>
    <div className=' w-[22%] flex flex-col gap-2'>
        <div className='h-[30%] bg-[#242424] p-2 flex flex-col justify-around gap-2 rounded text-white'>
            <div onClick={()=>navigate("/")} className='flex items-center p-1 space-x-2  w-fit cursor-pointer'>
                <img src={assets.spotify_logo} alt='logo' className='h-8' />
                <p className='font-bold text-xl '>BidhansPlay</p>
            </div>
            <div onClick={()=>navigate("/")} className={`flex items-center bg-${navActive} space-x-6 cursor-pointer p-1 rounded`}>
                <img src={assets.home_icon} alt="image" className='h-8' />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center space-x-6 cursor-pointer p-1 rounded'>
                <img src={assets.search_icon} alt="image" className='h-8' />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='h-[70%] bg-[#242424] p-2 text-white space-y-4 rounded'>
            <div className='flex justify-between'>
                <div className='flex items-center space-x-2'>
                <img src={assets.stack_icon} alt="lib" className='h-8' /><span className='font-bold'>Your Libary</span>
                </div>
                <div className='text-2xl cursor-pointer flex items-center justify-center '>
                    <img src={assets.plus_icon} alt='' className='w-5' />
                </div>
            </div>
            <div className="bg-white/10 rounded p-4">
                <p className='font-bold  whitespace-nowrap text-sm'>Create Your First PlayList</p>
                <p className='mt-2'>It's easy we will help you</p>
                <button className='bg-white text-black rounded-full font-bold px-4 py-2 text-sm mt-4 transfrom hover:scale-105 duration-200 ease-in-out'>Create Playlist</button>
            </div>
            <div className="bg-white/10 rounded p-4">
                <p className='font-bold  whitespace-nowrap text-sm'>Lets find some podcast to follow</p>
                <p className='mt-2'>It's easy we will help you</p>
                <button className='bg-white text-black rounded-full font-bold px-4 py-2 text-sm mt-4 transfrom hover:scale-105 duration-200 ease-in-out'>Browse Podcast</button>
            </div>
        </div>
    </div>
    
        </>
  )
}

export default Sidebar
