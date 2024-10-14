import React, { useContext } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UserInputContext } from '@/app/_context/UserInputContext';

function TopicDescription() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleTopic=(fieldname,topic) => {
    return setUserCourseInput(prev=>({
      ...prev,
      [fieldname]:topic
    }))

  }
  return (
    <div>
        {/* Input topic */}
        <div className='mx-20 lg:mx-44'>
            <label htmlFor="">write the topic for which content is </label>
            <Input
            defaultValue={userCourseInput?.topic} onChange={(e)=>handleTopic('topic',e.target.value)} placeholder={'Topic'} />
        </div>
        


        {/* Text area */}
        <div className='mt-25'>
        <label>tell us more aboyut it</label>
        <Textarea
        defaultValue={userCourseInput?.desc} onChange={(e)=>handleTopic('desc',e.target.value)} placeholder='about the course'></Textarea>
        </div>
       
    </div>
  )
}

export default TopicDescription