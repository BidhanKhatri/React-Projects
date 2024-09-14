import React from 'react'
import { useNavigate } from 'react-router-dom'

function AlbumItems({image,name,desc,id}) {

    const navigate = useNavigate();

  return (
    
        <div onClick={()=>navigate(`/album/${id}`)} className='min-w-[160px] hover:bg-[#ffffff26] rounded p-2 cursor-pointer flex flex-col'>
            <img className='rounded' src={image} alt='' />
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
    
  )
}

export default AlbumItems
