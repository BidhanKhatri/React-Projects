import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItems = ({name,image,file,desc,duration,id}) => {

  const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={()=>playWithId(id)} className='min-w-[160px] hover:bg-[#ffffff26] rounded p-2 cursor-pointer flex flex-col'>
        <img className='rounded' src={image} alt='' />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItems
