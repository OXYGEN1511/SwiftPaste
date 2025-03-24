import React from 'react'
import { Avatar } from '@mui/material'

const StoryCircle = () => {
  return (
    <div>
      <div className='flex flex-col items-center mr-4 cursor-pointer'>
          <Avatar  src='https://cdn.pixabay.com/photo/2023/08/03/09/30/boy-8166663_1280.jpg'  sx={{width:"4rem",height:"4rem"}} >
              
          </Avatar>
          <p>My Status</p>
          </div>
    </div>
  )
}

export default StoryCircle
