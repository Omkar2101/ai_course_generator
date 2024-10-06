import React from 'react'
import Sidebar from './_components/Sidebar'
import Header from './_components/Header'
function layout({children}) {
  return (
    <>
    <div className='md:w-64 hidden md:block '>
        <Sidebar></Sidebar>
    </div>
    <div className='md:ml-64 p-4 '>
        <Header></Header>
        {children}
    </div>
    
    </>
  )
}

export default layout