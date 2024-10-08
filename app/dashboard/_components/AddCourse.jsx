"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Link from 'next/link'
function AddCourse() {
    //taking the username using the hook thatis provided by nextclerk
    const {user}=useUser();
  return (
    <div>
        <div className='mt-1 flex justify-between items-center p-4'>
            <div>
            <h2 className='text-xl'>Hello,    
                <span className='font-medium capitalize text-green-600 text-2xl'>{user?.fullName}</span>
                </h2>
                <p className='text-gray-500 text-sm'>Create new Ai courses</p>
            </div>
               <Link href={'/create-courses'}>
               <Button>+ Create AI courses</Button>
               </Link>
            
        </div>
    </div>
  )
}

export default AddCourse