import Categorylist from '@/app/_shared/Categorylist'
import React from 'react'
import Image from 'next/image'

function SelectCategory() {
  return (
    <div className='grid grid-cols-3 gap-10 px-10 md:px-20   '>
        {Categorylist.map((item,index)=>{
            return (
                <div className='flex flex-col cursor-pointer p-5 hover:bg-gray-500 border items-center rounded-xl'>
                    <Image ></Image>
                    <h2>{item.name}</h2>
                </div>
            )  // Assuming Categorylist is an array of objects with 'name' property
        })}
    </div>
  )
}

export default SelectCategory