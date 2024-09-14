import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();

  return (
    <>
    
    <div className=' flex items-center justify-between'>
      <div className=' flex items-center gap-2'>
        <img onClick={()=>navigate(-1)} className='h-8 cursor-pointer bg-black/40 rounded-full p-2' src={assets.arrow_left} alt='' />
        <img onClick={()=>navigate(1)} className='h-8 cursor-pointer bg-black/40 rounded-full p-2' src={assets.arrow_right} alt='' />
      </div>
      <div className='flex gap-2'>
        <button className='bg-white px-4 py-1 rounded-full text-black'>Explore Premium</button>
        <button className='bg-black/40 px-4 py-1 rounded-full'>Install App</button>
        <p className='bg-purple-500 px-4 py-2 rounded-full cursor-pointer'>B</p>
      </div>
    </div>
    <div className='flex items-center gap-4 mt-4'>
        <p className='bg-white text-black rounded-full px-4 py-1 cursor-pointer'>All</p>
        <p className='bg-black/40 rounded-full px-4 py-1 cursor-pointer'>Music</p>
        <p className='bg-black/40 rounded-full px-4 py-1 cursor-pointer'>Podcast</p>
    </div>
  
    </>
  )
}

export default Navbar
