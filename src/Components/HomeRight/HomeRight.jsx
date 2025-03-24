import React from 'react'
import SearchUser from '../SearchUser/SearchUser'
import { Card } from '@mui/material';
import PopularUserCArd from './PopularUserCArd';

const popularUser = [1,2,3,4,5,12,12,23];
const HomeRight = () => {
  return (
    <div className='mt-20'>
      <SearchUser/>

      <Card className=''>

      <div className='flex justify-between py-5 items-center px-4'>
        <p className='font-semibold opacity-70'>Sugesstion for You</p>
        <p className=' text-xs font-semibold opacity-95'>View All </p>
      </div>


      <div className=''>
           {popularUser.map((item)=><PopularUserCArd/>)} 
      </div>

      </Card>

     

    </div>
  )
}

export default HomeRight
