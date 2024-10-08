import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function TopicDescription() {
  return (
    <div>
        {/* Input topic */}
        <div className='mx-20 lg:mx-44'>
            <label htmlFor="">write the topic for which content is </label>
            <Input placeholder={'Topic'} />
        </div>
        


        {/* Text area */}
        <div className='mt-25'>
        <label>tell us more aboyut it</label>
        <Textarea placeholder='about the course'></Textarea>
        </div>
       
    </div>
  )
}

export default TopicDescription