import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex justify-center flex-wrap px-4'>
        <div className='mt-20 text-[40px] text-purple-950 text-center'>Welcome to Aerocartrips Services</div>
      
 <div className='w-full text-center mt-20'>
    <Link className='underline text-blue-600' to={'/payment'}>Payment</Link>
 </div>

   <div className='mt-20 text-lg text-purple-950 flex flex-wrap justify-center items-center gap-5 w-full'>
            <div>@Ayyoob</div>
            <div>@Hozaifa</div>
            

        </div>

    </div>
  )
}

export default Home