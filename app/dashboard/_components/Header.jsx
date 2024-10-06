import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
function Header() {
  return (
    <div className='flex justify-between shadow-sm  p-2'>
        <Image src={"./geeks.svg"} width={100} height={100}></Image>
        <UserButton></UserButton>
    </div>
  )
}

export default Header