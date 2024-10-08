import React from 'react'
import Header from '../dashboard/_components/Header'
function CreateCourselayout({children}) {
  return (
    <div>
        <div>
            <Header></Header>
        </div>
        {children}
    </div>
  )
}

export default CreateCourselayout