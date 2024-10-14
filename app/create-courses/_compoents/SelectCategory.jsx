import Categorylist from '@/app/_shared/Categorylist'
import React, { useContext } from 'react'
import Image from 'next/image'
import { UserInputContext } from '@/app/_context/UserInputContext'

function SelectCategory() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleCategory = (category) => {
    setUserCourseInput(prev=>({...prev, category }))
    
    // console.log(userCourseInput);
    
  }
  return (
    <div>
      <label className='flex justify-center items-center font-bold mb-4' >Select Course category</label>
           <div className='grid grid-cols-3 gap-10 px-10 md:px-20   '>
      
      {Categorylist.map((item,index)=>{
          return (
              <div onClick={()=>handleCategory(item.name)} className={`flex flex-col cursor-pointer p-5 hover:bg-gray-500 border items-center rounded-xl ${userCourseInput.category==item.name && 'border-green-600 bg-blue-100'}`}>
                  <Image ></Image>
                  <h2>{item.name}</h2>
              </div>
          )  // Assuming Categorylist is an array of objects with 'name' property
      })}
  </div>
    </div>
 
  )
}

export default SelectCategory