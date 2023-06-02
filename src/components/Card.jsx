import React from 'react'
import { useNavigate } from 'react-router-dom'





const Card = () => {
    const navigate =useNavigate();
   const  handleClick=()=>{
        navigate("/react")
        }
  return (
    <div className="p-4 bg-bpink h-48 w-96 rounded-md ">
        <p className="text-lg">Prepare By Topics</p>
        <p className="font-semibold text-xl">React</p>
        <button className='bg-zinc-500 p-4' onClick={handleClick}>Continue Preparation</button>
       

    </div>
  )
}

export default Card