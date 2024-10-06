import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Header() {
  return (
    <div className='flex justify-between p-2 shadow-sm items-center'>
        <Image src={'./geeks.svg'} width={100} height={100}></Image>
        <Button>Get started</Button>
    </div>
  )
}

export default Header