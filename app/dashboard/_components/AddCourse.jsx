"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs';

function AddCourse() {
    //taking the username using the hook thatis provided by nextclerk
    const {user}=useUser();
  return (
    <div>
        <div className='mt-1'>
            <h2 className='text-xl'>Hello,    
            <span className='font-medium capitalize text-green-600 text-2xl'>{user?.fullName}</span>
            </h2>
        </div>
    </div>
  )
}

export default AddCourse